import React, { useState } from "react"

const SidebarSection = (props) => {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div>
            <li className="section-title" onClick={() => setShowLinks(!showLinks)}><i className={(showLinks) ? "arrow down" : "arrow right"}></i>{props.title}</li>
            <ul style={(showLinks) ? {display: "block"} : {display: "none"}} className="list-drop">
                {props.children}
            </ul>
        </div>
    )
};

export default SidebarSection;