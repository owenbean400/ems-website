import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const SideBar = () => {
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
    <aside>
      <ul>
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
