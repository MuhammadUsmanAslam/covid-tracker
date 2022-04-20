import React from "react";
import "./Header.css";

function Header({ countries, setCountry }) {
	return (
		<div className="header">
			<h1 className="header__logotext">Covid-19 Tracker</h1>
			<form>
				<select
					onChange={(event) => {
						return setCountry(event.target.value);
					}}
					name="countries"
					id="countries"
					className="header__select"
				>
					<option value="worldwide">Worldwide</option>
					{countries.map((country, index) => {
						return (
							<option key={index} value={country.value}>
								{country.name}
							</option>
						);
					})}
				</select>
			</form>
		</div>
	);
}

export default Header;
