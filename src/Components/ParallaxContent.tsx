import React from "react";
import lights2 from "../Assets/beautiful-view-trees-rain-forest-captured-foggy-weather.jpg"

export default function ParallaxContent() {
	const titlestyle = {
		textAlign: "center" as "center",
		// backgroundColor:"none",
		padding: "2em 0em",
		display:"flex",
		// this is how we create a header that start from bottom and becomes sticky
		position: "sticky" as "sticky",
		top:"0",
		zIndex:'3'
	}

	const contentstyle = {
		height:"220vh",
        background:"pink",
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
		height:"100vh",
		maxWidth:"50%",
	}
    
	const infoboxcontainerstyle = {
        width:"50%",
		float:"right" as "right",
        background:"red",
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

    const headingtext = "this is a test"
    const infotext =  "this is also a test"

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
                    <div style={infoboxstlye}>{infotext}</div>
                </div>
            </div>
        </>
    )
}