import React from "react";
import Time from "./Time";

class Hud extends React.Component {
  // static getDerivedStateFromProps(props,state) {
  //   console.log(props.time, state.time);
  //   if (props.time !== state.time) {
  //     return {time: props.time };
  //   }
  //   return null;
  // }
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.questionStart();
  }
  // componentDidUpdate(prop) {
  //   if (prop.time !== this.props.time) {
  //
  //   }
  //   console.log(prop.time, this.props.time);
  // }

  onChangeRate(dir) {
    console.log('click');
    this.props.changeRate(dir);
  }

  // <Time />
  render() {
    return (
      <div id="hud">
        <p id="time" key={this.props.time}>{this.props.time.toPrecision(3)}</p>
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
