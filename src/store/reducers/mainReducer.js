import {
	LOAD_LIST,
	GET_LIST_OF_LOCAL_STORAGE,
	SAVE_STATE,
	FILTER_LIST,
	GET_COMPANY,
} from "../actions/actionTypes";

const initialState = {
	list: [],
	filter: "",
	activeCompany: {},
};

export default function mainReducer(state = initialState, action) {
	switch (action.type) {
		case LOAD_LIST:
			return {
				...state,
				list: action.data,
			};
		case GET_LIST_OF_LOCAL_STORAGE:
			return {
				...state,
				...action.data,
			};
		case SAVE_STATE:
			return {
				...state,
				...action.newState,
			};
		case FILTER_LIST:
			return {
				...state,
				filter: action.term,
			};
		case GET_COMPANY:
			return {
				...state,
				activeCompany: action.item,
			};
		default:
			return state;
	}
}
