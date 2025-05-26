import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Apply global CSS to prevent horizontal scrolling
const style = document.createElement('style')
style.textContent = `
  html, body {
    overflow-x: hidden;
    width: 100%;
    position: relative;
  }
`
document.head.appendChild(style)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
