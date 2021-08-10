import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faBreadSlice } from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying}) =>{
   
    const audioRef = useRef(null);
    // event handler
    // arrow function
    const playSongHandler = () =>{
audioRef.current.play();
        // console.log(audioRef.current);
        if(isPlaying){
            audioRef.current.pause();
            // setIsPlaying is opposite of isPlaying
            setIsPlaying(!isPlaying);
        }
        else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
        // console.log(audioRef.current);
        //play() is built in audio function
        //pause() is built in audio function
        // how can we access audio html tag
        // to access audio html tag we need useRef
        // if you need to use html tag in our component use useRef
        //by passing props ref to audio we are accessing audio tag
   
};



//state
const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
});
//songInfo is an object and currentTime and duration are properties
const timeUpdateHandler = (e) =>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration});
    
 };
const getTime = (time) =>{
return Math.floor(time/60) + ":" + "0" + Math.floor(time%60);
};
    return(
        <div className="player">
           <div className="time-control">
              <p>start time</p>
              <input type="range" />
              <p>End time</p>
           </div>
           <div className="play-control">
               {/* this is just a component <FontAwesomeIcon />*/}
               {/* passig this one as a props icon={faPlay} */}
               <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
               <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay}/>
               <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
              

           </div>
           <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
           {/* never use src="{currentSong.audio}" */}
        </div>
    )     
      
}
export default Player;