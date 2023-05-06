import React from "react";

export default function Main() {

	const mainstyles = {
		// display: "grid"
		backgroundColor:"#eeeff1"
	}

	const infoboxstlye = {
		background: "purple",
		padding: "80px 50px",
		margin: "5px 5px"
	}

	const infotext = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit cupiditate animi minus expedita, commodi doloribus voluptas beatae ab incidunt earum consequatur non maiores, reiciendis iste voluptatum quidem unde laboriosam officia quas quasi. Maiores sunt velit iure accusamus accusantium deserunt adipisci necessitatibus ipsa nulla nisi rem pariatur, facilis debitis vel!"

	const infotext2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit cupiditate animi minus expedita, commodi doloribus voluptas beatae ab incidunt earum consequatur non maiores, reiciendis iste voluptatum quidem unde laboriosam officia quas quasi. Maiores sunt velit iure accusamus accusantium deserunt adipisci necessitatibus ipsa nulla nisi rem pariatur, facilis debitis vel!"

	return (
		<>
			<div style={mainstyles}>
				<div style={infoboxstlye}>{infotext}</div>
				<div style={infoboxstlye}>{infotext2}</div>
				<div style={infoboxstlye}>{infotext2}</div>
				<div style={infoboxstlye}>{infotext2}</div>
				<div style={infoboxstlye}>{infotext2}</div>
				<div style={infoboxstlye}>{infotext2}</div>
			</div>
		</>
	);
}