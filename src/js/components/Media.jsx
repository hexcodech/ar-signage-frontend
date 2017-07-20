import React from "react";

import FlipClock from "js/components/clock/FlipClock";

import "./Media.scss"

export default class Media extends React.Component {
  constructor(){
    super();

    this.state = {
      minutes: 12,
      seconds: 34
    }
  }

  render() {
    return (
      <div styleName="media">
        <FlipClock minutes={this.state.minutes} seconds={this.state.seconds}/>
      </div>
    );
  }
}
