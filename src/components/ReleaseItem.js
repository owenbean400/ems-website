import { Link } from "gatsby";
import "../style/markdown.sass";

const ReleaseItem = (props) => {

    return (
        <div className="release-container">
            <Link to={props.releaseLink}>
                <h2 className="release-name">{props.release}</h2>
                <p className="release-description">{props.description}</p>
                <p className="release-date">{props.releaseDate}</p>
            </Link>
        </div>
    )
}

export default ReleaseItem;