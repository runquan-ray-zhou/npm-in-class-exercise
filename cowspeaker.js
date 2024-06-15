import cowsay from 'cowsay';

function say(message) {
  console.log(cowsay.say({
    text: message,
    e: "oO",
    T: "U "
  }));
}

export default { say };