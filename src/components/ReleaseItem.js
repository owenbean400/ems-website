import React from "react";
import { Link } from "gatsby";
import "../style/markdown.sass";

const ReleaseItem = (props) => {

    return (
        <Link to={props.releaseLink} className="release-container">
            <h2 className="release-name">{props.release}</h2>
            <p className="release-description">{props.description}</p>
            <p className="release-date">{props.releaseDate}</p>
        </Link>
    )
}

export default ReleaseItem;