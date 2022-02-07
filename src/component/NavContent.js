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
              <li>Profile</li>
              <li>Skills</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
    )
}
