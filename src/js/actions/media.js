export const setHeaderVisibility = headerVisible => {
	return {
		type: "SET_HEADER_VISIBILITY",
		headerVisible
	};
};

export const setMedia = (type, url, position = 0) => {
	return {
		type: "SET_MEDIA",
		type,
		url,
		position
	};
};

export const clearMedia = () => {
	return {
		type: "CLEAR_MEDIA"
	};
};

export const setText = text => {
	return {
		type: "SET_TEXT",
		text
	};
};

export const clearText = () => {
	return {
		type: "CLEAR_TEXT"
	};
};

export const setMediaPosition = position => {
	return {
		type: "SET_MEDIA_POSITION",
		position
	};
};
