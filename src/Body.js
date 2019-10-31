import React from "react";
import Hud from "./Hud";
import Prompt from "./Prompt";
import Choices from "./Choices";

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enterDiv: <div className="button"><h1>Story</h1><p>Background</p><button onClick={() => this.clickCheck()} className="animated fadeIn delay-2s">Continue</button></div>
    }
  }

  clickCheck() {
    this.setState({enterDiv:<div className="Body"><Hud /><div id="center"><Prompt /><Choices /></div></div>});
  }
  render() {
    return (
      <div>{this.state.enterDiv}</div>
    );
  }
}

export default Body;
