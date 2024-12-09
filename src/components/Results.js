import counter from '../App'
import countryValue from '../App'
import correctCounter from '../App'
import clickCounter from '../App'


function Results() {

 
    

    return (
    <div>
     
      <p className='returnMessage'>
             You are on Question {counter} <br/>
             Your answer is {countryValue} <br/>
             You have answered {correctCounter}/{counter} correctly <br/>
             You have submitted {clickCounter}

        </p>
    </div>


    );
  }
  export default Results;