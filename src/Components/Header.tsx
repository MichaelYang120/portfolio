import React from "react";

export default function Header() {
	const headerstyle = {
		textAlign: "center" as "center",
		backgroundColor:"red",
		padding: "4em 0em",
		display:"flex"
	}
	const headingtextstyle = {
		fontSize:"3em",
		fontWeight:"900",
		textTransform:"capitalize" as "capitalize",
		margin:"0 auto",
        backgroundColor:"red",

	}
	const headingtext = "test";
	return (
		<div style={headerstyle}>
			<div style={headingtextstyle}>{headingtext}</div>
			{/* {headingtextarr.map((word) => (
				<div style={headingtextstyle}>{word}</div>
			))} */}
		</div>
	);
}