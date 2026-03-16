## Developer Portfolio – Next.js 14, TypeScript, Tailwind

This is a modern, minimal, and professional developer portfolio built with:

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment target**: Vercel

The site is responsive (mobile-first), dark-mode by default, and includes smooth scrolling, a sticky navbar, and section transitions.

### Project structure

- `app/`
  - `layout.tsx`: Root layout, global SEO metadata, and dark theme shell.
  - `page.tsx`: Home page that composes all sections.
  - `globals.css`: Tailwind base styles and global tweaks (smooth scroll, background, etc.).
- `components/`
  - `Navbar.tsx`: Sticky navigation with smooth anchor links.
  - `Hero.tsx`: Hero section with title, summary, CTA buttons, and social links.
  - `SectionWrapper.tsx`: Shared animated wrapper for each main section.
  - `About.tsx`: Professional background and short journey.
  - `Skills.tsx`: Categorized skill cards/badges.
  - `Projects.tsx`: Dynamic projects grid with filters and hover animations.
  - `Experience.tsx`: Vertical timeline of roles and achievements.
  - `Education.tsx`: Qualifications and certifications.
  - `Interests.tsx`: Personal interests with icons.
  - `Contact.tsx`: Contact info and simple mailto form.
  - `Footer.tsx`: Simple footer.
- `data/`
  - `projects.json`: Example project data loaded dynamically on the Projects section.
- `public/`
  - `project-*.svg`: Lightweight illustrative thumbnails for projects.

### Customizing content

Most content is hard-coded in components so you can quickly adapt it:

- **Name, title, summary, social links**
  - Edit `components/Hero.tsx`.
  - GitHub is set to `https://github.com/soorajnair16`.
  - LinkedIn is set to `https://www.linkedin.com/in/soorajsnair257/`.
- **About / background / journey**
  - Edit copy in `components/About.tsx`.
- **Skills**
  - Update categories and skill lists in `components/Skills.tsx`.
- **Projects**
  - Edit or replace entries in `data/projects.json`.
  - Each project requires:
    - `id`: unique string
    - `title`
    - `description`
    - `techStack`: array of strings (used for filters)
    - `githubUrl`
    - `liveUrl`
    - `image`: path to an image in `public/`
- **Experience**
  - Update the `experience` array in `components/Experience.tsx`.
- **Education / certifications**
  - Edit `components/Education.tsx`.
- **Interests**
  - Update the `interests` array in `components/Interests.tsx`.
- **Contact details**
  - Update `EMAIL`, `LINKEDIN_URL`, and `GITHUB_URL` in `components/Contact.tsx`.

SEO metadata (title, description, Open Graph) can be adjusted in `app/layout.tsx`.

### Running locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000` in your browser.

### Deploying to Vercel

1. **Push to a Git repository** (GitHub, GitLab, or Bitbucket).
2. Go to the Vercel dashboard and:
   - Click **New Project**.
   - Import your repository.
3. Vercel should auto-detect the framework:
   - **Framework**: Next.js
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.vercel/output` (handled by Next/Vercel automatically).
4. Click **Deploy**.

No extra configuration is required—Next.js 14 + App Router is supported out of the box on Vercel.

### Notes and next steps

- The contact form currently opens your email client via `mailto:`. For a production contact flow, replace this with:
  - A Next.js **Route Handler** (API route) that sends emails, or
  - A third-party form service (Formspree, etc.).
- Update `metadataBase` and URLs in `app/layout.tsx` to match your real domain once deployed.
- You can further tune performance and SEO using:
  - Smaller/more specific images in `public/`.
  - Additional metadata or `generateMetadata` per route if you add more pages.

