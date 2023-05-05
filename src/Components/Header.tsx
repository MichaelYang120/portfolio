import React from "react";

export default function Header() {
	const headerstyle = {
		backgroundColor: "grey",
		textAlign: "center" as "center",
		padding: "4em 0em"
		
	}
	return (
		<header style={headerstyle}>
			<div>Welcome to my portfolio page</div>
		</header>
	);
}