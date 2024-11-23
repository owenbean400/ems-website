import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "../images/android-chrome-192x192.png";
import "../style/markdown.sass";

const NavbarHamburger = (props) => {
    const [showSideMenu, setShowSideMenu] = useState(false);

    let liHtml = props.links.map((link) => {
        return <li><Link to={link.link}>{link.name}</Link></li>
        }
    );

    return (
        <div>
            <div className="hamburger-container" onClick={() => setShowSideMenu(!showSideMenu)}>
                <div className="hamburger-bar"></div>
                <div className="hamburger-bar"></div>
                <div className="hamburger-bar"></div>
            </div>
            <div className="side-menu" style={{right: (showSideMenu) ? "0" : "-400px"}}>
                <div className="side-menu-header">
                    <img src={Logo} alt="Response Time Track" />
                    <div className="close-x-container" onClick={() => setShowSideMenu(false)}>
                        <div className="x-line"></div>
                        <div className="x-line"></div>
                    </div>
                </div>
                <ul>
                    { liHtml }
                </ul>
            </div>
        </div>
    )
}

export default NavbarHamburger;