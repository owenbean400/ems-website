import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const SideBar = (props) => {
  const data = useStaticQuery(
    graphql`
      query FileSort {
        allFile(
          sort: { fields: sourceInstanceName }
          filter: { ext: { eq: ".mdx" } }
        ) {
          nodes {
            absolutePath
            name
          }
        }
      }
    `
  );

  return (
    <aside style={{ left: (props.isShown) ? "0px" : "-260px" }}>
      <ul>
        <li>
          <Link to="/documentation">Documentation</Link>
        </li>
        {data.allFile.nodes.map((value) => (
          <li>
            <Link to={absolutePathToLink(value.absolutePath)}>
              {nameToDisplay(value.name)}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/">&lt; Back to Main Page</Link>
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
