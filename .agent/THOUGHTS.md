# Soft Strange Bakery — Thought Pack

Purpose: Preserve the user's design direction in their own words, with enough context to carry it into later iterations. This is a direction log, not the implementation task tracker; current work and launch gates live in `current.md` and `docs/task-tracker.md`.

## 2026-10-12 — Carousel feels too streamlined

### User direction

- “The acrousell shodu be changed I htink it is msakign it seem too stremalined”
- “I don;t liek this also start woring passes wehre you revie and thinkg thorugh 5 new stargete chagnes please eplxain”

### Evidence supplied

- Two windowed homepage screenshots: one makes the landscape and pastry cutouts too large; the next compresses the facts ribbon to two large rows and shows an overly orderly carousel with a large centered name plate, evenly spaced products, and broad empty sky.

### Readback

The carousel's symmetry and large centered controls make the site read like a polished storefront instead of a personal baking journal. Keep the current wording and accessible carousel actions, but let the pastry display feel hand-arranged, lower the empty-sky emphasis, and use five deliberate visual passes rather than another sequence of isolated size tweaks.

### Five-pass direction

1. **Hand-assembled opening:** crop the outdoor image into a quiet paper-framed strip and loosen the pastry arrangement, title label and controls. (Implemented and reviewed.)
2. **Small-batch journal rhythm:** make the Saturday facts feel like a compact note attached to the page, not a large promotional band; keep every phrase intact.
3. **Bakery notebook menu:** give the featured bakes a slightly uneven, taped-in recipe-card rhythm, with their current names and descriptions unchanged.
4. **Personal story pacing:** make the existing “This Saturday” and Angel’s story sections read like adjacent journal entries, using the words already on the page.
5. **Across-screen coherence:** review the same handmade language at narrow phone, regular window, tablet and wide desktop sizes; remove any new clipping or over-scaling.

### Status

- Pass 1 moved the existing “THIS SATURDAY / Fresh from Angel’s oven.” heading into the hero, limited the visible cluster to three offset treats, and gave the selected bake a smaller handwritten note. The remaining products are still reachable through the seven-item controls.
- Reviewed `output/soft-strange-bakery-pass1-window-1146x741-v2.png`, `output/soft-strange-bakery-pass1-window-1280x720.png`, `output/soft-strange-bakery-pass1-tablet-768x1024.png`, `output/soft-strange-bakery-pass1-mobile-390x844-final.png`, and `output/soft-strange-bakery-pass1-small-mobile-320x568-final.png`. All document widths match their viewports; controls fit inside the carousel at 320px.
- `npm run check` passed (lint, typecheck, 19 existing tests, static export and image checks). Browser interaction advanced from Brownies to Blueberry Muffins with reduced motion enabled; the carousel transition and scenic animation both resolved to `0s`. The menu route was also reviewed at 1280×720.
- Pass 1 is complete. Passes 2–5 remain for the facts strip, featured-bake cards, story rhythm and a final across-screen review.

## 2026-10-12 — Windowed fit still needs work

### User direction

- “See how it fits here is notgood?”

### Evidence supplied

- Attached windowed Chrome screenshot: the hero scene takes most of the visible page, while the Saturday info ribbon reaches and clips against the right edge.

### Readback

Preserve the existing bakery look and copy, but make the Saturday details feel intentionally grouped and fully visible in a narrow desktop window. Keep the same information accessible on mobile.

### Status

- Reworked the ribbon into four content groups. It stays on one centered line at 1280px and wider, and forms two rows at 1024px and phone widths. Copy stays intact. Verified 1024×768, 1280×720, 1560×900, 390×844 and 320×568; every viewport matched document width. `npm run check` passed.

## Earlier directions — ongoing build and feedback loop

- User asked to inspect Soft Strange Studio in the GitHub workspace and adapt the bakery into Soft Strange Bakery.
- User asked for headless local development, noting port 3000 was occupied; the preview has been served at `http://localhost:3001/AngelsBakery/`.
- User will continue sending thoughts and wants the site updated as those thoughts arrive, with those thoughts tracked in `.agent/` and reflected back during work.
- User asked for conversational replies, frequent state/workflow updates, and frequent screenshots in the chat across the needed aspect ratios, including mobile; the first frame was requested before further feedback.
- User asked that work stay exclusively on Soft Strange Bakery and continue toward production readiness.

### Readback

Treat this as an iterative design/build session: keep the bakery preview available, show current work in progress and responsive screenshots, capture every new steering point, and continue on the bakery only. “Production ready” means completing source and customer-journey work while keeping the separate business approval, commercial hosting, and live-ordering gates in `docs/task-tracker.md` visible. A local preview does not clear those gates.

