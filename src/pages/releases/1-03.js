import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_03 = () => {
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
      <MetaData title="Response Time Track 1.03 Release Notes"
        description="Added the ability to filter rescue time history by date and time for easier data management." />
      <main>
        <h1>1.03 Release Notes</h1>
        <p>
          Updated history page to contain date filters for rescue times that
          will allow easier finding of older records. Furthermore, a duration
          days setting has been added to the setting screen to set default days
          filtering.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>History tab UI Rework</li>
          <ul>
            <li>Removed bottom right blue button.</li>
            <li>Added icons on top right screen.</li>
            <li>Date filtered on top left screen.</li>
          </ul>
          <li>Added duration days to setting tab</li>
        </ul>
        <h3>Future Plans</h3>
        <p>
          Next release will be a jump release to add account authentication and
          cloud storage.
        </p>
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

export default R1_03;
