import "./Text.css";
import { useTypewriter , Cursor } from 'react-simple-typewriter'

function Text() {
  const {text} = useTypewriter({
    words: ["Youtuber.", "freelancer."],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 40
  })
  console.log("text.jsx");
  return (
    <div className="textContainer">
      <h3 className="text">
        Hi, I'm Pratham aka <h3 className="text purple">Xane</h3> and I am a 
      </h3>
        <div>
          <span className="text2">{text}</span>
          <span className="cursor"><Cursor /></span>
        </div>
    </div>
  );
}

export default Text;
