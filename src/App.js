import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
	return (
		<div className={styles.App}>
			<Header></Header>
			<div className={styles.Wrapper}>
				<Switch>
					<Route patch="/:name?" component={Main}></Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
