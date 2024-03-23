import { say } from "cowsay";

const cowSpeaker = (text) => {
  const result = say({ text });
  console.log(result);
}

export default cowSpeaker;