import React, { useEffect, useState } from "react";
import "./LineChart.css";
import CovidLogo from "../../.././assets/covid.png";
import { Chart } from "react-google-charts";

function LineChart({ datewiseInfos }) {
	var datewiseinfo = [
		Object.keys(datewiseInfos.datewiseCases),
		Object.values(datewiseInfos.datewiseRecovered),
		Object.values(datewiseInfos.datewiseDeaths),
		Object.values(datewiseInfos.datewiseCases),
	];

	const [graphData, setGraphData] = useState([]);

	useEffect(() => {
		setGraphData([
			["Days: Month/Day/Year", "Recovered", "Deaths", "Cases"],
			...transpose(datewiseinfo),
		]);
		console.log(datewiseInfos);
	}, [datewiseInfos]);
	// It will take transpose of 2D array
	const transpose = (matrix) => {
		return Object.keys(matrix[0]).map((c) => {
			return matrix.map((r) => {
				return r[c];
			});
		});
	};

	return (
		<Chart
			className="line__chart"
			width={"auto"}
			height={"auto"}
			chartType="Line"
			loader={
				<img
					src={CovidLogo}
					alt="COVID-19"
					className="covid_icon"
					width="100"
					height="100"
				/>
			}
			data={graphData}
			options={{
				chart: {
					title: "COVID-19 cases worldwide",
					subtitle: "in millions of last 30 weeks",
				},
			}}
			rootProps={{ "data-testid": "3" }}
		/>
	);
}

export default LineChart;
