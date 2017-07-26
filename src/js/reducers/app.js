import { combineReducers } from "redux";

//import reducers
import displayId from "js/reducers/display-id";
import timer from "js/reducers/timer";
import media from "js/reducers/media";

export default combineReducers({
	displayId,
	timer,
	media
});
