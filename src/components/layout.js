import React, { useEffect, useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import SideBar from "./sidebar";
import { Scrollbars } from "react-custom-scrollbars";

const Layout = ({ children }) => {
  const [displaySide, setDisplaySide] = useState(window.innerWidth > 768);
  const [phoneSize, setPhoneSize] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
      setDisplaySide(window.innerWidth > 768);
      setPhoneSize(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <nav>
        <h1>FRT App Documentation</h1>
      </nav>
      <div
        id="hamburger"
        style={{
          right: displaySide ? "266px" : "-8px",
          display: phoneSize ? "flex" : "none",
        }}
        onClick={() => {
          setDisplaySide(!displaySide);
        }}
      >
        <svg
          id="arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 350 100"
        >
          <defs>
            <marker
              id="startarrow"
              markerWidth="10"
              markerHeight="7"
              refX="1"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="10 0, 10 7, 0 3.5"
                fill={displaySide ? "gray" : "#0099FF"}
              />
            </marker>
            <marker
              id="endarrow"
              markerWidth="10"
              markerHeight="7"
              refX="0"
              refY="3.5"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill={displaySide ? "#0099FF" : "gray"}
              />
            </marker>
          </defs>
          <line
            x1="100"
            y1="50"
            x2="250"
            y2="50"
            stroke="gray"
            stroke-width="8"
            marker-end="url(#endarrow)"
            marker-start="url(#startarrow)"
          />
        </svg>
      </div>
      <main>
        <article>{children}</article>
        <SideBar isShown={displaySide}></SideBar>
      </main>
    </div>
  );
};

export default Layout;
