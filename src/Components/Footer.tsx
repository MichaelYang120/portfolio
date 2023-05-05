import React from "react";

export default function Footer() {
	const footerstyle = {
		backgroundColor: "red",
		textAlign: "center" as "center",
		padding: "4em 0em",
		// position: "absolute" as "absolute",
		bottom: "0",
		width: "100%",

	}
	return (
		<footer style={footerstyle}>
			<div>This is the Footer</div>
		</footer>
	);
}