import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routers/Routers.jsx'
import AuthProviders from './Components/Pages/Providers/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </AuthProviders>
)
