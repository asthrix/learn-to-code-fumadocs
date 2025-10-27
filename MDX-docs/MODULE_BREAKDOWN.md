# Complete Module Breakdown - Project React Course

**Detailed breakdown of all 9 modules with tasks, concepts, and implementation notes**

---

## Module 0: Introduction

**Duration:** 15 minutes  
**Total Steps:** 5  
**Difficulty:** Beginner

### Overview
Platform orientation and course navigation tutorial. Introduces students to the Devbar interface, code snippets, and module structure.

### Learning Objectives
1. Understand the course structure
2. Learn to navigate the Devbar
3. Read and understand code snippets
4. Identify highlighted code changes
5. Navigate between modules and steps

### Concepts Covered
- Course platform navigation
- Code snippet reading
- Module progression
- Task tracking
- Development workflow

### Implementation Notes
- No code changes required
- Focus on UI/UX orientation
- Interactive tutorial format
- Sets expectations for learning style

---

## Module 1: React Fundamentals

**Duration:** 2-3 hours  
**Total Steps:** 7  
**Difficulty:** Beginner

### Overview
Introduction to React basics including JSX, components, props, and composition patterns. Students build the foundation of the homepage with listing cards.

### Tasks
1. Create the `HomePage` component
2. Add the `HomePage` to `App`
3. Create the `ListingList` component
4. Create the `ListingCard` component
5. Add the `ListingList` to the `HomePage`
6. Add the `ListingCard` to the `ListingList`

### Concepts Covered
- **JSX Syntax** - HTML-like syntax in JavaScript
- **Functional Components** - Modern React component pattern
- **Props** - Passing data between components
- **Component Composition** - Building UIs from smaller pieces
- **Project Structure** - Organizing files and folders
- **Import/Export** - ES6 module system

### Key Files Created
```
src/
  pages/
    HomePage.jsx          (New)
  components/
    ListingList.jsx       (New)
    ListingCard.jsx       (New)
```

### Code Patterns Introduced
```jsx
// Functional component
const Component = () => {
  return <div>Content</div>;
};

// Props destructuring
const Component = ({ prop1, prop2 }) => {
  return <div>{prop1}</div>;
};

// Component composition
<Parent>
  <Child prop={value} />
</Parent>
```

### Implementation Notes
- Static data (hardcoded listings array)
- Focus on component structure, not functionality
- Builds visual foundation for later modules
- Introduces Tailwind CSS styling

---

## Module 2: State and Events

**Duration:** 2-3 hours  
**Total Steps:** 7  
**Difficulty:** Beginner

### Overview
Introduces state management with `useState` and event handling. Students make the application interactive by adding filters and search functionality.

### Tasks
1. Turn the `listings` array in `HomePage` into state
2. Create the `ListingFilters` component
3. Add state for `dates` and `guests` in `ListingFilters`
4. Pass filter values from `ListingFilters` to `HomePage`
5. Add state for the `search` value in `HomePage`
6. Filter listings by `search`, `dates`, and `guests`

### Concepts Covered
- **useState Hook** - Managing component state
- **Event Handlers** - Responding to user interactions
- **Controlled Inputs** - Form input management
- **State Lifting** - Passing state between components
- **Callback Props** - Parent-child communication
- **Array Filtering** - Dynamic data manipulation

### Key Files Modified
```
src/
  pages/
    HomePage.jsx          (Modified - Add state)
  components/
    ListingFilters.jsx    (New)
    ListingCard.jsx       (Modified - Add click handler)
```

### Code Patterns Introduced
```jsx
// useState hook
const [value, setValue] = useState(initialValue);

// Event handler
const handleClick = () => {
  setValue(newValue);
};

// Controlled input
<input value={value} onChange={(e) => setValue(e.target.value)} />

// Callback prop
<Child onUpdate={(data) => setState(data)} />

// Array filter
const filtered = array.filter(item => condition);
```

### State Structure
```jsx
// HomePage state
{
  listings: [],
  search: '',
  dates: { from: null, to: null },
  guests: 1
}
```

### Implementation Notes
- Transition from static to dynamic
- Introduces state management patterns
- Real-time filtering of listings
- Foundation for user interactions

---

## Module 3: Effects and Data Fetching

**Duration:** 3-4 hours  
**Total Steps:** 10  
**Difficulty:** Intermediate

### Overview
Introduces side effects with `useEffect` and asynchronous data fetching. Students connect to a mock API and handle loading/error states.

