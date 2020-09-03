import React from "react";
import styles from "./CompanyLink.module.css";
import { NavLink } from "react-router-dom";

const CompanyLink = ({ item, companyHandler }) => {
	const link = item.name.split(" ").join("-").toLowerCase();
	return (
		<div className={styles.Link}>
			<NavLink to={"/" + link} onClick={() => companyHandler(item)}>
				{item.name}
			</NavLink>
		</div>
	);
};

export default CompanyLink;
