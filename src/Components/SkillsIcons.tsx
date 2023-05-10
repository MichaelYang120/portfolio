import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faReact, faBitbucket, faJsSquare, faPhp, faHtml5, faCss3, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { Icons, typescriptIcon } from "./Icons";
  
  export function SkillsIcons() {

    return (
        <>
            <div>
                {(Icons(faReact, "red", "46px"))}
                {(Icons(faGithub, "red", "46px"))}
                {(Icons(faBitbucket, "red", "46px"))}
                {(Icons(faJsSquare, "red", "46px"))}
                {(Icons(faPhp, "red", "46px"))}
                {(Icons(faHtml5, "red", "46px"))}
                {(Icons(faCss3Alt, "red", "46px"))}
                {(typescriptIcon("41px"))}
            </div>
        </>	
    )
}