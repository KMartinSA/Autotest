import './App.css';
import Header from './components/Headers.js'
import Flags from './components/Flags.js'
import Correct from './components/Correct.js'
import Wrong from './components/Wrong.js'
import { useState } from 'react';
import flags from './components/FlagImages.js';


function App() {

  const [countryValue,setCountryValue] = useState ('');
  const [isCorrect, setIsCorrect] = useState(null);

  // Enable and Disable the button
  const [isButtonDisabled, setButtonDisabled] = useState (false);
  
 //All the counters to collect correct answers and how many questions
  const [counter, setCounter] = useState (1);
  const [clickCounter, setClickCounter] = useState (0);
  const [correctCounter, setCorrectResults] = useState(0);

  const handleSubmit = (e) => {

    //Function to see if your answer is correct or not
   const answerIsCorrect = countryValue.toLowerCase() === Flags.length;
   setIsCorrect(answerIsCorrect);
    //Add the counter to what question you are on
    setCounter (counter + 1);
    setClickCounter (clickCounter + 1);
    setButtonDisabled(true);
    
      
    
    

    //After 10 clicks resets the counter
   if (counter > 9) {
    setCounter(1) 
    setCorrectResults(0)
   }

   if (answerIsCorrect===true) {
    setCorrectResults (correctCounter + 1)
   }


    //console.log(countryValue, Flags.value(), countryValue.toLowerCase() === Flags.value());
  };

  const nextQuestion = () => {
    <Flags/>
    setIsCorrect(null);
    setButtonDisabled(false);
    
  }

  const startNewQuiz = () => {
    <Flags/>
    setCounter(1) ;
    setCorrectResults(0);
    setIsCorrect(null);
    setButtonDisabled(false);
    

  }


  



  return (
  <div className= 'app'>
    
    <Header/>

    <br></br>
    <p alt-text='flagCounter' className='flagCounter'>Flag {counter}</p>
    <Flags key={flags.src} {...flags}/>;
    <br></br>
    <label aria-labelledby='countryname' className='countryLabel'> Country Name: </label>    
    <input className='countryInput' id='countryname' name='countryname' placeholder='Type here' value={countryValue} onChange = {(e) => setCountryValue(e.target.value)}></input>
     
      <button disabled={isButtonDisabled} onClick={handleSubmit} className='Submit' role='btn'>
        Submit
      </button>
      <button onClick={nextQuestion} className='nextQuestion' role='btn'>
        Next
      </button>

      

      {isCorrect !== null && (
        <p className='resultMessage'>
          <p> 
             You are on Question {counter} <br/>
             Your answer is {countryValue} <br/>
             You have answered {correctCounter}/{counter} correctly
             You have submitted {clickCounter}
          </p>
          {isCorrect ? <Correct/>: <Wrong/>}
        
        </p>


      )}

    <button onClick={startNewQuiz} className='restartQuiz' role='btn'>
      Start New Quiz
    </button>

  </div>
  );
}


export default App;