import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/index.css";
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { AppProviders } from './providers/AppProviders.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProviders>
        <App />
      </AppProviders>
    </BrowserRouter>
  </React.StrictMode>,
)
