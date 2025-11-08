---
title: "Module 7 Creation Progress"
description: "Summary of M7 lessons created and remaining work"
---

# Module 7: Forms & Authentication - Progress Report

**Status:** Lessons 1-3 Complete | Lessons 4-16 Framework Ready

## Completed Work

### ✅ Module Index (index.mdx)
- Comprehensive overview with 5-6 hour time estimate
- 4 learning phases clearly defined
- Authentication flow diagram
- Security best practices explained
- All 16 lessons outlined
- Prerequisites and technologies listed

### ✅ Lesson 1: Create AuthProvider Component
**File:** `lesson-1.mdx` (~550 lines)

**Content:**
- Context API explanation (3 accordions)
- Three-part pattern (Context, Provider, Hook)
- Complete AuthProvider implementation
- State management (user, token, isLoading)
- Placeholder functions (signIn, signOut)
- Understanding tabs (4 sections)
- Testing instructions

**Key Concepts:**
- createContext, useContext, useState
- Custom hook pattern (useAuth)
- Error handling for provider misuse
- Why `undefined` as default context value

### ✅ Lesson 2: Add AuthProvider to App
**File:** `lesson-2.mdx` (~450 lines)

**Content:**
- Wrapping order explanation (3 accordions)
- Updated App.jsx with AuthProvider
- Component hierarchy visualization
- Why AuthProvider outside BrowserRouter
- Provider composition pattern
- Testing integration steps
- Common mistakes (3 tabs)

**Key Concepts:**
- Provider wrapping order
- Global context access
- Component composition
- Testing with console.log

### ✅ Lesson 3: Fetch Access Token on Mount
**File:** `lesson-3.mdx` (~650 lines)

**Content:**
- Token refresh concept (3 accordions)
- Access vs Refresh tokens explained
- useEffect with async function pattern
- Try-catch-finally error handling
- Complete token fetch implementation
- API call structure
- Loading state flow diagram
- Common issues (3 tabs)

**Key Concepts:**
- Session restoration
- HTTP-only cookies security
- useEffect on mount (empty array)
- Token refresh endpoint
- Why finally block is critical

## Remaining Lessons Framework

### Phase 1 Completion: Lesson 4
**L4: Hide Navbar When Not Signed In**

**Content to create:**
- Conditional rendering based on auth state
- Loading spinner while checking session
- Updated Navbar component
- UX considerations

**Code pattern:**
```jsx
const { user, isLoading } = useAuth();

if (isLoading) return <Spinner />;
if (!user) return null;  // or redirect

return <Navbar />;
```

### Phase 2: Sign In Page & Form (L5-L8)

**L5: Create SignInPage Component**
- Page layout
- Centered form container
- Error message display
- Navigation after success

**L6: Add SignInPage to Router**
- New route `/sign-in`
- Route configuration
- Public route (no auth required)

**L7: Create SignInForm Component**
- React Hook Form setup
- Zod validation schema
- Form fields (email, password)
- Submit handling
- Error display

**L8: Add SignInForm to SignInPage**
- Form integration
- Props passing
- Error handling
- Success callback

### Phase 3: Form Handling & Tokens (L9-L12)

**L9: Handle SignInForm Submission**
- Form onSubmit handler
- Validation before submission
- API call to sign-in endpoint
- Update auth state

**L10: Enable Authentication and Sign In**
- Environment variable setup
- Backend authentication enabled
- Test sign-in flow
- Verify token storage

**L11: Add User Token to All Requests**
- Axios request interceptor
- Authorization header
- Bearer token format
- Automatic token inclusion

**L12: Refresh Token When Expired**
- Axios response interceptor
- 401 error handling
- Automatic token refresh
- Retry failed request

### Phase 4: Protected Routes & Sign Out (L13-L16)

**L13: Create Route Component**
- Route guard component
- Auth check logic
- Redirect to sign-in
- Loading state handling

**L14: Update All Routes with Protection**
- Wrap routes with Route component
- `requiresAuth` prop
- Protected vs public routes
- Route configuration

**L15: Redirect to Home When Signed In**
- Check if already signed in
- Redirect from sign-in page
- Navigate to home
- UX improvement

**L16: Create Sign Out Button in Navbar**
- Sign out button UI
- Call signOut function
- Clear auth state
- Redirect to sign-in
- Complete auth cycle

## Lesson Template Pattern

Each lesson follows this structure:

