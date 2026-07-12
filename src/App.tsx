import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import Tasks from './pages/Tasks'

import AddClient from './pages/Client-Add'
import ComponentShowcase from './pages/ComponentShowcase'
import Login from './pages/Login/Login'
import { AuthHero } from './components/app/AuthHero'
import { AuthLayout } from './layouts/AuthLayout/AuthLayout'


function App() {

  return (
    <Routes>
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='clients' element={<Clients />} />
      <Route path='add-client' element={<AddClient />} />
      <Route path='tasks' element={<Tasks />} />

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
      <Route path="componentshowcase" element={<ComponentShowcase />} />
      {/* NO MATCH PATH and Add 404 Not Found Page here */}
      <Route path='*' element={<Login />} />
    </Routes>
  )
}

export default App
