import React from 'react'

const Song = ({currentSong}) => {
    return (
        <div className="song-container">
            <img src={currentSong.cover} alt={currentSong.name} className="unselectable" />
            <h2 className="unselectable">{currentSong.name}</h2>
            <h3 className="unselectable">{currentSong.artist}</h3>
        </div>
    )
}

export default Song
