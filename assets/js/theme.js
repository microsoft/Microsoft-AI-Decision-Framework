// Theme switch: Light / Dark / System.
//
// Contract shared with the inline bootstrap in _includes/head_custom.html,
// which runs before first paint:
//   localStorage "aidf-theme"  = "light" | "dark" | "system" (absent = system)
//   <html data-theme>          = the resolved theme, always "light" or "dark"
//   <html data-theme-pref>     = the reader's choice, including "system"
// CSS keys every color off [data-theme]; with JavaScript off, the attribute is
// absent and custom.scss falls back to prefers-color-scheme.
//
// Loaded as a static asset with `defer`, like page-toc.js, because the built
// HTML is served with newlines stripped and a // comment would swallow an
// inlined script.
(() => {
  const KEY = 'aidf-theme';
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  const readPref = () => {
    try {
      const value = localStorage.getItem(KEY);
      return value === 'light' || value === 'dark' ? value : 'system';
    } catch {
      return 'system';
    }
  };

  const writePref = (pref) => {
    try {
      localStorage.setItem(KEY, pref);
    } catch {
      // Storage blocked (privacy mode): the choice still applies to this page.
    }
  };

  const resolve = (pref) => (pref === 'dark' || (pref === 'system' && media.matches) ? 'dark' : 'light');

  // A theme change repaints nearly every element. Any color or background
  // transition would fire at once and smear the switch, so transitions are
  // suspended for the frame that commits the new colors.
  const withoutTransitions = (change) => {
    const style = document.createElement('style');
    style.textContent = '*,*::before,*::after{transition:none!important}';
    document.head.appendChild(style);
    change();
    void document.body.offsetHeight;
    requestAnimationFrame(() => requestAnimationFrame(() => style.remove()));
  };

  const apply = (pref) => {
    const theme = resolve(pref);
    if (root.getAttribute('data-theme') === theme && root.getAttribute('data-theme-pref') === pref) return;
    withoutTransitions(() => {
      root.setAttribute('data-theme', theme);
      root.setAttribute('data-theme-pref', pref);
    });
  };

  const reflect = (pref) => {
    for (const input of document.querySelectorAll('input[name="aidf-theme"]')) {
      input.checked = input.value === pref;
    }
  };

  const init = () => {
    const pref = readPref();
    reflect(pref);
    apply(pref);

    document.addEventListener('change', (event) => {
      const input = event.target;
      if (!(input instanceof HTMLInputElement) || input.name !== 'aidf-theme') return;
      writePref(input.value);
      apply(input.value);
    });

    // OS appearance changed while the reader follows the system.
    media.addEventListener('change', () => {
      if (readPref() === 'system') apply('system');
    });

    // Another tab, or the embedded explorer, changed the choice.
    window.addEventListener('storage', (event) => {
      if (event.key !== KEY && event.key !== null) return;
      const next = readPref();
      reflect(next);
      apply(next);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
