import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_1_2 = () => {
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
      <MetaData title="Response Time Track - 1.1.2 Release" />
      <main>
        <h1>1.1.2 Release Notes</h1>
        <p>
          Response Time Track app will be opening the app free for users with advertisements. There is a premium option to ignore ads and allow for location GPS to calculate mileage done during rescue.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>Free application with ads and no location tracking.</li>
          <li>Premium version of app is subscription based of $1.99 a month.</li>
          <ul>
            <li>Location GPS stream to calculate mileage</li>
            <li>No ads</li>
          </ul>
        </ul>
        <h3>Future Plans</h3>
        <p>Next release will include cloud storage of rescue times. The free app with ads or monthly subscription will help pay for storage of backend server for backups of rescue times.</p>
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

export default R1_1_2;
