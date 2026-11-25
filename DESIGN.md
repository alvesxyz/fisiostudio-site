---
name: FisioStudio
description: A wayfinding sign system in the FisioStudio logo colours that points every visitor, at any age, to their need and to booking.
colors:
  sign: "#424242"
  sign-deep: "#2b2b2b"
  sign-tint: "#d9d9d9"
  mark: "#ef8120"
  mark-hover: "#f59a47"
  brown: "#9c4a09"
  brown-tint: "#fce3cc"
  ink: "#1f1f1f"
  ink-soft: "#5c5c5c"
  ink-hover: "#3a3a3a"
  night: "#1f1f1f"
  night-soft: "#c8c8c8"
  ground: "#f5f5f4"
  paper: "#ffffff"
  rule: "#dcdcdc"
  error: "#a4161a"
  error-bg: "#fff5f5"
  ok: "#14532d"
  ok-bg: "#e6f4ea"
typography:
  display:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 4.2vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 2.6vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 1.2rem + 1.4vw, 2.125rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  subtitle:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 800
    lineHeight: 1.25
  body:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  label:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.5
  wordmark:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.01em"
rounded:
  line-cap: "5px"
  chip: "6px"
  nav: "8px"
  field: "10px"
  button: "12px"
  plate: "14px"
  km-post-top: "1.4rem"
spacing:
  space-1: "0.5rem"
  space-2: "0.75rem"
  space-3: "1rem"
  space-4: "1.5rem"
  space-5: "2rem"
  space-6: "3rem"
  space-7: "clamp(3.5rem, 2.5rem + 4vw, 6rem)"
  gutter: "clamp(1rem, 0.5rem + 2.5vw, 2.5rem)"
  max: "76rem"
components:
  button-book:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "0.75rem 1.35rem"
    height: "3.25rem"
  button-book-hover:
    backgroundColor: "{colors.mark-hover}"
    textColor: "{colors.ink}"
  button-on-orange:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "0.75rem 1.35rem"
    height: "3.25rem"
  button-on-orange-hover:
    backgroundColor: "{colors.brown-tint}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "0.75rem 1.35rem"
    height: "3.25rem"
  button-ink-hover:
    backgroundColor: "{colors.ink-hover}"
  button-sign:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "0.75rem 1.35rem"
    height: "3.25rem"
  button-sign-hover:
    backgroundColor: "{colors.sign-deep}"
  button-brown:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.brown}"
    rounded: "{rounded.button}"
    padding: "0.75rem 1.35rem"
    height: "3.25rem"
  button-brown-hover:
    backgroundColor: "{colors.brown-tint}"
  plate-direction:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.paper}"
    rounded: "{rounded.plate}"
    padding: "1.5rem 2rem 1rem"
  plate-book:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "2rem 1.5rem 1.5rem"
  plate-place:
    backgroundColor: "{colors.brown}"
    textColor: "{colors.paper}"
    rounded: "{rounded.plate}"
    padding: "1.5rem"
  plate-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "2rem"
  route-row:
    textColor: "{colors.paper}"
    rounded: "{rounded.nav}"
    padding: "0.7rem 0.25rem"
    height: "3.5rem"
  station-dot:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.paper}"
    rounded: "50%"
    size: "3.5rem"
  station-dot-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.sign}"
  km-post:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.subtitle}"
    rounded: "{rounded.km-post-top}"
    width: "2.75rem"
    height: "3.5rem"
  input-text:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0.7rem 0.9rem"
    height: "3.25rem"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.nav}"
    padding: "0 0.8rem"
    height: "2.75rem"
---

# Design System: FisioStudio

## Overview

**Creative North Star: "The Signposted Road"**

The site is a wayfinding sign system dressed in the FisioStudio logo's own colours: orange #EF8120, charcoal #424242 and white. Information sits on rounded-rectangle sign plates framed by an inset white rule; charcoal plates point the way, the orange plate books, the deep-orange plate locates. Arrows point, pictograms name, kilometre-post numerals count. A visitor does not browse a clinic brochure, they read a sign, pick their direction and follow it. Colour is never decoration: each hue is a sign category with a fixed meaning.

