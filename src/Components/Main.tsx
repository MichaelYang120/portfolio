import React from "react";

export default function Main(headingtext="") {

	const headerstyle = {
		textAlign: "center" as "center",
		// backgroundColor:"none",
		padding: "2em 0em",
		display:"flex",
		// this is how we create a header that start from bottom and becomes sticky
		position: "sticky" as "sticky",
		top:"0",
		background:"grey"
	}
	const headingtextstyle = {
		fontSize:"3em",
		fontWeight:"900",
		textTransform:"capitalize" as "capitalize",
		margin:"0 auto",
	}

	const mainstyles = {
		// display: "grid"
		// backgroundColor:"#eeeff1"
	}
	
	const infoboxstlye = {
		backgroundColor:"aliceblue",
		padding: "80px 50px",
		margin: "5px 5px",
		border:"black solid 1px",
		borderRadius:"10px"
	}

	const infotext = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit cupiditate animi minus expedita, commodi doloribus voluptas beatae ab incidunt earum consequatur non maiores, reiciendis iste voluptatum quidem unde laboriosam officia quas quasi. Maiores sunt velit iure accusamus accusantium deserunt adipisci necessitatibus ipsa nulla nisi rem pariatur, facilis debitis vel!"

	const infotext2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit cupiditate animi minus expedita, commodi doloribus voluptas beatae ab incidunt earum consequatur non maiores, reiciendis iste voluptatum quidem unde laboriosam officia quas quasi. Maiores sunt velit iure accusamus accusantium deserunt adipisci necessitatibus ipsa nulla nisi rem pariatur, facilis debitis vel!"

	return (
		<>
			<div style={mainstyles}>
				<div style={headerstyle}>
					<div 
						id="header" 
						className="header" 
						style={headingtextstyle}
					>
						{headingtext}
					</div>
				</div>
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