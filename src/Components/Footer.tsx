import React from "react";
import { Icons, jqueryIcon, mysqlIcon, phpIcon, reactIcon, typescriptIcon, javascriptIcon, linkedinIcon, githubIcon, emailIcon } from "./Icons";

export default function Footer() {
	const footerstyle = {
		backgroundColor: "grey",
		color: "white",
		textAlign: "center" as "center",
		padding: "5em 0em",
		bottom: "0",
		width: "100%",

	}
	return (
		<div style={footerstyle}>
			<div>Contact Me</div>
			<div>
				{(linkedinIcon("43px"))}
				{(githubIcon("43px"))}
				<div>
					{(emailIcon("30px"))}
				</div>
			</div>
			<div>© 2023 MichaelYang.io. All rights reserved.</div>
		</div>
	);
}