The page opens on white, the logo's ground, with ink type and the plates standing on it. Deep charcoal fields carry the wayfinding sections (Linha da vida, the lares lifeline), a full orange field carries the one statement band, and an orange-tint ground holds the location section. Density is low and type is large, because the audience includes seniors and readers with low health literacy. One hyperlegible sans family carries everything, heavy (800) for anything that functions as a sign, regular for reading, and light (300) only for the wordmark beside the logo mark, echoing the logo. Depth is flat, built from colour fields and inset rules. Motion is one gesture: the Linha da vida line draws once, and small hover nudges confirm direction.

**Key Characteristics:**
- Logo palette only: Logo Orange, Charcoal Sign, white, with Deep Orange for orange on light grounds.
- Rounded sign plates (14px) framed by an inset rule, drawn with layered inset box-shadows.
- Every hue is a sign category: charcoal directs, orange books and carries the brand, deep orange locates.
- One family, Atkinson Hyperlegible Next: 800 for signs, 400 for reading, 300 for the wordmark only; 18px body.
- Stroke pictograms (2px round stroke, inline SVG) and bold arrow glyphs; kilometre-post numerals with an orange cap.
- WCAG 2.2 AA as a floor: every text pairing measured at 4.5:1 or above, targets 44px or larger.

## Colors

The FisioStudio logo palette: a warm signal orange and a soft charcoal on white, with a burnt deep orange that keeps orange legible on light grounds.

### Primary
- **Charcoal Sign** (`sign`): the logo charcoal and the direction colour. Direction plates (hero, lares facts plate), stop-panel title bands, station dots, the lares route line and stops, paper-plate rules, service bullets, field focus. White on it measures 10.05:1.
- **Deep Charcoal** (`sign-deep`): wayfinding fields (the Linha da vida section, the lares "Também para outras instituições" lifeline) and the team directory plate; the hover of charcoal buttons. White on it 14.16:1.
- **Charcoal Tint** (`sign-tint`): secondary text on charcoal (route destinations, station ages, fact lines, directory headers) at 7.12:1 on Charcoal Sign and 10.03:1 on Deep Charcoal; selection background; field focus halo.

### Secondary
- **Logo Orange** (`mark`): the brand colour and the booking colour. The default `btn` (booking and the lares request actions), the header CTA, the booking plate, the full-bleed saúde pélvica band, kilometre-post caps. Text on it is always ink (6.15:1), never white. **Orange Hover** (`mark-hover`) lightens it on hover (ink 7.53:1).

### Tertiary
- **Deep Orange** (`brown`): location, and any orange text or graphic on a light ground. The hero place plate (white on it 6.18:1), the "Onde estamos" board rule and pictograms, `btn--brown` ("Abrir no mapa"), the placeholder chip text, the "com programa" bar on the lares chart. On white 6.18:1, on Orange Tint 5.0:1.
- **Orange Tint** (`brown-tint`): the "Onde estamos" section ground, the placeholder chip background, and the hover of white buttons on orange. Ink on it 13.34:1; Soft Ink on it 5.41:1.

### Neutral
- **Ink** (`ink`): all text on white, ground, orange and orange tint; the rule of orange buttons; the ink button; the focus outline. 16.48:1 on white.
- **Soft Ink** (`ink-soft`): secondary text on light grounds (hero lede, section ledes, notes, hints, proof lines), input borders, the neutral comparison bar. 6.69:1 on white, 6.13:1 on ground.
- **Ink Hover** (`ink-hover`): hover fill of ink buttons (white on it 11.37:1).
- **Night** (`night`): the footer field only. **Night Soft** (`night-soft`): footer secondary text (9.85:1).
- **Paper** (`paper`): the page-top ground (header, hero), paper plates, the footer logo plate, and the reflective white of rules and type on fields.
- **Cool Ground** (`ground`): body background between sections, nav hover wash, bar tracks.
- **Rule Grey** (`rule`): header bottom rule, hairline dividers, the proof divider, bar track outline. Never text.
- **Error Red** (`error`) on **Error Wash** (`error-bg`), **Success Green** (`ok`) on **Success Wash** (`ok-bg`): form feedback only (7.25:1 and 8.02:1).

