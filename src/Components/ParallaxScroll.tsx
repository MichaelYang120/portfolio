import React from "react";
import techimage from "../Assets/ramiro-mendes-CjS3QsRuxnE-unsplash.jpg"

export default function ParallaxScroll() {

	const titletext = "Come with me and explore my developer journey"

	const backgroundimagestyle = {
		backgroundImage:`url(${techimage})`,
		height:"100vh",
		backgroundSize:"cover",
		backgroundRepeat:"no-repeat",
		backgroundAttachment:"fixed",
		backgroundPosition:"center"
	}
	const textstyle = {
		margin:"0",
		textAlign:"center" as "center",
		paddingTop:"4em",
		fontSize:"2em",
		fontWeight:"900",
		textTransform:"capitalize" as "capitalize",
	}

	return (
		<>
			<div style={backgroundimagestyle}>
				<div style={textstyle}>{titletext}</div>
			</div>
		</>
	);
}