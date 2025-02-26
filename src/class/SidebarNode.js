import React from "react";
import { Link } from "gatsby";
import SidebarSection from "../components/SidebarSection";

export class SidebarNode {
  constructor(nodeData) {
    this.nodeData = nodeData;
    this.children = [];
  }

  add(nodeData) {
    let newNode = new SidebarNode(nodeData);
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

  absolutePathToLink(path) {
    return "/" + path.replace(".mdx", "");
  }
  
  nameToDisplay(name) {
    return name
      .split("-")
      .map((value) => {
        return value.charAt(0).toUpperCase() + value.substring(1);
      })
      .join(" ")
      .replace(".mdx", "");
  }

  htmlRender() {
    if (this.nodeData.isDirectory) {
      let context = [];
      for (let childNode of this.children) {
        context.push(childNode.htmlRender());
      }
      return (
        <SidebarSection
          title={this.nodeData.name}
          children={context}
        ></SidebarSection>
      );
    } else {
      return (
        <li>
          <Link to={this.absolutePathToLink(this.nodeData.absolutePath)}>
            {this.nameToDisplay(this.nodeData.name)}
          </Link>
        </li>
      );
    }
  }
}
