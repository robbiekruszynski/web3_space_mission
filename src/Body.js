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
      prompts: p,
      choices: c,
      q: 0,
      answer: "",
      gas: 100,
      rate: 1,
      interval: ""
    }
    this.clickChoice = this.clickChoice.bind(this);
    this.startGame = this.startGame.bind(this);
    this.answer = this.answer.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  clickChoice(answer) {
    this.setState({answer: answer ? "Correct" : "Wrong"})
    this.answer(answer);
  }

  changeRate(dir) {
    if (dir === "up") {
      this.setState({rate: this.state.rate + 0.1});
    } else {
      this.setState({rate: this.state.rate - 0.1});
    }
  }

  answer(choice) {
    if (choice) {
      this.setState({q: this.state.q + 1});
      this.setState({gas: this.state.gas + 10});
    } else {
      this.setState({gas: this.state.gas - 5});
    }
    console.log(this.state);
  }

  startGame() {
    const timer = setInterval(() => {
      this.setState({gas: this.state.gas - this.state.rate});
    }, 1000);
    this.setState({interval: timer});
  }

  endGame() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <h1>{this.state.answer}</h1>
        <div className="Body">
          <Hud startGame={this.startGame} gas={this.state.gas} changeRate={(dir) => this.changeRate(dir)} rate={this.state.rate} />
          <div id="center">
            <Prompt prompts={this.state.prompts} q={this.state.q} />
            <Choices choices={this.state.choices} q={this.state.q} gas={this.state.gas} endGame={() => this.endGame()} clickChoice={(key) => this.clickChoice(key)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
