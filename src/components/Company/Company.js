import React from "react";
import styles from "./Company.module.css";
import Input from "../UI/Input/Input";

const Company = ({ item, changeHandler }) => {
	const calculateCargoBays = (boxes) => {
		if (boxes == null || boxes === "") {
			return 0;
		} else {
			const cargoBays = boxes.split(",").reduce((acum, item) => {
				return (acum += +item);
			}, 0);
			return Math.floor(cargoBays / 10) + 1;
		}
	};

	if (item.name === undefined) {
		return (
			<div className={styles.Company}>
				<h2>No data</h2>
			</div>
		);
	} else {
		return (
			<div className={styles.Company}>
				<h2>{item.name}</h2>
				<a href={item.email}>{item.email}</a>
				<p>
					Namber of required cargo bays <span>{calculateCargoBays(item.boxes)}</span>
				</p>
				<p>Cargo boxes</p>
				<div className={styles.InputBox}>
					<Input
						onChange={changeHandler}
						value={item.boxes == null ? "" : item.boxes}
					></Input>
				</div>
			</div>
		);
	}
};

export default Company;
