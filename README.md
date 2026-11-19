# ms-vishwanath — portfolio

Portfolio of **M. S. Vishwanath**, Full Stack AI Developer · Freelancer · Trainer → https://ms-vishwanath.web.app

A colourful, game-style portfolio: drive a supercar through the site with **WASD / arrow keys** (or just scroll — it glides across the screen), collect tech-stack coins, knock over cones, and use the **map (M)** to jump between checkpoints.

- **Stack:** Next.js 16 (static export) · React 19 · Tailwind CSS v4 · GSAP · Framer Motion · Lenis
- **Content:** `lib/profile.ts` (profile, skills, AI, venture) and `lib/all-projects.ts` (74 live projects)
- **Game engine:** `components/game/drive.tsx` · **Map:** `components/minimap.tsx` · **Loader:** `components/loader.tsx`
- **Illustrations:** hand-built isometric SVGs in `components/illustrations.tsx`

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site → out/
firebase deploy    # hosts out/ on ms-vishwanath.web.app
```
