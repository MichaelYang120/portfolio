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
		margin: "auto",
	}

	const blogheader = {
		textAlign: "right" as "right",
		padding: "1em 1em",
		display:"flex",
		position: "sticky" as "sticky",
		top:"0",
		zIndex:'3',
		// background:"white",
		fontSize:"3em",
		fontWeight:"900",
		textTransform:"capitalize" as "capitalize",
		margin:"0 auto",
		fontStyle: "oblique",
	}

	return (
		<>
		<h1 style={blogheader}>Blog</h1>
		{blogDetails.map((value) =>
			<div style={blogcontainer}>
				<h1 contentEditable="true" style={{textAlign:"center", textTransform:"capitalize"}}>{value["title"]}</h1>
				<p>Posted: {convertdate(value["timestamp"]["_seconds"])}</p>
				<pre contentEditable="true">{convertNewlineChar(value["text"])}</pre>
				<button>Update</button>
			</div>
		)}
		</>
	)

}