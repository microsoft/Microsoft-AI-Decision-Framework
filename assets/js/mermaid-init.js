// Renders fenced ```mermaid blocks as diagrams that follow the reader's theme.
//
// Loaded with `defer`, and only on pages whose content contains a mermaid
// block (see _includes/head_custom.html). It replaces the theme's own loader,
// which is disabled by the empty override in _includes/components/mermaid.html,
// so Mermaid is downloaded at most once and only where it is needed.
//
// Diagrams are authored against Mermaid's dark theme with node colors set
// inline (AGENTS.md). In the light theme the authored base theme is swapped for
// the light settings in _includes/mermaid_config.js: background, default nodes,
// lines and edge labels change, and inline node colors stay exactly as written.
// Switching themes re-renders the diagrams in place.
//
// Kept as a static asset rather than inline: the built HTML is served with
// newlines stripped, which would let the first // comment swallow the script.
(() => {
  const script = document.currentScript;
  const version = (script && script.dataset.mermaidVersion) || '11.12.1';

  let siteConfig = {};
  const configEl = document.getElementById('mermaid-config');
  if (configEl) {
    try {
      siteConfig = JSON.parse(configEl.textContent);
    } catch (e) {
      console.warn('mermaid-init: could not parse site Mermaid config', e);
    }
  }
  // mermaid_config.js holds shared settings plus a "light" and a "dark" block.
  const { light = {}, dark = {}, ...shared } = siteConfig;
  const configFor = (mode) => ({
    startOnLoad: false,
    securityLevel: 'loose',
    ...shared,
    ...(mode === 'dark' ? dark : light),
  });

  const currentMode = () => {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light' || theme === 'dark') return theme;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // The authored `%%{init: {'theme':'dark'}}%%` would override the light
  // settings, so in the light theme it is removed (or, if the directive sets
  // more than the theme, its theme is switched to the configurable "base").
  const DARK_ONLY_DIRECTIVE = /%%\{\s*init\s*:\s*\{\s*['"]theme['"]\s*:\s*['"]dark['"]\s*\}\s*\}\s*%%\s*/;
  const DARK_THEME_IN_DIRECTIVE = /(%%\{\s*init\s*:[\s\S]*?['"]theme['"]\s*:\s*['"])dark(['"])/;
  const sourceFor = (source, mode) =>
    mode === 'light' ? source.replace(DARK_ONLY_DIRECTIVE, '').replace(DARK_THEME_IN_DIRECTIVE, '$1base$2') : source;

  // kramdown emits <pre><code class="language-mermaid"> because Rouge has no
  // Mermaid lexer; the Rouge-wrapped form is kept for safety.
  const blocks = document.querySelectorAll(
    'pre > code.language-mermaid, div.language-mermaid.highlighter-rouge pre > code'
  );
  if (!blocks.length) return;

  const diagrams = [];
  blocks.forEach((code) => {
    const figure = document.createElement('div');
    figure.className = 'mermaid';
    // textContent keeps the source inert until Mermaid renders it.
    figure.textContent = code.textContent;
    const wrapper = code.closest('div.language-mermaid.highlighter-rouge') || code.parentElement;
    wrapper.replaceWith(figure);
    diagrams.push({ figure, source: code.textContent, details: figure.closest('details'), mode: null });
  });

  let mermaidPromise;
  const loadMermaid = () => {
    if (!mermaidPromise) {
      mermaidPromise = import(`https://cdn.jsdelivr.net/npm/mermaid@${version}/dist/mermaid.esm.min.mjs`).then(
        (module) => module.default
      );
    }
    return mermaidPromise;
  };

  let renderCount = 0;
  const renderOne = async (mermaid, diagram, mode) => {
    const id = `aidf-mermaid-${++renderCount}`;
    try {
      // render() lays the diagram out in a temporary element of its own and
      // returns the SVG, so the swap is atomic (no flash of source text on a
      // theme change) and it works even while the target is hidden.
      const { svg, bindFunctions } = await mermaid.render(id, sourceFor(diagram.source, mode));
      diagram.figure.innerHTML = svg;
      diagram.figure.setAttribute('data-processed', 'true');
      diagram.figure.classList.remove('mermaid-failed');
      if (bindFunctions) bindFunctions(diagram.figure);
      diagram.mode = mode;
    } catch (error) {
      // Leave the source readable (the stylesheet preserves its line breaks)
      // rather than an empty frame.
      diagram.figure.textContent = diagram.source;
      diagram.figure.removeAttribute('data-processed');
      diagram.figure.classList.add('mermaid-failed');
      document.getElementById(`d${id}`)?.remove();
      console.warn('mermaid-init: rendering failed', error);
    }
  };

  // One render pass at a time, always for the theme current when it runs, so
  // quick toggling settles on the reader's final choice.
  let queue = Promise.resolve();
  const render = (list) => {
    queue = queue
      .then(async () => {
        const mode = currentMode();
        const pending = list.filter((diagram) => diagram.mode !== mode);
        if (!pending.length) return;
        const mermaid = await loadMermaid();
        mermaid.initialize(configFor(mode));
        for (const diagram of pending) await renderOne(mermaid, diagram, mode);
      })
      .catch((error) => console.warn('mermaid-init: could not load Mermaid', error));
    return queue;
  };

  // Diagrams inside a closed <details> wait until first opened: nothing to
  // show yet, and the Visual Framework page has ten of them.
  const isClosed = (diagram) => diagram.details && !diagram.details.open;
  render(diagrams.filter((diagram) => !isClosed(diagram)));
  diagrams.filter(isClosed).forEach((diagram) => {
    diagram.details.addEventListener('toggle', () => {
      if (diagram.details.open) render([diagram]);
    });
  });

  // Re-render everything already drawn when the theme changes, whoever
  // changes it (the header switch, another tab, the OS while on System).
  new MutationObserver(() => render(diagrams.filter((diagram) => diagram.mode !== null))).observe(
    document.documentElement,
    { attributes: true, attributeFilter: ['data-theme'] }
  );
})();
