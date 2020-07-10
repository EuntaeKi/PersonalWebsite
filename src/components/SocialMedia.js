import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";
import './SocialMedia.css';

class SocialMedia extends React.Component {
    render() {
        return (
            <div className="social-container">
                <SocialMediaIcon
                    iconType={ faLinkedinIn }
                    iconSize="2x"
                    iconTransform="shrink-4"
                    url="https://www.linkedin.com/in/euntae-ki/"
                    mask={ true }
                />
                <SocialMediaIcon
                    iconType={ faGithub }
                    iconSize="2x"
                    iconTransform=""
                    url="https://github.com/EuntaeKi"
                    mask={ false }
                />
                <SocialMediaIcon
                    iconType={ faFacebookF }
                    iconSize="2x"
                    iconTransform="shrink-3 down-1.25"
                    url="https://www.facebook.com/EuntaeKi/"
                    mask={ true }
                />
            </div>
        )
    };
}

function SocialMediaIcon(props) {
    return (
        <React.Fragment>
            <a href={ props.url } target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon className="social-icon" icon={ props.iconType } mask={ props.mask ? faCircle : '' } size={ props.iconSize } transform={ props.iconTransform } />
            </a>
        </React.Fragment>
    );
}

export default SocialMedia;