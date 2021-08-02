import React, {useState} from 'react';
import Song from './components/Song';
import Player from './components/Player';
import data from './util';
import  './sass/app.scss';


function App() {
  //State
  // data() returns whole chillihop data
  //songs is a state has all the chilhop object properties and values
const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[4]);
  return (
    <div className="App">
     <Song currentSong={currentSong} />
     <Player/>
     
    </div>
  );
}

export default App;
