const displayId = (state = "default", action) => {
	switch (action.type) {
		case "SET_DISPLAY_ID":
			return action.displayId;
		case "RESET_DISPLAY_ID":
			return "default";

		default:
			return state;
	}
};

export default displayId;
