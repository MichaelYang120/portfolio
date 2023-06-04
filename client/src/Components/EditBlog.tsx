import React, { useState, useEffect } from "react";
import { getBlogDetails } from "../Api/ApiRequest";
import { convertNewlineChar, convertdate } from "../Includes/Functions";

export default function EditBlog() {
	const [blogDetails, setBlogDetails] = useState([]);
	// mid end file that allows you to save your blog updates to firebase cloud
	const [tmpTitle, setTmpTitle] = useState("");
	const [tmpText, setTmpText] = useState("");

	useEffect(() => {
		async function getBlog() {
			var result: any = await getBlogDetails();
			setBlogDetails(result);
		}
		getBlog();
	}, []);

	const debug = false;

	const updateblogentry = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(event)
		async function postJSON(data:any) {
			try {
				const response = await fetch(`https://us-central1-portfolio-f4982.cloudfunctions.net/app/entries/${event}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				});
			  console.log(JSON.stringify(data))
		  
			  const result = await response.json();
			  console.log("Success:", result);
			} catch (error) {
			  console.error("Error:", error);
			}
		};
		if(debug) {
			// console.log(tmpTitle);
			// console.log(tmpText);

		}

		// added regreplace for new line characters
		// const regreplaceText = tmpText.replace(/(\r\n|\n|\r)/gm, "--n")
		if(debug) {
			// console.log(regreplaceText);

		}
		// const data = { title: tmpTitle, text: regreplaceText };
		// postJSON(data);

	}

	// styles
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
				<form style={blogcontainer} onSubmit={updateblogentry}>
					<h1 contentEditable="true" suppressContentEditableWarning={true} style={{textAlign:"center", textTransform:"capitalize"}} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setTmpTitle(e.target.value)}}>{value["title"]}</h1>
					{/* conditional added to show what is enable for frontend */}
					{value["contentEnable"] === true ? 
					<label><input type="checkbox" id={value["id"]} name={value["id"]} checked/><span>Enable Content</span></label> : 
					<label><input type="checkbox" id={value["id"]} name={value["id"]}/><span>Enable Content</span></label>}
					<p>Posted: {convertdate(value["timestamp"]["_seconds"])}</p>
					<textarea style={{height:"10em"}} contentEditable={true} suppressContentEditableWarning={true} name="paragraph_text" id="text" placeholder="text" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {setTmpText(e.target.value)}}>{convertNewlineChar(value["text"])}</textarea>
					<input type="submit" value={"Update"}/>
				</form>
			)}
			<div style={blogcontainer}>
				<button>Update All</button>
			</div>
		</>
	)

}