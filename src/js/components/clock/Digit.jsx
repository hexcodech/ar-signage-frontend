import React from "react";

import "./Digit.scss";

const Digit = ({ value, anim }) => {
	return (
		<div styleName="digit">
			<div styleName="current">
				<span>
					{value === 0 ? 9 : value - 1}
				</span>

				<div styleName="flip current-top top">
					{value === 0 ? 9 : value - 1}
				</div>

				<div styleName="flip next top">
					{value}
				</div>

				<div styleName="flip next-bottom bottom">
					{value}
				</div>
			</div>
		</div>
	);
};

export default Digit;
