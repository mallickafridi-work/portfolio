import { useState } from 'react'

function App() {

  return (
    <>
      <div className='main'>
        <header className='header'>
          <nav className='navbar'>
            <div className="item"><a href="/" className="about"> About </a></div>
            <div className="item"><a href="/" className="contact"> Contact </a></div>
            <div className="item"><a href="/" className="projects"> Projects </a></div>
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