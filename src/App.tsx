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
            path="/login"
            element={<Login />}
          />

        </Route>

      </Route>

      {/* Protected Routes */}

      <Route
        element={<ProtectedRoute />}
      >

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/clients"
          element={<Clients />}
        />

        <Route
          path="/add-client"
          element={<AddClient />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/componentshowcase"
          element={<ComponentShowcase />}
        />

      </Route>

      {/* TODO: Add 404 page */}

      <Route
        path="*"
        element={
          <Navigate to="/login" replace />
        }
      />

    </Routes>
  )
}

export default App
