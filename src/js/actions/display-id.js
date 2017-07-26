export const setDisplayId = displayId => {
	return {
		type: "SET_DISPLAY_ID",
		displayId
	};
};

export const resetDisplayId = () => {
	return {
		type: "RESET_DISPLAY_ID"
	};
};
