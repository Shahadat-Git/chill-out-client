import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import ChefsProvider from './providers/ChefsProvider'
import AuthProvider from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ChefsProvider>
        <RouterProvider router={router}>

        </RouterProvider>
      </ChefsProvider>
    </AuthProvider>
  </React.StrictMode>,
)
