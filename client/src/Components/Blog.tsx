import React, { useState, useEffect } from "react";
import { getBlogDetails } from "../Api/ApiRequest";

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

	const getDate = (timestamp: number): Date => {
		return new Date(timestamp * 1000);
	};

	const convertdate = (time:string) => {
		// convert unix timestamp
		const timestamp:string = (time);
		const ConvertTimeToNumber:number = Number(timestamp);
		const timeValue:number = ConvertTimeToNumber.valueOf();
		const date:Date = new Date(timeValue * 1000);
		// desired date convert here
		const setdateposted = date.toDateString()
		return setdateposted;
		// example output: Thu Jun 01 2023

	}

	const convertNewlineChar = (text:string) => {
		// convert new line characters for text ex: --n 
		const regexText = text.replace(/--n/g, "\n");
		return regexText;
	
	}

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