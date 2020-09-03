import React from "react";
import styles from "./Sidebar.module.css";
import CompanyLink from "./CompanyLink/CompanyLink";

const Sidebar = ({ data, companyHandler }) => {
	const renderCompanyLink = (data) =>
		data.map((item) => {
			return (
				<CompanyLink
					key={item.id}
					item={item}
					companyHandler={companyHandler}
				></CompanyLink>
			);
		});
	return <div className={styles.Sidebar}>{renderCompanyLink(data)}</div>;
};

export default Sidebar;
