import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const SideBar = (props) => {
  const data = useStaticQuery(
    graphql`
      query FileSort {
        allFile(sort: { fields: relativeDirectory }) {
          nodes {
            absolutePath
            name
          }
        }
      }
    `
  );

  return (
    <aside
      style={{
        width: props.isShown ? "240px" : "0px",
        padding: props.isShown ? "16px" : "16px 0px",
        boxShadow: props.isShown
          ? "0px 0px 5px 3px rgba(0,0,0,0.33)"
          : "0px 0px 0px 0px rgba(0,0,0,0.0)",
      }}
    >
      <ul
        style={{
          display: props.isShown ? "inline" : "none",
        }}
      >
        <li>
          <Link to="/documentation">Home</Link>
        </li>
        {data.allFile.nodes.map((value) => (
          <li>
            <Link to={absolutePathToLink(value.absolutePath)}>
              {nameToDisplay(value.name)}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

function absolutePathToLink(path) {
  return path.substring(path.indexOf("/pages/") + 6, path.indexOf("."));
}

function nameToDisplay(name) {
  return name
    .split("-")
    .map((value) => {
      return value.charAt(0).toUpperCase() + value.substring(1);
    })
    .join(" ");
}

export default SideBar;
