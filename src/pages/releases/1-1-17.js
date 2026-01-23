import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_1_17 = () => {
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
      <MetaData title="Response Time Track 1.1.17"
        description="App start up performance improvements with loading screen." />
      <main>
        <h1>1.1.17 Release Notes</h1>
        <p>
          The app startup process now includes a brief loading phase with a loading icon before the main content is displayed. This improves startup performance on older devices and enables more reliable crash analysis during app launch.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>UI Changes</li>
          <ul>
            <li>Added a loading icon during app startup (may not be noticeable on faster devices)</li>
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

export default R1_1_17;
