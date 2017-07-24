import React from "react";

import FlipClock from "js/components/clock/FlipClock";
import "./Header.scss";

export default class Header extends React.Component {
  render() {
    return (
        <div styleName="header">
          {this.props.media.headerVisible ?
              <div styleName="header-content">
                <div styleName="logo">
                  <img src="/img/ar-logo.png" />
                </div>
                {this.props.media.type ? <FlipClock seconds={this.props.seconds} /> : "" }
              </div>
          : ""}
        </div>
    );
  }
}
