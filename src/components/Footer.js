import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  const footerLinks = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/download",
      name: "Download",
    },
    {
      link: "/documentation",
      name: "Documentation",
    },
    {
      link: "/releases",
      name: "Releases",
    },
    {
      link: "/privacyPolicy",
      name: "Privacy Policy",
    },
    {
      link: "/contact",
      name: "Contact",
    },
    {
      link: "/elua",
      name: "ELUA",
    },
    {
      link: "/google-delete",
      name: "Delete Account",
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
