// Renders fenced ```mermaid blocks as diagrams.
//
// Loaded with `defer`, and only on pages whose content contains a mermaid
// block (see _includes/head_custom.html). It replaces the theme's own loader,
// which is disabled by the empty override in _includes/components/mermaid.html,
// so Mermaid is downloaded at most once and only where it is needed.
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
  const config = Object.assign({ startOnLoad: false, securityLevel: 'loose' }, siteConfig);

  // kramdown emits <pre><code class="language-mermaid"> because Rouge has no
  // Mermaid lexer; the Rouge-wrapped form is kept for safety.
  const blocks = document.querySelectorAll(
    'pre > code.language-mermaid, div.language-mermaid.highlighter-rouge pre > code'
  );
  if (!blocks.length) return;

  const visible = [];
  const deferred = [];
  blocks.forEach((code) => {
    const figure = document.createElement('div');
    figure.className = 'mermaid';
    // textContent keeps the source inert; Mermaid decodes it when rendering.
    figure.textContent = code.textContent;
    const wrapper = code.closest('div.language-mermaid.highlighter-rouge') || code.parentElement;
    wrapper.replaceWith(figure);
    // Mermaid measures text as it lays out, so a diagram inside a closed
    // <details> would render at zero size. Those wait until first opened.
    const details = figure.closest('details');
    if (details && !details.open) {
      deferred.push([details, figure]);
    } else {
      visible.push(figure);
    }
  });

  let mermaidPromise;
  const loadMermaid = () => {
    if (!mermaidPromise) {
      mermaidPromise = import(`https://cdn.jsdelivr.net/npm/mermaid@${version}/dist/mermaid.esm.min.mjs`)
        .then((module) => {
          const mermaid = module.default;
          mermaid.initialize(config);
          return mermaid;
        });
    }
    return mermaidPromise;
  };

  const render = (nodes) =>
    loadMermaid()
      .then((mermaid) => mermaid.run({ nodes }))
      .catch((error) => {
        // Leave the source readable (the stylesheet preserves its line
        // breaks) rather than an empty frame.
        nodes.forEach((node) => node.classList.add('mermaid-failed'));
        console.warn('mermaid-init: rendering failed', error);
      });

  if (visible.length) render(visible);

  deferred.forEach(([details, figure]) => {
    const onToggle = () => {
      if (!details.open) return;
      details.removeEventListener('toggle', onToggle);
      render([figure]);
    };
    details.addEventListener('toggle', onToggle);
  });
})();
