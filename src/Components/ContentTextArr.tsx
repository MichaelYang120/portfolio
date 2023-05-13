import React from "react";

const test = [
    {
        name:"Ecom",
        description:"An e-commerce webpage listing products with an API using React TypeScript would involve using components to display a list of products retrieved from the API. The implementation would likely involve using React hooks such as useState and useEffect to manage state and perform fetching of data from the API. Bubble sort could be implemented to filter and sort the products based on different criteria such as price or popularity. Testing these hooks and functions would be important to ensure that they are functioning correctly and efficiently. Additionally, TypeScript could be used to add type checking and improve the development process. Overall, this would result in a powerful and efficient e-commerce website with a scalable backend API and a user-friendly frontend design.",
        githublink:"https://github.com/MichaelYang120/ecomplus"
    },
    {
        name:"crypto calculator",
        description:`The "Crypto Calculator" project is a web application that is built using React and TypeScript. The purpose of the application is to provide users with an easy and efficient way to calculate the value of their cryptocurrency holdings based on real-time data from the Binance API. The project utilizes various features of React and TypeScript, including component-based architecture and strict typing, to ensure that code is maintainable, scalable, and robust.

        The Binance API is used to fetch the latest prices of various cryptocurrencies and tokens, which are then set to the appropriate properties within the application. Users can enter the quantities of the cryptocurrencies they hold, and the application will automatically calculate their total value, updated in real-time based on the latest prices. The user interface is designed to be intuitive, with a clean and modern layout that prioritizes simplicity and ease of use.
        
        This project is ideal for crypto enthusiasts and investors who want an easy way to track the value of their holdings. It offers real-time updates and accurate calculations using data from one of the most popular cryptocurrency exchanges, making it a valuable tool for anyone looking to stay up-to-date on the latest crypto market trends.`,
        githublink:"https://github.com/MichaelYang120/crypto-calculator"
    },
    {
        name:"events booking",
        description:"A React TypeScript MERN stack event webpage application would allow users to browse and RSVP to upcoming events. The MERN stack would provide the backend with MongoDB as the database, Express as the web framework, and Node.js as the runtime environment. The frontend would be built using React and TypeScript, which would provide type checking and improved code maintainability. Users could view a calendar of upcoming events, filter by type or location, and view additional details for each event. They could also submit an RSVP form to sign up for an event and receive a confirmation. Overall, this application would provide a user-friendly and efficient way for event organizers to manage, promote, and track attendance for their events.",
        githublink:"https://github.com/MichaelYang120/booking"
    },
    {
        name:"portfolio",
        description:`The "Portfolio" project is a personal website that showcases a collection of an individual's work and skills. The project is built using React and TypeScript, and it leverages components, useState, useEffect, and dynamic variable passing to create an intuitive and dynamic user experience.

        The portfolio is divided into a series of sections, each of which is represented by a React component. The components are designed to be reusable and modular, allowing the user to update and customize their portfolio with ease. The useState hook is used to manage the internal state of each component, while dynamic variable passing is used to dynamically update data based on user inputs.
        
        The useEffect hook is utilized to ensure that components are updated dynamically in response to user actions, such as scrolling or clicking. This ensures a seamless and responsive user experience, where users can easily navigate the portfolio and view different sections, such as a portfolio of work, a blog, or an "about me" section.
        
        Overall, the "Portfolio" project is a great example of how React and TypeScript can be used to create dynamic and modular web applications. It provides a powerful set of tools for building robust and scalable user interfaces, and its component-based architecture makes it easy to add new features and functionality. Whether you're a student, a freelancer, or a professional, the "Portfolio" project is an excellent tool for showcasing your work and skills in a modern and engaging way.`,
        githublink:"https://github.com/MichaelYang120/portfolio"
    },

]
// export default function ContentText() {
export default function ContentTextArr(infotext:any=test) {
// export default function ContentTextArr(infotext:Array<string|object>) {

    const containerstyle = {
        marginBottom:"55px"
    }

    const projectheadingstyle = {
		textTransform:"capitalize" as "capitalize",   
        fontWeight:"900" 
    
    }

    const buttonstyle = {
       padding:"10px 20px",
       background:"black",
       color:"white",
       textAlign:"center" as "center",
       fontWeight:"600",
       borderRadius:"3px",
    }

    const textstyle = {
        marginBottom:"40px"
    }

    const btnstylecontainer = {
        marginBottom:"40px"
    }

	return (
		infotext.map((value:any) => 
			<>
                <div style={containerstyle}>
                    <h2 style={projectheadingstyle}>{value["name"]}<br/></h2>
                    <div style={textstyle}>
                        <p>{value["description"]}</p>
                    </div>
                    <div style={btnstylecontainer}>
                        <a href={value["githublink"]} style={{textDecoration:"none"}}><span style={buttonstyle}>Github</span></a>
                    </div>
                </div>
			</>
		)

	);
}