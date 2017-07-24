import React from "react";

import Header from "./Header";
import Media from "./Media";

import "./Layout.scss";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      displayId: "default",
      timer: {
        seconds: 3600,
        running: false
      },
      media: {
        type: null,
        headerVisible: true,
        url: null,
        text: null,
        position: 0
      }
    }
  }

  componentDidMount() {
    setInterval(() => {
       if(this.state.timer.running && this.state.timer.seconds > 0){
         this.setState((prevState, props) => {
           return {timer: {seconds: prevState.timer.seconds - 1, running: prevState.timer.running}};
         });
       }
       if(this.state.timer.running && this.state.timer.seconds == 0){
         this.setState((prevState, props) => {
           return {timer: {seconds: 0, running: false}};
         });
       }
    }, 1000);
  }

  removeMedia() {
    this.setState((prevState, props) => {
      return {media: {
                type: null,
                headerVisible: true,
                url: null,
                text: null,
                position: 0
              }
            }
    });
  }

  updatePosition(position) {
    this.setState((prevState, props) => {
      return {media: {
                type: prevState.media.type,
                headerVisible: prevState.media.headerVisible,
                url: prevState.media.url,
                text: prevState.media.text,
                position: position
              }
            }
    });
  }

  render() {
    return (
      <div styleName="layout">
        <Header
          seconds={this.state.timer.seconds}
          media={this.state.media}
        />
        <Media
          seconds={this.state.timer.seconds}
          media={this.state.media}
          removeMedia={this.removeMedia.bind(this)}
          updatePosition={this.updatePosition.bind(this)}
        />
      </div>
    );
  }
}
