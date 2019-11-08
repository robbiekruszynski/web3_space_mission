import React from "react";
import Hud from "./Hud";
import Prompt from "./Prompt";
import Choices from "./Choices";
import { questions } from "./Questions";
import { plot } from "./Plot";

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
      time: 30,
      rate: 1,
      interval: "",
      questionsOn: false
    }
    this.clickChoice = this.clickChoice.bind(this);
    this.questionStart = this.questionStart.bind(this);
    this.answer = this.answer.bind(this);
    this.questionAnswered = this.questionAnswered.bind(this);
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
      this.setState({questionsOn: false});
      this.setState({q: this.state.q + 1});
    } else {
      this.setState({time: this.state.time - 5});
    }
    // console.log(this.state);
  }

  questionStart() {
    const timer = setInterval(() => {
      this.setState({time: this.state.time - 1});
    }, 1000);
    this.setState({interval: timer});
  }

  questionAnswered() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <h1>{this.state.answer}</h1>
        <div className="Body">
          <Hud questionStart={this.questionStart} time={this.state.time} changeRate={(dir) => this.changeRate(dir)} rate={this.state.rate} />
          <div id="center">
            <Prompt prompts={this.state.prompts} q={this.state.q} showQuestion={this.state.questionsOn} />
            <Choices choices={this.state.choices} q={this.state.q} time={this.state.time} questionAnswered={() => this.questionAnswered()} clickChoice={(key) => this.clickChoice(key)} showQuestion={this.state.questionsOn} />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
