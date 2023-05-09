import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReact, faBitbucket, faJsSquare, faPhp, faHtml5, faCss3, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import {
    IconLookup,
    IconDefinition,
    findIconDefinition
  } from '@fortawesome/fontawesome-svg-core'
  
  export function SkillsIcons() {
    const coffeeLookup: IconLookup = { prefix: 'fas', iconName: 'coffee' }
    const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup)

    return (
        <>
            <div>
                <FontAwesomeIcon icon={faCoffee} />
                <FontAwesomeIcon icon={faMugSaucer} />
                <FontAwesomeIcon icon={coffeeIconDefinition} />
                <FontAwesomeIcon icon={faReact} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faBitbucket} />
                <FontAwesomeIcon icon={faJsSquare} />
                <FontAwesomeIcon icon={faPhp} />
                <FontAwesomeIcon icon={faHtml5} />
                <FontAwesomeIcon icon={faCss3Alt} />
            </div>
        </>	
    )
}