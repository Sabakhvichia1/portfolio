# Saba Khvichia: portfolio

Personal site: full-stack web development and data & AI analytics. Next.js 16, React 19, TypeScript and Tailwind CSS 4, fully static.

## Edit the content

Everything on the page comes from `src/content/`:

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, intro, links, the scrolling top line, the stats grid |
| `projects.ts` | Project cards in "Selected work" |
| `experience.ts` | The timeline in "The path so far" |
| `skills.ts` | Skill groups |
| `insights.ts` | Numbers behind the analytics charts |

- **Screenshot on a project card:** put the image in `public/projects/` and add `image: "/projects/name.png"` to that project.
- **Download CV button:** put the PDF at `public/Saba_Khvichia_CV.pdf`. The button appears by itself.
- **Accent color:** change `--accent` at the top of `src/app/globals.css`.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Import the GitHub repo on [Vercel](https://vercel.com/new). Every push to `main` redeploys the site.
