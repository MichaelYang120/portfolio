import React from "react";

const test = [
    {
        name:"mortgate calculator",
        description:"I love testing"
    },
    {
        name:"this is a test",
        description:"more testing"
    }
]
// export default function ContentText() {
export default function ContentTextArr(infotext:any=test) {
// export default function ContentTextArr(infotext:Array<string|object>) {


	return (
		infotext.map((value:any) => 
			<>
				<p>{value["name"]}<br/></p>
                <p>{value["description"]}</p>
			</>
		)

	);
}