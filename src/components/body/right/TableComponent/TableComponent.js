import React from "react";

const TableComponent = ({ country }) => {
	return (
		<tr>
			<td className="right__table__td__name">
				<h5>{country.name}</h5>
			</td>
			<td className="right__table__td__cases">
				<h5>{country.cases}</h5>
			</td>
		</tr>
	);
};

export default TableComponent;
