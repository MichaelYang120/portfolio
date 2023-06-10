import React, { useState } from "react";
import Admin from "../Screens/Admin";

export default function SaveBlog() {
	// mid end file that allows you to save your blog updates to firebase cloud
	const [tmpTitle, setTmpTitle] = useState("");
	const [tmpText, setTmpText] = useState("");

	// debug
	const debug = true;

	const submitText = (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		async function postJSON(data:any) {
			try {
				const response = await fetch("https://us-central1-portfolio-f4982.cloudfunctions.net/app/entries", {
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
			console.log(tmpTitle);
			console.log(tmpText);

		}

		// added regreplace for new line characters
		const regreplaceText = tmpText.replace(/(\r\n|\n|\r)/gm, "--n")
		if(debug) {
			console.log(regreplaceText);

		}
		const data = { title: tmpTitle, text: regreplaceText };
		postJSON(data);


	}

	// styles
	const blogsumitform = {
		display: "grid",
		padding: "30px",
	}

	const blogtitle = {
		marginBottom: "15px"
	}

	const blogtextarea = {
		marginBottom: "15px",
		height: "10em"
	}

	const blogsubmitbtn = {
		maxWidth: "30%",
		height: "3em",
		backgroundColor: "lightgreen"
	}

	return (
			<>
				<div>
					<div>
						<ol>
							<li>
								Start by brainstorming some topics or themes that inspire you. It could be anything from leadership to creativity to personal growth.
							</li>
							<li>
								Once you have your topic, come up with a title for your piece that captures the essence of what you want to convey. The title should be attention-grabbing and make the reader want to read further.
							</li>
							<li>
								Next, write a brief introduction that sets the tone for your piece and gives the reader a sense of what's to come. This could include a personal story or anecdote that relates to your topic.
							</li>
							<li>
								In the body of your piece, provide examples and insights that support your theme. Use your own experiences and observations to add depth and meaning to your writing.
							</li>
							<li>
								Don't be afraid to incorporate quotes or references from other sources to bolster your argument or add additional perspectives.
							</li>
							<li>
								As you write, keep in mind the tone and style you want to convey. Do you want your piece to be serious and contemplative, or light-hearted and humorous? Make 	sure your language and tone match the emotions you're trying to evoke.
							</li>
							<li>
								Finally, wrap up your piece with a conclusion that summarizes your main points and leaves the reader with a sense of inspiration or motivation.

							</li>
						</ol>
						<b style={{padding:"20px"}}>
							Remember, the key to writing something inspiring is to tap into your own passions and experiences, and share them in a way that connects with your audience. Good luck with your writing!
						</b>
					</div>
					<form style={blogsumitform} onSubmit={submitText} >
						<input style={blogtitle} type="text" id="title" placeholder="title" value={tmpTitle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setTmpTitle(e.target.value)}}/>
						<textarea style={blogtextarea} name="paragraph_text" id="text" placeholder="text" value={tmpText} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {setTmpText(e.target.value)}}/>
						<input style={blogsubmitbtn} type="submit" id="textsubmit" placeholder="Submit"/>
					</form>
				</div>
				<Admin/>
			</>
		)

}