import { useState } from 'react'
import backVideo from './assets/video/space.mp4'

function App() {

  return (
    <>
      <video autoPlay loop muted playsInline className="back-video" src={backVideo} />
      <div className='main'>
        <header className='header'>
          <nav className='navbar'>
            <a className='item px-6 text-white text-2xl' href="/">About</a>
            <a className='item px-6 text-white text-2xl' href="/">Contact</a>
            <a className='item px-6 text-white text-2xl' href="/">Projects</a>
          </nav>
        </header>
        <div className="navbar"></div>
        <div className="content-area">
          main content area
        </div>
        <footer className='footer'>FOOTER</footer>
      </div>
    </>
  )
}

export default App