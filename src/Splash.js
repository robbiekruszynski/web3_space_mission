import React from "react";
import Body from "./Body";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enterDiv: (
        <div className="button">
          <h4 className="introStory">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
