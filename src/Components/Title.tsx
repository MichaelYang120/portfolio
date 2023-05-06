import React from "react";

export default function Title() {
	const headerstyle = {
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
	const titletextarr = titletext.split(" ");
	console.log(titletextarr)
	return (
		<div style={headerstyle}>
			<div style={titletextstyle}>{titletext}</div>
			{/* {headingtextarr.map((word) => (
				<div style={headingtextstyle}>{word}</div>
			))} */}
		</div>
	);
}