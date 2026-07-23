import { Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'

import Clients from './pages/Clients'
import Tasks from './pages/Tasks'

import AddClient from './pages/Client-Add'
import ComponentShowcase from './pages/ComponentShowcase'
import Login from './pages/Login/Login'
import { AuthHero } from './components/app/AuthHero'
import { AuthLayout } from './layouts/AuthLayout/AuthLayout'
import { ProtectedRoute, PublicRoute } from './guards'
import { Dashboard } from './pages/Dashboard'
import { AppLayout } from './layouts/AppLayout'
import { ROUTES } from './routes'

function App() {

  return (
    <Routes>

      {/* Public Routes */}

      <Route
        element={<PublicRoute />}
      >

        <Route
          element={
            <AuthLayout
              aside={<AuthHero />}
            />
          }
        >

          <Route
            path={ROUTES.AUTH.LOGIN}
            element={<Login />}
          />

        </Route>

      </Route>

      {/* Protected Routes */}

      <Route
        element={<ProtectedRoute />}
      >

        <Route
          element={<AppLayout />}
        >

          <Route
            path={ROUTES.APP.DASHBOARD}
            element={<Dashboard />}
          />

          <Route
            path={ROUTES.APP.CLIENTS}
            element={<Clients />}
          />

          <Route
            path={ROUTES.APP.ADD_CLIENT}
            element={<AddClient />}
          />

          <Route
            path={ROUTES.APP.TASKS}
            element={<Tasks />}
          />

          <Route
            path={ROUTES.APP.COMPONENT_SHOWCASE}
            element={<ComponentShowcase />}
          />

        </Route>

      </Route>

      {/* TODO: Add 404 page */}

      <Route
        path="*"
        element={
          <Navigate to={ROUTES.AUTH.LOGIN} replace />
        }
      />

    </Routes>
  )
}

export default App
