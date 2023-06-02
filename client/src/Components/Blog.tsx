import React, { useState } from "react";

export default function Blog() {
	const [tmpTitle, setTmpTitle] = useState("");
	const [tmpText, setTmpText] = useState("");

	const submitText = (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// console.log(event);
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
		// console.log(title)
		// console.log(text)
		  
		const data = { title: tmpTitle, text: tmpText };
		postJSON(data);
	}
	return (
			<>
				<div>
					<form onSubmit={submitText} >
						<input type="text" id="title" placeholder="title" value={tmpTitle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setTmpTitle(e.target.value)}}/>
						<input type="text" id="text" placeholder="text" value={tmpText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setTmpText(e.target.value)}}/>
						<input type="submit" id="textsubmit" placeholder="Submit"/>
					</form>
				</div>
			</>
		)

}