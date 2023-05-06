import React from "react";

export default function Title() {
	const titlestyle = {
		textAlign: "center" as "center",
		backgroundColor:"#eeeff1",
		padding: "4em 0em",
		display:"flex"
		
	}
	const titletextstyle = {
		fontSize:"3em",
		fontWeight:"900",
		textTransform:"capitalize" as "capitalize",
		margin:"0 auto"

	}
	const titletext = "Come with me and explore my developer journey"
	return (
		<div style={titlestyle}>
			<div style={titletextstyle}>{titletext}</div>
		</div>
	);
}