import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { albums } from './data'
import Album from './Album'
import './css/Album.css';

function App() {


  return (
    <div>
      <Header />
      <div className='album-main'>
        {
          albums?.map((album) => (
            <Album key={album.id} album={album} />
          ))
        }
      </div>
    </div>

  )
}

export default App
