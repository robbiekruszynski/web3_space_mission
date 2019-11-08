import React from "react";
import Hud from "./Hud";
import Prompt from "./Prompt";
import Choices from "./Choices";
import GameOver from "./GameOver";
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
      plot: plot,
      questionsOn: false,
      score: 0,
      gameOver: false
    }
    this.clickChoice = this.clickChoice.bind(this);
    this.questionStart = this.questionStart.bind(this);
    this.answer = this.answer.bind(this);
    this.questionAnswered = this.questionAnswered.bind(this);
    this.turn = this.turn.bind(this);
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
      this.questionAnswered();
    } else {
      this.setState({time: this.state.time - 10});
    }
    // console.log(this.state);
  }

  questionStart() {
    const timer = setInterval(() => {
      this.setState({time: this.state.time - 1});
      this.checkLoss();
    }, 1000);
    this.setState({interval: timer});
  }

  checkLoss() {
    if (this.state.time <= 0) {
      clearInterval(this.state.interval);
      this.setState({gameOver: true});
    }
  }

  questionAnswered() {
    this.setState({time: 30});
    clearInterval(this.state.interval);
    this.setState({score: this.state.score + this.state.time})
  }

  turn() {
    this.setState({questionsOn: true})
    this.questionStart();
  }

  render() {
    return (
      this.state.gameOver ? <GameOver score={this.state.score} /> :<div>
        <h1>{this.state.answer}</h1>
        <div className="Body">
          <Hud questionStart={this.questionStart} time={this.state.time} changeRate={(dir) => this.changeRate(dir)} rate={this.state.rate} />
          <div id="center">
            <Prompt prompts={this.state.prompts} q={this.state.q} plot={this.state.plot} showQuestion={this.state.questionsOn} />
            <Choices score={this.state.score} choices={this.state.choices} q={this.state.q} plot={this.state.plot} time={this.state.time} questionAnswered={() => this.questionAnswered()} clickChoice={(key) => this.clickChoice(key)} showQuestion={this.state.questionsOn} turn={() => this.turn()} />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
