import React from "react";
import { linkedinIcon, githubIcon, emailIcon } from "./Icons";

export default function Footer() {
	const footerstyle = {
		backgroundColor: "grey",
		color: "white",
		textAlign: "center" as "center",
		padding: "5em 0em",
		bottom: "0",
		width: "100%",

	}

	const iconcontainer = {
		margin:"10px"
	}

	const mainiconcontainerstyle = {
		margin:"10px 0"
	}

	return (
		<div style={footerstyle}>
			<div>Contact Me</div>
			<div style={mainiconcontainerstyle}>
				<span style={iconcontainer}>
					{(githubIcon("43px"))}
				</span>
				<span style={iconcontainer}>
					{(linkedinIcon("43px"))}
				</span>
				<span style={iconcontainer}>
					{(emailIcon("30px"))}
				</span>
			</div>
			<div>© 2023 MichaelYang.io. All rights reserved.</div>
		</div>
	);
}