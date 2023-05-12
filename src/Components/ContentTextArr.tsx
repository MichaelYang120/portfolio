import React from "react";

const test = [
    {
        name:"mortgate calculator",
        description:"A JavaScript mortgage calculator is a tool that allows users to calculate mortgage payments based on inputs such as the loan amount, interest rate, and term length. It uses JavaScript programming language to perform calculations and update the payment amount in real-time as the user changes the input values. Typically, the mortgage calculator will also include input fields for property taxes, homeowners insurance, and private mortgage insurance (PMI), which are used to calculate the total monthly payment."
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
				<h2>{value["name"]}<br/></h2>
                <p>{value["description"]}</p>
			</>
		)

	);
}