import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import SidebarSection from "./SidebarSection";

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
    const node = new Node({isDirectory: true, name: name});
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

function absolutePathToLink(path) {
  return "/" + path.replace(".mdx", "");
}

function nameToDisplay(name) {
  return name
    .split("-")
    .map((value) => {
      return value.charAt(0).toUpperCase() + value.substring(1);
    })
    .join(" ")
    .replace(".mdx", "");
}

export default Sidebar;

class Node {
  constructor(nodeData) {
    this.nodeData = nodeData;
    this.children = [];
  }

  add(nodeData) {
    let newNode = new Node(nodeData)
    if (nodeData.isDirectory) {
      this.children.push(newNode);
    } else {
      this.children.unshift(newNode);
    }
    return newNode;
  }
  remove(nodeData) {
    this.children = this.children.filter((node) => {
      return node.nodeData !== nodeData;
    });
  }

  htmlRender() {
    if (this.nodeData.isDirectory) {
      let context = [];
      for (let childNode of this.children) {
        context.push(childNode.htmlRender());
      }
      return <SidebarSection
        title={this.nodeData.name}
        children={context}
      ></SidebarSection>
    } else {
      return <li>
        <Link to={absolutePathToLink(this.nodeData.absolutePath)}>
          {nameToDisplay(this.nodeData.name)}
        </Link>
      </li>
    }
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }
}