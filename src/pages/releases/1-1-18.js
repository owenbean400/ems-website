import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_1_18 = () => {
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
      <MetaData title="Response Time Track 1.1.18"
        description="Updates for iOS 26, including library upgrades." />
      <main>
        <h1>1.1.18 Release Notes</h1>
        <p>
          Updates for iOS 26, including library upgrades. iOS UI changes have been updated to align the app's appearance with Android. Due to Apple's transition of UI components from Cupertino to Liquid Glass, iOS UI elements are now unified with Android styles.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>UI Changes</li>
          <ul>
            <li>Dialog pop up messages on iOS will look the same as Android instead of cupertino view.</li>
          </ul>
          <li>Maintenance</li>
          <ul>
            <li>iOS SDK update from 18 to 26.</li>
            <li>Updated Flutter from 2.28.3 to 2.28.7.</li>
            <li>Updated third-party libraries to their latest versions.</li>
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

export default R1_1_18;
