import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_1_1 = () => {
  const [phoneSize, setPhoneSize] = useState(false);

  useEffect(() => {
    function handleResize() {
      setPhoneSize(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="main">
      <Navbar isPhone={phoneSize}></Navbar>
      <MetaData title="Response Time Track - 1.1 Release" />
      <main>
        <h1>1.1.1 Release Notes</h1>
        <p>
          Added note entries to rescue times. This allow for a note to be added
          to a rescue time for later review or added information needed.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>Add note entry</li>
          <ul>
            <li>Within edit of a rescue, a note can be added or edited</li>
            <li>
              A note can be added during the time tracking if enabled in
              settings
            </li>
          </ul>
          <li>Settings has option to delete account</li>
        </ul>
        <h3>Future Plans</h3>
        <p>Next release will include cloud storage of rescue times.</p>
        <p>
          <Link to="/releases">
            <p className="release-link">Back to releases</p>
          </Link>
        </p>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default R1_1_1;
