import flags from './FlagImages'; // Import the flags array

function helper_flags() {
  // Generate a random flag object from the array
  return flags[Math.floor(Math.random() * flags.length)];
}

export default helper_flags;





