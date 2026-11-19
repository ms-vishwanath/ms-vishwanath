# ms-vishwanath — portfolio

Personal portfolio of **M. S. Vishwanath**, Full Stack AI Developer: https://ms-vishwanath.web.app

- **Stack:** Next.js 16 (static export) · React 19 · Tailwind CSS v4 · GSAP · Framer Motion
- **Content:** everything lives in [`lib/profile.ts`](lib/profile.ts). Edit it there and every section updates.
- **Game:** drive the car with WASD / arrow keys (or scroll — it sweeps left↔right) and collect stack icons. Engine: `components/game/drive.tsx`.

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static site → out/
firebase deploy   # hosts out/ on Firebase
```
