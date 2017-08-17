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
import { setMedia } from "js/actions/media";
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
const socket = io();
socket.on("uistate", data => {
	const newState = JSON.parse(data),
		state = store.getState();

	if (newState.displayId !== state.displayId) {
		store.dispatch(setDisplayId(newState.displayId));
	}

	if (
		newState.media.type !== state.media.type ||
		newState.media.url !== state.media.url ||
		newState.media.position !== state.media.position
	) {
		store.dispatch(
			setMedia(newState.media.type, newState.media.url, newState.media.position)
		);
	}

	if (newState.timer.seconds !== state.timer.seconds) {
		store.dispatch(setTimer(newState.timer.seconds));
	}

	if (newState.timer.running !== state.timer.running) {
		store.dispatch(newState.timer.running ? startTimer() : stopTimer());
	}
});

//storing some keys of the application state in the localstorage
store.subscribe(
	throttle(() => {
		const state = store.getState();

		saveState({
			app: {
				/*authentication: state.app.authentication*/
			}
		});
	}, 1000)
);

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
