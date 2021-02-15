import React, {useState, useRef} from 'react'
import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'
import Nav from './components/Nav'
import './styles/app.scss'
import data from './data'

function App() {
  // Refs
  const audioRef = useRef(null)

  // States
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: '',
    duration: ''
  })
  const [libraryStatus, setLibraryStatus] = useState(false)

  // Handlers
  const playSongHandler = () => {
    if(isPlaying){
        audioRef.current.pause()
        setIsPlaying(!isPlaying)
    }else{
        audioRef.current.play()
        setIsPlaying(!isPlaying)
    }
  }
  const songInfoChangeHandler = (e) => {
    const current=e.target.currentTime
    const duration=e.target.duration
    setSongInfo({...songInfo, currentTime: current, duration})
  }
  
  // Render
  return (
    <div className="user-select-none">
      <Nav 
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus} />

      <Song currentSong = {currentSong} />
      
      <Player 
        songs={songs}
        currentSong={currentSong}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying} 
        playSongHandler={playSongHandler} 
        audioRef={audioRef} 
        songInfoChangeHandler={songInfoChangeHandler}
        songInfo={songInfo}
        setSongInfo={setSongInfo} />

      <Library 
        songs={songs} 
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus} />

      <audio 
        onTimeUpdate={songInfoChangeHandler} // invoked when we play/pause
        onLoadedMetadata={songInfoChangeHandler} // invoked when we first load the song/page
        ref={audioRef} 
        src={currentSong.audio} />

    </div>
  );
}

export default App;