```mdx
---
title: "L{N}: {Title}"
description: "{Brief description}"
---

# {Title}

Introduction paragraph with emoji 🎯

## Why This Matters
Context and motivation

## Understanding {Concept}
<Accordions> with 2-3 deep-dive explanations

## Implementation
Code blocks with title attributes

## Understanding the Code
<Tabs> with 3-4 explanation perspectives

## Testing
<Steps> for verification

## Common Issues
<Tabs> with problem/solution pairs

## What's Next?
Preview of next lesson

<Callout type="success">
✅ Lesson Complete message
</Callout>

## Key Takeaways
Bullet list of 5-7 main points
```

## Code Patterns to Implement

### React Hook Form Pattern
```jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Min 6 characters'),
});

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    // Handle submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
    </form>
  );
}
```

### Protected Route Pattern
```jsx
function Route({ children, requiresAuth = false }) {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Spinner />;
  
  if (requiresAuth && !user) {
    return <Navigate to="/sign-in" replace />;
  }
  
  if (!requiresAuth && user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
```

### Axios Interceptors Pattern
```jsx
// Request interceptor (add token)
api.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor (handle 401)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Try refresh token
      const newToken = await refreshToken();
      // Retry original request
      error.config.headers.Authorization = `Bearer ${newToken}`;
      return api.request(error.config);
    }
    return Promise.reject(error);
  }
);
```

## File Structure

```
content/docs/react/m7/
├── index.mdx          ✅ Complete
├── lesson-1.mdx       ✅ Complete
├── lesson-2.mdx       ✅ Complete
├── lesson-3.mdx       ✅ Complete
├── lesson-4.mdx       ⏳ To create
├── lesson-5.mdx       ⏳ To create
├── lesson-6.mdx       ⏳ To create
├── lesson-7.mdx       ⏳ To create
├── lesson-8.mdx       ⏳ To create
├── lesson-9.mdx       ⏳ To create
├── lesson-10.mdx      ⏳ To create
├── lesson-11.mdx      ⏳ To create
├── lesson-12.mdx      ⏳ To create
├── lesson-13.mdx      ⏳ To create
├── lesson-14.mdx      ⏳ To create
├── lesson-15.mdx      ⏳ To create
├── lesson-16.mdx      ⏳ To create
└── meta.json          ⏳ To update
```

## Meta.json Update Needed

```json
{
  "title": "M7: Forms & Authentication",
  "pages": [
    "index",
    "lesson-1",
    "lesson-2",
    "lesson-3",
    "lesson-4",
    "lesson-5",
    "lesson-6",
    "lesson-7",
    "lesson-8",
    "lesson-9",
    "lesson-10",
    "lesson-11",
    "lesson-12",
    "lesson-13",
    "lesson-14",
    "lesson-15",
    "lesson-16"
  ]
}
```

## Estimated Completion Time

**Completed:** ~1,650 lines (3 lessons)
**Remaining:** ~5,850 lines (13 lessons)
**Total:** ~7,500 lines for complete Module 7

**Time breakdown:**
- Phase 1 (L4): ~450 lines, 30 min
- Phase 2 (L5-L8): ~1,800 lines, 2 hours
- Phase 3 (L9-L12): ~1,800 lines, 2 hours
- Phase 4 (L13-L16): ~1,800 lines, 2 hours

**Total time to complete:** ~6.5 hours

## Quality Standards Maintained

✅ **MDX Formatting:**
- Code blocks with `title` attribute
- Blank lines around code blocks
- No inline code in JSX components
- Proper component nesting

✅ **Educational Components:**
- Accordions for deep explanations
- Tabs for different perspectives
- Steps for sequential instructions
- Callouts for important notes

✅ **Comprehensive Coverage:**
- Why questions answered
- Real-world context provided
- Common mistakes addressed
- Testing instructions included

✅ **Code Quality:**
- Complete working examples
- Commented code
- Good/bad patterns shown
- Security best practices

## Next Steps

To complete Module 7:

1. **Create L4** - Hide Navbar (phase 1 complete)
2. **Create L5-L8** - Sign-in page and form setup
3. **Create L9-L12** - Form handling and token management
4. **Create L13-L16** - Protected routes and sign-out
5. **Update meta.json** - Add all lessons to navigation
6. **Verify build** - Ensure all 16 lessons compile
7. **Test navigation** - Verify lesson flow works

## Resources for Remaining Lessons

**React Hook Form:**
- https://react-hook-form.com/
- Form validation patterns
- Error handling

**Zod:**
- https://zod.dev/
- Schema validation
- Type inference

**JWT Best Practices:**
- Token storage security
- Refresh token rotation
- XSS/CSRF protection

**Axios Interceptors:**
- Request/response interception
- Error handling
- Token injection

---

**Status:** Foundation complete (20%)  
**Ready for:** Phase 2 implementation  
**Estimated completion:** 6.5 hours remaining
