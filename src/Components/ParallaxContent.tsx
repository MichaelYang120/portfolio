import React from "react";
import defaultimage from "../Assets/altumcode-FoTs3ntRoIs-unsplash.jpg"
import {SkillsIcons} from "./SkillsIcons"


// this component is a divided component that is split, left half will consist of an image, where the right have will have text content 

export default function ParallaxContent(headingtext:string, infotext:string|Array<string>, defaultheight:string="150vh", lights2:string=defaultimage) {
	const titlestyle = {
		textAlign: "center" as "center",
		padding: "2em 0em",
		display:"flex",
		position: "sticky" as "sticky",
		top:"0",
		zIndex:'3',
		background:"white",
	}

	const contentstyle = {
		height:defaultheight,
	}

	const titletextstyle = {
		fontSize:"3em",
		fontWeight:"900",
		textTransform:"capitalize" as "capitalize",
		margin:"0 auto",
		borderBottom: "1px black solid",

	}
    
	const mainstyles = {
		backgroundSize:"cover",
		backgroundRepeat:"no-repeat",
		backgroundAttachment:"fixed",
		backgroundPosition:"center",
		position: "sticky" as "sticky",
		top:"0",
		height:"100vh",
		maxWidth:"50%",
		width:"50%"
	}
    
	const infoboxcontainerstyle = {
        width:"50%",
		float:"right" as "right",
        background:"white",
        margin:"0 auto 0 auto"

	}

	const infoboxstlye = {
		padding: "80px 50px",
		margin: "40px 60px",
		border:"black solid 1px",
		borderRadius:"5px",
		zIndex:"2",
		position:"relative" as "relative",
		background: "white",
        maxWidth:"100%"

	}

	const infoboxarraystyle = {
		zIndex:"2",
		position:"relative" as "relative",
		padding:"40px 60px"
	}

	if (typeof(infotext) === "string") {
		return (
			<>
				<div style={contentstyle}>
					<img src={lights2} alt="blurbg" style={mainstyles}/>
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
					</div>
				</div>
			</>
		)
	} else {
		return (
			<>
				<div style={contentstyle}>
					<img src={lights2} alt="blurbg" style={mainstyles}/>
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
						<div style={infoboxarraystyle}>
							<SkillsIcons />
							{infotext.map((word:any) => (
								<p>{word}<br/></p>
							))}
						</div>
					</div>
				</div>
			</>	
		)
	}
}