// Builds the "On this page" rail from the headings the page already has.
// Generated rather than authored so every page gets one, including those with
// no kramdown {:toc} block, and so it stays correct when headings change.
//
// Loaded as a static asset with `defer`. It must not be inlined into the page:
// the built HTML is served with newlines stripped, which would collapse this
// file onto a single line and let the first // comment swallow all of it.
(() => {
  const build = () => {
  const content = document.querySelector('#main-content');
  if (!content) return;

  const body = content.querySelector(':scope > main') || content;
  const headings = [...body.querySelectorAll('h2, h3')].filter(
    (h) =>
      h.id &&
      // Authors mark headings they want kept out of the contents with .no_toc;
      // the rail has to honour that or it lists every sub-heading on the page.
      !h.classList.contains('no_toc') &&
      // The kramdown {:toc} block's own heading — its .text-delta marker lands
      // on the generated <ol>, not the heading, so match it by id.
      h.id !== 'table-of-contents' &&
      !h.classList.contains('text-delta') &&
      !h.closest('#markdown-toc')
  );

  // Not worth a rail for a page with almost no structure.
  if (headings.length < 3) return;

  const nav = document.createElement('nav');
  nav.className = 'page-toc';
  nav.setAttribute('aria-labelledby', 'page-toc-title');

  const title = document.createElement('h2');
  title.id = 'page-toc-title';
  title.className = 'page-toc-title';
  title.textContent = 'On this page';
  nav.appendChild(title);

  const list = document.createElement('ul');
  for (const h of headings) {
    const li = document.createElement('li');
    li.className = `page-toc-${h.tagName.toLowerCase()}`;
    const a = document.createElement('a');
    a.href = `#${h.id}`;
    // The anchor-link <svg> the theme injects would otherwise land in the label.
    a.textContent = h.textContent.trim();
    li.appendChild(a);
    list.appendChild(li);
  }
  nav.appendChild(list);

  // Placed before the article so keyboard and screen-reader users reach it
  // early; CSS moves it into the right-hand column visually.
  content.prepend(nav);

  // The stylesheet keys the two-column layout off this class rather than :has()
  // so that a browser without :has(), or a page where this script never runs,
  // keeps the single-column layout and the author's in-page table of contents.
  content.classList.add('has-page-toc');

  // Mark the section currently being read: the last heading to have passed the
  // reading line near the top of the viewport. Derived from position on scroll
  // rather than from IntersectionObserver visibility, because "no heading is
  // currently on screen" is the common case and has to resolve to the section
  // the reader is inside — including when scrolling back up.
  const readingLine = () => {
    const header = document.querySelector('.main-header');
    const h = header && getComputedStyle(header).position === 'sticky' ? header.offsetHeight : 0;
    return h + 24;
  };

  let active = null;
  let queued = false;

  const update = () => {
    queued = false;
    const line = readingLine();
    let index = -1;
    for (let i = 0; i < headings.length; i++) {
      if (headings[i].getBoundingClientRect().top > line) break;
      index = i;
    }
    const link = index < 0 ? null : list.children[index].firstChild;
    if (link === active) return;
    if (active) active.removeAttribute('aria-current');
    active = link;
    if (active) active.setAttribute('aria-current', 'true');
  };

  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };

  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  update();
  };

  // `defer` means the DOM is normally ready by now; the guard keeps this
  // correct if the tag is ever moved or the attribute dropped.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build, { once: true });
  } else {
    build();
  }
})();
