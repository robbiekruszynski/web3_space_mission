import React from "react";
import Time from "./Time";

class Hud extends React.Component {
  // static getDerivedStateFromProps(props,state) {
  //   console.log(props.gas, state.gas);
  //   if (props.gas !== state.gas) {
  //     return {gas: props.gas };
  //   }
  //   return null;
  // }
  constructor(props) {
    super(props);
    this.state = {
      rate: 1
    }
  }

  componentDidMount() {
    this.props.startGame();
  }
  componentDidUpdate(gas) {
    console.log(gas, this.props.gas);
  }

  changeRate(dir) {
    console.log('click');
    if (dir === "up") {
      this.setState({rate: this.state.rate + 0.1});
    }else {
      this.setState({rate: this.state.rate - 0.1});
    }
  }

  render() {
    return (
      <div id="hud">
        <Time />
        <p id="gas" key={this.props.gas}>{this.props.gas}</p>
        <div id="rateDiv">
          <p id="increase" onClick={() => this.changeRate("up")}>+</p>
          <p>Gas: <span id="rate">{this.state.rate}</span></p>
          <p id="decrease" onClick={() => this.changeRate("down")}>-</p>
        </div>
      </div>
    );
  }
}

export default Hud;
