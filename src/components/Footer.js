import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  const footerLinks = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/documentation",
      name: "Documentation",
    },
  ];

  return (
    <footer>
      <ul>
        {footerLinks.map((value) => {
          return (
            <li>
              <Link to={value.link}>{value.name}</Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
