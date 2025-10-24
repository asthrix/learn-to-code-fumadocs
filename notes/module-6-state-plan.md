# Module 6 State Plan

## Overview

-  Focus: migrate TaskFlow Pro to Context + Zustand + Redux Toolkit for shared
   state.
-  Owners: Frontend platform guild with support from product squads.
-  Timeline: Weeks 45–47 (align with API release cadence).

## State Audit

-  Shared state: active project, task filters, project metadata, notifications
   badge.
-  Preferences: theme, density, keyboard shortcuts, feature flags.
-  Async domains: project sync, task creation, activity feed, notifications.

## Rollout Strategy

-  Phase 1: Introduce provider stack (`PreferencesProvider`, Zustand stores,
   Redux provider).
-  Phase 2: Migrate dashboard + project detail routes to Redux selectors and
   Zustand hooks.
-  Phase 3: Wire async thunks for syncing projects/tasks with API + optimistic
   updates.
-  Phase 4: Persist preference state, backfill tests/docs, deprecate legacy prop
   chains.

## Decision Records

-  Filters require Redux slice for analytics + URL sync (Context rejected).
-  Preferences and keyboard shortcuts move to Zustand to reduce provider
   re-renders.
-  Async flows handled with thunks, future RTK Query adoption pending Module 7.
-  Zustand persistence enabled via `persist` middleware with localStorage
   fallback.

## Zustand Adoption

-  Store: `usePreferencesStore` (theme, density, shortcuts) with persistence +
   devtools.
-  Shared hooks combine Zustand selections with Redux selectors for dashboards.
-  Subscribe to store changes for analytics (e.g., theme toggle tracking).

## Implementation Tasks

-  [ ] Providers composed in `src/app/providers.tsx` (Context + Zustand +
       Redux).
-  [ ] Dashboard uses Redux selectors and `usePreferencesStore` for layout
       density.
-  [ ] Project detail dispatches `syncProjectTasks` thunk.
-  [ ] Settings panel reads `usePreferencesStore` + hydration helper.
-  [ ] Docs updated: `docs/state-architecture.md`.

## Validation

-  Reducer tests: ✅ (45 cases planned).
-  Selector memoisation: monitor with React DevTools profiler.
-  Zustand persistence: verify theme/density survive reload.
-  Optimistic updates: simulate offline creation failure before release.
-  Follow-up: integrate RTK Query cache for activity feed (Module 7).

## Follow-ups

-  Establish CI job to run Redux lint rules (eslint-plugin-redux-saga optional).
-  Create storybook stories for Redux container components with mock store.
-  Align backend contract changes with state slice schemas.
