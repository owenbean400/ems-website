import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_1_7 = () => {
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
      <MetaData title="Response Time Track 1.1.7 Release Notes"
        description="Added truck data information, updated UI, and fixed third-party login bug for improved functionality." />
      <main>
        <h1>1.1.7 Release Notes</h1>
        <p>
          Added truck tracking feature to rescue times
        </p>
        <h3>Changes</h3>
        <ul>
          <li>Truck feature functionality</li>
          <ul>
            <li>Add, edit, and delete truck information</li>
            <li>Enable truck entry to select truck with time rescue</li>
            <li>Select default truck for time rescue</li>
            <li>Edit time rescue truck</li>
            <li>Cloud sync truck information for paid subscription members</li>
          </ul>
          <li>User Interface Updates</li>
            <ul>
                <li>Removed advertisements</li>
                <li>Updated setting cards to be more close together</li>
                <li>Updated history cards to be more close together</li>
                <li>Change mileage entry and note entry to match similar layout</li>
            </ul>
          <li>Bug Fixes</li>
            <ul>
                <li>Fixed Google and Apple login on iOS</li>
            </ul>
          <li>Maintainance</li>
            <ul>
                <li>Android SDK update</li>
                <li>Unit and Widget testing to provide reliability on mobile app</li>
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

export default R1_1_7;
