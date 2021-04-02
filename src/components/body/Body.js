import React from "react";
import "./Body.css";
import CovidLogo from "../../assets/covid.png";
import Left from "./left/Left";
import Right from "./right/Right";

function Body({ result, datewiseInfos, countries }) {
	return (
		<div className="body">
			<Left
				result={result}
				datewiseInfos={datewiseInfos}
				countries={countries}
			/>
			{datewiseInfos != null ? (
				<Right countries={countries} datewiseInfos={datewiseInfos} />
			) : (
				<img
					src={CovidLogo}
					alt="COVID-19"
					className="covid_icon"
					width="100"
					height="100"
				/>
			)}
		</div>
	);
}

export default Body;
