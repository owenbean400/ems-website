import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const SideBar = (props) => {

  const data = useStaticQuery(
    graphql`
      query FileSortApiDocData {
        apiDocumentation: allFile(
          filter: { ext: { eq: ".mdx" }, sourceInstanceName: {eq: "api_documentation"}}
        ) {
          nodes {
            absolutePath
            name
          }
        }
        documentation: allFile(
          filter: { ext: { eq: ".mdx" }, sourceInstanceName: {eq: "documentation"}}
        ) {
          nodes {
            absolutePath
            name
          }
        }
      }
    `
  );

  const doc_file_data = (props.sourceDirectory === "api_documentation") ? data.apiDocumentation : data.documentation;

  return (
    <aside style={{ left: (props.isShown) ? "0px" : "-260px" }}>
      <ul>
        <li>
          <Link to="/api_documentation">API Documentation</Link>
        </li>
        {doc_file_data.nodes.map((value) => (
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
