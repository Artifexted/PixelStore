import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <p>Copyright <FontAwesomeIcon icon={faCopyright} /> 2023</p>
        </footer>
    )
}

export default Footer;