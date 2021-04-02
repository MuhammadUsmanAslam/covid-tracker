import React from "react";
import LineChart from "./LineChart";
import "./Right.css";

function Right({ countries, datewiseInfos }) {
	return (
		<div className="right">
			<h3 className="right__heading">live cases by country</h3>
			<tr>
				<td className="right__table__td__name title">
					<h5>Country</h5>
				</td>
				<td className="right__table__td__cases title">
					<h5>Cases</h5>
				</td>
			</tr>
			<div className="right__scrollable">
				{countries.map((country) => {
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
				})}
			</div>
			<LineChart datewiseInfos={datewiseInfos} />
		</div>
	);
}

export default Right;
