import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_1_10 = () => {
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
      <MetaData title="Response Time Track 1.1.11"
        description="Introduced new promotional options for app growth and enhanced performance monitoring features." />
      <main>
        <h1>1.1.11 Release Notes</h1>
        <p>
          Introduced new promotional options for app growth and enhanced performance monitoring features.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>In app promotions</li>
          <ul>
            <li>Added the ability to send feedback to us.</li>
            <li>Introduced an in-app review button.</li>
            <li>Added the capability to share our website.</li>
          </ul>
          <li>Performance Monitoring</li>
          <ul>
             <li>Added performance monitoring on settings.</li>
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

export default R1_1_10;
