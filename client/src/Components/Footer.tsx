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
					<a href="https://github.com/MichaelYang120/">
					{(githubIcon("43px"))}
					</a>
				</span>
				<span style={iconcontainer}>
					<a href="https://www.linkedin.com/in/michaelyang2023/">
					{(linkedinIcon("43px"))}
					</a>
				</span>
				<span style={iconcontainer}>
					<a href="mailto:michaelyangiscoding@gmail.com">
					{(emailIcon("30px"))}
					</a>
				</span>
			</div>
			<div>© 2023 MichaelYang.io. All rights reserved.</div>
		</div>
	);
}