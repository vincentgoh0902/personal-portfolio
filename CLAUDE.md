# personal-portfolio

Vincent's personal portfolio site, linked from LinkedIn for recruiters.

- **Stack:** Astro 7 (static output) + Tailwind CSS v4. No UI framework; the only client JS is a small scroll-reveal / card-spotlight / theme-toggle script.
- **Content:** everything lives in `src/data/site.ts`. Edit that file, not the components, to change text.
- **Hosting:** Vercel (static), *not* the homelab. Public GitHub repo. Every push to `main` deploys.
- **Port:** dev server on 4321 (`npm run dev`). No server runtime in production, so no `PORT`/Dockerfile needed.
- **Performance rules:** animate only `opacity`/`transform`; no `filter: blur` or heavy libraries; images through `astro:assets` (`<Image>`) so they're resized to WebP; everything respects `prefers-reduced-motion`.
- **Visibility:** public by design (it's a portfolio).
