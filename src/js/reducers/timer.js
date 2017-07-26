const timer = (
	state = {
		seconds: 3600,
		running: false
	},
	action
) => {
	switch (action.type) {
		case "SET_TIMER":
			return { ...state, seconds: action.seconds };
		case "RESET_TIMER":
			return { seconds: 3600, running: false };

		case "START_TIMER":
			return { ...state, running: true };

		case "STOP_TIMER":
			return { ...state, running: false };

		case "TOGGLE_TIMER":
			return { ...state, running: !state.running };
		default:
			return state;
	}
};

export default timer;
