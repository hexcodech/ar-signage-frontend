import React from "react";
import { Provider } from "react-redux";

// import DevTools from "js/components/dev/DevTools";
import Layout from "js/components/Layout";

const App = ({ store }) => {
	return (
		<Provider store={store}>
			<div>
				<Layout />
				{/* <DevTools /> */}
			</div>
		</Provider>
	);
};

export default App;
