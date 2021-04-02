import React, { useEffect, useState } from "react";
import "./GeoChart.css";
import CovidLogo from "../../.././assets/covid.png";
import { Chart } from "react-google-charts";

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
				loader={
					<img
						src={CovidLogo}
						alt="COVID-19"
						className="covid_icon"
						width="100"
						height="100"
					/>
				}
				// width={"auto"}
				// height={"auto"}
				chartType="GeoChart"
				data={[["Country", "CasesPerMillion"], ...geo]}
				options={{
					colorAxis: { colors: ["#e31b23", "#000000"] },
					backgroundColor: "#81d4fa",
					datalessRegionColor: "#f8bbd0",
					defaultColor: "#f5f5f5",
				}}
				// Note: you will need to get a mapsApiKey for your project.
				// See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
				mapsApiKey="YOUR_KEY_HERE"
				rootProps={{ "data-testid": "1" }}
			/>
		</div>
	);
}

export default GeoChart;
