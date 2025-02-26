import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { SidebarNode } from "../class/SidebarNode";
import { Tree } from "../class/Tree"; 

const Sidebar = (props) => {

  const data = useStaticQuery(
    graphql`
      query FileSortApiDocData {
        apiDocumentation: allFile(
          filter: { ext: { eq: ".mdx" }, sourceInstanceName: {eq: "api_documentation"}}
        ) {
          nodes {
            absolutePath
            name
            relativePath
          }
        }
        documentation: allFile(
          filter: { ext: { eq: ".mdx" }, sourceInstanceName: {eq: "documentation"}}
        ) {
          nodes {
            absolutePath
            name
            relativePath
          }
        }
      }
    `
  );

  function addToTree(path, tree, start) {
    let items = path.split("/");

    let traverseNode = tree.root;
    for (let i = 0; i < items.length; i++) {
      let dataInfo = {
        isDirectory: i != items.length - 1,
        name: items[i],
        absolutePath: start + path
      };

      let foundNode = traverseNode.children.find((childNode) => {
        return childNode.nodeData.name == items[i];
      });

      if (foundNode === undefined) {
        let newNode = traverseNode.add(dataInfo);
        traverseNode = newNode;
      } else {
        traverseNode = foundNode;
      }
    }
  }

  function generateTree(values, name, start) {
    const node = new SidebarNode({isDirectory: true, name: name});
    const tree = new Tree();
    tree.root = node;

    for (let i = 0; i < values.length; i++) {
      addToTree(values[i].relativePath, tree, start);
    }

    return tree;
  }

  function isApiDocumentation() {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    let urlSplit = url.split("/");

    return urlSplit.find((str) => str === "api_documentation")
  }

  function htmlReturn() {
    const doc_file_data = (isApiDocumentation()) ? data.apiDocumentation.nodes : data.documentation.nodes;
    const doc_file_name = (isApiDocumentation()) ? "API Documentation" : "User Documentation";
    const doc_start_path = (isApiDocumentation()) ? "api_documentation/" : "documentation/"

    let tree = generateTree(doc_file_data, doc_file_name, doc_start_path);

    let renderDone = tree.root.htmlRender();
    return renderDone;
  }

  function getDocumentationHtmlHeader() {
    if (isApiDocumentation()) {
      return <Link to="/api_documentation">API Documentation Page</Link>
    } else {
      return <Link to="/documentation">User Documentation Page</Link>
    }
  }

  return (
    <aside style={{ left: (props.isShown) ? "0px" : "-260px" }}>
      <ul>
        <li>
          {getDocumentationHtmlHeader()}
        </li>
        {htmlReturn()}
      </ul>
      <Link to="/">&lt; Back to Main Page</Link>
    </aside>
  );
};

export default Sidebar;