import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <video autoPlay loop muted playsInline className="back-video" src='./src/assets/video/space.mp4'></video>
    <App />
  </StrictMode>,
)
