import './App.css';
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



function FlagImage() {
  return (
  <div class='Flag'>
      <img src={randomObject.src} className="Flag" alt={randomObject.value} />    
        <p><Form/></p>
    </div>
    
      
  );


}



function Form() {
  const [Country_Value,setCountryValue] = useState ('');

  return (

    <div classname='Input_Form'>
      <label classname='Country_Label'> Country Name: </label>
      <input classname='Country_Input'placeholder='Type here' value={Country_Value} onChange = {(e) => setCountryValue(e.target.value)}></input>
      <p> You have put {Country_Value}</p>
      <button onClick = {() => <Results value={Country_Value}/>} classname='Submit'>Submit </button>
      <button onClick = {() => Test(Country_Value)} classname='Submit'>test </button>
        

    </div>

  );
  
}

function Test({Country_Value}) {
 
  return (
  <div>

  <p>Hello {Country_Value}</p>
    

  </div>
  );
}

function Results({Country_Value}) {
 
  return (
  <div>

  <p>Hello {Country_Value}</p>
    

  </div>
  );
}

function App() {
  return (
  <div>
    <h1 class='header'>Flag App</h1>  
      <h2 class='slogan'>Do you know your flags? </h2>
        <p1><FlagImage/></p1>
  </div>
  );
}


export default App;
