# API & Data Architecture Analysis
## Project React - Mock Backend & Data Flow System

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Mock API Architecture](#mock-api-architecture)
3. [Data Models](#data-models)
4. [Authentication System](#authentication-system)
5. [API Endpoints](#api-endpoints)
6. [Data Seeding](#data-seeding)
7. [Request/Response Flow](#requestresponse-flow)
8. [Error Handling](#error-handling)
9. [Real Backend Migration Guide](#real-backend-migration-guide)

---

## 🎯 Overview

Project React includes a sophisticated **mock API system** that simulates a real backend without requiring an actual server. This approach allows students to:

- Learn real API integration patterns
- Work with async operations
- Handle authentication flows
- Manage loading/error states
- Use production-like code

All while avoiding backend complexity and deployment challenges.

### Technology Stack

```
┌─────────────────────────────────────────┐
│         React Application                │
└──────────────┬──────────────────────────┘
               │ (HTTP Requests)
               ▼
┌─────────────────────────────────────────┐
│            Axios Client                  │
└──────────────┬──────────────────────────┘
               │ (Intercepted)
               ▼
┌─────────────────────────────────────────┐
│      Axios Mock Adapter                  │
│   (Simulates Network Delay: 1s)         │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│        API Handler Functions             │
│  (listings.js, users.js, etc.)          │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│      localStorage "Database"             │
│    (JSON data structure)                 │
└─────────────────────────────────────────┘
```

---

## 🏗️ Mock API Architecture

### Core Files

```
src/api/
├── index.js           # Axios setup + mock adapter configuration
├── helpers.js         # JWT tokens, auth utilities
├── listings.js        # Listing CRUD operations
├── locations.js       # Location queries
├── reviews.js         # Review queries
├── users.js           # User auth operations
└── data/
    ├── seed.js        # Database initialization
    ├── listings.js    # Static listing data
    ├── locations.js   # Static location data
    ├── reviews.js     # Static review data
    └── users.js       # Static user data
```

### API Index (src/api/index.js)

**Purpose:** Central configuration for HTTP client and mock responses

```javascript
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// 1. Create base axios instance
const api = axios.create({
  baseURL: env.BASE_URL,  // e.g., 'http://localhost:5173'
});

// 2. Create mock adapter with 1-second delay
const adapter = new MockAdapter(api, { 
  delayResponse: 1000  // Simulates network latency
});

// 3. Define mock endpoints
adapter.onGet('/api/listings').reply(
  withAuth(async (config) => {
    // Handler logic
    const listings = getListings(config.params);
    return [200, listings];
  })
);

// 4. Export configured axios instance
export default api;
```

**Key Features:**

1. **Network Simulation**
   - 1-second artificial delay
   - Simulates real API latency
   - Tests loading states

2. **Request Interception**
   - All axios requests intercepted
   - Routes to mock handlers
   - No actual network calls

3. **Authentication Wrapper**
   - `withAuth()` HOF validates tokens
   - Returns 401 if missing/invalid
   - Injects user context

---

## 📊 Data Models

### Database Structure (localStorage)

```javascript
// localStorage key: 'project-react-db'
{
  listings: [
    {
      id: 1,
      name: "Cozy Apartment",
      description: "Beautiful apartment in city center",
      locationId: 1,
      images: ["url1.jpg", "url2.jpg"],
      availability: {
        from: "2024-01-01",
        to: "2024-12-31"
      },
      maxGuests: 4,
      price: 120,
      rating: 4.5,
      guestFavorite: true,
      userId: 1,
      createdAt: "2024-01-01T00:00:00Z",
      modifiedAt: "2024-01-01T00:00:00Z"
    },
    // ... more listings
  ],
  
  locations: [
    {
      id: 1,
      name: "Paris",
      country: "France",
      latitude: 48.8566,
      longitude: 2.3522
    },
    // ... more locations
  ],
  
  users: [
    {
      id: 1,
      email: "user@example.com",
      password: "password123",  // Plain text in mock (never do in production!)
      name: "John Doe",
      avatar: "avatar-url.jpg",
      createdAt: "2024-01-01T00:00:00Z"
    },
    // ... more users
  ],
  
  reviews: [
    {
      id: 1,
      listingId: 1,
      userId: 2,
      rating: 5,
      comment: "Amazing place!",
      createdAt: "2024-01-15T00:00:00Z"
    },
    // ... more reviews
  ]
}
```

### Entity Relationships

```
┌──────────┐
│  Users   │
└─────┬────┘
      │ 1
      │
      │ n
┌─────▼────────┐         ┌──────────────┐
│   Listings   │─────────│  Locations   │
└─────┬────────┘    n:1  └──────────────┘
      │ 1
      │
      │ n
┌─────▼────────┐
│   Reviews    │
└──────────────┘
```

**Relationships:**
- User **has many** Listings (owner)
- User **has many** Reviews (author)
- Listing **belongs to** Location
- Listing **has many** Reviews
- Review **belongs to** User
- Review **belongs to** Listing

---

## 🔐 Authentication System

### JWT Token Architecture

**Two-Token System:**
1. **Refresh Token** (Long-lived)
   - Stored in cookie
   - Contains user ID
   - Never sent in requests
   - Used only to generate access tokens

2. **Access Token** (Short-lived)
   - Stored in memory (React state)
   - Contains refresh token as payload
   - Sent with every request
   - Expires quickly (requires refresh)

### Authentication Flow

```
┌─────────────────────────────────────────────────────────┐
│  Step 1: Sign In                                         │
├─────────────────────────────────────────────────────────┤
│  POST /api/signin                                        │
│  Body: { email: "user@example.com", password: "pass" }  │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Step 2: Validate Credentials                            │
├─────────────────────────────────────────────────────────┤
│  - Find user by email                                    │
│  - Check password (plain text in mock)                   │
│  - If valid, continue                                    │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Step 3: Generate Refresh Token                          │
├─────────────────────────────────────────────────────────┤
│  const refreshToken = await generateRefreshToken(userId) │
│                                                           │
│  Payload: { data: userId, exp: 30 days }                │
│  Signed with: SECRET_KEY                                 │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Step 4: Store Refresh Token in Cookie                   │
├─────────────────────────────────────────────────────────┤
│  Cookies.set('refreshToken', refreshToken)               │
│  (Would be httpOnly + secure in production)              │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Step 5: Generate Access Token                           │
├─────────────────────────────────────────────────────────┤
│  const accessToken =                                     │
│    await generateAccessToken(refreshToken)               │
│                                                           │
│  Payload: { data: refreshToken, exp: 15 min }           │
│  Signed with: SECRET_KEY                                 │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Step 6: Return to Client                                │
├─────────────────────────────────────────────────────────┤
│  Response: {                                             │
│    accessToken: "eyJhbGc...",                            │
│    user: { id, email, name, avatar }                     │
│  }                                                        │
└─────────────────────────────────────────────────────────┘
```

### Token Helpers (src/api/helpers.js)

```javascript
import { SignJWT, jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(
  'your-secret-key-here'
);

// Generate refresh token (30 days)
export const generateRefreshToken = async (userId) => {
  return await new SignJWT({ data: userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('30d')
    .sign(SECRET_KEY);
};

// Generate access token (15 minutes)
export const generateAccessToken = async (refreshToken) => {
  return await new SignJWT({ data: refreshToken })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('15m')
    .sign(SECRET_KEY);
};

// Verify token
export const verifyToken = async (token, options = {}) => {
  try {
    const verified = await jwtVerify(token, SECRET_KEY);
    return options.returnPayload ? verified.payload : true;
  } catch (error) {
    return false;
  }
};

// Clean user data (remove password)
export const cleanUser = (user) => {
  const { password, ...cleanedUser } = user;
  return cleanedUser;
};

// Auth wrapper for endpoints
export const withAuth = (handler) => async (config) => {
  const token = config.headers.Authorization?.split(' ')[1];
  
  if (!token) {
    return [401, { message: 'Unauthorized' }];
  }
  
  const isValid = await verifyToken(token);
  if (!isValid) {
    return [401, { message: 'Invalid token' }];
  }
  
  return handler(config);
};
```

### Token Storage Strategy

**Why Memory Storage?**

```javascript
// ❌ INSECURE: localStorage
localStorage.setItem('token', accessToken);  // Vulnerable to XSS

// ✅ SECURE: React state (memory)
const [accessToken, setAccessToken] = useState(null);
```

**Benefits:**
- Not accessible to JavaScript
- Cleared on page reload
- XSS attack prevention
- Must refresh on every session

**Trade-offs:**
- User must re-authenticate on refresh
- Requires refresh token mechanism
- More complex implementation

---

## 🔗 API Endpoints

### Listings API

#### GET /api/listings

**Purpose:** Fetch all listings with optional filters

**Query Parameters:**
```javascript
{
  search: string,           // Search in listing name
  location: number,         // Filter by location ID
  dates: {                  // Filter by availability
    from: Date,
    to: Date
  },
  guests: number,           // Filter by max guests
  favorites: boolean        // Show only favorites
}
```

**Response:**
```javascript
[
  {
    id: 1,
    name: "Cozy Apartment",
    description: "...",
    location: {              // Joined data
      id: 1,
      name: "Paris",
      country: "France"
    },
    images: ["url1.jpg"],
    availability: { from: "...", to: "..." },
    maxGuests: 4,
    price: 120,
    rating: 4.5,
    guestFavorite: true,
    userId: 1
  },
  // ... more listings
]
```

**Implementation:**
```javascript
// src/api/listings.js

export const getListings = (filters = {}) => {
  const db = getItem(env.DB_KEY);
  let listings = db.listings;

  // Filter by search
  if (filters.search) {
    listings = listings.filter(listing =>
      listing.name.toLowerCase().includes(filters.search.toLowerCase())
    );
  }

  // Filter by location
  if (filters.location) {
    listings = listings.filter(listing =>
      listing.locationId === parseInt(filters.location)
    );
  }

  // Filter by dates
  if (filters.dates) {
    listings = listings.filter(listing =>
      isListingAvailable(listing, filters.dates)
    );
  }

  // Filter by guests
  if (filters.guests) {
    listings = listings.filter(listing =>
      listing.maxGuests >= parseInt(filters.guests)
    );
  }

  // Filter favorites
  if (filters.favorites) {
    listings = listings.filter(listing =>
      listing.guestFavorite === true
    );
  }

  return listings;
};
```

#### GET /api/listings/:id

**Purpose:** Fetch single listing by ID

**Response:**
```javascript
{
  id: 1,
  name: "Cozy Apartment",
  location: { /* location data */ },
  // ... all listing fields
}
```

**Error Cases:**
- 404: Listing not found
- 404: Location not found (for listing's location)

#### POST /api/listings

**Purpose:** Create new listing

**Request Body:**
```javascript
{
  name: string,
  description: string,
  locationId: number,
  images: string[],
  availability: {
    from: Date,
    to: Date
  },
  maxGuests: number,
  price: number,
  rating: number,
  guestFavorite: boolean,
  userId: number
}
```

**Response:**
```javascript
{
  id: 123,  // Auto-generated
  // ... all submitted fields
  createdAt: "2024-01-01T00:00:00Z",
  modifiedAt: "2024-01-01T00:00:00Z"
}
```

### Reviews API

#### GET /api/reviews

**Purpose:** Fetch reviews for a listing

**Query Parameters:**
```javascript
{
  listingId: number  // Required
}
```

**Response:**
```javascript
[
  {
    id: 1,
    listingId: 1,
    user: {           // Joined user data
      id: 2,
      name: "Jane Doe",
      avatar: "avatar.jpg"
    },
    rating: 5,
    comment: "Amazing place!",
    createdAt: "2024-01-15T00:00:00Z"
  },
  // ... more reviews
]
```

### Authentication API

#### POST /api/signin

**Purpose:** Authenticate user and return tokens

**Request Body:**
```javascript
{
  email: string,
  password: string
}
```

**Response (Success):**
```javascript
{
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  user: {
    id: 1,
    email: "user@example.com",
    name: "John Doe",
    avatar: "avatar.jpg"
  }
}
```

**Response (Failure):**
```javascript
// 401 Unauthorized
{
  message: "Invalid credentials"
}
```

#### POST /api/signout

**Purpose:** Sign out user (clear cookies)

**Response:**
```javascript
// 200 OK (no body)
```

#### GET /api/me

**Purpose:** Get current authenticated user

**Headers:**
```javascript
{
  Authorization: "Bearer <accessToken>"
}
```

**Response:**
```javascript
{
  accessToken: "eyJ...",  // Same token
  user: {
    id: 1,
    email: "user@example.com",
    name: "John Doe",
    avatar: "avatar.jpg"
  }
}
```

**Error:**
```javascript
// 403 Forbidden
{
  message: "Unauthorized"
}
```

#### GET /api/refreshToken

**Purpose:** Refresh expired access token

**Cookies:**
```javascript
refreshToken=eyJ...
```

**Response:**
```javascript
{
  accessToken: "eyJ...",  // New access token
  user: { /* user data */ }
}
```

**Error:**
```javascript
// 403 Forbidden
{
  message: "Invalid refresh token"
}
```

---

## 🌱 Data Seeding

### Seed Process (src/api/data/seed.js)

**When:** On application startup (main.jsx)

```javascript
import { seedLocalDatabase } from '@/api/data/seed';

seedLocalDatabase();
```

**Logic:**
```javascript
export const seedLocalDatabase = () => {
  const database = getItem(env.DB_KEY);

  // Check if database exists
  if (database) {
    return;  // Already seeded
  }

  // Import static data
  import { listings } from './listings';
  import { locations } from './locations';
  import { users } from './users';
  import { reviews } from './reviews';

  // Create initial database
  const initialDatabase = {
    listings,
    locations,
    users,
    reviews,
  };

  // Store in localStorage
  setItem(env.DB_KEY, initialDatabase);
};
```

**Why Seed Data?**
1. **Immediate Content**: Students see data without backend setup
2. **Consistent Experience**: Everyone has same starting data
3. **Testing**: Predictable data for demonstrations
4. **Offline Support**: Works without internet

### Sample Data Structure

**Listings (src/api/data/listings.js):**
```javascript
import { addDays, startOfDay } from 'date-fns';

const startOfToday = startOfDay(new Date());

export const listings = [
  {
    id: 1,
    name: "Modern Loft in Downtown",
    description: "Spacious loft with city views...",
    locationId: 1,
    images: [
      "listing-1-1.jpg",
      "listing-1-2.jpg",
      "listing-1-3.jpg"
    ],
    availability: {
      from: startOfToday,
      to: addDays(startOfToday, 365)
    },
    maxGuests: 4,
    price: 150,
    rating: 4.8,
    guestFavorite: true,
    userId: 1
  },
  // ... 20+ more listings
];
```

**Users (src/api/data/users.js):**
```javascript
export const users = [
  {
    id: 1,
    email: "user@react.io",
    password: "user123",  // Plain text (mock only!)
    name: "Demo User",
    avatar: "avatar-1.jpg"
  },
  {
    id: 2,
    email: "admin@react.io",
    password: "admin123",
    name: "Admin User",
    avatar: "avatar-2.jpg"
  },
  // ... more users
];
```

---

## 🔄 Request/Response Flow

### Example: Fetching Listings with Filters

```
┌──────────────────────────────────────────────────────┐
│  Step 1: Component Makes Request                      │
├──────────────────────────────────────────────────────┤
│                                                        │
│  import api from '@/api';                             │
│                                                        │
│  const fetchListings = async () => {                 │
│    const response = await api.get('/api/listings', { │
│      params: {                                        │
│        search: 'apartment',                           │
│        location: 1,                                   │
│        guests: 2                                      │
│      }                                                │
│    });                                                │
│    return response.data;                              │
│  };                                                   │
└────────────────────┬─────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────────────┐
│  Step 2: Axios Processes Request                      │
├──────────────────────────────────────────────────────┤
│  - Builds URL: http://localhost:5173/api/listings   │
│  - Attaches query params                              │
│  - Adds headers (Authorization if exists)            │
└────────────────────┬─────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────────────┐
│  Step 3: Mock Adapter Intercepts                      │
├──────────────────────────────────────────────────────┤
│  - Matches route: GET /api/listings                  │
│  - Delays 1000ms (simulates network)                 │
│  - Calls handler function                             │
└────────────────────┬─────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────────────┐
│  Step 4: withAuth Validates Token                     │
├──────────────────────────────────────────────────────┤
│  - Extracts Authorization header                      │
│  - Verifies JWT token                                │
│  - If invalid: return [401, { message: '...' }]      │
│  - If valid: continue                                 │
└────────────────────┬─────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────────────┐
│  Step 5: Handler Processes Request                    │
├──────────────────────────────────────────────────────┤
│  adapter.onGet('/api/listings').reply(               │
│    withAuth(async (config) => {                      │
│      const params = config.params;                   │
│      const listings = getListings(params);           │
│                                                       │
│      // Join location data                            │
│      const enriched = listings.map(listing => ({     │
│        ...listing,                                    │
│        location: getLocationById(listing.locationId) │
│      }));                                             │
│                                                       │
│      return [200, enriched];                          │
│    })                                                 │
│  );                                                   │
└────────────────────┬─────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────────────┐
│  Step 6: getListings Filters Data                     │
├──────────────────────────────────────────────────────┤
│  - Load from localStorage                             │
│  - Filter by search: 'apartment'                     │
│  - Filter by location: 1                              │
│  - Filter by guests: >= 2                            │
│  - Return filtered array                              │
└────────────────────┬─────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────────────┐
│  Step 7: Response Returned                            │
├──────────────────────────────────────────────────────┤
│  [                                                    │
│    {                                                  │
│      id: 1,                                           │
│      name: "Downtown Apartment",                     │
│      location: { id: 1, name: "Paris" },            │
│      maxGuests: 4,                                    │
│      // ... more fields                               │
│    },                                                 │
│    // ... more listings                               │
│  ]                                                    │
└────────────────────┬─────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────────────┐
│  Step 8: Component Receives Data                      │
├──────────────────────────────────────────────────────┤
│  const listings = await fetchListings();             │
│  setListings(listings);                               │
│  setLoading(false);                                   │
└──────────────────────────────────────────────────────┘
```

---

## ⚠️ Error Handling

### Error Response Format

```javascript
{
  message: string,  // Human-readable error
  code?: string,    // Machine-readable code (optional)
  details?: any     // Additional context (optional)
}
```

### Common Error Scenarios

#### 401 Unauthorized
```javascript
{
  message: "Unauthorized"
}
```

**When:**
- No token provided
- Invalid token
- Expired token

#### 403 Forbidden
```javascript
{
  message: "Invalid refresh token"
}
```

**When:**
- Refresh token invalid/expired
- User doesn't have permission

#### 404 Not Found
```javascript
{
  message: "Listing not found"
}
```

**When:**
- Resource doesn't exist
- Invalid ID

#### Client-Side Error Handling

```javascript
try {
  const response = await api.get('/api/listings');
  setListings(response.data);
} catch (error) {
  if (error.response) {
    // Server responded with error status
    const status = error.response.status;
    const message = error.response.data.message;
    
    if (status === 401) {
      // Redirect to login
      navigate('/signin');
    } else if (status === 404) {
      // Show not found message
      setError('Resource not found');
    } else {
      // Generic error
      setError(message || 'An error occurred');
    }
  } else if (error.request) {
    // Request made but no response
    setError('Network error');
  } else {
    // Something else happened
    setError('An unexpected error occurred');
  }
}
```

---

## 🔄 Real Backend Migration Guide

### Step 1: Replace Mock Adapter

**Before (Mock):**
```javascript
// src/api/index.js
import MockAdapter from 'axios-mock-adapter';

const adapter = new MockAdapter(api, { delayResponse: 1000 });

adapter.onGet('/api/listings').reply(async (config) => {
  const listings = getListings(config.params);
  return [200, listings];
});
```

**After (Real API):**
```javascript
// src/api/index.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.yourbackend.com',  // Real backend URL
});

// Add request interceptor for auth
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Try to refresh token
      const newToken = await refreshAccessToken();
      if (newToken) {
        // Retry original request
        error.config.headers.Authorization = `Bearer ${newToken}`;
        return api.request(error.config);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
```

### Step 2: Remove Local Data Files

```bash
# Delete mock data
rm -rf src/api/data/
rm src/api/listings.js
rm src/api/locations.js
rm src/api/reviews.js
rm src/api/users.js
rm src/api/helpers.js
```

### Step 3: Keep API Client Usage

**No changes needed in components!**

```javascript
// Component code stays the same
const fetchListings = async () => {
  const response = await api.get('/api/listings', {
    params: { search: 'apartment' }
  });
  return response.data;
};
```

### Step 4: Update Environment Variables

```bash
# .env.production
VITE_BASE_URL=https://api.yourbackend.com
VITE_USE_AUTH=true
```

### Step 5: Implement Real Authentication

**Backend Requirements:**
- JWT token generation
- Token refresh endpoint
- Secure cookie storage
- Token validation middleware

**Frontend Changes:**
```javascript
// Minimal - just remove mock helpers
import { jwtDecode } from 'jwt-decode';

const storeToken = (token) => {
  // Store in memory or httpOnly cookie
  setAccessToken(token);
};

const getTokenPayload = (token) => {
  return jwtDecode(token);
};
```

---

## 📊 Performance Considerations

### Caching Strategy

```javascript
// Simple in-memory cache
const cache = new Map();

export const getCachedListings = async (params) => {
  const cacheKey = JSON.stringify(params);
  
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  
  const response = await api.get('/api/listings', { params });
  cache.set(cacheKey, response.data);
  
  // Clear cache after 5 minutes
  setTimeout(() => cache.delete(cacheKey), 5 * 60 * 1000);
  
  return response.data;
};
```

### Request Debouncing

```javascript
import { debounce } from 'lodash';

const debouncedSearch = debounce(async (query) => {
  const response = await api.get('/api/listings', {
    params: { search: query }
  });
  setResults(response.data);
}, 300);
```

### Request Cancellation

```javascript
const abortController = new AbortController();

const fetchListings = async () => {
  try {
    const response = await api.get('/api/listings', {
      signal: abortController.signal
    });
    setListings(response.data);
  } catch (error) {
    if (error.name === 'AbortError') {
      // Request was cancelled
      return;
    }
    throw error;
  }
};

// Cancel on unmount
useEffect(() => {
  return () => abortController.abort();
}, []);
```

---

## 🎓 Conclusion

The mock API system in Project React demonstrates:

✅ **Production Patterns**: Real API integration techniques  
✅ **Authentication Flow**: JWT-based auth with token refresh  
✅ **Error Handling**: Proper error responses and handling  
✅ **Data Management**: CRUD operations and filtering  
✅ **Easy Migration**: Minimal changes to move to real backend  

This architecture allows students to learn real-world API integration without the complexity of backend deployment, while writing code that's production-ready when they're ready to connect a real backend.

---

**Document Version**: 1.0  
**Last Updated**: October 26, 2025  
**Purpose**: Complete API & data architecture analysis

