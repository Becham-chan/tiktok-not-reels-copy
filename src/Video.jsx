import "./Video.css"
import { useRef } from "react";

function App({src}){
    const handleVideoClick = () => {
        videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()
        if (videoRef.current.muted && videoRef.current.paused) { videoRef.current.play(); videoRef.current.muted = false }
    }

    const onMouseLeave = () => {
        if (videoRef.current.play){
            videoRef.current.pause()
        }
            
    }

    const onContact = (e) => { 
        if (videoRef.current.paused && (e.clientY >= 400 && e.clientY <= 500)) {
            if (videoRef.current.muted){ videoRef.current.muted = false}
            videoRef.current.play()
        }
    }



    const videoRef = useRef()
    return(
        <div className="clip" onClick={handleVideoClick} onMouseLeave={onMouseLeave} onMouseOver={onContact}>
            {src ?
                <video src={src} width="500" height="500" muted loop ref={videoRef}/> 
             :
             
                <div className="novideo"></div>
            }
            {/* Y 250/260 - Y 670/680 */}
        </div>
    )
}

export default App;