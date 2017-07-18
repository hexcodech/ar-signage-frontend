import React from "react";

import FlipClock from "js/components/clock/FlipClock";

import "./Media.scss"

export default class Media extends React.Component {
  render() {
    return (
      <div styleName="media">
        <FlipClock />
      </div>
    );
  }
}
