import React, { useEffect, useState, ChangeEvent } from "react";

export default function Header() {
	const headerstyle = {
		backgroundColor: "grey",
		textAlign: "center" as "center",
		padding: "4em 0em"
	}
	return (
		<div style={headerstyle}>
			<div>Welcome to my portfolio page</div>
		</div>
	);
}