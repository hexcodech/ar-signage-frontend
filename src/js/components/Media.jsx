import React from "react";
import { connect } from "react-redux";
import throttle from "lodash/throttle";

import { clearMedia, setMediaRemaining } from "js/actions/media";

import FlipClock from "js/components/clock/FlipClock";

import "./Media.scss";

class Media extends React.Component {
	constructor() {
		super();
	}

	render = () => {
		const { dispatch, mediaType, mediaText, mediaUrl } = this.props;

		return (
			<div styleName="media">
				{!mediaType ? <FlipClock /> : ""}
				{mediaType && mediaType.startsWith("text")
					? <div styleName="text">
							{mediaText}
						</div>
					: ""}
				{mediaType && mediaType.startsWith("image")
					? <div
							styleName="image"
							style={{ backgroundImage: "url(" + mediaUrl + ")" }}
						/>
					: ""}
				{mediaType && mediaType.startsWith("video")
					? <div styleName="video">
							<video
								autoPlay
								onEnded={() => {
									dispatch(clearMedia());
									this.currentVideo = null;
								}}
								ref={video => {
									this.currentVideo = video;
								}}
								onTimeUpdate={() => {
									if (!this.currentVideo) {
										return;
									}

									dispatch(
										setMediaRemaining(
											Math.round(
												this.currentVideo.duration -
													this.currentVideo.currentTime
											)
										)
									);
								}}
								src={mediaUrl}
							/>
						</div>
					: ""}
			</div>
		);
	};
}

const mapStateToProps = state => {
	return {
		mediaType: state.app.media.type,
		mediaText: state.app.media.text,
		mediaUrl: state.app.media.url
	};
};

export default connect(mapStateToProps)(Media);
