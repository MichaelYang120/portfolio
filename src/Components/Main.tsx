import React from "react";
// import lights from "../Assets/joshua-sortino-LqKhnDzSF-8-unsplash.jpg"
// import lights from "../Assets/kevin-bhagat-zNRITe8NPqY-unsplash.jpg"
import lights from "../Assets/jeshoots-com-pUAM5hPaCRI-unsplash.jpg"
// import lights from "../Assets/beautiful-view-trees-rain-forest-captured-foggy-weather.jpg"

let infotextexample = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit cupiditate animi minus expedita, commodi doloribus voluptas beatae ab incidunt earum consequatur non maiores, reiciendis iste voluptatum quidem unde laboriosam officia quas quasi. Maiores sunt velit iure accusamus accusantium deserunt adipisci necessitatibus ipsa nulla nisi rem pariatur, facilis debitis vel!"

export default function Main(headingtext="", infotext:Array<string>|string=infotextexample, mainbgimage=lights) {

	const headerstyle = {
		textAlign: "center" as "center",
		// backgroundColor:"none",
		padding: "2em 0em",
		display:"flex",
		// this is how we create a header that start from bottom and becomes sticky
		position: "sticky" as "sticky",
		top:"0",
		zIndex:'1'
	}

	const contentstyle = {
		height:"200vh"
	}

	const headingtextstyle = {
		fontSize:"3em",
		fontWeight:"900",
		textTransform:"capitalize" as "capitalize",
		margin:"0 auto",
	}

	const mainstyles = {
		// filter:"blur(3px)",
		backgroundSize:"cover",
		backgroundRepeat:"no-repeat",
		backgroundAttachment:"fixed",
		backgroundPosition:"center",
		position: "sticky" as "sticky",
		top:"0",
		width:"100%",
		zIndex:"1",
		height:"100vh",
		border:"none"
	}

	const infoboxcontainerstyle = {
		maxWidth:"50%",
		margin:"auto"
	}
	
	const infoboxstlye = {
		padding: "80px 50px",
		margin: "0px 5px",
		border:"black solid 1px",
		borderRadius:"10px",
		zIndex:"2",
		position:"relative" as "relative",

	}

	if (typeof(infotext) === "string") {
		return (
			<>
				<div> 
					<img src={mainbgimage} style={mainstyles} alt="blurbg"/>
						<div style={contentstyle}>
							<div style={headerstyle}>
								<div 
									id="header" 
									className="header" 
									style={headingtextstyle}
								>
									{headingtext}
								</div>
							</div>
							<div style={infoboxcontainerstyle}>
								<div style={infoboxstlye}>{infotext}</div>
								<div style={infoboxstlye}>{infotext}</div>
								<div style={infoboxstlye}>{infotext}</div>
								<div style={infoboxstlye}>{infotext}</div>
							</div>
						</div>
				</div>
			</>
		);

	} else {

		return (
			<>
				<div> 
					<img src={lights} style={mainstyles} alt="blurbg"/>
						<div style={contentstyle}>
							<div style={headerstyle}>
								<div 
									id="header" 
									className="header" 
									style={headingtextstyle}
								>
									{headingtext}
								</div>
							</div>
							<div style={infoboxcontainerstyle}>
								{infotext.map((word:any) => (
									<div style={headingtextstyle}>{word}</div>
								))}
							</div>
						</div>
				</div>
			</>
		);
	}
	
}