### Tasks
1. Prepare the `HomePage` to fetch listings
2. Fetch listings in `HomePage`
3. Add `isLoading` state in `HomePage`
4. Show a `Spinner` when loading in `HomePage`
5. Add error handling in `HomePage`
6. Show an error message in `HomePage`
7. Prevent race conditions in `HomePage` with `AbortController`
8. Refactor render logic in `HomePage`
9. Create an image `Carousel` for the `ListingCard`

### Concepts Covered
- **useEffect Hook** - Side effects and lifecycle
- **Async/Await** - Asynchronous JavaScript
- **API Fetching** - Getting data from backend
- **Loading States** - UI feedback during async operations
- **Error Handling** - Graceful failure management
- **Race Conditions** - Preventing stale data
- **AbortController** - Canceling requests
- **Cleanup Functions** - Managing side effects

### Key Files Modified
```
src/
  pages/
    HomePage.jsx          (Modified - Add useEffect, API calls)
  components/
    ListingCard.jsx       (Modified - Add carousel)
    ui/
      Spinner.jsx         (New)
      Carousel.jsx        (Modified)
```

### Code Patterns Introduced
```jsx
// useEffect basic
useEffect(() => {
  // Side effect code
}, [dependencies]);

// Async data fetching
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await api.get('/listings');
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  fetchData();
}, []);

// Cleanup with AbortController
useEffect(() => {
  const controller = new AbortController();
  
  fetchData({ signal: controller.signal });
  
  return () => controller.abort();
}, []);

// Conditional rendering
if (isLoading) return <Spinner />;
if (error) return <Error message={error} />;
return <Data data={data} />;
```

### API Integration
```jsx
// Mock API structure
api/
  index.js          - Axios instance
  listings.js       - Listing endpoints
  helpers.js        - Utility functions
  data/
    listings.js     - Mock data
```

### Implementation Notes
- Introduces asynchronous programming
- Teaches proper error/loading state management
- Critical pattern: cleanup on unmount
- Foundation for all API interactions

---

## Module 4: Routes and Navigation

**Duration:** 3-4 hours  
**Total Steps:** 13  
**Difficulty:** Intermediate

### Overview
Implements client-side routing with React Router. Students create a multi-page application with navigation, URL parameters, and 404 handling.

### Tasks
1. Install `react-router-dom`
2. Create the `Router` component
3. Add the `Router` to `App`
4. Set up the `HomePage` route
5. Create the `ListingDetailsPage` component
6. Add the `ListingDetailsPage` route with a parameter
7. Get the listing ID from the URL in `ListingDetailsPage`
8. Fetch the listing data in `ListingDetailsPage`
9. Create the `ListingDetailsCard` component
10. Add the `ListingDetailsCard` to `ListingDetailsPage`
11. Link the listing cards to the details page
12. Create the `NotFoundPage` component
13. Add the `NotFoundPage` to the `Router`

### Concepts Covered
- **React Router** - Client-side routing
- **Route Configuration** - Defining application routes
- **URL Parameters** - Dynamic route segments
- **Link Component** - Navigation without page reload
- **useNavigate Hook** - Programmatic navigation
- **useParams Hook** - Accessing URL parameters
- **404 Handling** - Catch-all routes
- **Nested Routes** - Route hierarchies

### Key Files Created
```
src/
  components/
    Router.jsx                (New)
  pages/
    ListingDetailsPage.jsx    (New)
    NotFoundPage.jsx          (New)
  components/
    ListingDetailsCard.jsx    (New)
```

### Code Patterns Introduced
```jsx
// Router setup
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/listings/:id" element={<DetailsPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
</BrowserRouter>

// Link navigation
import { Link } from 'react-router-dom';
<Link to={`/listings/${id}`}>View Details</Link>

// Get URL params
import { useParams } from 'react-router-dom';
const { id } = useParams();

// Programmatic navigation
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/home');
```

### Route Structure
```
/                         -> HomePage
/listings/:id            -> ListingDetailsPage
/favorites               -> (Added in Module 6)
/sign-in                 -> (Added in Module 7)
/*                       -> NotFoundPage
```

### Implementation Notes
- Transforms single-page to multi-page app
- Introduces URL-based navigation
- Prepares for advanced routing (protected routes)
- Foundation for SPA architecture

---

## Module 5: Hooks and Performance

**Duration:** 4-5 hours  
**Total Steps:** 10  
**Difficulty:** Advanced

### Overview
Focuses on code optimization and refactoring. Students create custom hooks, implement memoization, and eliminate code duplication.

