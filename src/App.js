import './App.css';
import Header from './components/Headers.js'
import Flags from './components/Flags.js'
import Correct from './components/Correct.js'
import Wrong from './components/Wrong.js'
import { useState } from 'react';



function App() {

  const flagValue = 'Germany';

  const [countryValue,setCountryValue] = useState ('');
  const [isCorrect, setIsCorrect] = useState(null);

  // Enable and Disable the button
  const [isButtonDisabled, setButtonDisabled] = useState (false);
  
 //All the counters to collect correct answers and how many questions
  const [counter, setCounter] = useState (1);
  const [clickCounter, setClickCounter] = useState (0);
  const [correctCounter, setCorrectResults] = useState(0);

  const handleSubmit = (e) => {

    e.preventDefault();
    
  //Function to get the input from the form below
  const { countryName } = e.target;
  setCountryValue(countryName.value);

  //Function to see if your answer is correct or not
   const answerIsCorrect = countryValue === flagValue;
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

   
    console.log(countryValue,flagValue, countryValue.toLowerCase() === 'Germany');
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
    <p alt-text='flagCounter' className='flagCounter'>Flag {counter}
    
    </p>
    <Flags/>
    <form onSubmit={handleSubmit}>
    <label alt-text='countryName' className='countryLabel'> Country Name: </label>    
    <input name='countryName'/>      
    <button disabled={isButtonDisabled} type='submit' className='submitButton' role='submit-btn'>
        Submit
      </button>
    
      </form>

      <button onClick={nextQuestion} className='nextButton' role='next-btn'>
        Next
      </button>
    
      {isCorrect !== null && (
        <p className='resultMessage'>
            
            Your answer is {countryValue} <br/>
            {isCorrect ? <Correct {...flagValue}/>: <Wrong/>}
          <p>
             You have answered {correctCounter}/{counter} correctly <br/>
             You have submitted {clickCounter} questions
          </p>
        </p>


      )}

      

    <button onClick={startNewQuiz} className='restartQuiz' role='start-new-quiz-btn'>
      Start New Quiz
    </button>

  </div>
  );
}


export default App;