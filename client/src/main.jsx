import { StrictMode, React } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import './assets/style.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
