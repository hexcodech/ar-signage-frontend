import React from "react";
import { connect } from "react-redux";

import { setTimer, stopTimer } from "js/actions/timer";

import Digit from "js/components/clock/Digit";

import "./FlipClock.scss";

class FlipClock extends React.Component {
	componentDidMount = () => {
		if (this.interval) {
			return;
		}

		this.interval = setInterval(() => {
			const { dispatch, timer } = this.props;

			if (timer.running) {
				if (timer.seconds > 0) {
					dispatch(setTimer(timer.seconds - 1));
				} else if (timer.seconds <= 0) {
					dispatch(stopTimer());
				}
			}
		}, 1000);
	};

	render = () => {
		const { timer } = this.props;

		const minuteString = ("0" + Math.floor(timer.seconds / 60)).slice(-2);
		const secondString = ("0" + timer.seconds % 60).slice(-2);

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
				:
				<div styleName="seconds">
					<Digit key={"1" + s1} value={s1} />
					<Digit key={"2" + s2} value={s2} />
				</div>
			</div>
		);
	};
}

const mapStateToProps = state => {
	return {
		timer: state.app.timer
	};
};

export default connect(mapStateToProps)(FlipClock);
