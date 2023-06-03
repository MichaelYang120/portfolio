import React, { useState, useEffect } from "react";
import { getBlogDetails } from "../Api/ApiRequest";
import { convertNewlineChar, convertdate } from "../Includes/Functions";

export default function Blog() {
	const [blogDetails, setBlogDetails] = useState([]);

	useEffect(() => {
		async function getBlog() {
			var result: any = await getBlogDetails();
			setBlogDetails(result);
		}
		getBlog();
		// console.log(blogDetails)
	}, []);

	return (
		<>
		{blogDetails.map((value) =>
			<div>
				<h2>{value["title"]}</h2>
				<p>{convertdate(value["timestamp"]["_seconds"])}</p>
				<pre>{convertNewlineChar(value["text"])}</pre>
			</div>
		)}
		</>
	)

}