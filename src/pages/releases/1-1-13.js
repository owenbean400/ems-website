import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_1_13 = () => {
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
      <MetaData title="Response Time Track 1.1.13"
        description="Flutter code maintenance and database migration bug fixes." />
      <main>
        <h1>1.1.13 Release Notes</h1>
        <p>
          Code maintenance and bug fixes.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>Code Maintenance</li>
          <ul>
            <li>Updated Flutter from 3.27.1 to 2.27.4.</li>
            <li>Updated Firebase packages.</li>
            <li>Fix async gaps during several operations.</li>
          </ul>
          <li>Bug Fixes</li>
          <ul>
             <li>Fix notes database migration from 1.0.3 to 1.1.10-1.1.12.</li>
          </ul>
        </ul>
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

export default R1_1_13;
