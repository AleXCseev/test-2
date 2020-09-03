import React, { useEffect } from "react";
import Company from "../Company/Company";
import Sidebar from "../Sidebar/Sidebar";
import { connect } from "react-redux";
import { fetchList, getCompanyInformation, setBoxes } from "../../store/actions/actions";

const Main = (props) => {
	useEffect(props.fetchList, []);

	const companyHandler = (item) => {
		props.getCompanyInformation(item);
	};

	const changeHandler = (e) => {
		props.setBoxes(e.target.value);
	};

	const renderApp = () => {
		if (props.data.length === 0) {
			return <h2>You have no saved data, click the load button</h2>;
		} else {
			return (
				<>
					<Sidebar data={props.data} companyHandler={companyHandler}></Sidebar>
					<Company item={props.activeCompany} changeHandler={changeHandler}></Company>
				</>
			);
		}
	};

	return renderApp();
};

const mapStateToProps = (state) => {
	const filteredList = state.main.list.filter((item) => {
		return item.name.toLowerCase().indexOf(state.main.filter.toLowerCase()) > -1;
	});
	return {
		data: filteredList,
		activeCompany: state.main.activeCompany,
	};
};

const mapDispathToProps = (dispatch) => {
	return {
		fetchList: () => dispatch(fetchList()),
		getCompanyInformation: (item) => dispatch(getCompanyInformation(item)),
		setBoxes: (boxes) => dispatch(setBoxes(boxes)),
	};
};

export default connect(mapStateToProps, mapDispathToProps)(Main);
