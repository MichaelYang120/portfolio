import React from "react";

export default function Footer() {
	const headerstyle = {
		backgroundColor: "grey",
		textAlign: "center" as "center",
		padding: "4em 0em",
        bottom: "0"
	}
	return (
		<div style={headerstyle}>
			<div>This is the Footer</div>
		</div>
	);
}