import React, { useState, useEffect } from "react";
import { getBlogDetails } from "../Api/ApiRequest";

export default function Blog() {
	const [blogDetails, setBlogDetails] = useState([]);
	const [arr, setArr] = useState([]);

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

	interface T {

	}
	const newarray:Array<T> = []
	blogDetails.forEach(element => {
		// convert unix timestamp
		const timestamp:string = (element["timestamp"]["_seconds"]);
		const ConvertTimeToNumber:number = Number(timestamp);
		const timeValue:number = ConvertTimeToNumber.valueOf();
		// const date:Date = new Date(timestamp * 1000);
		const date:Date = new Date(timeValue * 1000);
		// desired date convert here
		const dateposted = date.toDateString()
		// example output: Thu Jun 01 2023

		// convert new line characters for text ex: --n 
		const text:string = element["text"];
		const regexText = text.replace("--n", "/\n/");

		const title:string = element["title"];

		var dataset = {"text":regexText, "dateposted":dateposted, "title":title}

		var vartmparr = [dataset]
		if(vartmparr.length !== 0) {
			const newarray = [dataset, vartmparr]
			console.log(newarray);
		}

	});


	return (
		<>
		{blogDetails.map((value) =>
			<div>
				<h2>{value["title"]}</h2>
				<p>{value["timestamp"]["_seconds"]}</p>
				<p>{value["text"]}</p>
			</div>
		)}
		</>
	)

}