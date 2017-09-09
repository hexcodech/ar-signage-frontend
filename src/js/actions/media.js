export const setHeaderVisibility = headerVisible => {
	return {
		type: "SET_HEADER_VISIBILITY",
		headerVisible
	};
};

export const setMedia = (
	mimeType,
	url,
	remaining = 0,
	headerVisible = true
) => {
	return {
		type: "SET_MEDIA",
		mimeType,
		url,
		remaining,
		headerVisible
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

export const setMediaRemaining = remaining => {
	return {
		type: "SET_MEDIA_REMAINING",
		remaining
	};
};
