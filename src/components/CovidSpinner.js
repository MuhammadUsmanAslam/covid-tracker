import React from "react";
import "./CovidSpinner.css";
import CovidLogo from "../assets/covid.svg";

const CovidSpinner = () => {
	return (
		<div className="covid-spinner__container">
			<img
				src={CovidLogo}
				alt="COVID-19"
				className="covid-spinner_icon"
				width="100"
				height="100"
			/>
		</div>
	);
};

export default CovidSpinner;
