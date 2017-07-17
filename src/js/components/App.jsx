import React from "react";
import { Provider } from "react-redux";

import DevTools from "js/components/dev/DevTools";
import Layout from "js/components/Layout";
import FlipClock from "js/components/clock/FlipClock";

const App = ({ store }) => {
	return (
		<Provider store={store}>
			<div>
				<Layout />
				<DevTools />
				<FlipClock />
			</div>
		</Provider>
	);
};

export default App;
