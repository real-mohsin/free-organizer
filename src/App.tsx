import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Dashboard from './Dashboard'
import Clients from './Clients'
import Tasks from './Tasks'
import Login from './Login'
import AddClient from './Client-Add'


function App() {

  return (
    <Routes>
      <Route path='dashboard' element={ <Dashboard /> } />
      <Route path='clients' element={ <Clients /> } />
      <Route path='add-client' element={ <AddClient /> } />
      <Route path='tasks' element={ <Tasks /> } />
      <Route path='login' element={ <Login /> } />
      {/* NO MATCH PATH */}
      <Route path='*' element={ <Login /> } />
    </Routes>
  )
}

export default App