### Status

- Captured from the ongoing session context on 2026-10-11; reflected in `.agent/pointer.md` and `.agent/INTENT.md`.

## 2026-10-11 — Window fit and tone

### User direction

- “in windowed mode it doens fit”
- “also the screen and evyeirng is jsut too big”
- “it doesn tfeel homey enough it feels too professional”
- “it needs to feel alsmost put toghet erliek a blog”
- “But dont overhaul or chagne the wordign too much jsut reworkd the stylgin slithgly”
- “Be sure toe track all intente and reflec thtem back to be as you work”

### Evidence supplied

- User attached a windowed Chrome screenshot of `http://localhost:3001/AngelsBakery/` (2026-10-11). At the visible window size, the outdoor hero and pastry carousel take up most of the page; the bake-sale ribbon continues beyond the right edge. The user says the overall fit is not good.

### Readback

Keep the current site and its copy recognizable. Make the first screen fit a regular window, reduce the overall scale, and shift the styling toward a warm, personal baking blog rather than a polished professional storefront. Use restrained presentation changes, and show how each direction is reflected as work proceeds.

### Status

- Captured and acknowledged; styling work is in progress.

## 2026-10-11 — Window-fit screenshot follow-up

### User direction

- “See how it fits here is notgood?”

### Evidence supplied

- Referred to the same attached windowed Chrome view. It showed the pastry scene and carousel dominating the available height, with the bake-sale strip running beyond the visible window.

### Readback

The latest compact layout is closer, but the carousel still owns too much of the first screen, especially on phone and menu views. Reduce its vertical footprint another step while keeping the current content and wording in place, then recheck a short phone, windowed desktop, and wide desktop.

### Status

- Implemented another small scale reduction in the shared hero and carousel. Captured windowed 1280×800, wide 1920×1080, tablet 768×1024, mobile 390×844, and short mobile 375×667; the full check passed and the preview is back at port 3001.

## 2026-10-12 — Windowed-fit screenshot review

### User direction

- “See how it fits here is notgood?”

### Evidence supplied

- The attached windowed Chrome view again showed the outdoor scene and pastry carousel taking most of the available browser height, with the ticker cut at the right edge.

### Readback

The current homepage still feels oversized in a regular window. Keep the same bakery copy and handmade studio-derived styling, but lower the hero/carousel scale another step so the next section appears sooner and the ticker remains fully visible.

### Status

- Reduced desktop hero height and carousel art. At 1280×720 the masthead, full carousel, info strip and next-section heading are visible; 390×844 retains its wrapped ticker and selected-bake focus.

## 2026-10-12 — Latest windowed-fit check

### User direction

- “See how it fits here is notgood?”

### Evidence supplied and rechecked

- The attached Chrome window still gave most of its visible page to the masthead, scenic pastry display and ticker. I reproduced the page at 1536×780; the featured menu began around 452px and its cards around 664px, leaving only their top edges in view.

### Readback

Keep the handmade header and current copy, but compress the hero/carousel stack and the gap before the menu when the desktop window is short. Preserve the phone layout and keep all ticker text visible.

### Status

- Added a short-desktop-only sizing adjustment. At 1536×780 the featured cards now begin around 612px instead of 664px; the hero/carousel stack is 218px + 106px instead of 250px + 120px. At 1280×720 the cards begin around 606px. At 390×844 the mobile hero remains 304px, carousel 118px, and document width 390px. Screenshots are in `output/windowed-1536x780-after-followup.png`, `output/windowed-1280x720-after-followup.png`, and `output/mobile-390x844-after-followup.png`; `npm run check` passed.

## 2026-10-12 — Attached window fit still feels wrong

### User direction

- “See how it fits here is notgood?”

### Evidence supplied and rechecked

- The attached browser frame again shows an older oversized bakery render. Rechecked the current menu at 1280×720: before this refinement the first product cards began at about y=515, leaving too little of each card in view.

### Readback

- Keep the bakery's copy and handmade visual language, but make the short-window menu feel composed and easier to enter. Reduce the menu-only hero and close the first-screen gaps; keep the homepage hero unchanged. Also ensure a safe preview result reads as a calm status rather than an error.

### Status

- Short desktop menu cards now begin at y≈469 at 1280×720. The home hero is unchanged. The mobile preview result now uses a soft sage status style and assistive-technology status role; the preview remains explicitly non-ordering.

## 2026-10-11 — Attached window-fit follow-up

### User direction

- “See how it fits here is notgood?”

### Evidence supplied

- The attached Chrome frame again shows the local bakery homepage in a resized window. The hero and floating pastries take up most of the view, making the rest of the page feel pushed down.

