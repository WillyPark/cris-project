import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/app.scss'
import { Router } from './router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
