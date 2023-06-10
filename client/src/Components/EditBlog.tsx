import React, { useState, useEffect } from "react";
import { deletePost, getBlogDetails, updatePost } from "../Api/ApiRequest";
import { convertNewlineChar, convertdate } from "../Includes/Functions";
import Admin from "../Screens/Admin";

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

	// reset state value
	const clearState = () => {
		if(typeof(tmpText) !== "undefined" && tmpText !== "") {
			setTmpText("");

		}
		if(typeof(tmpTitle) !== "undefined" && tmpTitle !== "") {
			setTmpTitle("");
		}
		if(typeof(tmpCheckStatus) !== "undefined") {
			if(debug) {
				console.log(tmpCheckStatus);
			}
			setTmpCheckStatus(Boolean(null));
			if(debug) {
				console.log(tmpCheckStatus);
			}
		}
	}

	// update post //delete post
	const updateblog = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(submitButton);
		var postId = event.currentTarget.getAttribute("post-id");
		if(debug) {
			console.log(tmpTitle)
			console.log(tmpText)
			console.log(tmpCheckStatus)

		}
		if(tmpTitle === null) {
			var postTitle = event.currentTarget.getAttribute("post-title");

		} else {
			postTitle = tmpTitle;
		}

		// update
		if(submitButton === "updateblogentry") {
			// added regreplace for new line characters
			const regreplaceText = tmpText.replace(/(\r\n|\n|\r)/gm, "--n")
			if(debug) {
				console.log(regreplaceText);
				console.log(tmpCheckStatus)
			}

			var data = { title: postTitle, text: regreplaceText, contentEnable: tmpCheckStatus };
			updatePost(data, postId);
			clearState();
		}

		// delete
		if(submitButton === "deleteblogentry") {
			deletePost(postId);
		}

	}

	// const updateAll = (event: React.FormEvent<HTMLFormElement>) => {
	// 	event.preventDefault();
	// 	const blog = event.target;
	// 	const blogChildNodes = (blog as HTMLInputElement).childNodes
	// 	console.log(blogChildNodes)

	// 	blogChildNodes.forEach(Element => {
	// 		var target:any = ((Element as HTMLFormElement).elements);
	// 		if(typeof(target != "undefined")) {
	// 			console.log(target)
	// 			const tmppostid = target.postvalue.value;
	// 			if(typeof(tmppostid) !== "undefined" || tmppostid !== null) {
	// 				const tmptitle = target.title.value;
	// 				const tmptext = target.text.value;
	// 				const tmpcheckstatusvalue:boolean = target.checkbox.checked;

	// 				const regreplaceText = tmptext?.replace(/(\r\n|\n|\r)/gm, "--n");
	// 				if(debug) {
	// 					// console.log(regreplaceText);
	// 				}

	// 				var data = { title: tmptitle, text: regreplaceText, contentEnable: tmpcheckstatusvalue };
	// 				updatePost(data, tmppostid);
	// 			} else {
	// 				console.log("not here")
	// 			}

	// 		}
	// 	})
	// }

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
				<form id="blog" style={blogcontainer} post-id={(value["id"])} post-title={value["title"]} onSubmit={updateblog}>
					<textarea
						id="title"
						className="title"
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
						<input type="checkbox" id="checkbox" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setTmpCheckStatus(e.target.checked)}} defaultChecked={(value["contentEnable"])}/>
						Enable Content
					</label>
					<p>Posted: {convertdate(value["timestamp"]["_seconds"])}</p>
					{typeof(value["revision"]) !== "undefined" ? <p>Revision: {convertdate(value["revision"]["_seconds"])}</p> : ""}
					<input id="postvalue" contentEditable="false" value={(value["id"])}/>
					<textarea
						style={{
							height:"10em"
							}}
						contentEditable={true}
						suppressContentEditableWarning={true}
						name="paragraph_text"
						id="text"
						className="text"
						placeholder="text"
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {setTmpText(e.target.value)}}>{convertNewlineChar(value["text"])}
					</textarea>
					<input type="submit" value="Update" id={value["id"]} onClick={() => setSubmitButton('updateblogentry')} name="updateblogentry"/>
					<input type="submit" value="Delete" id={value["id"]} onClick={() => setSubmitButton('deleteblogentry')} name="deleteblogentry"/>
				</form>
				)}
				<Admin />
		</>
	)

}