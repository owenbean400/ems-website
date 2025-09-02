import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_1_15 = () => {
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
      <MetaData title="Response Time Track 1.1.15"
        description="Updates the History UI with new sharing, filtering, and deletion options, refreshes navigation and search features. Includes code maintenance with updated Flutter, Android, and iOS versions." />
      <main>
        <h1>1.1.15 Release Notes</h1>
        <p>
          Updates the History UI with new sharing, filtering, and deletion options, refreshes navigation and search features. Includes code maintenance with updated Flutter, Android, and iOS versions.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>History UI Refresh</li>
          <ul>
             <li>Allow sharing of single record as CSV file.</li>
             <li>Allow for hiding rescue records when viewing in card layout of history.</li>
             <li>Added delete option when on edit screen of a rescue.</li>
             <li>Color change to top navigation of history to primary blue color.</li>
             <li>Search Bar of filter notes changes</li>
             <ul>
              <li>Hiding of search bar will update rescue record history with no notes filtering</li>
              <li>Search bar icon update with X for when the user wants to close searching of rescue records</li>
              <li>More spacing added between search icon and search text</li>
             </ul>
          </ul>
          <li>Code Maintenance</li>
          <ul>
            <li>Updated Flutter - 3.27.1 to 3.35.2.</li>
            <li>Android SDK target - 35 to 36</li>
            <li>iOS minimum version - 14.0 to 15.6</li>
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

export default R1_1_15;
