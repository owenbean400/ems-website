import React, { useEffect } from "react";
import { Link } from "gatsby";

const Navbar = (props) => {
  // Set css variable based on dark or light mode
  useEffect(() => {
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
  }, []);

  return (
    <nav>
      <h1>
        <Link to="/">{props.isPhone ? "RRT" : "Response Time Track"} App</Link>
      </h1>
      <ul>
        <li>
          <Link to="/documentation">Docs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
