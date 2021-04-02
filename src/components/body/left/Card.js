import React from "react";
import "./Card.css";

function Card({ typeofcases, today, total }) {
	const notUpdated = "Not Updated";
	const k = `+${today / 1000}K`;
	const m = `${total / 1000000}m`;
	return (
		<div
			className={
				typeofcases === "Reported"
					? "card cardcolor__cases"
					: typeofcases === "Deaths"
					? "card cardcolor__deaths"
					: "card cardcolor__recovered"
			}
		>
			<h1>{typeofcases}</h1>
			<h2>{today === 0 ? notUpdated : k}</h2>
			<h4>{m}</h4>
		</div>
	);
}

export default Card;
