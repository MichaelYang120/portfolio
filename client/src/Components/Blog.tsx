import React from "react";

export default function Blog() {

	const submitText = (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(event);
		async function postJSON(data:any) {
			try {
			  const response = await fetch("https://us-central1-portfolio-f4982.cloudfunctions.net/app/entries", {
				mode: 'no-cors',
				method: "POST", // or 'PUT'
				headers: {
					"Content-Type": "application/json",
					'Accept': '*/*',
					"Access-Control-Allow-Origin": "*",
					"Cache-Control": "no-cache",
					"Access-Control-Allow-Credentials" : "true",
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
		  
		  const data = { title: "", text: "" };
		  postJSON(data);
	}
	return (
			<>
				<div>
					<form onSubmit={submitText} >
						<input type="text" id="title" placeholder="title" />
						<input type="text" id="text" placeholder="text" />
						<input type="submit" id="textsubmit" placeholder="Submit"/>
					</form>
				</div>
			</>
		)

}