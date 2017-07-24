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
        seconds: 120,
        running: true
      },
      media: {
        type: "text/plain",
        headerVisible: true,
        url: null,
        text: "Finde den Ausgang, indem du laut Jodelst und dich im Kreis drehst und den Schlüssel in das Schloss steckst und somit die Tür öffnest."
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

  render() {
    return (
      <div styleName="layout">
        <Header seconds={this.state.timer.seconds} media={this.state.media}/>
        <Media seconds={this.state.timer.seconds} media={this.state.media}/>
      </div>
    );
  }
}
