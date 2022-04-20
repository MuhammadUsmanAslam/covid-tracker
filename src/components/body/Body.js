import React from "react";
import "./Body.css";
import CovidSpinner from "../CovidSpinner.js";
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
				<CovidSpinner />
			)}
		</div>
	);
}

export default Body;
