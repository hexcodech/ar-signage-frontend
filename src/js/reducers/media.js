const media = (
	state = {
		type: null,
		headerVisible: true,
		url: null,
		text: null,
		remaining: 0
	},
	action
) => {
	switch (action.type) {
		case "SET_HEADER_VISIBILITY":
			return { ...state, headerVisible: action.headerVisible };
		case "SET_MEDIA":
			return {
				...state,
				type: action.mimeType,
				url: action.url,
				text: null,
				remaining: action.remaining,
				headerVisible: action.headerVisible
			};

		case "CLEAR_MEDIA":
			return {
				...state,
				type: null,
				headerVisible: true,
				url: null,
				text: null,
				remaining: 0
			};

		case "SET_TEXT":
			return { ...state, text: action.text };

		case "CLEAR_TEXT":
			return { ...state, text: null };

		case "SET_MEDIA_REMAINING":
			return { ...state, remaining: action.remaining };
		default:
			return state;
	}
};

export default media;
