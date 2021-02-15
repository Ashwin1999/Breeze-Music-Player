export const audioPlayer = (isPlaying, audioRef) => {
    if(isPlaying){
        const audioPromise = audioRef.current.play()
        
        if(audioPromise!==undefined){
            audioPromise.then(()=>{
                audioRef.current.play()
            })
        }
    }
}