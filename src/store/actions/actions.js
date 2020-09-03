import axios from "axios";
import {
	LOAD_LIST,
	GET_LIST_OF_LOCAL_STORAGE,
	SAVE_STATE,
	FILTER_LIST,
	GET_COMPANY,
} from "./actionTypes";

export const fetchList = () => {
	return (dispatch) => {
		if (localStorage.companyList) {
			dispatch(getListOfLocalStorage(JSON.parse(localStorage.getItem("companyList"))));
		}
	};
};

export const saveToLocalStorage = () => {
	return (dispatch, getState) => {
		const state = getState().main;
		localStorage.companyList = JSON.stringify(state);
		dispatch(saveState(state));
	};
};

export const searchListItem = (term) => {
	return (dispatch) => {
		dispatch(filteredList(term));
	};
};

export const getCompanyInformation = (item) => {
	return (dispatch) => {
		dispatch(getCompany(item));
	};
};

export const setBoxes = (boxes) => {
	return (dispatch, getState) => {
		const activeCompany = getState().main.activeCompany;
		const editActiveCompanyBoxes = {
			...activeCompany,
			boxes,
		};

		const state = getState().main;

		const filteredState = state.list.filter((item) => item.id !== editActiveCompanyBoxes.id);
		const newState = {
			...state,
			activeCompany: editActiveCompanyBoxes,
			list: [activeCompany, ...filteredState],
		};
		dispatch(getCompany(editActiveCompanyBoxes));
		dispatch(saveState(newState));
	};
};

export const getCompany = (item) => {
	return {
		type: GET_COMPANY,
		item,
	};
};

export const filteredList = (term) => {
	return {
		type: FILTER_LIST,
		term,
	};
};

export const saveState = (newState) => {
	return {
		type: SAVE_STATE,
		newState,
	};
};

export const getListOfLocalStorage = (data) => {
	return {
		type: GET_LIST_OF_LOCAL_STORAGE,
		data,
	};
};

export const loadList = () => {
	return (dispatch) => {
		async function fetchMyAPI() {
			let response = await axios.get("https://test-f5843.firebaseio.com/.json");
			const data = await response.data;
			dispatch({
				type: LOAD_LIST,
				data,
			});
		}

		fetchMyAPI();
	};
};
