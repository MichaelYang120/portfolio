import React from "react";

const test = [
    {
        name:"mortgate calculator",
        description:"A JavaScript mortgage calculator is a tool that allows users to calculate mortgage payments based on inputs such as the loan amount, interest rate, and term length. It uses JavaScript programming language to perform calculations and update the payment amount in real-time as the user changes the input values. Typically, the mortgage calculator will also include input fields for property taxes, homeowners insurance, and private mortgage insurance (PMI), which are used to calculate the total monthly payment."
    },
    {
        name:"Ecom",
        description:"An e-commerce webpage listing products with an API using React TypeScript would involve using components to display a list of products retrieved from the API. The implementation would likely involve using React hooks such as useState and useEffect to manage state and perform fetching of data from the API. Bubble sort could be implemented to filter and sort the products based on different criteria such as price or popularity. Testing these hooks and functions would be important to ensure that they are functioning correctly and efficiently. Additionally, TypeScript could be used to add type checking and improve the development process. Overall, this would result in a powerful and efficient e-commerce website with a scalable backend API and a user-friendly frontend design."
    }

]
// export default function ContentText() {
export default function ContentTextArr(infotext:any=test) {
// export default function ContentTextArr(infotext:Array<string|object>) {

    const projectheadingstyle = {
		textTransform:"capitalize" as "capitalize",    
    
    }

	return (
		infotext.map((value:any) => 
			<>
				<h2 style={projectheadingstyle}>{value["name"]}<br/></h2>
                <p>{value["description"]}</p>
			</>
		)

	);
}