import React from "react";

import Header from "./Header";
import Media from "./Media";

import "./Layout.scss";

const Layout = () => {
	return (
		<div styleName="layout">
			<Header />
			<Media />
		</div>
	);
};

export default Layout;
