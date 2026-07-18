# Route Guards

Route Guards control access to application routes based on the user's authentication state.

They keep authentication logic separate from page components and make routing behavior consistent throughout the application.

---

## Available Guards

### ProtectedRoute

Restricts access to authenticated users only.

If the user is not authenticated, they are redirected to the login page.

### PublicRoute

Restricts access to unauthenticated users only.

If the user is already authenticated, they are redirected to the dashboard.

---

## Responsibilities

Route Guards are responsible for:

- Protecting routes based on authentication state.
- Redirecting users when access is not permitted.
- Rendering nested routes through React Router's `Outlet`.

Route Guards are **not** responsible for:

- Authentication logic
- API requests
- Session management
- User interface
- Business logic

These responsibilities belong to the authentication service and provider.

---

## Project Structure

```text
guards/
├── ProtectedRoute.tsx
├── PublicRoute.tsx
├── index.ts
└── README.md
```

---

## Example

```tsx
<Route element={<ProtectedRoute />}>

    <Route
        path="/dashboard"
        element={<Dashboard />}
    />

    <Route
        path="/clients"
        element={<Clients />}
    />

</Route>
```

```tsx
<Route element={<PublicRoute />}>

    <Route
        path="/login"
        element={<Login />}
    />

    <Route
        path="/register"
        element={<Register />}
    />

</Route>
```

---

## Design Principles

The Route Guards follow the project's architectural principles:

- Single Responsibility Principle (SRP)
- Separation of Concerns
- Composition over conditional rendering
- Framework-agnostic business logic
- Small, focused, and reusable components

Each guard has one responsibility:

- **ProtectedRoute** determines whether a protected route can be accessed.
- **PublicRoute** determines whether a public route can be accessed.

Keeping these responsibilities separate improves readability, maintainability, and scalability.