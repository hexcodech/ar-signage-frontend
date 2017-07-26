const media = (
	state = {
		type: null,
		headerVisible: true,
		url: null,
		text: null,
		position: 0
	},
	action
) => {
	switch (action.type) {
		case "SET_HEADER_VISIBILITY":
			return { ...state, headerVisible: action.headerVisible };
		case "SET_MEDIA":
			return {
				...state,
				type: action.type,
				url: action.url,
				text: null,
				position: action.position ? action.position : 0
			};

		case "CLEAR_MEDIA":
			return {
				...state,
				type: null,
				headerVisible: true,
				url: null,
				text: null,
				position: 0
			};

		case "SET_TEXT":
			return { ...state, text: action.text };

		case "CLEAR_TEXT":
			return { ...state, text: null };

		case "SET_MEDIA_POSITION":
			return { ...state, position: action.position };
		default:
			return state;
	}
};

export default media;
