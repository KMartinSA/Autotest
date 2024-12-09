import flags from './FlagImages.js';

function Flags(randomObject) {

    var randomObject = flags[Math.floor(Math.random() * flags.length)];
    return (
    <div>

      <p>

      <img src={randomObject.src} className="Flags" alt={randomObject.value} /></p>
    
    </div>


    );
  }
  export default Flags;