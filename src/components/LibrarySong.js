import React from 'react'
import {audioPlayer} from '../util'

const LibrarySong = ({song, setCurrentSong, audioRef, isPlaying}) => {
    const songSelectHandler = () => {
        setCurrentSong(song)

        audioPlayer(isPlaying, audioRef)
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
