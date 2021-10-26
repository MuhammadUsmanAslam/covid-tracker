import React from "react";
import Card from "./Card";
import CovidLogo from "../../.././assets/covid.png";
import "./Left.css";
import GeoChart from "./GeoChart";

function Left({ result, datewiseInfos, countries }) {
	return (
		<div className="left">
			<div className="card__container">
				<Card
					typeofcases="Reported"
					today={result.todayCases}
					total={result.totalCases}
				/>
				<Card
					typeofcases="Recovered"
					today={result.todayRecovered}
					total={result.totalRecovered}
				/>
				<Card
					typeofcases="Deaths"
					today={result.todayDeaths}
					total={result.totalDeaths}
				/>
			</div>

			{datewiseInfos == null ? (
				<img
					src={CovidLogo}
					alt="COVID-19"
					className="covid_icon"
					width="100"
					height="100"
				/>
			) : (
				<GeoChart countries={countries} />
			)}
		</div>
	);
}

export default Left;
