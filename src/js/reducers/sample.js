const sample = (state = { default: "state" }, action) => {
	switch (action.type) {
		case "SAMPLE_ACTION":
			return {
				...state,
				default: "state2"
			};

		default:
			return state;
	}
};

export default sample;
