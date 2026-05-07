# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server at localhost:3000
npm run build      # Production build
npm run lint       # Run ESLint
npm run lint:fix   # Run ESLint with auto-fix
```

No test suite is configured.

## Architecture

Single-page personal website (no backend) built with Next.js App Router. All content is static and served from JSON locale files.

### Layout

The page uses a fixed sidebar (`Header`) at `lg:w-64` on the left. The main content area is offset with `ml-auto lg:ml-64` on the root div in `src/app/page.tsx`. Sections render vertically: Hero → About → Experience → Portfolio → Contact.

### Data Flow

All content is driven by i18n JSON files — **not hardcoded in components**:

- `src/locales/{en,zh-TW}/resume.json` — personal content (bio, experiences, portfolios, skills)
- `src/locales/{en,zh-TW}/ui.json` — UI labels, nav item names/values, theme options

Components access this data exclusively through two custom hooks:
- `useResumeData()` (`src/hooks/useResumeData.tsx`) — returns `personalInfo`, `aboutMe`, `skills`, `experiences`, `portfolios`
- `useUIData()` (`src/hooks/useUIData.tsx`) — returns `navItems`, `themes`, `constants`

i18n is configured in `src/i18n/i18n.ts` with two namespaces (`resume`, `ui`) and two languages (`en`, `zh_tw`). Language switching calls `i18n.changeLanguage()` directly.

### Component Organization

```
src/components/
├── Common/       # Reusable primitives (Section, IconLink, SkillButton, SocialsList, BackToTopButton)
└── Sections/     # Page sections (Hero, About, Experience, Portfolio, Contact)
```

Each component directory exports via an `index.ts` barrel file.

### Theming

`next-themes` wraps the app in `src/app/themeProvider.tsx` with `defaultTheme="system"`. The custom primary color (`--color-primary: var(--color-blue-600)`) is defined in `src/app/globals.css` using Tailwind v4's `@theme` block. The `dark` variant uses the `.dark` class via `@custom-variant dark`.

### Contact Form

Uses EmailJS (`@emailjs/browser`) with hardcoded service/template IDs in `src/components/Sections/Contact/contact.tsx`. Credentials are public (client-side only by design).

### Constants

App-wide constants (email, phone, social links with icon components, icon sizes) live in `src/constants/index.ts`.

## Key Conventions

- React Compiler is enabled (`reactCompiler: true` in `next.config.ts`) — avoid manual `useMemo`/`useCallback` unless the compiler can't handle a case.
- TypeScript strict mode is on. All resume and UI data shapes are typed in `src/types/resume.ts` and `src/types/ui.ts`.
- To add content in both languages, update both `src/locales/en/` and `src/locales/zh-TW/` JSON files and their corresponding TypeScript interfaces if the shape changes.
- `@/` is the path alias for `src/`.
