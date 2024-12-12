import './App.css';
import Header from './components/Headers.js'
import helper_flags from './components/helper_flags.js'
import Correct from './components/Correct.js'
import Wrong from './components/Wrong.js'
import { useState } from 'react';



function App() {

  
  const [countryValue,setCountryValue] = useState ('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [randomFlag, setRandomFlag] = useState(helper_flags()); // Call the helper function for the first flag


  const handleSubmit = (e) => {
    e.preventDefault();
    const isAnswerCorrect = countryValue.trim().toLowerCase() === randomFlag.value.toLowerCase();
    setIsCorrect(isAnswerCorrect);
  };
 
 
  const nextQuestion = () => {
    setRandomFlag(helper_flags()); // Get a new random flag
    setIsCorrect(null);
    setCountryValue('');
  };
 

  return (
  <div className= 'app'>
    
    <Header/>
       {/* Render the random flag */}
       {randomFlag && (
       <img src={randomFlag.src} className="flagImage" alt={`Flag of ${randomFlag.value}`} />
     )}
    
    <form onSubmit={handleSubmit}>
       <label>Country Name:</label>
       <input
         placeholder="Type here"
         value={countryValue}
         onChange={(e) => setCountryValue(e.target.value)}
       />
       <button type="submit">Submit</button>
     </form>
     {isCorrect !== null && (
       <p>
         {isCorrect ? <Correct /> : <Wrong />}
       </p>
     )}
     <button onClick={nextQuestion}>Next</button>
      
    

  </div>
  );
}


export default App;