### Tasks
1. Create the `useFetch` custom hook
2. Refactor `HomePage` with `useFetch`
3. Prevent infinite loop in `HomePage` with `useMemo`
4. Prevent unnecessary re-renders of `ListingFilters` with `useCallback`
5. Wrap `ListingFilters` with `memo`
6. Refactor `ListingDetailsPage` with `useFetch`
7. Create the `DataRenderer` component
8. Update `HomePage` with `DataRenderer`
9. Update `ListingDetailsPage` with `DataRenderer`
10. Add cache support to `useFetch`

### Concepts Covered
- **Custom Hooks** - Reusable stateful logic
- **useMemo Hook** - Memoizing computed values
- **useCallback Hook** - Memoizing callback functions
- **React.memo** - Component memoization
- **Performance Optimization** - Preventing unnecessary renders
- **Code Reusability** - DRY principle
- **Render Props Pattern** - Component composition
- **Caching** - Data persistence

### Key Files Created
```
src/
  hooks/
    useFetch.js           (New)
  components/
    DataRenderer.jsx      (New)
```

### Code Patterns Introduced
```jsx
// Custom hook
const useFetch = (url, options) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fetch logic
  }, [url, options]);
  
  return { data, isLoading, error };
};

// useMemo
const filteredListings = useMemo(() => {
  return listings.filter(/* filter logic */);
}, [listings, search, dates, guests]);

// useCallback
const handleSearch = useCallback((value) => {
  setSearch(value);
}, []);

// React.memo
const Component = memo(({ prop }) => {
  return <div>{prop}</div>;
});

// Render props pattern
<DataRenderer
  data={data}
  isLoading={isLoading}
  error={error}
  render={(data) => <Content data={data} />}
/>
```

### Performance Optimizations
1. **Eliminate duplicate code** - useFetch hook
2. **Prevent infinite loops** - useMemo for dependencies
3. **Reduce re-renders** - useCallback + memo
4. **Cache API responses** - In-memory caching

### Implementation Notes
- Major refactoring module
- Teaches React performance patterns
- Introduces advanced hook patterns
- Eliminates 50%+ of duplicate code

---

## Module 6: State Management (Redux)

**Duration:** 5-6 hours  
**Total Steps:** 15  
**Difficulty:** Advanced

### Overview
Implements global state management with Redux Toolkit. Students add a favorites feature that works across multiple pages using shared state.

### Tasks
1. Setup the Redux store
2. Connect Redux to React
3. Create the `listings` slice
4. Add the `listings` slice to the Redux store
5. Create the `fetchListings` async thunk
6. Create the `fetchListings` extra reducers
7. Refactor `HomePage` with `listingsSlice`
8. Set up favorite listings
9. Create the `ListingFavoritesPage` component
10. Create the `Navbar` component
11. Add `Navbar` to `App`
12. Update `Router` to allow navigation to favorites
13. Create the `ListingFavoriteButton` component
14. Add `ListingFavoriteButton` to `ListingCard`
15. Add `ListingFavoriteButton` to `ListingDetailsCard`

### Concepts Covered
- **Redux** - Predictable state container
- **Redux Toolkit** - Modern Redux with less boilerplate
- **Store** - Single source of truth
- **Slices** - Feature-based state organization
- **Reducers** - Pure functions that update state
- **Actions** - State change descriptions
- **Async Thunks** - Async action creators
- **Selectors** - Querying state
- **useSelector Hook** - Reading Redux state
- **useDispatch Hook** - Dispatching actions

### Key Files Created
```
src/
  state/
    store.js                  (New)
    slices/
      listingsSlice.js        (New)
  pages/
    ListingFavoritesPage.jsx  (New)
  components/
    Navbar.jsx                (New)
    ListingFavoriteButton.jsx (New)
```

### Redux Architecture
```jsx
// Store setup
import { configureStore } from '@reduxjs/toolkit';
import listingsReducer from './slices/listingsSlice';

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
  },
});

// Slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchListings = createAsyncThunk(
  'listings/fetchListings',
  async (filters) => {
    const response = await api.get('/listings', { params: filters });
    return response.data;
  }
);

const listingsSlice = createSlice({
  name: 'listings',
  initialState: {
    items: [],
    favorites: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(fav => fav !== id);
      } else {
        state.favorites.push(id);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Usage in component
import { useSelector, useDispatch } from 'react-redux';
import { fetchListings, toggleFavorite } from '@/state/slices/listingsSlice';

const Component = () => {
  const dispatch = useDispatch();
  const listings = useSelector(state => state.listings.items);
  const favorites = useSelector(state => state.listings.favorites);
  
  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);
  
  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };
};
```

