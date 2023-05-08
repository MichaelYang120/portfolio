import React from "react";

export default function Footer() {
	const footerstyle = {
		backgroundColor: "grey",
		color: "white",
		textAlign: "center" as "center",
		padding: "4em 0em",
		bottom: "0",
		width: "100%",

	}
	return (
		<div style={footerstyle}>
			<div>Contact Me</div>
			<div>© 2023 MichaelYang.io. All rights reserved.</div>
		</div>
	);
}