### Readback

- Keep the page’s words and handmade style, but make the first window feel balanced and keep the featured pastry name clear against the carousel artwork.

### Status

- The compact desktop sizing remains in place. A small paper-backed caption was added to keep long pastry names readable over the cutout art. Captured 1024×768, 1280×720, and 390×844 frames; all page widths match their viewports.

## 2026-10-12 — Repeated window-fit screenshot

### User direction

- “See how it fits here is notgood?”

### Evidence supplied and compared

- The attached Chrome frame is dated Oct 11 and shows the earlier oversized layout: the scenic image and cutout pastries dominate the available window, and the Saturday ribbon continues off the right edge.
- Compared it with a fresh local render at 1536×780, 1280×720, 1024×768, and 390×844. The compact version brings the first menu cards into the desktop window; the ribbon fits on desktop and wraps on mobile.

### Readback

- The screenshot's fit is not good. Keep the reduced hero scale and wrap the information ribbon so the window reads as a composed page instead of a clipped strip. Preserve copy and the handmade styling.

### Status

- Current localhost preview shows the compact layout. Fresh captures: `output/soft-strange-bakery-windowed-1536x780-latest.png`, `output/soft-strange-bakery-windowed-1280x720-latest.png`, `output/soft-strange-bakery-laptop-1024x768-latest.png`, and `output/soft-strange-bakery-mobile-390x844-latest.png`.

## Additions

Append each new user thought with its date, exact wording where practical, context/evidence, and a short readback. Do not silently turn an inference into a user-approved decision.

## 2026-10-12 — Carousel feedback carried through the five visual passes

### Readback and implementation

- Kept the user’s carousel concern as the source direction: the homepage should feel assembled by hand and homey, with the existing wording retained.
- Pass 2 turns the four existing Saturday phrases into one small taped note rather than another full-width banner. Its text is exposed to assistive technology as a named landmark.
- Pass 3 gives the already taped featured cards a restrained stagger on wide desktop. Pass 4 puts Angel’s existing story copy on a paper card without inventing posts, dates or business details.
- Pass 5 rechecked windowed desktop, tablet, regular phone and small phone widths; all document widths match their viewport. Reduced motion removes the new static tilts and keeps carousel Next working.
- Fresh evidence: `output/soft-strange-bakery-pass4-journal-full-1280.png`, `output/soft-strange-bakery-pass5-reduced-motion-mobile-390x844.png`, and `output/soft-strange-bakery-pass2-final-{window,tablet,mobile,small-mobile}-*.png`. The full source/export check passed. These refinements were delivered in `afde023`, whose GitHub Actions validation succeeded.

## 2026-10-12 — Attached window fit compared with the current preview

### User direction

- “See how it fits here is notgood?”

### Evidence supplied and rechecked

- The attached Chrome screenshot shows the oversized scenic hero and a ticker clipped at the right edge. It matches an earlier render, not the current localhost stylesheet.
- Recaptured the current homepage at 1536×780, 1280×720, 390×844, and 1920×1080. At 1536×780 the hero is 218px tall, carousel is 106px, the ticker fits, and featured cards begin around y=612. At 1280×720 the full ticker and featured card images enter the frame. At 390px the ticker wraps and the document stays 390px wide.

### Readback

The screenshot does look badly fit, but the current local preview has already been compacted since that image was made. Keep the existing short-window layout; use the fresh captures as the reference for any next fit feedback. No wording change is needed.

### Status

- Captured current desktop, wide, and mobile frames. No CSS change was needed for this comparison.

## 2026-10-12 — Windowed fit still needs more room for the menu

### User direction

- “See how it fits here is notgood?”

### Evidence supplied and rechecked

- The attached older browser view still makes the scenic pastry display dominate the window. In the current 1280×720 preview, the first featured cards started around y=606, leaving only their upper portion visible.

### Readback

- Keep the page copy and phone layout as they are, but shorten the scenic/carousel stack again for short desktop windows so more of the Saturday menu is visible before scrolling.

### Status

- Reduced the short-window hero to 196px and carousel to 92px; the featured cards now start at y=568 in 1280×720 and y=574 in 1536×780. At 390×844 the phone hero remains 304px and carousel 118px; desktop and phone widths match their viewports. Fresh captures are in `output/soft-strange-bakery-windowed-1280x720-followup-2.png`, `output/soft-strange-bakery-windowed-1536x780-followup-2.png`, `output/soft-strange-bakery-phone-390x844-followup-2.png`, and `output/soft-strange-bakery-small-phone-320x740-followup-2.png`.

