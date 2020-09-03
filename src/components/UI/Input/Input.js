import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
	const inputType = props.type || "text";
	const cls = [styles.Input];

	return (
		<div className={cls.join(" ")}>
			<input
				type={inputType}
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
			></input>
		</div>
	);
};

export default Input;
