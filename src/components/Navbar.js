import React, { useEffect } from "react";
import { Link } from "gatsby";
import NavbarHamburger from "./NavbarPhone";

const Navbar = (props) => {

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
      document.documentElement.style.setProperty("--secondColor", "#2e2e2e");
    } else {
      document.documentElement.style.setProperty("--primColor", "#0099FF");
      document.documentElement.style.setProperty("--textColor", "#111");
      document.documentElement.style.setProperty("--displayColor", "white");
      document.documentElement.style.setProperty("--bgColor", "white");
      document.documentElement.style.setProperty("--secondColor", "#dddddd");
    }
  }, []);

  const links = [
    {
      link: "/download",
      name: "Download"
    },
    {
      link: "/prices",
      name: "Price"
    },
    {
      link: "/documentation",
      name: "Docs"
    },
    {
      link: "/releases",
      name: "Releases"
    }
  ];

  const liHtml = links.map((link) => {
    return <li><Link to={link.link}>{link.name}</Link></li>
    });

  return (
    <nav>
      <h1>
        <Link to="/">Response Time Track</Link>
      </h1>
      <ul style={{width: (props.isPhone) ? "32px" : "300px"}} >
        {(props.isPhone) ? <NavbarHamburger links={links} /> : liHtml }
      </ul>
    </nav>
  );
};

export default Navbar;