## 2026-10-12 — Recheck the windowed screenshot

### User direction

- “See how it fits here is notgood?”

### Evidence supplied and rechecked

- The new attached Chrome view still shows the large scenic/product presentation and the ticker extending past the visible window. The current source had already been reduced from that older view, but a fresh 1536×780 capture still left the featured cards beginning at y=664 before this adjustment.

### Readback

- The first desktop window needs a tighter masthead and pastry display so the Saturday menu appears sooner. Keep the same copy, handmade styling, and phone layout.

### Status

- Added a short-desktop-only compact setting for the announcement, masthead, carousel, and menu spacing. Featured cards now begin at y=514 at 1536×780 and y=504 at 1280×720. The 390×844 phone layout remains 390px wide with its existing hero and wrapped ticker. Captures are `output/soft-strange-bakery-windowed-feedback-1536x780.png`, `output/soft-strange-bakery-windowed-feedback-1280x720.png`, and `output/soft-strange-bakery-mobile-feedback-390x844.png`.

### Current-state comparison — 2026-10-12

- Rechecked the supplied screenshot against the running local preview at 1180×720, 1560×910, and 390×844.
- The supplied frame shows the older oversized state with the info strip cut off. In the current preview, the 1180px desktop frame is 1180px wide with a 168px hero, 76px carousel, and 46px strip; at 1560px the strip fits with room on both sides. The phone frame is 390/390px wide with the existing 304px hero, 118px carousel, and wrapped 73px strip.
- Current captures: `output/soft-strange-bakery-windowed-current-1280x720.png`, `output/soft-strange-bakery-windowed-before-1180x720.png`, `output/soft-strange-bakery-windowed-before-1560x910.png`, and `output/soft-strange-bakery-feedback-mobile-390x844.png`.

### Readback

- Agree that the attached layout is not fitting well. Keep the compact windowed treatment as the current target; compare future feedback to these fresh frames. No wording or CSS change was needed for this recheck.

## 2026-10-12 — Carousel still feels too streamlined

### User direction

- “The acrousell shodu be changed I htink it is msakign it seem too stremalined”

### Readback and five strategic changes

Keep the seven bakes and the familiar controls, but let the opening feel like someone arranged treats on a table and is sharing them from a journal. Avoid making the carousel feel like a timed storefront ad.

1. **Make browsing intentional:** default to a still display; rotation is an explicit Play action. (Implemented.)
2. **Loosen the still life:** layer a quiet, irregular paper/linen ground and offset the supporting pastries around the selected bake. (Implemented; responsive review complete.)
3. **Make the selected name a handwritten bake note:** keep the title attached visually to the collage and soften its selector marks. (Implemented.)
4. **Carry the journal rhythm into the control area:** keep Previous/Next, direct selection, swipe, and keyboard behavior while making the controls feel less like a polished progress strip. (Implemented.)
5. **Recheck every crop and motion state:** compare window, tablet, phone and small phone; verify selection, opt-in rotation, reduced motion, and no horizontal overflow. (Complete.)

### Pass 1 evidence

- Changed autoplay to opt-in and added a loose paper-toned surface behind the pastry cluster, with less regular vertical spacing. Copy, product order, all seven direct selections, and touch/keyboard actions remain intact.
- `Next baked good` selected Sugar Cookies at 320px; Play changed the accessible control to Pause, Pause stopped rotation, and reduced-motion Next still selected the next bake with a 0s transition. Page width remained 320px.
- Screens: `output/soft-strange-bakery-carousel-pass1-window-1280x720.png`, `output/soft-strange-bakery-carousel-pass1-tablet-768x1024.png`, `output/soft-strange-bakery-carousel-pass1-mobile-390x844.png`, `output/soft-strange-bakery-carousel-pass1-small-mobile-320x568.png`.
- `npm run check` passed (lint, typecheck, 20 tests, production build, 20 exported pages, 18 decoded images). The root export was refreshed locally; no push or deploy.
- Pass 2 refined the selected-name paper and selector marks, making them less regular like a note and crumbs. Reviewed 1536×900, 1280×720, 768×1024, 390×844 and 320×568; no collision or horizontal overflow appeared. `npm run check` passed again. Screens are under `output/playwright/soft-strange-bakery/soft-strange-bakery-carousel-pass2-*`.
- Pass 3 loosened the arrow and corner-action alignment to echo the handmade collage without changing labels or actions. Final review covered 1536×900, 1280×720, 768×1024, 390×844 and 320×568; page width matched each viewport. At 320px with reduced motion, Next changed the bake and transition duration stayed at 0s. `npm run check` passed after the styling pass, the root export was refreshed locally, and localhost:3001 returned 200.
- Final captures: `output/playwright/soft-strange-bakery/soft-strange-bakery-carousel-final-wide-1536x900.png`, `output/playwright/soft-strange-bakery/soft-strange-bakery-carousel-final-window-1280x720.png`, `output/playwright/soft-strange-bakery/soft-strange-bakery-carousel-final-tablet-768x1024.png`, `output/playwright/soft-strange-bakery/soft-strange-bakery-carousel-final-mobile-390x844.png`, and `output/playwright/soft-strange-bakery/soft-strange-bakery-carousel-final-small-mobile-320x568.png`.
- Keyboard ArrowRight moved to Peanut Butter Cookies while paused. The image viewer focused Close; Escape closed it and restored focus to that bake’s picture button.


