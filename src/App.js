import logo from "./cs.png";
import "./App.css";
import biglogo from "./biglogo.png";
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
        <div className="Socialinks">
          <p>Join the Club</p>
        </div>
        <div className="socials">
            <FontAwesomeIcon
              icon={faDiscord}
              className="discord"></FontAwesomeIcon>
              <FontAwesomeIcon
              icon={faInstagram}
              className="instagram"></FontAwesomeIcon>
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
