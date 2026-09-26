# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Register

product

## Users

Enterprise architects, technical leads, developers, and business stakeholders who have to choose a Microsoft AI technology for a real use case, and then defend that choice to someone who wasn't in the room. They arrive fluent in the industry's vocabulary before Microsoft's. They read in long, deliberate sessions (design-review prep, planning, pre-meeting homework), come back to specific tables and diagrams, and share pages with colleagues.

## Product Purpose

Teach a way of thinking about Microsoft's AI portfolio, from outcomes to behaviors to platforms, so readers make evidence-based decisions that survive product renames. Success means a reader can apply the Intake Filter and the nine questions, shortlist a fit-for-purpose technology, defend the trade-off in a design review, and still remember the mental models months later.

## Positioning

A decision framework, not a product catalog. Named mental models ("The Coin," "The Kitchen," "The Furnished Condo"), a progressive learning path that withholds the cheat sheet until the method is learned, verified status transparency, and a bridge from industry vocabulary to Microsoft's. Microsoft-first, not Microsoft-only.

## Operating Context

Every surface on this site is long-form reading (impeccable's Read mode). It is read on large desktop displays (the maintainer reads on a 5K 3:2 monitor, and the layout is deliberately wide and dense), on laptops, and on phones. It is read in bright offices during the workday and in dim rooms during late preparation, so light and dark appearances are both first-class. Readers scan wide comparison tables, jump around with the "On this page" rail, open the interactive Decision Explorer, and print or screen-share pages in reviews.

## Capabilities and Constraints

- Static Jekyll site on GitHub Pages with the Just the Docs remote theme. No server code. The theme compiles its colors at build time, so runtime theming is done with CSS custom properties (see DESIGN.md).
- Layout sizing is locked by the maintainer: `--measure` 102.5rem (deliberately wide), `--rail` 12rem, `--container` 125rem, sidebar `clamp(220px, 18vw, 260px)`, breakpoints at 900px and 1200px, and the heading scale. Readability work uses color, contrast, leading, weight, and rhythm, not width or size.
- Mermaid diagrams own their palettes inline (dark theme, white text on Blue #004578, Purple #4b2070, Green #0b6a0b, Orange #8c5e00, Red #a52617). CSS frames diagrams but never recolors them.
- Content in `docs/*.md` and `README.md` is authored separately. Design work must not depend on new classes or markup in content.
- Every diagram and table must visibly flag non-GA features (Constitution Article III), in text rather than by color alone.

## Brand Commitments

The site is titled "Microsoft AI Decision Framework," carries the Microsoft logo, and is hosted under microsoft.github.io. Voice: a senior architect mentoring a colleague over coffee. Direct, confident, occasionally irreverent, always grounded. Plain words, US English.

## Anti-references

A product catalog or spec sheet. Generic SaaS and AI-template styling: purple gradients, glass cards, side-stripe callouts, gradient text, tracked uppercase eyebrows above headings. Marketing-page theatrics on a reading surface.

## Evidence on Hand

Fifteen long-form docs pages plus the home page (`docs/`, `README.md`), the Decision Explorer (`explorer/`), `assets/AI_Instinct.pdf`, and diagrams and images in `images/` and `assets/`. There are no testimonials, usage metrics, or customer logos; do not fabricate them.

## Product Principles

1. The reading is the product. Structure for comprehension first, then make staying on the page worthwhile.
2. Concept before product. Visual emphasis follows the same order as the writing: outcome, use case, concept, then product.
3. Status honesty is always visible. Preview and experimental states are labeled in text wherever they appear.
4. Density with calm. Wide, information-rich pages that never shout.
5. Both appearances are first-class. Neither light nor dark is the afterthought.

## Accessibility & Inclusion

WCAG 2.1 AA in both themes: text at least 4.5:1, large text and UI boundaries at least 3:1, visible focus indicators, no meaning carried by color alone, `prefers-reduced-motion` respected, reflow at 320px, and text-spacing overrides (SC 1.4.12) never blocked. `!important` is reserved for `font-size`, which the theme forces.
