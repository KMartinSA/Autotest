import './App.css';
import Header from './components/Headers.js'
import Correct from './components/Correct.js'
import Wrong from './components/Wrong.js'

import france from './Images/France.jpg';
import germany from './Images/Germany.jpg'
import italy from './Images/Italy.jpg'
import afghanistan from './Images/Afghanistan.jpg'
import bolivia from './Images/Bolivia.jpg'
import chile from './Images/Chile.jpg'
import china from './Images/China.jpg'
import cuba from './Images/Cuba.jpg'
import england from './Images/England.jpg'
import { useState} from 'react';

//import FlagImages from './logo.svg'


const flags = [ {src:france, value:'France'},
                {src:germany, value: 'Germany'},
                {src:italy, value:'Italy'},
                {src:afghanistan, value:'Afghanistan'},
                {src:bolivia, value:'Bolivia'},
                {src:chile, value:'Chile'},
                {src:china, value:'China'},
                {src:cuba, value:'Cuba'},
                {src:england, value:'England'}
              
              ];



var randomObject = flags[Math.floor(Math.random() * flags.length)];

function App() {

  const [countryValue,setCountryValue] = useState ('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = (e) => {
    const answerIsCorrect = countryValue.toLowerCase() === randomObject.value.toLowerCase();
    setIsCorrect(answerIsCorrect);
    console.log(countryValue, randomObject.value.toLowerCase(), countryValue.toLowerCase() === randomObject.value.toLowerCase());
  };



  return (
  <div className= 'app'>
    <Header/>
    <img src={randomObject.src} className="flagImage" alt={randomObject.value} />
    <br></br>
    <label aria-labelledby='countryname' className='countryLabel'> Country Name: </label>    
    <input className='countryInput' id='countryname' name='countryname' placeholder='Type here' value={countryValue} onChange = {(e) => setCountryValue(e.target.value)}></input>
     
      <button onClick={handleSubmit} className='Submit' role='btn'>
        Submit
      </button>

  

      {isCorrect !== null && (
        <p className='Result_Message'>
          <p>You have put {countryValue}</p>
          {isCorrect ? <Correct/>: <Wrong/>}
        </p>
      )}


  </div>
  );
}


export default App;