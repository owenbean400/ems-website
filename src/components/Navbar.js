import React from "react";
import { Link } from "gatsby";

const Navbar = (props) => {
  return (
    <nav>
      <h1>
        <Link to="/">{props.isPhone ? "FRT" : "First Responder Time"} App</Link>
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
