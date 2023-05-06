import React from "react";

export default function Header() {
	const headerstyle = {
		textAlign: "center" as "center",
		backgroundColor:"#eeeff1",
		padding: "4em 0em",
		display:"flex"
	}
	const headingtextstyle = {
		// fontSize:"3em",
		// fontWeight:"900",
		// textTransform:"capitalize" as "capitalize",
		// margin:"0 auto"
	}
	const headingtext = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil labore eius ea totam dicta distinctio voluptatum magni ullam cupiditate reiciendis rem, quibusdam pariatur assumenda aspernatur laboriosam quod minus quidem."
	const headingtextarr = headingtext.split(" ");
	console.log(headingtextarr)
	return (
		<div style={headerstyle}>
			<div style={headingtextstyle}>{headingtext}</div>
			{/* {headingtextarr.map((word) => (
				<div style={headingtextstyle}>{word}</div>
			))} */}
		</div>
	);
}