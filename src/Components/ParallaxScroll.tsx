import React from "react";
import techimage from "../Assets/ramiro-mendes-CjS3QsRuxnE-unsplash.jpg"

const imageurl = techimage
const titletext = "Come with me and explore my developer journey"

export function ParallaxScroll(imageurl:any, titletext:string|Array<string>, vhsetting="100vh") {

	const backgroundimagestyle = {
		backgroundImage:`url(${imageurl})`,
		height:vhsetting,
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

	if ((typeof(titletext) === "string")) {
		return (
			<>
				<div style={backgroundimagestyle}>
					{titletext !== "" ? <div style={textstyle}>{titletext}</div> : ""}
				</div>
			</>
		);

	} else {
		return (
			<>
				<div style={backgroundimagestyle}>
					{titletext.map((word:any) => (
						<div style={textstyle}>{titletext}</div>
					))}
			
				</div>
	
			</>
		)

	}

}