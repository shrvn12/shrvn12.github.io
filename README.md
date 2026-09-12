# Shravan Singh — Portfolio (Vue 3)

Rebuilt from the original static `shrvn12.github.io` site into a Vue 3 + Vite +
Vue Router + Tailwind app.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build       # outputs to dist/
npm run preview     # serve the production build locally
```

## Deploying to GitHub Pages

This repo is meant to replace the contents of `shrvn12.github.io`. Since that's
a user/organization Pages repo, it serves directly from `main` (no `/docs`
folder, no `gh-pages` branch needed) — so the simplest flow is:

1. `npm run build`
2. Commit the contents of `dist/` as the published site (either push `dist/`
   directly to `main`, or wire up a small GitHub Action that runs the build
   and pushes `dist/` to `main` — happy to add that workflow file if you want
   it automated on every push).

No `base` config change is needed in `vite.config.js` since `shrvn12.github.io`
is served from the domain root, not a `/repo-name/` sub-path.

## Revision 2 — UX pass

- **No more scale-on-hover anywhere.** Cards lift with `translateY` (rigid, doesn't distort text), buttons shift color/border/brightness, arrow icons nudge a few px — nothing enlarges or shifts text out from under the cursor.
- **Project cards**: the whole card is a real click target that opens the live site (works identically on touch — no more hover-only reveal), and the Frontend/Backend/Live links are always visible as chips, never hidden behind a hover state.
- **Mobile nav**: added a hamburger menu with a slide-down panel (nav links + socials + resume) — previously nav links were simply hidden below `md` with no way to reach them.
- **Fonts**: display/heading font is now Space Grotesk, body stays Inter, labels stay JetBrains Mono — more visual hierarchy than the previous all-Inter setup.
- **Loading states**: GitHub/LeetCode stat cards and the contribution calendar now show shimmering skeleton placeholders instead of a static "fetching data…" line.
- **Contribution calendar**: now measures its container (via `ResizeObserver`) and sizes cells to fit exactly — no more overflow/cramped clipping, and no horizontal scroll needed on any screen size.
- **Home page**: reworked hero — status pill, quick-facts chips, a filled primary CTA, a slow-rotating decorative ring behind the photo, and a bouncing scroll cue. Project cards and stat rows now stagger in on scroll instead of the whole section fading as one block.

## What changed vs. the original

- **Converted to Vue 3**: componentized into `src/components` (NavBar,
  ProjectCard, ThemeToggle, CopyButton, stat cards, contribution calendar) and
  `src/views` (Home, Projects), wired up with Vue Router.
- **New `/projects` route**: a dedicated page listing every project with the
  same enhanced card component used in the Home preview.
- **Home page is unchanged** in content and section order (hero → about →
  experience → projects → stats → contact). The one functional tweak: the
  "view all projects" button now routes to `/projects` instead of linking out
  to GitHub, since that page exists now.
- **Enhanced project cards**: full-bleed project screenshots with a hover
  zoom, floating link buttons (frontend/backend/live) that appear on hover,
  gradient scrim for legibility, accent-tinted tag chips, and a "view project"
  link — replacing the old plain centered-logo cards.
- **Copy button for email**: a small copy-to-clipboard icon next to the email
  row in Contact, with a checkmark confirmation.
- **Light/dark theme toggle**: light is the default. Colors are CSS variables
  (`src/style.css`) so light mode sits close to white and dark mode sits close
  to black, toggled via a sun/moon button in the navbar and persisted to
  `localStorage`.
- **Custom-built GitHub contribution calendar**: `ContributionCalendar.vue` +
  `useContributions.js` fetch raw contribution data from the public
  [github-contributions-api](https://github-contributions-api.jogruber.de) and
  render the week/day grid, month labels, and legend from scratch — replacing
  the old `ghchart.rshah.org` static image embed.

## Structure

```
src/
  components/   # NavBar, ProjectCard, ThemeToggle, CopyButton, stat cards, calendar, etc.
  composables/  # useTheme, useGithubStats, useLeetcodeStats, useContributions, scroll effects
  data/         # projects.js — single source of truth for Home preview + /projects page
  views/        # Home.vue, Projects.vue
  router/       # vue-router setup with hash-scroll support
```
