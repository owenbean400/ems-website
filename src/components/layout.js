import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import SideBar from "./sidebar";
import { Scrollbars } from "react-custom-scrollbars";

export default ({ children }) => (
  <div>
    <nav>
      <h1>EMS App Documentation</h1>
    </nav>
    <main>
      <article>{children}</article>
      <SideBar></SideBar>
    </main>
  </div>
);
