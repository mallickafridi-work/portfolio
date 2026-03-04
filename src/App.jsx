import { useState, useEffect, use } from 'react'
import backVideo from './assets/video/space.mp4'

function App() {

  const [clicked, setClicked] = useState(false)
  const [active, setActive] = useState('')

  function handleClick() {
    clicked ? setClicked(false) : setClicked(true)
  }

  return (
    <>
      <video autoPlay loop muted playsInline className="back-video" src={backVideo}></video>
      <div className='main'>
        <header className='header'>

          <nav className={`nav-item navbar ${clicked ? 'active' : ''}`}>
            <a className='item px-6' href="/"> About </a>
            <a className='item px-6' href="/"> Contact </a>
            <a className='item px-6' href="/"> Projects </a>
          </nav>
          <div className="nav-item menu">
            {
              clicked ?
                <i className="fa-solid fa-x" type='button' onClick={handleClick}></i> :
                <i className="fa-solid fa-bars" type='button' onClick={handleClick}></i>
            }


          </div>
        </header>

        <div className="content-area">
          main content area
        </div>

        <footer className='footer'> FOOTER </footer>

      </div>
    </>
  )
}

export default App