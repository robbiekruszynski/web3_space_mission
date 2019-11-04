import React from "react";
import Body from "./Body";

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enterDiv: <div className="button"><h1>Story</h1><p>Background</p><button onClick={() => this.clickCheck()} className="animated fadeIn delay-2s">Continue</button></div>
    }
  }

  clickCheck() {
    this.setState({enterDiv:<Body>Loading...</Body>});
  }
  render() {
    return (
      <div>
      {this.state.enterDiv}
      </div>
    );
  }
}

export default Splash;
