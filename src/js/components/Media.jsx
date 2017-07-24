import React from "react";

import FlipClock from "js/components/clock/FlipClock";

import "./Media.scss"

export default class Media extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div styleName="media">
        {!this.props.media.type ? <FlipClock seconds={this.props.seconds}/> : ""}
      </div>
    );
  }
}