### Named Rules
**The Logo Palette Rule.** Hues come from the logo: orange, charcoal, white, plus the deep orange and tints derived from them. No other chromatic colour enters the system except form error and success states.

**The Sign Category Rule.** A hue means one thing. Charcoal directs, orange books and speaks for the brand, deep orange locates. A new surface picks the category it belongs to; it never borrows a hue for emphasis.

**The Ink On Orange Rule.** Logo Orange always carries ink text and ink rules, never white. Orange text or graphics on a light ground use Deep Orange, because Logo Orange on white is 2.68:1.

**The Flip On Orange Rule.** A button never sits orange on orange. On the booking plate the booking action flips to a white button with an ink rule and the second action is ink with an orange rule; on the orange band the action is ink with an orange rule.

## Typography

**Font:** Atkinson Hyperlegible Next (variable 200 to 800, self-hosted woff2, latin and latin-ext subsets), falling back to Atkinson Hyperlegible, system-ui, sans-serif.

**Character:** A typeface designed for low-vision readers, set heavy like sign lettering, with a single light setting for the wordmark that echoes the logo's thin lettering.

### Hierarchy
- **Display** (800, `--step-4` clamp 2.5rem to 4.5rem, 1.12, -0.03em): the hero h1 and the band statement. At 75rem and wider the hero h1 is fixed at 4rem on one line.
- **Headline** (800, `--step-3` clamp 2rem to 3rem, 1.12, -0.025em): section heads, evidence and request headings.
- **Title** (800, `--step-2` clamp 1.625rem to 2.125rem, 1.12, -0.015em): plate titles, stop-panel headers, directory caption.
- **Subtitle** (800, `--step-1` 1.375rem, 1.25): route needs, step and fact titles, place plate line, km-post numerals, proof figures.
- **Body** (400, `--step-0` 1.125rem / 18px, 1.6, tabular numerals): all running text, 58 to 62ch on paper plates. Ledes run at `--step-1` with 1.45 to 1.5 leading.
- **Label** (700, `--step--1` 1rem / 16px): nav links, route destinations, notes, hints, captions, legal. The floor.
- **Wordmark** (300, 1.625rem, line-height 1, -0.01em, Charcoal Sign): "FisioStudio" beside the logo mark in the header only.

### Named Rules
**The 18px Floor Rule.** Body text is 18px (`--step-0`); the smallest step is 16px. No running text in capitals and no tracking-out of small text.

**The Heavy Sign Rule.** Anything that functions as a sign (headings, route needs, station names, button labels) is weight 800; reading text is 400; labels are 700. Weight 300 belongs to the header wordmark alone.

## Layout

Content sits in a centred `.wrap` of `min(100% - 2 × gutter, 76rem)` with a fluid gutter (`clamp(1rem, 0.5rem + 2.5vw, 2.5rem)`, 16px at phone width). Sections alternate full-bleed fields (deep charcoal, orange, orange tint, night) with the ground, each padded by `--space-7` (clamp 3.5rem to 6rem). Section heads cap at 44rem with a `--space-6` gap before content.

The hero sits on white: `--space-4` above, `--space-7` below, `--space-2` between h1 and lede and `--space-3` under the lede, so the plates reach the first viewport. It is a two-to-one grid: the charcoal direction plate takes two thirds, the orange booking plate and deep-orange place plate stack in the right third. Paper plates use two-column internal grids (1.3fr / 1fr). Multi-panel boards (place board, offer) are three equal columns divided by 3px rules.

Breakpoints: 75rem and wider fixes the hero h1 at 4rem; 62rem collapses the nav into a menu toggle and shortens the header CTA; 56rem drops every multi-column grid to one column and turns horizontal lines vertical (the lares route line is then drawn per segment); 48rem and 40rem tighten plate padding and stack form rows and the directory table into labelled cards. Spacing steps are 0.5, 0.75, 1, 1.5, 2, 3rem and the fluid section step.

## Elevation & Depth

The system is flat. Depth comes from colour fields and the inset rule of each plate, not from lift. Hero plates and buttons carry no blurred shadow. The few soft shadows are neutral black (`rgb(0 0 0 / x)`) and stay quiet.

