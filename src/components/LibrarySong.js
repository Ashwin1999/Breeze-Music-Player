import React from 'react'

const LibrarySong = ({song, setCurrentSong, audioRef, isPlaying}) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song)
        if(isPlaying) audioRef.current.play()
    }

    return (
        <div onClick={songSelectHandler} className={`library-song-container ${song.active?"selected":""}`}>
            <img src={song.cover} alt={song.name} className="unselectable" />

            <div className="song-description">
                <h3 className="unselectable">{song.name}</h3>
                <h4 className="unselectable">{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong
