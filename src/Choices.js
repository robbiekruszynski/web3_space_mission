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

  makeRepair() {
    this.props.turn();
  }

  navigate(id) {
    this.props.navigate(id);
  }
  render() {
    let choices = [];
    if (this.props.choices[this.props.q] ) {//&& this.props.plot[this.props.q]
      if(this.props.showQuestion) {
        this.props.choices[this.props.q].forEach((choice, key) => {
          choices.push(<div onClick={() => this.onClickChoice(key)} className="choice" key={key}><p>{choice.answer}</p></div>);
        });
      } else{
        this.props.repair ? choices.push(<div key={"broken"}>You've fixed all damages in this room.</div>) : choices.push(<div key={"repaired"} onClick={() => this.makeRepair()}><p>Attempt Repairs</p></div>);
        this.props.pathways.forEach((choice, key) => {
          choices.push(<div className="turn" key={key}><p onClick={() => this.navigate(Object.keys(choice)[0])}>Walk to the {Object.values(choice)[0]} Room</p></div>)

        })
      }
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