## 2026-10-12 — Still Polaroids and Gilsum framing

The user explicitly asked to remove the carousel entirely, keep the existing cozy paper/soft-green/handmade Polaroid presentation, and focus on the included bakery photos. Gilsum scenery should frame the main photos above and below with gentle scroll movement. Keep wording, routes, business details, image provenance, ordering safeguards and reduced motion. Inspect first, capture baseline screenshots, compare desktop/window/tablet/phone renders iteratively, clean up the homepage implementation, run `npm run check`, and leave everything local without commit, push or deployment.

Interpretation: retain the seven existing taped product cards as the main photo collection; do not duplicate them in a new hero gallery. Reuse the owner-provided yard-morning landscape in two decorative bands. Motion follows page scrolling via the existing Parallax component; there is no timer or photo rotation. The shared menu hero also becomes a simple scenic strip so carousel code can be removed completely.

Comparison pass: captured five full-page baselines before editing. The first new desktop crop emphasized dark trees; adjusted the crop toward the horizon and reduced compact-window band height to preserve the first-fold balance. Full evidence and completion status live in the task tracker.

Final review: the seven original cards and lower-page copy remain visually familiar. Short-phone spacing brings the first photo into the 320×568 frame; wordmark hover remains readable. Five-size captures, movement/reduced-motion checks and the full check are recorded in the task tracker. Everything remains local.


## Landscape and overlaid Saturday card — 2026-10-12

User direction: extend the landscape further down, overlay the note card on the picture, and make “This Saturday” part of that card. Readback: combine the existing eyebrow, headline and Saturday details on one taped paper card over a deeper Gilsum photo. Preserve the seven product cards and lower landscape. Implemented with a cover option on ScenicBackdrop and normal-flow card sizing so longer phone text expands safely. The standalone facts ribbon and its unused styling are removed.


## Saturday section clarification — 2026-10-12

The user asked for more content, a taller photo at the top, different note cards and Polaroid styling, then identified the lower “Your treat. Your Saturday / Easy as one, two, three” section with a screenshot. This corrects the initial interpretation that they meant the homepage opening. Reverted the unreviewed opening redesign to the previously accepted single overlay note. Applied the new work only to the lower Saturday section: taller Gilsum photo, taped heading note and three Polaroid cards with existing product/landscape images, original step copy, handwritten captions and menu/pickup links.


## Smaller ruled opening notes — 2026-10-12

User supplied a three-card opening reference and requested slightly smaller cards with lines. The current source still held the single-note version; used the supplied screenshot as the latest visual authority, restored its three-note content using existing copy and menu/pickup routes, and reduced typography/padding with faint sage notebook rules. Lower Saturday section remains intact.


## Layered closing invitation and footer — 2026-10-12

The user wants the bottom of the site to carry the same cozy ruled-note and Polaroid feel, with another Gilsum photo behind overlapping cards. Selected existing owner-provided orchard.webp after reviewing it against sunset-wide.jpg. The invitation becomes a blush taped note; the footer uses cream, sage and yellow cards with original links, business copy, privacy link and imagery/order disclosure. Existing parallax/reduced-motion behavior is reused. First phone comparison caught wordmark intrinsic-width overflow; corrected the logo styling and grid minimum widths.


## Reveal more scenery — 2026-10-12

User said stacked opening notes hide too much and must not occupy the whole width. Narrowed the opening group on desktop; capped the stacked introduction and set supporting cards to narrower widths, alternating right/left placement to reveal the landscape. Kept copy and ruled-paper styling intact.


## Complete, quieter footer — 2026-10-12

User clarified that the footer should remain a full footer with non-intrusive information cards. Expanded the scenic footer to the page edges, made the three information cards smaller and content-height with lighter borders/shadows, and consolidated the two wide legal/disclosure strips into one subdued sage fine-print panel. All navigation and disclosure text remains.
