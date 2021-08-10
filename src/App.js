import React, {useState} from 'react';
import Song from './components/Song';
import Player from './components/Player';
import data from './util';
// we can give any name in here such as data
import  './sass/app.scss';


function App() {
  //State
  // data() data function same as chillHop functionreturns whole chillihop data
  //songs is a state has all the chilhop object properties and values
const [songs, setSongs] = useState(data());
// passing the chilHop function as data() which returns the whole array of objects
const [currentSong, setCurrentSong] = useState(songs[3]);
const [isPlaying, setIsPlaying] = useState(false);
//false because our music is not playing by default
// the logic is,  is the song playing or not?
// isPlaying initial/default state is false
  return (
    <div className="App">
      {/* update songs with picture and so on */}
     <Song currentSong={currentSong} />
     <Player 
     isPlaying={isPlaying}
     currentSong={currentSong}
     setIsPlaying={setIsPlaying}
     />
     
    </div>
  );
}

export default App;
