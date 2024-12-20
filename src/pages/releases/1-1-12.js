import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_1_12 = () => {
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
      <MetaData title="Response Time Track 1.1.12"
        description="Cloud sync togglable and Android maintenance." />
      <main>
        <h1>1.1.12 Release Notes</h1>
        <p>
          Cloud sync option and Android update.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>Cloud Sync</li>
          <ul>
            <li>Added option to toggle cloud sync. This option is only for premium members.</li>
          </ul>
          <li>Android Maintenance</li>
          <ul>
             <li>Update Android SDK to 35.</li>
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

export default R1_1_12;
