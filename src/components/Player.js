import React, {useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({songs, currentSong, setSongs, setCurrentSong, isPlaying, playSongHandler, audioRef, songInfo, setSongInfo}) => {
    const dragChangeHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime:e.target.value})
    }

    const skipSongHandler = async (direction) => {
        const currentIndex = songs.findIndex((item)=>item.id===currentSong.id)
        if(direction==='forward'){
            await setCurrentSong(songs[(currentIndex+1)%songs.length])
            if(isPlaying) audioRef.current.play()
        }else if(direction==='backward'){
            await setCurrentSong(songs[(currentIndex===0)?(songs.length-1):((currentIndex-1)%songs.length)])
            if(isPlaying) audioRef.current.play()
        }
    }

    useEffect(()=>{
        const newSongs = songs.map((item)=>{
            if(item.id==currentSong.id){
                return {
                    ...item,
                    active: true
                }
            }else{
                return {
                    ...item,
                    active: false
                }
            }
        })

        setSongs(newSongs)
    },[currentSong])

    const formatTime = (time) =>{
        return (Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2))
    }

    return (
        <div className="player">
            <div className="time-control">
                <p className="unselectable">{formatTime(songInfo.currentTime)}</p>
                <input 
                min={0}
                max={songInfo.duration|0}
                value={songInfo.currentTime}
                onChange={dragChangeHandler}
                type="range" />
                <p className="unselectable">{formatTime(songInfo.duration-songInfo.currentTime)}</p>
            </div>

            <div className="play-control">
                <FontAwesomeIcon onClick={()=>{skipSongHandler('backward')}} className="skip-back" icon={faAngleLeft} size="2x" />
                <FontAwesomeIcon onClick={playSongHandler} icon={isPlaying?faPause:faPlay} size="2x" />
                <FontAwesomeIcon onClick={()=>{skipSongHandler('forward')}} className="skip-forward" icon={faAngleRight} size="2x" />
            </div>
        </div>
    )
}

export default Player
