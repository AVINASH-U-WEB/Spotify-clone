import React, { useContext, useRef } from 'react'
import Display from './compoenents/Display'
import Player from './compoenents/Player'
import Sidebar from './compoenents/Sidebar'
import { PlayerContext }from './context/PlayerContext'

const App = () => {
  const {audioRef,track}=useContext(PlayerContext)

  const seekBg=useRef()
  const seekBar= useRef()
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player />
      <audio  ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}


export default App