import logo from "./CSy.png";
import "./App.css";
import biglogo from "./bigglogo.png";
import platforms from "./allplatforms.png"
import join from "./Join3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={biglogo} className="App-biglogo" alt="logo" />
        </header>
        <img src={platforms} className="platforms" alt="logo" />
        <div className="joindiv">
          <img src={join} className="join" alt="logo" />
        </div>
        <div className="socials">
          <FontAwesomeIcon
            icon={faDiscord}
            className="discord"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faInstagram}
            className="instagram"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faTwitter}
            className="twitter"
          ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faGithub} className="github"></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
}

export default App;
