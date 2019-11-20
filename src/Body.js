import React from "react";
import Hud from "./Hud";
import Prompt from "./Prompt";
import Choices from "./Choices";
import GameOver from "./GameOver";
import { questions } from "./Questions";
import { plot } from "./Plot";
import map from "./shipMap.png";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prompts: [],
      choices: [],
      q: 0,
      room: 0,
      answer: "",
      time: 30,
      rate: 1,
      interval: "",
      plot: plot,
      questionsOn: false,
      score: 0,
      gameOver: false,
      enginesReady: false,
      transition: ""
    };
    this.clickChoice = this.clickChoice.bind(this);
    this.questionStart = this.questionStart.bind(this);
    this.answer = this.answer.bind(this);
    this.questionAnswered = this.questionAnswered.bind(this);
    this.checkEngine = this.checkEngine.bind(this);
    this.turn = this.turn.bind(this);
    this.fixRoom = this.fixRoom.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  componentDidMount() {
    let p = [];
    let c = [];
    questions
      .sort(() => Math.random() - 0.5)
      .forEach(function(q) {
        p.push(q.question);
        c.push(q.responses);
      });
    this.setState({prompts: p});
    this.setState({choices: c});
  }

  clickChoice(answer) {
    this.setState({ answer: answer ? "Correct" : "Wrong" });
    this.answer(answer);
  }

  changeRate(dir) {
    if (dir === "up") {
      this.setState({ rate: this.state.rate + 0.1 });
    } else {
      this.setState({ rate: this.state.rate - 0.1 });
    }
  }

  answer(choice) {
    if (choice) {
      this.fixRoom();
      this.setState({ questionsOn: false });
      this.setState({ q: this.state.q + 1 });
      this.checkEngine();
      this.questionAnswered();
    } else {
      this.setState({ time: this.state.time - 10 });
    }
  }

  fixRoom() {
    let tempPlot = [...this.state.plot];
    tempPlot[this.state.room].repair = true;
    this.setState({ plot: tempPlot });
  }

  checkEngine() {
    let enginesReady = true;
    for (let i = 1; i < this.state.plot.length; i++) {
      enginesReady = enginesReady && this.state.plot[i].repair;
    }
    if (enginesReady) {
      this.setState({ enginesReady: true });
    }
  }

  questionStart() {
    const timer = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
      this.checkLoss();
    }, 1000);
    this.setState({ interval: timer });
  }

  checkLoss() {
    if (this.state.time <= 0) {
      clearInterval(this.state.interval);
      this.setState({ gameOver: true });
    }
  }

  endGame() {
    this.setState({ gameOver: true });
  }
  checkWin() {
    if (this.state.enginesReady) {
      this.fixRoom();
    } else {
      let tempPlot = [...this.state.plot];
      tempPlot[this.state.room].text[0] =
        "Something's not quite right... Check the rest of the ship for damage.";
      this.setState({ plot: tempPlot });
    }
  }

  questionAnswered() {
    this.setState({ time: 30 });
    clearInterval(this.state.interval);
    this.setState({ score: this.state.score + this.state.time });
    let tempPlot = [...this.state.plot];
    tempPlot[0].text[0] = "You've spent countless hours in the cockpit of this ship, but the controls are completely dead. If you fix the rest of the ship, you could start the engines and return home.";
    this.setState({ plot: tempPlot });
  }

  navigate(id) {
    this.setState({ transition: "" }, () => {
      setTimeout(() => this.setState({transition: "roomTransition"}), 0);
      setTimeout(() => {
        this.setState({ room: id });
        this.setState({ answer: "" });}, 500);
    });
  }

  turn() {
    this.setState({ questionsOn: true });
    this.questionStart();
  }

  render() {
    return this.state.gameOver ? (
      <GameOver happyEnd={this.state.enginesReady} score={this.state.score} />
    ) : (
      <div
        className={
          this.state.plot[this.state.room].name.split(" ")[0] + " gameScreen"
        }
      >
        <div className={ this.state.transition }></div>
        <div className="Body">
          <div className="plotText">
            <h1 id="room">{this.state.plot[this.state.room].name + " Room"}</h1>
            <h1>{this.state.plot[this.state.room].text[
              this.state.plot[this.state.room].repair ? 1 : 0
            ]}</h1>
          </div>
          <div className="textBox">
            {this.state.questionsOn ? (
              <div className="Timer">
                <Hud
                  questionStart={this.questionStart}
                  time={this.state.time}
                />
                <h1>{this.state.answer}</h1>
              </div>
            ) : (
              <div></div>
            )}
            <div id="center">
              <Prompt
                prompts={this.state.prompts}
                q={this.state.q}
                showQuestion={this.state.questionsOn}
              />
              <div className="Question"></div>
              <div className="Question"></div>
              <div id="Options">
                <Choices
                  score={this.state.score}
                  name={this.state.plot[this.state.room].name}
                  checkWin={() => this.checkWin()}
                  choices={this.state.choices}
                  q={this.state.q}
                  navigate={id => this.navigate(id)}
                  pathways={this.state.plot[this.state.room].connections}
                  repair={this.state.plot[this.state.room].repair}
                  time={this.state.time}
                  questionAnswered={() => this.questionAnswered()}
                  clickChoice={key => this.clickChoice(key)}
                  showQuestion={this.state.questionsOn}
                  turn={id => this.turn(id)}
                  fixRoom={() => this.fixRoom()}
                  endGame={() => this.endGame()}
                />
              </div>
            </div>
          </div>
          <div className="mapDiv">
            {this.state.plot.map((element,index) => {
              return <div className={this.state.room === index ? element.repair ? "current" : "currentBroken" : element.repair ? "fixed" : "broken"} id={"mapPosition" + index} key={index}></div>
            })}
            <img className="mapImg" src={map} alt={"Map of the ship, indicating that you are in the "
          + this.state.plot[this.state.room].name + " Room."} />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
