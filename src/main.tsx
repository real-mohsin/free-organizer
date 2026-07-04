import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'



import "./styles/index.css";

import { SettingsProvider } from './context/SettingsProvider.tsx';

import './index.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
