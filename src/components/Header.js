import React, {useState , useEffect , useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import LogoIcon from '../mockup/wildfire.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faMapMarkerAlt, faCog } from '@fortawesome/free-solid-svg-icons';

//all pages' header, link to other pages
const HeadBar = ({ userRole }) => {
  

  return (
    <div className="top-menu">
      <div className="logo-container">
        <img className="logo" src={LogoIcon} alt="Logo" />
        <span className="title">Next Day Wildfire Prediction System</span>
      </div>

      <div className="menu-icons">
        <button className="icon-button" aria-label="Info">
          <FontAwesomeIcon icon={faInfoCircle} size="2x" />
        </button>
        <button className="icon-button" aria-label="Location">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
        </button>
        <button className="icon-button" aria-label="Settings">
          <FontAwesomeIcon icon={faCog} size="2x" />
        </button>
      </div>
    </div>
    )
}

export default HeadBar;