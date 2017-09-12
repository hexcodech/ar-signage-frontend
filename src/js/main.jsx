import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { AppContainer } from "react-hot-loader";
import thunkMiddleware from "redux-thunk";
import throttle from "lodash/throttle";
import io from "socket.io-client";

import App from "js/components/App";
import appReducer from "js/reducers/app";
import { loadState, saveState } from "js/utilities/local-storage";

import { setDisplayId } from "js/actions/display-id";
import { setMedia, setText } from "js/actions/media";
import { setTimer, startTimer, stopTimer } from "js/actions/timer";

import DevTools from "js/components/dev/DevTools";
const presistedState = loadState();

const DEV_TOOLS = true;

const composed = DEV_TOOLS
	? compose(applyMiddleware(thunkMiddleware), DevTools.instrument())
	: compose(applyMiddleware(thunkMiddleware));

const store = createStore(
	combineReducers({
		app: appReducer
	}),
	presistedState,
	composed
);

//connect to socketio server
const socket = io("http://localhost:4100");
socket.on("uiState", data => {
	const newState = data,
		state = store.getState().app;

	if (
		newState.media &&
		state.media &&
		(newState.media.type !== state.media.type ||
			newState.media.url !== state.media.url ||
			newState.media.remaining !== state.media.remaining ||
			newState.media.headerVisible !== state.media.headerVisible)
	) {
		store.dispatch(
			setMedia(
				newState.media.type,
				newState.media.url,
				newState.media.remaining,
				newState.media.headerVisible
			)
		);
	}

	if (
		newState.media &&
		state.media &&
		newState.media.text !== state.media.text
	) {
		store.dispatch(setText(newState.media.text));
	}

	if (
		newState.timer &&
		state.timer &&
		newState.timer.seconds !== state.timer.seconds
	) {
		store.dispatch(setTimer(newState.timer.seconds));
	}

	if (
		newState.timer &&
		state.timer &&
		newState.timer.running != state.timer.running
	) {
		store.dispatch(newState.timer.running ? startTimer() : stopTimer());
	}
});

const updateRemaining = throttle(() => {
	const state = store.getState().app;

	if (state.media && !isNaN(state.media.remaining)) {
		socket.emit("updateRemaining", state.media.remaining);
	}
}, 1000);

//storing some keys of the application state in the localstorage
store.subscribe(() => {
	const state = store.getState().app;

	if (state.media && !isNaN(state.media.remaining)) {
		if (state.media.remaining == 0) {
			socket.emit("updateRemaining", state.media.remaining);
		} else {
			updateRemaining();
		}
	}
});

ReactDOM.render(
	<AppContainer>
		<App store={store} />
	</AppContainer>,
	document.getElementById("app")
);

if (module.hot) {
	module.hot.accept("js/components/App", () => {
		const NextApp = require("js/components/App").default;

		ReactDOM.render(
			<AppContainer>
				<NextApp store={store} />
			</AppContainer>,
			document.getElementById("app")
		);
	});
}