### Shadow Vocabulary
- **Header float** (`box-shadow: 0 2px 12px rgb(0 0 0 / 0.25)`): the sticky white header, together with its 1px Rule Grey bottom border. The open mobile menu uses `0 12px 24px rgb(0 0 0 / 0.3)`.
- **Paper plate rest** (`0 10px 30px rgb(0 0 0 / 0.08)`): paper plates on the ground (steps, B2B, evidence, form), layered after their inset rule.
- **Directory lift** (`0 14px 34px rgb(0 0 0 / 0.22)`): the team directory plate on the charcoal field.

### Named Rules
**The Inset Rule Rule.** A plate's frame is drawn inside it with stacked inset box-shadows: a band of the plate's own colour (3 to 5px), then the rule colour (to 5 or 8px). Charcoal and deep-orange plates take a white rule (`inset 0 0 0 5px self, inset 0 0 0 8px #fff`); the orange plate an ink rule; paper plates a charcoal, ink or deep-orange rule. Borders are not used for plate frames.

## Shapes

Rounded rectangles throughout, never sharp and never pills. Plates and the footer logo plate are 14px; buttons, stations, the band notice and form status 12px; fields, the brand link, menu toggle and skip link 10px; nav links, route rows and bar tracks 8px; placeholder chips and the focus ring 6px. Circles (50%) are reserved for station dots, lares route stops and service-list bullets (hollow 3px charcoal rings). The kilometre post is the one asymmetric silhouette: a 2.75 × 3.5rem upright plate with a rounded top (1.4rem 1.4rem) and nearly square base (6px 6px). Route and life lines are 10px thick with 5px rounded caps.

## Components

### Buttons
Tactile sign tablets: a solid fill with an inset rule, so every button reads as a small sign.
- **Shape:** 12px radius, minimum height 3.25rem (52px), padding 0.75rem 1.35rem, label 800 at 18px, optional leading pictogram at 1.35em.
- **Book (default `btn`):** Logo Orange, ink text, inset rule `inset 0 0 0 3px mark, inset 0 0 0 5px ink`. Booking on index, request actions on lares, the header CTA.
- **On orange:** inside the booking plate the booking action is white with an ink rule (hover Orange Tint); the second action is ink with an orange rule. The band's action is ink with an orange rule.
- **Sign (`btn--sign`):** Charcoal Sign with a white rule, for wayfinding to another page.
- **Brown (`btn--brown`):** white with a Deep Orange rule and text, for location actions.
- **Hover:** lighter or deeper fill (mark-hover, brown-tint, ink-hover, sign-deep), the rule recoloured to match, and a 1px lift; 0.2s on `--ease-out`. No drop shadow at rest or on hover.

### Sign Plates
The core container: a 14px plate in one category colour, framed by an inset rule.
- **Direction plate:** Charcoal Sign with an inset white rule and a 3px white rule under its title; hosts route rows. On a deep charcoal field it takes the field colour. The lares facts plate is the same plate holding fact rows.
- **Booking plate:** Logo Orange with an ink rule (`inset 5px mark, inset 8px ink`); title, one line, the white and ink button pair.
- **Place plate:** Deep Orange with a white rule; parking pictogram plus place name, white text; the whole plate is a link.
- **Paper plates:** white with a 3px charcoal (or ink, for the B2B invite) inset rule and the soft rest shadow.
- **Stop panel:** white plate with an inset paper-then-charcoal rule and a Charcoal Sign title band carrying pictogram and title.
- **Place board:** white plate on the Orange Tint ground with an inset paper-then-deep-orange rule, three columns divided by 3px Deep Orange rules, Deep Orange pictograms. The offer board is the charcoal-ruled sibling.

### Route Rows
Each row is a whole-link sign line on a charcoal plate: pictogram (2.5rem, 1.75 stroke), need in Subtitle 800 with the destination in Charcoal Tint beneath, and a bold arrow (2.5 stroke) at the end. Minimum height 3.5rem; rows divided by 2px white rules at 50% opacity. Hover underlines the need and slides the arrow 6px right. Fact rows on lares reuse the grammar without the arrow.

