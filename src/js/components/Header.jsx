import React from "react";
import { connect } from "react-redux";

import FlipClock from "js/components/clock/FlipClock";
import "./Header.scss";

const Header = ({ headerVisible, mediaType }) => {
	return (
		<div styleName="header">
			{headerVisible
				? <div styleName="header-content">
						<div styleName="logo">
							<img src="img/ar-logo.png" />
						</div>
						{mediaType ? <FlipClock /> : ""}
					</div>
				: ""}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		mediaType: state.app.media.type,
		headerVisible: state.app.media.headerVisible
	};
};

export default connect(mapStateToProps)(Header);
