import React, { useEffect, useState } from "react";
import SideBar from "./sidebar";
import "../style/markdown.sass";

const Layout = ({ children }) => {
  const [displaySide, setDisplaySide] = useState(true);
  const [phoneSize, setPhoneSize] = useState(false);

  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
      setDisplaySide(window.innerWidth > 768);
      setPhoneSize(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    // Documentation colors
    function isDarkModeEnabled() {
      if (
        typeof window !== "undefined" &&
        typeof window.matchMedia !== "undefined"
      ) {
        const mediaQueryString = "(prefers-color-scheme: dark)";

        return window.matchMedia(mediaQueryString).matches;
      } else {
        return false;
      }
    }

    if (isDarkModeEnabled()) {
      document.documentElement.style.setProperty("--primColor", "#0784b5");
      document.documentElement.style.setProperty("--textColor", "#c9c9c9");
      document.documentElement.style.setProperty("--displayColor", "#eee");
      document.documentElement.style.setProperty("--bgColor", "#050505");
    } else {
      document.documentElement.style.setProperty("--primColor", "#0099FF");
      document.documentElement.style.setProperty("--textColor", "#111");
      document.documentElement.style.setProperty("--displayColor", "white");
      document.documentElement.style.setProperty("--bgColor", "white");
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <nav>
        <h1>EMS App Documentation</h1>
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
      <main class="document-main">
        <article>{children}</article>
        <SideBar isShown={displaySide}></SideBar>
      </main>
    </div>
  );
};

export default Layout;
