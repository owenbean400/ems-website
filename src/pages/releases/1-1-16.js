import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_1_16 = () => {
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
      <MetaData title="Response Time Track 1.1.16"
        description="Updated the truck detail button color for dark mode, applied Android fixes for CSV download/share and number keyboard overlay issues, and included general Flutter maintenance updates." />
      <main>
        <h1>1.1.16 Release Notes</h1>
        <p>
          Updated the truck detail button color for dark mode, applied Android fixes for CSV download/share and number keyboard overlay issues, and included general Flutter maintenance updates.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>UI Changes</li>
          <ul>
            <li>Truck details' back button set to white for dark mode.</li>
          </ul>
          <li>Android bug fixes</li>
          <ul>
             <li>Fix CSV downloader/sharing functionality.</li>
             <li>Fix keyboard to not overlap the bottom system navigation buttons.</li>
          </ul>
          <li>Code Maintenance</li>
          <ul>
            <li>Updated Flutter - 3.27.1 to 3.38.3.</li>
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

export default R1_1_16;
