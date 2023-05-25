import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import ChefsProvider from './providers/ChefsProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChefsProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </ChefsProvider>
  </React.StrictMode>,
)
