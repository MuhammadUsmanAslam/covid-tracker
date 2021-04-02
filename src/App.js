import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState("worldwide");
	const [result, setResult] = useState([]);
	const [datewiseInfos, setDatewiseInfos] = useState();

	const url =
		country === "worldwide"
			? "https://disease.sh/v3/covid-19/all"
			: `https://disease.sh/v3/covid-19/countries/${country}`;

	// It fetches data of last 180 days from the server
	const lineChartDataURL =
		"https://disease.sh/v3/covid-19/historical/all?lastdays=210";
	const getDateInfo = async () => {
		await fetch(lineChartDataURL)
			.then((response) => response.json())
			.then((data) => {
				const datewiseInfoss = {
					datewiseCases: data.cases,
					datewiseDeaths: data.deaths,
					datewiseRecovered: data.recovered,
				};
				setDatewiseInfos(datewiseInfoss);
			});
	};

	const getResult = async () => {
		await fetch(url)
			.then((res) => res.json())
			.then((data) => {
				const res = {
					todayCases: data.todayCases,
					totalCases: data.cases,
					todayRecovered: data.todayRecovered,
					totalRecovered: data.recovered,
					todayDeaths: data.todayDeaths,
					totalDeaths: data.deaths,
				};
				setResult(res);
			});
	};

	const getCountriesInfo = async () => {
		await fetch("https://disease.sh/v3/covid-19/countries")
			.then((response) => response.json())
			.then((data) => {
				const countries = data.map((country) => {
					return {
						name: country.country,
						cases: country.cases,
						casesPerOneMillion: country.casesPerOneMillion,
					};
				});
				setCountries(countries);
				console.log(data);
			});
	};

	useEffect(() => {
		getCountriesInfo();
		getResult();
		getDateInfo();
	}, [country]);

	return (
		<div className="app">
			<Header
				countries={countries}
				setCountry={setCountry}
				countries={countries}
			/>
			<Body
				result={result}
				datewiseInfos={datewiseInfos}
				countries={countries}
			/>
		</div>
	);
}

export default App;
