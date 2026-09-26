---
name: Microsoft AI Decision Framework
description: "Ink & Signal: neutral ink carries the structure, one Fluent blue carries the signal, and light and dark are equals."
colors:
  light-bg: "#ffffff"
  light-chrome: "#f4f7fa"
  light-raised: "#eff3f7"
  light-zebra: "#f8fafc"
  light-border-subtle: "#e3e7ec"
  light-border: "#d5dae0"
  light-border-strong: "#78818c"
  light-text-strong: "#10171f"
  light-text: "#272e38"
  light-muted: "#535c66"
  light-link: "#115ea3"
  light-link-hover: "#0f548c"
  light-focus: "#0f548c"
  light-selection: "#cfe4fa"
  dark-bg: "#14161a"
  dark-chrome: "#0e1114"
  dark-raised: "#1d2125"
  dark-zebra: "#171a1d"
  dark-border-subtle: "#262a30"
  dark-border: "#31363d"
  dark-border-strong: "#6e757f"
  dark-text-strong: "#edf0f4"
  dark-text: "#d1d6dc"
  dark-muted: "#adb3bc"
  dark-link: "#96c6fa"
  dark-link-hover: "#cfe4fa"
  dark-focus: "#77b7f7"
  dark-selection: "#0e4775"
  accent: "#0f6cbd"
  on-accent: "#ffffff"
  figure: "#f6f8fa"
  figure-border: "#d5dae0"
  figure-dark: "#0c0f12"
  figure-text: "#272e38"
  figure-text-dark: "#e6e8eb"
  figure-muted: "#535c66"
  figure-muted-dark: "#a0a5ac"
  essay-accent: "#8f520d"
  essay-accent-dark: "#f6c16b"
  overlay-dim: "rgb(0 0 0 / 0.3)"
  # Author-owned palettes. Inline Mermaid colors are kept in both themes; the
  # explorer's authored dark fills (node-fill-*) are what dark mode shows, and
  # light mode re-tints each one (node-tint-* fill, node-edge-* border, ink text).
  diagram-blue: "#004578"
  diagram-purple: "#4b2070"
  diagram-green: "#0b6a0b"
  diagram-orange: "#8c5e00"
  diagram-red: "#a52617"
  node-blue: "#3b82f6"
  node-violet: "#7c3aed"
  node-amber: "#f59e0b"
  node-green: "#10b981"
  node-red: "#ef4444"
  node-fill-base: "#111827"
  node-fill-blue: "#1e3a5f"
  node-fill-amber: "#78350f"
  node-fill-green: "#064e3b"
  node-fill-violet: "#4c1d95"
  node-fill-red: "#7f1d1d"
  node-fill-teal: "#0e5a6f"
  node-fill-steel: "#1e4d6e"
  node-tint-navy: "#e7f0fa"
  node-tint-violet: "#f1ebfc"
  node-tint-amber: "#fdf1dc"
  node-tint-maroon: "#fdeceb"
  node-tint-green: "#e5f5ec"
  node-tint-teal: "#e2f3f7"
  node-tint-steel: "#e6eff6"
  node-edge-navy: "#0f6cbd"
  node-edge-violet: "#6d28d9"
  node-edge-amber: "#b45309"
  node-edge-maroon: "#b91c1c"
  node-edge-green: "#15803d"
  node-edge-teal: "#0e7490"
  node-edge-steel: "#2b6a99"
  canvas: "#f8fafc"
  canvas-dark: "#0c0f12"
typography:
  heading:
    fontFamily: "Sora, Source Sans 3, sans-serif"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Source Sans 3, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Code, Consolas, monospace"
    fontWeight: 400
  # Decision Explorer (Operate mode): compact UI steps, unchanged by the redesign.
  explorer-title:
    fontFamily: "Sora, Source Sans 3, sans-serif"
    fontSize: "17px"
    fontWeight: 600
  explorer-panel-title:
    fontFamily: "Sora, Source Sans 3, sans-serif"
    fontSize: "16px"
    fontWeight: 600
  explorer-panel-body:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
  explorer-control:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "13px"
    fontWeight: 500
  explorer-small:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "12px"
    fontWeight: 500
  explorer-micro:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "11px"
    fontWeight: 600
  explorer-badge:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "10px"
    fontWeight: 700
rounded:
  sm: "4px"
  nav: "6px"
  md: "8px"
  lg: "10px"
  xl: "12px"
  pill: "999px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.light-text-strong}"
    rounded: "{rounded.md}"
  nav-current:
    backgroundColor: "#e1e7ee"
    textColor: "{colors.light-text-strong}"
    rounded: "6px"
  figure:
    backgroundColor: "{colors.figure}"
    textColor: "{colors.figure-text}"
    rounded: "{rounded.lg}"
