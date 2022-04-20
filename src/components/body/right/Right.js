import React from "react";
import LineChart from "./LineChart";
import "./Right.css";
import TableComponent from "./TableComponent/TableComponent";

function Right({ countries, datewiseInfos }) {
	return (
		<div className="right">
			<h3 className="right__heading">live cases by country</h3>
			<div className="right__table-headings">
				<p className="right__table-heading-left">Country</p>
				<p className="right__table-heading-right">Cases</p>
			</div>
			<div className="right__countries-list">
				<table className="right__table">
					<tbody>
						{countries.map((country, index) => {
							return <TableComponent key={index} country={country} />;
						})}
					</tbody>
				</table>
			</div>
			<LineChart datewiseInfos={datewiseInfos} />
		</div>
	);
}

export default Right;
