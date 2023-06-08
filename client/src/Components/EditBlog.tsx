import React, { useState, useEffect } from "react";
import { deletePost, getBlogDetails, updatePost } from "../Api/ApiRequest";
import { convertNewlineChar, convertdate } from "../Includes/Functions";

export default function EditBlog() {
	const [blogDetails, setBlogDetails] = useState([]);
	// mid end file that allows you to save your blog updates to firebase cloud
	const [tmpTitle, setTmpTitle] = useState("");
	const [tmpText, setTmpText] = useState("");
	const [submitButton, setSubmitButton] = useState("");
	const [tmpCheckStatus, setTmpCheckStatus] = useState(Boolean);

	useEffect(() => {
		async function getBlog() {
			var result: any = await getBlogDetails();
			setBlogDetails(result);
		}
		getBlog();
	}, []);

	const debug = false;

	// update post
	const updateblog = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(submitButton)
		var postId = event.currentTarget.getAttribute("post-id");
		// console.log(tmpTitle)
		// console.log(tmpText)
		if(tmpTitle === null) {
			var postTitle = event.currentTarget.getAttribute("post-title");

		} else {
			postTitle = tmpTitle;
		}

		if(submitButton === "updateblogentry") {
			// added regreplace for new line characters
			const regreplaceText = tmpText.replace(/(\r\n|\n|\r)/gm, "--n")
			if(debug) {
				console.log(regreplaceText);
			}

			if(tmpCheckStatus !== null) {
				var data = { title: postTitle, text: regreplaceText, contentEnable: tmpCheckStatus };
				updatePost(data, postId);
				
			} else {
				var data2 = { title: postTitle, text: regreplaceText};	
				updatePost(data2, postId);
			}
		}

		if(submitButton === "deleteblogentry") {
			deletePost(postId);
		}

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
				<form style={blogcontainer} post-id={(value["id"])} post-title={value["title"]} onSubmit={updateblog}>
					<textarea
						contentEditable="true"
						suppressContentEditableWarning={true}
						placeholder="text"
						style={{
							textAlign:"center",
							textTransform:"capitalize"
							}}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {setTmpTitle(e.target.value)}}
						>
							{value["title"]}
					</textarea>
					<label>
						<input type="checkbox"  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setTmpCheckStatus(e.target.checked)}} defaultChecked={value["contentEnable"]}/>
						Enable Content
					</label>
					<p>Posted: {convertdate(value["timestamp"]["_seconds"])}</p>
					{value["revision"] !== null ? <p>Revision: {convertdate(value["revision"]["_seconds"])}</p> : ""}
					<p>Post Id: {(value["id"])}</p>
					<textarea
						style={{
							height:"10em"
							}}
						contentEditable={true}
						suppressContentEditableWarning={true}
						name="paragraph_text"
						id="text"
						placeholder="text"
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {setTmpText(e.target.value)}}>{convertNewlineChar(value["text"])}
					</textarea>
					<input type="submit" value="Update" id={value["id"]} onClick={() => setSubmitButton('updateblogentry')} name="updateblogentry"/>
					<input type="submit" value="Delete" id={value["id"]} onClick={() => setSubmitButton('deleteblogentry')} name="deleteblogentry"/>
				</form>
			)}
			<div style={blogcontainer}>
				<button>Update All</button>
			</div>
		</>
	)

}