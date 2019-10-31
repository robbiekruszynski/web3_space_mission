import React from "react";
import Hud from "./Hud";
import Prompt from "./Prompt";
import Choices from "./Choices";
import { questions } from "./Questions";

class Body extends React.Component {

  constructor(props) {
    super(props);
    let p = [];
    let c = [];
    questions.sort(() => Math.random() - 0.5).forEach(function(q) {
      p.push(q.question);
      c.push(q.responses);
    });
    this.state = {
      enterDiv: <div className="button"><h1>Story</h1><p>Background</p><button onClick={() => this.clickCheck()} className="animated fadeIn delay-2s">Continue</button></div>,
      prompts: p,
      choices: c,
      q: 0,
      answer: "",
      gas: 100,
      rate: 1
    }
    this.clickChoice = this.clickChoice.bind(this);
    this.startGame = this.startGame.bind(this);
    this.answer = this.answer.bind(this);
  }

  clickChoice(answer) {
    let output = answer ? "Correct" : "Wrong";
    this.setState({answer: output})
    this.answer(answer);
  }

  answer(choice) {
    if (choice) {
      let stateChange = {...this.state};
      console.log(stateChange);
      // stateChange.gas = this.state.gas + 10;
      // stateChange.q = 1;
      this.setState({q: this.state.q + 1});
      // console.log(this.state.q);
    } else {
      this.setState({gas: this.state.gas - 5})
    }
  }

  startGame() {
    setInterval(() => {
      // console.log('tick');
      this.setState({gas: this.state.gas - this.state.rate});
      console.log(this.state.gas);
    }, 1000);
  }

  clickCheck() {
    this.setState({enterDiv:<div className="Body"><Hud startGame={this.startGame} gas={this.state.gas} key={this.state.gas} /><div id="center"><Prompt prompts={this.state.prompts} q={this.state.q} /><Choices choices={this.state.choices} q={this.state.q} clickChoice={(key) => this.clickChoice(key)} /></div></div>});
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
      <h1>{this.state.answer}</h1>
      {this.state.enterDiv}
      </div>
    );
  }
}

export default Body;
