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
    this.props.questionAnswered();
  }
  turn() {
    this.props.turn();
  }
  render() {
    let choices = [];
    if (this.props.choices[this.props.q] && this.props.plot[this.props.q]) {
      this.props.showQuestion ? this.props.choices[this.props.q].forEach((choice, key) => {
        choices.push(<div onClick={() => this.onClickChoice(key)} className="choice" key={key}><p>{choice.answer}</p></div>);
      }) : choices.push(<div className="turn"><p onClick={() => this.turn()}>Turn Left</p><p onClick={() => this.turn()}>Turn Right</p></div>)
    } else {
      choices = <div><h1>End of Questions</h1><h2>Final Score: {this.props.score}</h2></div>;
    }
    return (
      <div id="choices">
        {choices}
      </div>
    );
  }
}

export default Choices;
