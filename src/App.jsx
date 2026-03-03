import { useState } from 'react'
import backVideo from './assets/video/space.mp4'

function App() {

  return (
    <>
      <div className='main'>
        <header className='header'>
          <nav className='navbar'>
            <a className='item px-6 text-white hidden ' href="/">About</a>
            <a className='item px-6 text-white ' href="/">Contact</a>
            <a className='item px-6 text-white ' href="/">Projects</a>
          </nav>
          <i class="fa-solid fa-bars"></i>
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