---

# Design System: Microsoft AI Decision Framework

## Overview

**Ink & Signal.** A decision framework earns trust the way a good design-review document does: clear structure and honest emphasis. Neutral ink does every structural job. Color appears only when it means something, and there are exactly four meanings: where you can go (one Fluent blue, always underlined), where you are (current page and section), what isn't GA yet (status), and what can hurt you (warnings).

Every surface is impeccable's **Read** mode: structure for comprehension, then make the reading worth staying in. The Decision Explorer is **Operate** mode.

Light and dark are equals. The reader's choice (Light / Dark / System, default System) is stored in `localStorage["aidf-theme"]` and resolved onto `<html data-theme="light|dark">` before first paint. With JavaScript off, CSS follows `prefers-color-scheme`.

**How the theming works.** Just the Docs compiles colors at build time. `_config.yml` selects `color_scheme: aidf`, and `_sass/color_schemes/aidf.scss` points the theme's color variables at CSS custom properties, so the theme's own selectors follow the runtime theme. Three variables stay literal because the theme runs them through Sass color functions (`$link-color`, `$base-button-color`, `$btn-primary-color`); `_sass/custom/custom.scss` re-points the selectors that use them. The tokens themselves live in the `aidf-light` / `aidf-dark` mixins at the top of `custom.scss`.

| File | Role |
| --- | --- |
| `_sass/color_schemes/aidf.scss` | Theme variables to custom properties |
| `_sass/custom/custom.scss` | Tokens, layout, components, print, motion |
| `_includes/head_custom.html` | Pre-paint theme bootstrap, fonts, Mermaid loader |
| `_includes/header_custom.html` | Light / Dark / System switch |
| `assets/js/theme.js` | Switch behavior, OS and cross-tab sync |
| `explorer/index.html`, `explorer/src/styles/explorer.css` | Explorer bootstrap and token mirror |

## Colors

