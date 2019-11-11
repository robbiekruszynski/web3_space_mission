import React from "react";

class Prompt extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }

  }
  render() {
    return (
    <div id="prompt">
      <h1>{this.props.showQuestion ? this.props.prompts[this.props.q] : "Options"}</h1>
    </div>
    );
  }
}

export default Prompt;
