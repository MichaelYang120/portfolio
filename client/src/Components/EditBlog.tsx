import React, { useState, useEffect } from "react";
import { getBlogDetails } from "../Api/ApiRequest";
import { convertNewlineChar, convertdate } from "../Includes/Functions";

export default function EditBlog() {
	const [blogDetails, setBlogDetails] = useState([]);

	useEffect(() => {
		async function getBlog() {
			var result: any = await getBlogDetails();
			setBlogDetails(result);
		}
		getBlog();
	}, []);

	const blogcontainer = {
		display: "flex",
		width: "100%",
		maxWidth: "60%",
		flexDirection: "column" as "column",
		margin: "30px auto",
	}

	const blogheader = {
		textAlign: "right" as "right",
		padding: "1em 1em",
		display:"flex",
		position: "sticky" as "sticky",
		top:"0",
		zIndex:'3',
		fontSize:"3em",
		fontWeight:"900",
		textTransform:"capitalize" as "capitalize",
		margin:"0 auto",
		fontStyle: "oblique",
	}

	return (
		<>
		<h1 style={blogheader}>Edit Blog</h1>
		{blogDetails.map((value) =>
			<div style={blogcontainer}>
				<h1 contentEditable="true" style={{textAlign:"center", textTransform:"capitalize"}}>{value["title"]}</h1>
				<p>Posted: {convertdate(value["timestamp"]["_seconds"])}</p>
				{/* conditional added to show what is enable for frontend */}
				{value["contentEnable"] === true ? 
				<label><input type="checkbox" id={value["id"]} name={value["id"]} checked/><span>Enable Content</span></label> : 
				<label><input type="checkbox" id={value["id"]} name={value["id"]}/><span>Enable Content</span></label>}
				<pre contentEditable="true">{convertNewlineChar(value["text"])}</pre>
				<button>Update</button>
			</div>
		)}
		<div style={blogcontainer}>
			<button>Update All</button>
		</div>
		</>
	)

}