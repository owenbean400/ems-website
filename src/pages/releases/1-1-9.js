import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_1_9 = () => {
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
      <MetaData title="Response Time Track - 1.1.9 Release" />
      <main>
        <h1>1.1.9 Release Notes</h1>
        <p>
          New location feature for premium subscribers.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>Location Position Stamp (Subsciption Only)</li>
          <ul>
            <li>Track latitude and longitude of button push</li>
            <li>View latitude and longitude with times in history</li>
            <li>View latitude and longitude on map view</li>
          </ul>
          <li>New UI card history of time</li>
            <ul>
              <li>Added card history layout option</li>
            </ul>
          <li>Analytics</li>
          <ul>
            <li>Added performance monitoring</li>
            <li>Improved interaction analytics</li>
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

export default R1_1_9;
