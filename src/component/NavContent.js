import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function NavContent() {
    return (
        <div>
          <div className="x-button-container" id='defaultMenuStyle'>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div id='navigator'>
            <ul>
              <li><FontAwesomeIcon icon={faHome} size='lg' /></li>
              <li>Work</li>
              <li><a href="https://www.linkedin.com/in/bilal-khan-32853a1bb/" rel="noreferrer" target='_blank'>LinkedIn</a></li>
              <li>Skills</li>
              <li><a href="mailto:bilalkhan.work786@gmail.com">Contact Me</a></li>
            </ul>
          </div>
        </div>
    )
}
