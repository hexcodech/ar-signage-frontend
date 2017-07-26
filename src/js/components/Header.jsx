import React from "react";
import { connect } from "react-redux";

import FlipClock from "js/components/clock/FlipClock";
import "./Header.scss";

const Header = ({ media }) => {
	return (
		<div styleName="header">
			{media.headerVisible
				? <div styleName="header-content">
						<div styleName="logo">
							<img src="/img/ar-logo.png" />
						</div>
						{media.type ? <FlipClock /> : ""}
					</div>
				: ""}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		media: state.app.media
	};
};

export default connect(mapStateToProps)(Header);
