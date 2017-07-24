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
        {this.props.media.type && this.props.media.type.startsWith("text") ? <div styleName="text">{this.props.media.text}</div> : ""}
      </div>
    );
  }
}
