# Shadcn UI Integration Opportunities for Project React Course

This report audits every module and lesson in `content/docs/react` and recommends shadcn/ui components (https://ui.shadcn.com/docs/components) that would add visual clarity and interactivity while keeping the curriculum concise. For each lesson you will find:

- **What exists** – current MDX structure or key teaching moment.
- **Suggested component(s)** – one or more shadcn UI primitives to import instead of the bespoke MDX component or raw markup.
- **Placement notes** – where to integrate and what tweaks are needed (e.g., variant, layout, dark/light considerations).

Import statements use the canonical shadcn paths (e.g. `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";`). Always wrap course-specific styles in semantic classes so the existing theme variables continue to work in dark/light modes.

---

## Module 0 · Introduction

| Lesson | What exists | Suggested shadcn component(s) | Placement notes |
| --- | --- | --- | --- |
| `m0/index` | Steps, Accordions, Button, Banner, Files, custom emoji bullets | `Card`, `Tabs`, `Timeline` alternative using `Stepper` pattern (`Tabs` + `Progress`), `Alert` for prerequisites | Replace custom `<Steps>` with a `Card` stack (one per module). For prerequisites, use `Tabs` (`TabsTrigger` = Windows/macOS/Linux). Convert "Next steps" CTA to `Button` from shadcn for consistency. |
| `lesson-1` | Sectioned prose with Steps, Files, Accordions | `NavigationMenu`, `Accordion`, `Tabs`, `Badge` | Use `NavigationMenu` snapshot to demo sidebar vs main content. Swap custom `<Accordions>` with shadcn `Accordion`. Represent the "Files" checklist as a `Tabs` pair (Completed vs Upcoming). |
| `lesson-2` | Detailed code reading guide, Accordions for JSX rules | `HoverCard`, `Accordion`, `Tabs`, `Alert`, `Table` | Wrap code annotation tips inside `HoverCard` to show hints on hover. Convert JSX rule blocks into an `Accordion`. Use `Tabs` (`Code`, `Explanation`) around complex snippets so learners can toggle. Add `Alert` (variant="info") for warning about copying code. |
| `lesson-3` | Installation instructions with Accordions per OS | `Tabs`, `Accordion`, `Alert`, `Callout` via `Card` + `Badge` | Replace nested accordions with `Tabs` (Windows / macOS / Linux). Put verification commands inside `Alert` (variant="default"). Use a `Card` with `Badge` to call out "Troubleshooting". |
| `lesson-4` | Project overview using Steps and Accordions | `Carousel`, `Card`, `Tabs`, `Accordion` | Present feature roadmap with `Carousel` slides (one per module block). Convert technology stack accordion to shadcn `Accordion`. Use `Card` grid for application architecture and include `Tabs` (`Diagram`, `Narrative`). |
| `lesson-5` | Tips, Steps for progress, Accordions for mistakes | `Callout` (use `Alert`), `Progress`, `Tabs`, `Accordion`, `Timeline` pattern | Wrap learning strategies inside `Alert` (success/info/danger). Use `Progress` to visualize module completion (0→8). Replace Steps with `Tabs` for schedule types. Convert mistakes list to `Accordion` (already close). Add `Dialog` for Git instructions to emphasise commit commands. |

---

## Module 1 · React Fundamentals

| Lesson | What exists | Suggested shadcn component(s) | Placement notes |
| --- | --- | --- | --- |
| `m1/index` | Overview, Steps, Accordions, Files | `Tabs`, `Card`, `Table`, `Alert` | Turn the module roadmap into a `Table`. Use `Tabs` (`Concepts`, `Project Structure`) to split objectives. Replace `Steps` block with `Card` series using subtle shadow. |
| `lesson-1` | Cleanup checklist, file tree | `Accordion`, `Alert`, `Tabs`, `ScrollArea` | Use `Alert` (variant="destructive") to warn before deleting files. Convert file tree to `ScrollArea` card for better overflow. Provide OS-specific terminal commands inside `Tabs`. |
| `lesson-2` | Component creation walkthrough | `CodeBlock` enhanced with `Tabs`, `Callout`, `Tooltip` | Use `Tabs` to switch between "Component" and "Explanation" views. Wrap common mistakes with `Alert`. Add `Tooltip` for `PascalCase` reminder on heading. |
| `lesson-3` | Property data arrays | `Tabs`, `Table`, `Accordion` | Show raw data vs refined in `Tabs` (Starter, After). Use `Table` to document property object schema. Wrap "Why this matters" inside `Accordion`. |
| `lesson-4` | PropertyCard props | `Card`, `Tabs`, `Badge`, `Tooltip` | Display props in `Card` with `Badge` to highlight required fields. Provide `Tabs` (Before/After) for prop destructuring refactor. |
| `lesson-5` | Mapping with PropertyList | `Timeline` via `Steps`, `Table` for keys, `Alert` for warnings | Use `Alert` (variant="warning") to emphasise `key` prop. Provide `Tabs` for "Array.map" vs "forEach" comparisons. |
| `lesson-6` | Tailwind styling | `Tabs` (`JSX`, `Rendered`), `Card`, `ToggleGroup` for dark/light preview | Provide toggles for `className` variants. Use `Tabs` to show "Before Tailwind" vs "After". |
| `lesson-7` | Review and recap | `Accordion`, `Progress`, `Alert` | Summarize tasks in collapsible `Accordion`. Use `Progress` component to show module completion meter. Add `Alert` for action plan. |

---

## Module 2 · State & Events

| Lesson | Existing pattern | Suggested shadcn component(s) | Placement notes |
| --- | --- | --- | --- |
| `m2/index` | Module intro with Steps | `Tabs`, `Card`, `Badge` | Use `Tabs` for "State Patterns" vs "Events". Add `Badge` to flag prerequisites. |
| Lessons 1–5 | Incremental state updates, filter UI | `Tabs`, `Alert`, `Switch`, `Slider`, `Input`, `Dialog` | Represent filter controls using live `Card` with `Slider`, `Switch`, `Input`. Use `Tabs` for "Before" vs "After" code. Add `Alert` for state mutation warnings. |
| Lesson 6 | Module review | `Accordion`, `Progress`, `Callout` via `Alert` | Same pattern as M1 review; highlight key takeaways using `Alert`. |
| Lesson 7 | Challenge & wrap-up | `Card`, `AlertDialog`, `Button` | Present challenge brief in a `Card`. Provide `AlertDialog` with solution hints (triggered by `Button`). |

---

## Module 3 · Effects & Data Fetching

| Lesson cluster | Suggested shadcn component(s) | Placement notes |
| --- | --- | --- |
| `m3/index` | `Tabs`, `Card`, `Timeline` (use Steps styled as cards) | Show "Effect Patterns", "Async Flow", "Custom Hooks" in separate tabs. |
| Lessons 1–2 (useEffect basics, mock API) | `Alert`, `CodeBlock` + `Tabs`, `Accordion` | Use `Alert` (info) for dependency array warnings. Tabs for `JSX`, `Network Diagram`. Replace nested bullet lists with `Accordion`. |
| Lesson 3–6 (fetching, loading, error, cleanup) | `Skeleton`, `Alert`, `Tabs`, `Progress`, `Callout` | Demo loading states with `Skeleton`. Use `Alert` (destructive) for error handling best practices. |
| Lesson 7–8 (custom hooks, carousel) | `Card`, `Tabs`, `Carousel`, `Tooltip` | Embed interactive `Carousel` preview for property images. |
| Lesson 9–10 (review/challenge) | `Accordion`, `AlertDialog`, `Badge` | Challenge instructions in `AlertDialog`. Recap as `Accordion`. |

---

## Module 4 · Routes & Navigation

| Lesson cluster | Suggested shadcn component(s) | Notes |
| --- | --- | --- |
| `m4/index` | `NavigationMenu`, `Tabs`, `Card` | Use `NavigationMenu` screenshot to map route names. |
| Lessons 1–3 (router setup) | `Alert`, `Tabs`, `Card` | Provide `Alert` for version compatibility. Tabs for `package.json` vs `App.jsx` updates. |
| Lessons 4–7 (details page, params, fetch) | `Breadcrumb`, `Tabs`, `Alert`, `Card` | Use `Breadcrumb` to show route hierarchy. |
| Lessons 8–11 (listing card, nav links, not found, programmatic nav) | `Card`, `Alert`, `Dialog` | Provide `Dialog` to show "navigation vs redirect" explanation. |
| Lessons 12–13 (review/challenge) | `Accordion`, `AlertDialog`, `Progress` | Standard pattern. |

---

## Module 5 · Hooks & Performance

| Segment | Components | Notes |
| --- | --- | --- |
| `m5/index` | `Progress`, `Tabs` | Map optimization milestones as `Progress`. |
| Lessons 1–4 (custom hooks, useMemo) | `Tabs`, `CodeBlock` + `ScrollArea`, `Alert` | Provide `Tabs` for "Problem", "Solution". |
| Lessons 5–7 (filter optimization, useCallback, React.memo) | `Card`, `Tooltip`, `Alert` | Highlight performance metrics inside `Card` + `Tooltip`. |
| Lesson 8 (profiling) | `Dialog`, `Tabs`, `Alert`, `Table` | Use `Dialog` for instructions to open React Profiler. Show profiling steps in `Table`. |
| Lesson 9 (caching) | `Tabs`, `Accordion` | Compare caching strategies. |
| Lesson 10 (review) | `Accordion`, `Alert`, `Progress` | Recap structure. |

---

## Module 6 · State Management (Redux & Zustand Paths)

### Shared Index

- Use `Tabs` to allow learners to switch between the two paths (Redux Toolkit vs Zustand).
- Convert architecture comparisons into `Table`.
- Add `Alert` (warning) before learners choose a path.

### Redux Path Lessons

| Topic | Shadcn components | Placement notes |
| --- | --- | --- |
| Setup store / connect to React | `Steps` via `Card` stack, `Alert`, `Tabs` | Provide `Tabs` for `store.js`, `main.jsx` updates. |
| Async thunks, slices | `CodeBlock` with `Tabs`, `Alert`, `Badge` | Highlight `pending/fulfilled/rejected` states using `Badge`. |
| Favorites feature (lessons 6–15) | `Card`, `Tabs`, `Dialog`, `Accordion` | Use `Card` to visualise state shape. Present UI updates inside `Dialog` (trigger: "See UI preview"). Review via `Accordion`. |

### Zustand Path Lessons

Similar suggestions; emphasise:
- `Tabs` to compare Redux vs Zustand code.
- Use `Card` to show store creation, `Alert` for missing provider warnings.
- Provide `Accordion` for advanced features (persist middleware, devtools).

---

## Module 7 · Forms & Authentication

| Section | Suggested components | Notes |
| --- | --- | --- |
| `m7/index` | `Card`, `Tabs`, `Alert` | Outline auth flow using `Tabs` (Client, Server). |
| Lessons 1–3 (AuthProvider setup) | `Alert`, `Tabs`, `Card`, `Diagram` using `Card` + `Separator` | Use `Alert` (warning) for token handling. |
| Lessons 4–8 (Forms) | `Form`, `Input`, `Textarea`, `Button`, `Alert` | Replace manual markup with shadcn `Form` components for consistency. Wrap validation errors in `Alert`. |
| Lessons 9–12 (submission, interceptors, refresh token) | `Card`, `Tabs`, `Alert`, `Table` | Display HTTP flow using `Table`. Use `Alert` to warn about storing tokens securely. |
| Lessons 13–16 (route guards, sign-out) | `AlertDialog`, `Switch`, `Button`, `Card` | Provide `AlertDialog` for sign-out confirmation example. |

---

## Module 8 · Deployment

| Lesson | Components | Notes |
| --- | --- | --- |
| `m8/index` | `Card`, `Tabs`, `Alert`, `Progress` | Represent deployment checklist using `Progress`. |
| Lesson 1 (Vercel CLI & env vars) | `Tabs`, `Accordion`, `Alert`, `Callout` | Use `Tabs` for OS-specific CLI install steps. `Alert` (destructive) for env var safety. |
| Lesson 2 (Deploy to production) | `Card`, `Tabs`, `Alert`, `Toast`, `Timeline` | Provide `Card` for "Preview" vs "Production" differences. Use `Toast` example snippet for deployment success notifications. |

---

## Implementation Checklist

1. **Audit existing MDX components** – replace custom `<Steps>`, `<Files>`, `<Banner>`, `<Accordions>` with shadcn equivalents to reduce bespoke styling.
2. **Create MDX-ready wrappers** for shadcn components if not already exposed (e.g. `components/mdx/shadcn.tsx`). Ensure server-safe usage (many shadcn components are client-safe but some require scripts).
3. **Dark/light testing** – shadcn honors CSS variables but double-check accent usage (`bg-primary/10` etc.) matches the Black theme.
4. **Consistency pass** – unify CTA buttons (`<Button />`), alerts (`<Alert />`), and cards across modules for cohesive visuals.
5. **Progressive enhancement** – introduce components gradually (e.g. start with `Card`/`Tabs` in Module 0–1, layer `Dialog`, `Carousel`, `Toast` in later modules).

---

## Notes

- When replacing long enumerations, prefer `Tabs` or `Accordion` to prevent scroll fatigue.
- Use `ScrollArea` around large code or directory trees to avoid layout overflow on mobile.
- For challenge solutions, encapsulate spoilers in `AlertDialog` or `Collapsible` so learners opt in.
- Combine `Badge` + `Card` to highlight durations, difficulty, or prerequisites at a glance.
- Integrate `Toast` notifications in live code examples (Module 7 login success, Module 8 deployment success) to show production UX patterns.

By following this plan, the React course gains a modern, cohesive visual language powered by shadcn/ui while keeping the MDX authoring experience simple and consistent.
