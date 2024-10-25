import france from '../Images/France.jpg';
import germany from '../Images/Germany.jpg'
import italy from '../Images/Italy.jpg'
import afghanistan from '../Images/Afghanistan.jpg'
import bolivia from '../Images/Bolivia.jpg'
import chile from '../Images/Chile.jpg'
import china from '../Images/China.jpg'
import cuba from '../Images/Cuba.jpg'
import england from '../Images/England.jpg'

function Flags() {


    const flags = [ 
        {src:france, value:'France'},
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
    return (
    <div>

      <p>
      <img src={randomObject.src} className="Flags" alt={randomObject.value} /></p>
    
    </div>


    );
  }
  export default Flags;