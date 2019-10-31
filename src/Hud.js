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
  }

  componentDidMount() {
    this.props.startGame();
  }
  // componentDidUpdate(prop) {
  //   if (prop.gas !== this.props.gas) {
  //
  //   }
  //   console.log(prop.gas, this.props.gas);
  // }

  onChangeRate(dir) {
    console.log('click');
    this.props.changeRate(dir);
  }

  render() {
    return (
      <div id="hud">
        <Time />
        <p id="gas" key={this.props.gas}>{this.props.gas.toPrecision(3)}</p>
        <div id="rateDiv">
          <p id="increase" onClick={() => this.onChangeRate("up")}>+</p>
          <p>Gas: <span id="rate">{this.props.rate.toPrecision(2)}</span></p>
          <p id="decrease" onClick={() => this.onChangeRate("down")}>-</p>
        </div>
      </div>
    );
  }
}

export default Hud;
