import React, { useState, useEffect } from "react";
import { getBlogDetails } from "../Api/ApiRequest";
import { convertNewlineChar, convertdate } from "../Includes/Functions";
import Admin from "../Screens/Admin";

export default function Blog() {
	const [blogDetails, setBlogDetails] = useState([]);
	const [selectValue, setSelectValue] = useState<string>();


	useEffect(() => {
		async function getBlog() {
			var result: any = await getBlogDetails();
			setBlogDetails(result);
		}
		getBlog();
	}, []);

	// filter entries
	const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		var tmpSelectValue = event.target.value
		setSelectValue(tmpSelectValue)
		console.log(tmpSelectValue)
		console.log(typeof(tmpSelectValue))
		console.log(selectValue)
	}

	// styles
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
		fontSize:"3em",
		fontWeight:"900",
		textTransform:"capitalize" as "capitalize",
		margin:"0 auto",
		fontStyle: "oblique",
	}

	return (
		<>
		<h1 style={blogheader}>Blog</h1>
		<form>
			<select onChange={selectChange}>
				<option selected disabled>Choose one</option>
				<option value="all">all</option>
				<option value="false">false</option>
				<option value="true">true</option>
			</select>
		</form>
		{blogDetails.map((value) => {
			if(typeof(selectValue) !== "undefined" && selectValue === "true") {
				if(value["contentEnable"] === true) {
					return (
						<div style={blogcontainer}>
							<h2 style={{textAlign:"center", textTransform:"capitalize"}}>{value["title"]}</h2>
							<p>Posted: {convertdate(value["timestamp"]["_seconds"])}</p>
							<pre>{convertNewlineChar(value["text"])}</pre>
						</div>
					)
				}
			}
			if(typeof(selectValue) !== "undefined" && selectValue === "false") {
				if(value["contentEnable"] === false) {
					return (
						<div style={blogcontainer}>
							<h2 style={{textAlign:"center", textTransform:"capitalize"}}>{value["title"]}</h2>
							<p>Posted: {convertdate(value["timestamp"]["_seconds"])}</p>
							<pre>{convertNewlineChar(value["text"])}</pre>
						</div>
					)
				}
			}
			if(selectValue === "all" || selectValue === null || typeof(selectValue) === "undefined") {
				return (
					<div style={blogcontainer}>
						<h2 style={{textAlign:"center", textTransform:"capitalize"}}>{value["title"]}</h2>
						<p>Posted: {convertdate(value["timestamp"]["_seconds"])}</p>
						<pre>{convertNewlineChar(value["text"])}</pre>
					</div>
				)
			}
			// added due to warning message: Array.prototype.map() expects a value to be returned at the end of arrow function
			return(
				<></>
			)
		})}
		<Admin />
		</>
	)

}