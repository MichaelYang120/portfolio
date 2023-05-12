import React from "react";
import defaultimage from "../Assets/altumcode-FoTs3ntRoIs-unsplash.jpg"
import {SkillsIcons} from "./SkillsIcons"
import ContentText from "./ContentText";
import ContentTextArr from "./ContentTextArr";

// this component is a divided component that is split, left half will consist of an image, where the right have will have text content 

export default function ParallaxContent(headingtext:string, infotext:string | string[] | null, defaultheight:string="150vh", lights2:string=defaultimage) {
// export default function ParallaxContent(headingtext:string, infotext:string|Array<string>, defaultheight:string="150vh", lights2:string=defaultimage) {
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
		fontStyle: "oblique",

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
        margin:"0 auto 0 auto",
		boxShadow:"2px 6px 10px -2px rgba(0,0,0,0.79)",
		height:"100vh",

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

	// const projectarr = [
	// 	{
	// 		name:"mortgate calculator",
	// 		description:"testing"
	// 	},
	// 	{
	// 		name:"testing",
	// 		description:"more testing"
	// 	}
	// ]

	// projectarr.map((key) => {
	// 	console.log(key["name"])
	// 	console.log(key["description"])
		
	// })

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
							{/* {infotext.map((value) => 
								<p>{value}<br/></p>
							)} */}
							{/* <ContentText/> */}
							{infotext !== null ? ContentText(infotext) : ContentTextArr()}
							{/* {ContentText(infotext) === null ? ContentText(infotext) : ContentTextArr()} */}
						</div>
					</div>
				</div>
			</>	
		)
	}
}