import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import Tasks from './pages/Tasks'
import Login from './pages/Login'
import AddClient from './pages/Client-Add'
import ComponentShowcase from './pages/ComponentShowcase'


function App() {

  return (
    <Routes>
      <Route path='dashboard' element={ <Dashboard /> } />
      <Route path='clients' element={ <Clients /> } />
      <Route path='add-client' element={ <AddClient /> } />
      <Route path='tasks' element={ <Tasks /> } />
      <Route path='login' element={ <Login /> } />
      <Route path="componentshowcase" element={<ComponentShowcase />} />
      {/* NO MATCH PATH and Add 404 Not Found Page here */}
      <Route path='*' element={ <Login /> } /> 
    </Routes>
  )
}

export default App
