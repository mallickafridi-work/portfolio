import { useState, useEffect, use } from 'react'
import backVideo from './assets/video/space.mp4'
import Header from './components/Header'
import Content from './components/Content'

function App() {

  return (
    <>
      <video autoPlay loop muted playsInline className="back-video" src={backVideo}></video>
      <div className='main'>
        <Header />
        <Content />

        <footer className='my-10 footer'>
          <div>
            mallickafridi.work@gmail.com
          </div> </footer>

      </div>
    </>
  )
}

export default App