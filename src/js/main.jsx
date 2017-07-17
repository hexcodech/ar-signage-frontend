import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { AppContainer } from "react-hot-loader";
import thunkMiddleware from "redux-thunk";
import throttle from "lodash/throttle";

import App from "js/components/App";
import appReducer from "js/reducers/app";
import { loadState, saveState } from "js/utilities/local-storage";

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
