import React from "react";
import styles from "./Header.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { connect } from "react-redux";
import { saveToLocalStorage, loadList, searchListItem } from "../../store/actions/actions";

const Header = (props) => {
	return (
		<header className={styles.Header}>
			<div className={styles.Logo}>
				<h1 className={styles.Text}>Cargo Planer</h1>
			</div>
			<div className={styles.Search}>
				<Input placeholder="Search" onChange={(e) => props.search(e.target.value)}></Input>
			</div>
			<div className={styles.ButtonGroup}>
				<Button type="primary" onClick={() => props.load()}>
					Load
				</Button>
				<Button type="success" onClick={() => props.save()}>
					Save
				</Button>
			</div>
		</header>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		save: () => dispatch(saveToLocalStorage()),
		load: () => dispatch(loadList()),
		search: (term) => dispatch(searchListItem(term)),
	};
};

export default connect(null, mapDispatchToProps)(Header);
