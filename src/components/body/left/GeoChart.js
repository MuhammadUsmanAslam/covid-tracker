import React, { useEffect, useState } from "react";
import "./GeoChart.css";
import { Chart } from "react-google-charts";
import CovidSpinner from "../../CovidSpinner";

function GeoChart({ countries }) {
	const [geo, setGeo] = useState([]);
	useEffect(() => {
		setGeo(
			countries.map((country) => {
				if (country.name == "USA") {
					country.name = "United States";
				} else if (country.name == "UAE") {
					country.name = "United Arab Emirates";
				} else if (country.name == "UK") {
					country.name = "United Kingdom";
				} else if (country.name == "Libyan Arab Jamahiriya") {
					country.name = "Libya";
				}
				return [country.name, country.casesPerOneMillion];
			})
		);
	}, [countries]);
	return (
		<div className="geochart">
			<h2 className="geochart__heading">
				Countrywise cases per million population
			</h2>
			<Chart
				loader={<CovidSpinner />}
				chartType="GeoChart"
				data={[["Country", "CasesPerMillion"], ...geo]}
				options={{
					colorAxis: { colors: ["#e31b23", "#000"] },
					backgroundColor: "#81d4fa",
					datalessRegionColor: "#f8bbd0",
					defaultColor: "#f5f5f5",
				}}
				mapsApiKey="YOUR_KEY_HERE"
				rootProps={{ "data-testid": "1" }}
			/>
		</div>
	);
}

export default GeoChart;
