import React from "react";
import { faGithub, faBitbucket, faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { Icons, jqueryIcon, mysqlIcon, phpIcon, reactIcon, typescriptIcon } from "./Icons";
  
  export function SkillsIcons() {
	const skillscontainerstyle = {
		margin:"auto",
		maxWidth:"80%",
		textAlign:"center" as "center"
	}
	const test = {
		margin:"12px 10px"
	}

	return (
		<>
			<div style={skillscontainerstyle}>
				<span style={test}>
					{(reactIcon("42px"))}
				</span>
				<span style={test}>
					{(Icons(faGithub, "#0073c2", "46px"))}                    
				</span>
				<span style={test}>
					{(Icons(faBitbucket, "#0073c2", "46px"))}
				</span>
				<span style={test}>
					{(Icons(faJs, "rgb(247, 223, 30)", "46px"))}
					{/* {(javascriptIcon("43px"))} */}
				</span>
				<span style={test}>
					{(phpIcon("42px"))}
				</span>
				<span style={test}>
					{(Icons(faHtml5, "rgb(255, 87, 34)", "46px"))}
				</span>
				<span style={test}>
				   {(Icons(faCss3Alt, "rgb(33, 150, 243)", "46px"))}
				</span>
				<span style={test}>
				   {(typescriptIcon("41px"))}                    
				</span>
				<span style={test}>
					{(jqueryIcon("42px"))}
				</span>
				<span style={test}>
					{(mysqlIcon("42px"))}
				</span>
			</div>
		</>	
	)
}