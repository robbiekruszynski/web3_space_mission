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
  render() {
    let choices = [];
    this.props.choices[this.props.q].forEach((choice, key) => {
      choices.push(<div onClick={() => this.onClickChoice(key)} className="choice" key={key}><p>{choice.answer}</p></div>);
    });
    return (
      <div id="choices">
        {choices}
      </div>
    );
  }
}

export default Choices;