### State Structure
```javascript
{
  listings: {
    items: [],          // All listings
    favorites: [],      // Favorited listing IDs
    status: 'idle',     // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,        // Error message
  }
}
```

### Implementation Notes
- Introduces global state management
- Complex but powerful pattern
- Foundation for scalable apps
- Favorites persist in memory only

---

## Module 7: Forms and Authentication

**Duration:** 5-6 hours  
**Total Steps:** 16  
**Difficulty:** Advanced

### Overview
Implements user authentication with JWT tokens and form handling with React Hook Form. Students create a sign-in system and protect routes.

### Tasks
1. Create the `AuthProvider` component
2. Add `AuthProvider` to the app
3. Fetch the access `token` in `AuthProvider`
4. Hide the `Navbar` when not signed in
5. Create the `SignInPage` component
6. Add the `SignInPage` to `Router`
7. Create the `SignInForm` component
8. Add `SignInForm` to `SignInPage`
9. Handle the `SignInForm` submission
10. Turn on authentication in `env` and sign in
11. Add the user's `token` to all requests
12. Refresh the `token` when expired
13. Create the `Route` component
14. Update all routes with `Route`
15. Redirect to `/` when signed in
16. Create sign out button in `Navbar`

### Concepts Covered
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **JWT Tokens** - JSON Web Tokens
- **Authentication Flow** - Sign in/sign out
- **Protected Routes** - Route guards
- **Context API** - Sharing auth state
- **Axios Interceptors** - Request/response interception
- **Token Refresh** - Automatic token renewal
- **Form Validation** - Client-side validation
- **Secure Storage** - In-memory token storage

### Key Files Created
```
src/
  components/
    AuthProvider.jsx      (New)
    Route.jsx             (New)
  pages/
    SignInPage.jsx        (New)
  components/
    SignInForm.jsx        (New)
```

### Authentication Architecture
```jsx
// AuthProvider
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch token on mount
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await api.get('/auth/refresh');
        setToken(response.data.token);
        setUser(response.data.user);
      } catch (error) {
        // No valid token
      } finally {
        setIsLoading(false);
      }
    };
    fetchToken();
  }, []);

  // Add token to all requests
  useEffect(() => {
    if (token) {
      api.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      });
    }
  }, [token]);

  // Refresh token on 401
  useEffect(() => {
    api.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          // Refresh token logic
        }
        return Promise.reject(error);
      }
    );
  }, []);

  const signIn = async (email, password) => {
    const response = await api.post('/auth/sign-in', { email, password });
    setToken(response.data.token);
    setUser(response.data.user);
  };

  const signOut = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Protected Route
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export const Route = ({ children, requiresAuth = false }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Spinner />;
  
  if (requiresAuth && !user) {
    return <Navigate to="/sign-in" replace />;
  }
  
  if (!requiresAuth && user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Sign In Form (React Hook Form)
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const SignInForm = () => {
  const { signIn } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data) => {
    await signIn(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} error={errors.email?.message} />
      <Input {...register('password')} type="password" error={errors.password?.message} />
      <Button type="submit">Sign In</Button>
    </form>
  );
};
```

### Auth Flow
```
1. User visits app
2. AuthProvider checks for refresh token
3. If valid → Set user & token → Show app
4. If invalid → Show sign-in page
5. User signs in → Get token → Store in memory
6. Token added to all API requests
7. On 401 → Try refresh → If fails → Sign out
8. User signs out → Clear token → Redirect to sign-in
```

### Implementation Notes
- Most complex module
- Real-world authentication pattern
- Security best practices (no localStorage)
- Foundation for user-specific features

---

## Module 8: Deployment

**Duration:** 30 minutes  
**Total Steps:** 2  
**Difficulty:** Beginner

### Overview
Final module covering production deployment to Vercel using the Vercel CLI.

### Tasks
1. Install the Vercel CLI
2. Run the `vercel` command

### Concepts Covered
- **Deployment** - Publishing to production
- **Vercel** - Hosting platform
- **CLI Tools** - Command-line deployment
- **Production Build** - Optimized build process
- **Environment Variables** - Production configuration

### Commands
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy application
vercel
```

### Deployment Workflow
```
1. Install Vercel CLI
2. Run `vercel` in project root
3. Answer configuration questions:
   - Set up and deploy? Y
   - Which scope? Your account
   - Link to existing project? N
   - Project name? project-react
   - Code location? ./
   - Modify settings? N
