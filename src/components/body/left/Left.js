import React from "react";
import Card from "./Card";
import "./Left.css";
import GeoChart from "./GeoChart";
import CovidSpinner from "../../CovidSpinner";

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
				<CovidSpinner />
			) : (
				<GeoChart countries={countries} />
			)}
		</div>
	);
}

export default Left;
