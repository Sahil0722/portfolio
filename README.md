# Premium Portfolio (Next.js + Tailwind + Framer Motion)

A modern, animated personal portfolio template with reusable sections and placeholder data ready to replace with your LinkedIn resume content.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Folder Structure

- `app/` - App Router pages, global styles, metadata
- `components/` - Reusable UI sections and layout wrappers
- `data/portfolio-data.ts` - All editable content (name, experience, projects, links, skills)
- `public/` - Static assets

## Run Locally

1. Install Node.js 18.18+ (or latest LTS)
2. Install dependencies:
   - `npm install`
3. Start development server:
   - `npm run dev`
4. Open:
   - `http://localhost:3000`

## Build for Production

- `npm run build`
- `npm run start`

## Customize Content Quickly

Edit `data/portfolio-data.ts`:

- `profile` for hero name, role, tagline, avatar
- `experiences` for timeline entries
- `projects` for project cards + modal details
- `skillCategories` for progress bars
- `socials` for GitHub / LinkedIn / email

## Notes

- Dark theme is default.
- Smooth scrolling and reveal animations are enabled.
- Contact form UI is ready; wire it to your API/email provider when needed.
