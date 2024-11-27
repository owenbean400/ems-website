import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AppleTouch from "../images/apple-touch-icon.png";
import Favicon32 from "../images/favicon-32x32.png";
import Favicon16 from "../images/favicon-16x16.png";

const MetaData = (props) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="description">{props.description ? props.description : ""}</meta>
        <link rel="apple-touch-icon" sizes="180x180" href={AppleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
      </Helmet>
    </div>
  );
};

export default MetaData;
