import React from "react";

import FlipClock from "js/components/clock/FlipClock";

import "./Media.scss"

export default class Media extends React.Component {
  constructor() {
    super();
  }

  updatePosition(e) {
    this.props.updatePosition(Math.round(this.currentVideo.currentTime / this.currentVideo.duration * 100));
  }

  render() {
    return (
      <div styleName="media">
        {!this.props.media.type ? <FlipClock seconds={this.props.seconds}/> : ""}
        {this.props.media.type && this.props.media.type.startsWith("text")
          ? <div
              styleName="text">
                {this.props.media.text}
            </div>
          : ""
        }
        {this.props.media.type && this.props.media.type.startsWith("image")
          ? <div
              styleName="image"
              style={{backgroundImage: 'url(' + this.props.media.url + ')'}}
            />
          : ""
        }
        {this.props.media.type && this.props.media.type.startsWith("video")
          ? <div
              styleName="video">
                <video
                  autoPlay
                  onEnded={this.props.removeMedia}
                  ref={(video) => { this.currentVideo = video; }}
                  onTimeUpdate={this.updatePosition.bind(this)}
                  src={this.props.media.url}
                />
            </div>
          : ""
        }
      </div>
    );
  }
}
