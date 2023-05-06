import React, { useEffect, useRef, useState } from "react";

export default function Header() {
	const [height, setHeight] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	const headerstyle = {
		textAlign: "center" as "center",
		backgroundColor:"red",
		padding: "4em 0em",
		display:"flex",
		position: "sticky" as "sticky",
		top:"0"
	}
	const headingtextstyle = {
		fontSize:"3em",
		fontWeight:"900",
		textTransform:"capitalize" as "capitalize",
		margin:"0 auto",
        backgroundColor:"red",

	}

	useEffect(() => {

	}, []);

	const headingtext = "testing";

	return (
		<div style={headerstyle}>
			<div 
				id="header" 
				className="header" 
				ref={ref} 
				style={headingtextstyle}
			>
				{headingtext}
			</div>
		</div>
	);
}