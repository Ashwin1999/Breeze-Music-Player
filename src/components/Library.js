import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({songs, setSongs, setCurrentSong, audioRef, isPlaying, libraryStatus}) => {
    return (
        <div className={`library-container ${libraryStatus?"active-library":""}`}>
            <h1 className="unselectable">Library</h1>
            {songs.map((item) => (<LibrarySong 
                                    song={item}
                                    songs={songs}
                                    setSongs={setSongs}
                                    setCurrentSong={setCurrentSong}
                                    isPlaying={isPlaying}
                                    audioRef={audioRef} 
                                    key={item.id} />))}
        </div>
    )
}

export default Library