### Linha da vida
The signature interaction: a metro line of six life stations on a full Deep Charcoal field, operable as tabs. A 10px base line in white at 35% opacity is always visible; a solid white overlay line draws over it once (scaleX, or scaleY when vertical; 1.6s, `--ease-out`). Stations are 3.5rem Charcoal Sign dots with a 6px white border, pictogram inside, name (800) and age (Charcoal Tint) beneath. The selected dot is white with a charcoal pictogram and a double ring (`0 0 0 4px sign-deep, 0 0 0 7px #fff`), name underlined 3px. Selecting reveals its stop panel. Below 56rem the line runs vertically down the left. Without JavaScript the station strip hides and all stop panels show.

### Kilometre-post Steps
Counted steps use a kilometre-post numeral: a 2.75 × 3.5rem upright plate, radius 1.4rem 1.4rem 6px 6px, a Logo Orange cap drawn as a 0.85rem linear-gradient band, white body, 3px ink border, and the counter in 800 Subtitle ink. The lares route line uses the sibling form: 3.5rem white circles with a 6px charcoal ring and charcoal numerals on a 10px charcoal line, drawn per segment when vertical.

### Inputs / Fields
- **Style:** white, 2px Soft Ink border, 10px radius, min-height 3.25rem, labels 800 above, hints 16px Soft Ink.
- **Hover:** border darkens to ink.
- **Focus:** Charcoal Sign border, 3px charcoal outline at 1px offset, plus a 4px Charcoal Tint halo.
- **Error:** Error Red border on the Error Wash, 700-weight error text below. Checkbox and radio choices are 1.5rem with charcoal accent in 2.75rem rows.

### Navigation
Sticky white header, 4.5rem tall, with a 1px Rule Grey bottom border and the header float shadow. The brand is the logo mark image (2.75rem tall) beside the Wordmark in Charcoal Sign. Nav links are ink 700 at 16px in 2.75rem targets; hover adds the ground wash and underline; the current page is underlined 3px. The header CTA is a compact orange book button. Below 62rem links fold into a white drop panel of 3rem rows behind an ink-bordered Menu toggle. The footer shows the full logo on a 14px white plate on Night.

### Focus Ring
Global `:focus-visible`: 3px ink outline at 3px offset with a 9px white halo (`box-shadow: 0 0 0 9px #fff`) and 6px radius, so it reads on white, charcoal, orange, deep orange and night alike. Components with inset rules (every button variant, the place plate) have their own `:focus-visible` rule that appends `0 0 0 9px #fff` to their inset stack instead of replacing it. Text fields use the field focus above.

## Do's and Don'ts

### Do:
- **Do** give every new region a sign category before a colour: charcoal to direct, orange to book or speak for the brand, deep orange to locate.
- **Do** put ink text on Logo Orange and use Deep Orange for orange text or graphics on light grounds.
- **Do** frame plates with stacked inset box-shadows (own colour, then rule colour) at 14px radius.
- **Do** keep body text at 18px (`--step-0`, line-height 1.6) and never set text below 16px.
- **Do** measure every text pairing at 4.5:1 or above; the shipped pairs run from 5.0:1 (deep orange on tint) to 16.48:1 (ink on white).
- **Do** make every interactive target at least 2.75rem (44px); buttons and fields are 3.25rem.
- **Do** keep motion to the one-time line draw and small hover nudges, and collapse all transitions under `prefers-reduced-motion: reduce` (the line shows fully drawn).
- **Do** use inline stroke SVG pictograms (2px round stroke, `currentColor`) and arrow glyphs for direction.
- **Do** mark unknown facts with the `[a preencher]` placeholder chip rather than inventing them.

### Don't:
- **Don't** set white text on Logo Orange or Logo Orange text on white.
- **Don't** place an orange button on an orange plate or band; flip it to white or ink.
- **Don't** introduce hues outside the logo palette; blue, green or purple accents break the brand.
- **Don't** use Night outside the footer.
- **Don't** set running text in capitals or add small tracked-out labels above headings.
- **Don't** introduce a second type family, or use weight 300 anywhere but the wordmark.
- **Don't** lift plates or buttons with blurred shadows; any soft shadow is neutral `rgb(0 0 0 / x)`, never tinted.
- **Don't** use Rule Grey for text.
