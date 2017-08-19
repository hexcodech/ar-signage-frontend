import React from "react";
import { connect } from "react-redux";

import { clearMedia, setMediaPosition } from "js/actions/media";

import FlipClock from "js/components/clock/FlipClock";

import "./Media.scss";

const Media = ({ dispatch, media }) => {
	return (
		<div styleName="media">
			{!media.type ? <FlipClock /> : ""}
			{media.type && media.type.startsWith("text")
				? <div styleName="text">
						{media.text}
					</div>
				: ""}
			{media.type && media.type.startsWith("image")
				? <div
						styleName="image"
						style={{ backgroundImage: "url(" + media.url + ")" }}
					/>
				: ""}
			{media.type && media.type.startsWith("video")
				? <div styleName="video">
						<video
							autoPlay
							onEnded={() => {
								dispatch(clearMedia());
							}}
							ref={video => {
								this.currentVideo = video;
							}}
							onTimeUpdate={() => {
								dispatch(
									setMediaRemaining(
										Math.round(
											this.currentVideo.duration - this.currentVideo.currentTime
										)
									)
								);
							}}
							src={media.url}
						/>
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

export default connect(mapStateToProps)(Media);
