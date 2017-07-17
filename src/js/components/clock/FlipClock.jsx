import React from "react";

import Digit from "js/components/clock/Digit";

import "./FlipClock.scss";

class FlipClock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			m: 0,
			s: 0
		};
	}

	componentDidMount = () => {
		setInterval(() => {
			if (this.state.s >= 59) {
				this.setState({ m: this.state.m + 1, s: 0 });
			} else {
				this.setState({ s: this.state.s + 1 });
			}
		}, 1000);
	};

	render = () => {
		const { m: minutes, s: seconds, anim } = this.state;

		const minuteString = ("00" + minutes).slice(-2);
		const secondString = ("00" + seconds).slice(-2);

		const m1 = parseInt(minuteString.substr(0, 1)),
			m2 = parseInt(minuteString.substr(1, 2)),
			s1 = parseInt(secondString.substr(0, 1)),
			s2 = parseInt(secondString.substr(1, 2));

		return (
			<div styleName="clock">
				<div styleName="minutes">
					<Digit key={"1" + m1} value={m1} />
					<Digit key={"2" + m2} value={m2} />
				</div>
				<div styleName="seconds">
					<Digit key={"1" + s1} value={s1} />
					<Digit key={"2" + s2} value={s2} />
				</div>
			</div>
		);
	};
}

export default FlipClock;
