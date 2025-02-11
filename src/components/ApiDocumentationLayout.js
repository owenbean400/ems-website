import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar"
import MetaData from "./Metadata";
import "../style/markdown.sass";

const ApiDocumentationLayout = ({ children }) => {
  const [showDisplaySide, setShowDisplaySide] = useState(false);
  const [phoneSize, setPhoneSize] = useState(false);

  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
      setShowDisplaySide(window.innerWidth > 768);
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
      document.documentElement.style.setProperty("--secondColor", "#2e2e2e");
    } else {
      document.documentElement.style.setProperty("--primColor", "#0099FF");
      document.documentElement.style.setProperty("--textColor", "#111");
      document.documentElement.style.setProperty("--displayColor", "white");
      document.documentElement.style.setProperty("--bgColor", "#dddddd");
      document.documentElement.style.setProperty("--secondColor", "white");
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <MetaData title="Response Time Track API Documentation" />
      <nav>
        <div className="nav-container-left">
          {(phoneSize ? 
          <div className="hamburger-container" role="presentation" onClick={() => setShowDisplaySide(!showDisplaySide)} onKeyDown={() => setShowDisplaySide(!showDisplaySide)}>
              <div className={(showDisplaySide) ? "x-line transition-bar" : "hamburger-bar transition-bar"}></div>
              <div className={(showDisplaySide) ? "x-line transition-bar" : "hamburger-bar transition-bar"}></div>
              {!showDisplaySide ? <div className="hamburger-bar"></div> : undefined}
          </div> : undefined)}
          <h1>{phoneSize ? "RTT" : "Response Time Track"} API Doc</h1>
        </div>
      </nav>
      <main class="document-main">
        <Sidebar isShown={showDisplaySide} onClickArrow={() => setShowDisplaySide(!showDisplaySide)} sourceDirectory="api_documentation"></Sidebar>
        <div className="article-container">
          <article>{children}</article>
        </div>
      </main>
    </div>
  );
};

export default ApiDocumentationLayout;
