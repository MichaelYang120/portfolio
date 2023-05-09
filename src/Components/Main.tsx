import React from "react";
import lights from "../Assets/jeshoots-com-pUAM5hPaCRI-unsplash.jpg"
// import lights2 from "../Assets/beautiful-view-trees-rain-forest-captured-foggy-weather.jpg"

let infotextexample = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit cupiditate animi minus expedita, commodi doloribus voluptas beatae ab incidunt earum consequatur non maiores, reiciendis iste voluptatum quidem unde laboriosam officia quas quasi. Maiores sunt velit iure accusamus accusantium deserunt adipisci necessitatibus ipsa nulla nisi rem pariatur, facilis debitis vel!"

export default function Main(headingtext="", mainbgimage=lights, infotext:Array<string>|string=infotextexample) {

	const titlestyle = {
		textAlign: "center" as "center",
		padding: "2em 0em",
		display:"flex",
		position: "sticky" as "sticky",
		top:"0",
		zIndex:'3'
	}

	const contentstyle = {
		height:"220vh"
	}

	const titletextstyle = {
		fontSize:"3em",
		fontWeight:"900",
		textTransform:"capitalize" as "capitalize",
		margin:"0 auto",
	}

	const mainstyles = {
		backgroundSize:"cover",
		backgroundRepeat:"no-repeat",
		backgroundAttachment:"fixed",
		backgroundPosition:"center",
		position: "sticky" as "sticky",
		top:"0",
		width:"100%",
		zIndex:"1",
		height:"100vh",
		border:"none",
	}

	const infoboxcontainerstyle = {
		maxWidth:"50%",
		margin:"auto",
	}

	const infoboxstlye = {
		padding: "80px 50px",
		margin: "40px 5px",
		border:"black solid 1px",
		borderRadius:"5px",
		zIndex:"2",
		position:"relative" as "relative",
		background: "white"

	}

	if (typeof(infotext) === "string") {
		return (
			<>
				<div>
					<img src={mainbgimage} style={mainstyles} alt="blurbg"/>
						<div style={contentstyle}>
							<div style={infoboxcontainerstyle}>
								<div style={titlestyle}>
									<div
										id="title"
										className="title"
										style={titletextstyle}
									>
										{headingtext}
									</div>
								</div>
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
							<div style={infoboxcontainerstyle}>
								<div style={titlestyle}>
									<div
										id="title"
										className="title"
										style={titletextstyle}
									>
										{headingtext}
									</div>
								</div>
								{infotext.map((word:any) => (
									<div style={infoboxstlye}>{word}</div>
								))}
							</div>
						</div>
				</div>
			</>
		);
	}

}