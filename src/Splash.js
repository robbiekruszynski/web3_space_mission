import React from "react";
import Body from "./Body";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enterDiv: (
        <div className="button">
          <h4 className="introStory">
            You are the captain of the last remaining starship of the <span style={{color: "red"}}>Allied Federation</span>, en route to the capital planet with vital cargo for the empire. On board are food, vaccines, fuel -- and the <span style={{color: "red"}}>imperative technology</span> from Alquaan IV, necessary to hold back the tide of enemy forces.
          </h4>
          <h4 className="introStory">
            As you prepare the hyperdrive for the final jump into your home sector, the smooth hum of the engine shifts to a cacophony of grinding gears and an ominous, rising whine. You jump to shut off the power, but an <span style={{color: "red"}}>explosion</span> rings out, and all goes black.
          </h4>
          <h4 className="introStory">
            When you come to, the backup generator has kicked in, but the <span style={{color: "red"}}>controls are unresponsive</span>. The ship is eerily silent. Your psychic powers can mend the ship's damages through correct answers to <span style={{color: "red"}}>blockchain trivia</span>.
          </h4>
          <h4 className="introStory">
            <span style={{color: "red"}}>This is the moment that decides the fate of the Federation</span>.
          </h4>

          <button
            onClick={() => this.clickCheck()}
            className="animated fadeIn delay-2s"
          >
            Continue
          </button>
        </div>
      )
    };
  }

  clickCheck() {
    this.setState({ enterDiv: <Body className="mainBody">Loading...</Body> });
  }
  render() {
    return <div className="openBody">{this.state.enterDiv}</div>;
  }
}

export default Splash;