Restrained strategy: tinted neutrals (0.005 to 0.02 OKLCH chroma toward hue 255, the brand blue's family) plus one accent under 10% of any viewport. The blue is Fluent 2's web brand ramp (60 `#0f548c`, 70 `#115ea3`, 80 `#0f6cbd`, 120 `#77b7f7`, 130 `#96c6fa`, 150 `#cfe4fa`). Every text pairing clears WCAG 2.1 AA in both themes; the lowest rendered pair on real pages is the primary button label at 5.38:1.

### Primary

Fluent brand 80 `#0f6cbd` fills the primary button and marks the current section in the "On this page" rail. Links use brand 70 `#115ea3` in light and 130 `#96c6fa` in dark. Focus rings use 60 `#0f548c` in light and 120 `#77b7f7` in dark.

### Neutral

White paper (`#ffffff`) is the light reading surface; the sidebar recedes on `#f4f7fa`. Dark uses `#14161a` with a deeper `#0e1114` sidebar. Body text is `#272e38` / `#d1d6dc`, never pure black or white. `--border-strong` (3.9:1) is for inputs and buttons; `--border` and `--border-subtle` are decorative and never carry state alone.

### Status and callouts

Tip green, Warning amber and Important red appear only with a text label and an icon. Note is deliberately neutral: most asides are not alarms. Status pills pair each word with a shape (filled, half, hollow dot).

### Named Rules

- **One hue, one meaning.** Blue means "you can go here." Nav, inline code and subheads are ink, never blue.
- **Everything follows the theme; authored colors survive it.** Code blocks, Mermaid diagrams and the explorer switch with the reader's theme, but no author's color is recolored by CSS. Mermaid diagrams are re-rendered with a light or dark base theme (background, default nodes, lines, labels) while inline node colors stay as written. Explorer nodes map their authored dark fills to tones: dark mode shows the authored fill, light mode a tint of the same hue with a saturated border. Code uses github-light or github-dark syntax colors.
- **Essay voice.** AI Instinct alone gets a warm amber (`#8f520d` / `#f6c16b`), spent only on its banner label, pull-quote marks and phase numbers.

## Typography

Sora (600/700) for headings, Source Sans 3 (400 to 700, with true italics) for everything else, JetBrains Mono for code. Loaded with one `<link>` in `head_custom.html`, `display=swap`.

### Hierarchy

The scale is locked: h1 2rem, h2 1.5rem, h3 1.25rem, h4 1.0625rem, h5 1rem, h6 0.9375rem, body 16px. Just the Docs forces `font-size !important`, so custom sizes need `!important`, and nothing else does (WCAG 1.4.12 text-spacing overrides must still win).

### Named Rules

- **Leading rises with the measure.** Prose runs 1.65 below 1200px and 1.75 at 1200px and up, where lines reach 240 characters. The essay uses 1.8.
- **Links are always underlined** (1px at 40% `currentColor`, solid on hover), because blue sits only about 2:1 from body ink.
- `text-wrap: balance` on headings, `pretty` on paragraphs and list items.

## Layout

Locked by the maintainer, and verified unchanged: `--measure` 102.5rem (a deliberate wide-density choice), `--measure-wide` 100%, `--rail` 12rem, `--container` 125rem, `--header-h` 3.75rem, sidebar `clamp(220px, 18vw, 260px)`, breakpoints 900px and 1200px, and all page paddings. Tables, figures and code break out to full width; prose holds the measure. The "On this page" rail appears at 1200px and up.

## Elevation & Depth

Borders carry structure; the only shadow on the site is the search results overlay (`--shadow-overlay`). No glass, no ambient card shadows, no page-load motion.

## Shapes

Radii: 4px inline code, 6px nav items and switch options, 8px buttons, callouts and images, 10px tables and figures, 12px the essay banner, pill for status. The 1px rail marker is the only accent edge; no side stripes anywhere.

## Components

### Buttons

One filled primary per view (flat Fluent 80, white label). Secondary and `.btn-outline` are the same neutral button: ink label, 1px `--border-strong` ring, hover fill. Press scales to 0.96 for fine pointers only.

### Navigation

Sidebar items are ink. Hover adds a neutral fill; the current page adds a fill plus weight 600. The rail lists h2/h3 in muted ink; the current section is strong ink, weight 600 and a 1px accent segment on the rail's track.

### Theme switch

Native radios in a `<fieldset>` with a visually hidden legend ("Color theme"). Options Light / Dark / System with 1.5px-stroke icons; labels show at 1200px and up, icons only below. Hidden without JavaScript. A switch suppresses transitions for one frame so the page snaps instead of smearing.

### Callouts

`{: .note }`, `.tip`, `.warning`, `.important`: a 1px family border, faint family tint, 18px masked icon and an uppercase text label on the first paragraph. `-title` variants use their own first paragraph as the label. Plain `>` quotes are a neutral aside.

### Tables

The frame lives on `.table-wrapper` (the element that scrolls). Header on `--raised`, zebra rows, hover rows, top-aligned cells, tabular numbers, and a sticky first column so wide matrices keep their row labels.

### Figures

Code blocks and diagrams sit on the figure surface, light (`#f6f8fa`) or dark (`#0c0f12`) with the theme. Mermaid renders at natural size (`flowchart.useMaxWidth: false`) and scrolls inside its frame; diagrams in closed `<details>` render on first open. `assets/js/mermaid-init.js` re-renders every drawn diagram when `data-theme` changes, using `mermaid.render()` so the new SVG swaps in without a flash of source. The light settings live in the `light` block of `_includes/mermaid_config.js`; the `dark` block reproduces the authored dark theme. Prose rules are reset inside diagram labels so page ink never repaints them. In print, a figure keeps the surface its diagram was rendered for. Inline code is 0.875em (the theme's 0.75em sat below the body x-height).

### Decision Explorer

Chrome (header, tabs, detail panel), canvas and nodes all follow the theme through the same `aidf-theme` key, and update live via the `storage` event, including when embedded. `src/nodes/tone.ts` maps each authored fill to a tone; `explorer.css` defines every tone for both themes, so a switch restyles the graph with no re-render. React Flow's own colors (dots, minimap, mask) come from its `--xy-*` variables. Status badges use the inline diagram palette (GA `#0b6a0b`, Preview `#8c5e00`, Experimental `#a52617`) with white labels. A new authored fill needs a tone in both files, or that node keeps its literal color in both themes.

## Do's and Don'ts

- **Do** add a color as a token in both `aidf-light` and `aidf-dark`, and check it with tastemaker's `check_contrast.py --matrix` before use.
- **Do** keep `remote_theme` pinned. On an upgrade, grep the new theme's `_sass` for `$link-color`, `$border-color`, `$feedback-color`, `$base-button-color` and `$btn-primary-color` usage, rebuild, and compare both themes.
- **Do** keep Mermaid palettes inline in the diagrams, dark theme and white labels.
- **Don't** recolor inline Mermaid node colors or the explorer's authored fills with CSS; switch themes by re-rendering (Mermaid) or through tones (explorer).
- **Don't** reintroduce side-stripe borders, gradient text, glass, or entrance animations.
- **Don't** change the layout tokens or type scale without the maintainer's sign-off.
- **Don't** put `// comments` in inline scripts in `_includes`; the built HTML is newline-stripped.
