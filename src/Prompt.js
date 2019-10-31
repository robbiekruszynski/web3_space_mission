import React from "react";

class Prompt extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }

  }

  clickHandle() {
    // this.props.initializeQuestions(this.props.questions);
  }

  // let choices = [];
  // this.props.choices[this.props.q].forEach(function(choice, key) {
    //   choices.push(<div className="choice" key={key}><p>{choice.answer}</p></div>);
    // });
  render() {
    return (
    <div id="prompt">
      <h1 onClick={() => this.clickHandle()}>{this.props.prompts[this.props.q]}</h1>
    </div>
    );
  }
}

export default Prompt;