4. Vercel builds and deploys
5. Get production URL
6. Visit deployed app!
```

### Implementation Notes
- Simplest module
- No code changes
- Teaches deployment workflow
- Celebrates completion!

---

## Summary Statistics

### Overall Course Metrics

| Module | Title | Steps | Difficulty | Duration | Key Concepts |
|--------|-------|-------|------------|----------|--------------|
| 0 | Introduction | 5 | Beginner | 15 min | Platform navigation |
| 1 | React Fundamentals | 7 | Beginner | 2-3 hrs | JSX, Components, Props |
| 2 | State & Events | 7 | Beginner | 2-3 hrs | useState, Event Handlers |
| 3 | Effects & Data | 10 | Intermediate | 3-4 hrs | useEffect, API Fetching |
| 4 | Routes & Navigation | 13 | Intermediate | 3-4 hrs | React Router, Navigation |
| 5 | Hooks & Performance | 10 | Advanced | 4-5 hrs | Custom Hooks, Optimization |
| 6 | State Management | 15 | Advanced | 5-6 hrs | Redux Toolkit, Global State |
| 7 | Forms & Auth | 16 | Advanced | 5-6 hrs | React Hook Form, JWT |
| 8 | Deployment | 2 | Beginner | 30 min | Vercel, Production |
| **Total** | | **89** | | **25-30 hrs** | |

### Skill Progression

```
Beginner (Modules 0-2)
  ├─ Platform familiarity
  ├─ React basics
  ├─ Component structure
  └─ Basic state management

Intermediate (Modules 3-4)
  ├─ Side effects
  ├─ API integration
  ├─ Routing
  └─ Multi-page apps

Advanced (Modules 5-7)
  ├─ Performance optimization
  ├─ Global state management
  ├─ Authentication
  └─ Form handling

Production (Module 8)
  └─ Deployment

Complete Full-Stack React Developer
```

### Technical Skills Acquired

**React Core:**
- ✅ JSX and Components
- ✅ Props and Composition
- ✅ State Management (local)
- ✅ Hooks (useState, useEffect, useMemo, useCallback)
- ✅ Custom Hooks
- ✅ Context API

**Libraries & Tools:**
- ✅ React Router (v6)
- ✅ Redux Toolkit
- ✅ React Hook Form
- ✅ Zod Validation
- ✅ Axios
- ✅ Tailwind CSS

**Patterns & Practices:**
- ✅ Component patterns
- ✅ Performance optimization
- ✅ Error handling
- ✅ Loading states
- ✅ Protected routes
- ✅ API integration
- ✅ Authentication flow
- ✅ Form validation

**Development Workflow:**
- ✅ Project structure
- ✅ Code organization
- ✅ Debugging
- ✅ Testing approach
- ✅ Deployment

---

## Appendix: Component Inventory

### Components Created Throughout Course

```
src/
  components/
    Router.jsx                      # Module 4
    AuthProvider.jsx                # Module 7
    Route.jsx                       # Module 7
    Navbar.jsx                      # Module 6
    DataRenderer.jsx                # Module 5
    ListingList.jsx                 # Module 1
    ListingCard.jsx                 # Module 1
    ListingDetailsCard.jsx          # Module 4
    ListingFilters.jsx              # Module 2
    ListingFavoriteButton.jsx       # Module 6
    SignInForm.jsx                  # Module 7
    ui/
      Avatar.jsx                    # Pre-built
      Button.jsx                    # Pre-built
      Card.jsx                      # Pre-built
      Carousel.jsx                  # Pre-built, Modified Module 3
      Checkbox.jsx                  # Pre-built
      DateRangePicker.jsx           # Pre-built
      Input.jsx                     # Pre-built
      Spinner.jsx                   # Pre-built
      # ... other UI components

  pages/
    HomePage.jsx                    # Module 1
    ListingDetailsPage.jsx          # Module 4
    ListingFavoritesPage.jsx        # Module 6
    SignInPage.jsx                  # Module 7
    NotFoundPage.jsx                # Module 4

  hooks/
    useFetch.js                     # Module 5

  state/
    store.js                        # Module 6
    slices/
      listingsSlice.js              # Module 6

  api/
    index.js                        # Pre-built
    listings.js                     # Pre-built
    users.js                        # Pre-built
    reviews.js                      # Pre-built
    locations.js                    # Pre-built
    helpers.js                      # Pre-built
    data/
      listings.js                   # Pre-built
      users.js                      # Pre-built
      reviews.js                    # Pre-built
      locations.js                  # Pre-built
      seed.js                       # Pre-built
```

---

**End of Module Breakdown**

This document provides the complete structure and content of all 9 modules in the Project React course curriculum.
