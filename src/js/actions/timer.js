export const setTimer = seconds => {
	return {
		type: "SET_TIMER",
		seconds
	};
};

export const resetTimer = () => {
	return {
		type: "RESET_TIMER"
	};
};

export const startTimer = () => {
	return {
		type: "START_TIMER"
	};
};

export const stopTimer = () => {
	return {
		type: "STOP_TIMER"
	};
};

export const toggleTimer = () => {
	return {
		type: "TOGGLE_TIMER"
	};
};
