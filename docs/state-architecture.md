# State Architecture

## Provider Stack

-  `PreferencesProvider` manages server-configured flags while delegating UX
   state to Zustand.
-  `Zustand` stores (`usePreferencesStore`, `useTasksStore`) handle preferences,
   keyboard shortcuts, and optimistic UI caches.
-  `ReduxProvider` (store) exposes project and task slices, including async
   thunks.
-  Providers wrap the app shell in `src/app/providers.tsx` to supply state
   globally.

## Zustand Stores

-  `usePreferencesStore`: theme, density, shortcuts with `persist` + `devtools`
   middleware.
-  `useTasksStore`: optimistic task cache, loading/error flags, async helpers.
-  Shared hooks combine Zustand selectors with Redux selectors for composite
   data (e.g., dashboard summaries).
-  Hydration helpers sync server-rendered data into Zustand on the client during
   navigation.

## Slice Overview

-  `projectsSlice`: entity adapter storing projects, active states, metadata.
-  `tasksSlice`: entity adapter with active project, optimistic flags, and sort
   order.
-  Additional slices (notifications, activity) can follow the same structure.

## Selectors & Hooks

-  Selectors exported from each slice (`selectAllProjects`,
   `selectTasksByProject`).
-  Custom hooks (e.g., `useActiveProjectTasks`) combine selectors with dispatch.
-  Memoisation handled via `createSelector` to keep React renders stable.

## Async Workflows

-  Thunks (`syncProjects`, `createTask`) orchestrate server calls with
   optimistic updates.
-  Extra arguments inject API + analytics clients for instrumentation.
-  Future work: adopt RTK Query for activity feed caching.

## Component Patterns

-  Container components interact with Redux; presentational views remain
   stateless.
-  Controllers feed memo-friendly props to support `React.memo` and lazy
   loading.
-  Prop getters expose DOM concerns when connecting hooks to UI (e.g.,
   collapsibles).
-  Bridge hooks (`useDashboardState`) combine Zustand + Redux data for cohesive
   controllers.

## Governance

-  Naming convention: `domainSlice`, `selectDomainById`, `syncDomain` thunks.
-  Middleware stack registers analytics + error tracking in `store.ts`.
-  Tests required for reducers, selectors, and critical thunks prior to merge.

## Baseline Metrics (2025-10-24)

-  Dashboard initial render with Redux + Zustand: 1.3s on Slow 4G (includes
   provider init).
-  Selector recompute count: stable (< 3 recomputes per interaction).
-  Zustand persistence hydration: < 40ms during dashboard load.
-  Thunk duration (syncProjects): 420ms average on staging API.

## Monitoring & Follow-ups

-  Automate profiler snapshots post-deploy (Module 7 backlog item).
-  Track state slice schema changes in release notes.
-  Review state governance quarterly with platform guild.
