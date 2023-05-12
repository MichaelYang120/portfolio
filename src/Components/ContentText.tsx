import React from "react";

// export default function ContentText() {
export default function ContentText(infotext:Array<string|object>) {

	return (
		infotext.map((value:any) => 
			<>
				<p>{value}<br/></p>
			</>
		)

	);
}