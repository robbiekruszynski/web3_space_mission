import React from "react";

function Choices(props) {

  function onClickChoice(key) {
    let answer = props.choices[props.q][key].correct;
    props.clickChoice(answer);
  }

  function makeRepair() {
    if (props.name === "Piloting") {
      props.checkWin();
    } else {
      props.turn();
    }
  }
    let choices = [];
    // if (props.choices[props.q] ) {
      //&& props.plot[props.q]
      if(props.showQuestion) {
        props.choices[props.q].forEach((choice, key) => {
          choices.push(<div onClick={() => onClickChoice(key)} className="choice" key={key}><p>{choice.answer}</p></div>);
        });
      } else{
        props.repair ? props.name === "Piloting" ? choices.push(<div onClick={() => props.endGame()} key={"broken"}>START IGNITION</div>) : choices.push(<div key={"broken"}>You've fixed all damages in this room.</div>) : choices.push(<div key={"repaired"} onClick={() => makeRepair()}><p>Attempt Repairs</p></div>);
        props.pathways.forEach((choice, key) => {
          choices.push(<div className="turn" key={key}><p onClick={() => props.navigate(Object.keys(choice)[0])}>Walk to the {Object.values(choice)[0]} Room</p></div>)

        })
      }

    return (
      <div id="choices">
        {choices}
      </div>
    );
}

export default Choices;
