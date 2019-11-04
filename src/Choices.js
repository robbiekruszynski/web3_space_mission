import React from "react";

class Choices extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onClickChoice = this.onClickChoice.bind(this);
  }
  onClickChoice(key) {
    // console.log(key);
    let answer = this.props.choices[this.props.q][key].correct;
    this.props.clickChoice(answer);
  }
  onGameEnd() {
    this.props.endGame();
  }
  render() {
    let choices = [];
    if (this.props.choices[this.props.q]) {
      this.props.choices[this.props.q].forEach((choice, key) => {
        choices.push(<div onClick={() => this.onClickChoice(key)} className="choice" key={key}><p>{choice.answer}</p></div>);
      });
    } else {
      choices = <div><h1>End of Questions</h1><h2>Final Score: {this.props.gas}</h2></div>;
      this.onGameEnd();
    }
    return (
      <div id="choices">
        {choices}
      </div>
    );
  }
}

export default Choices;
