import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_1_8 = () => {
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
      <MetaData title="Response Time Track 1.1.8 Release Notes"
        description="Added email account login capability and renamed guest mode to offline mode for improved user access." />
      <main>
        <h1>1.1.8 Release Notes</h1>
        <p>
          Added email account ownership for the future of a website application for viewing rescues with paid subscription version.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>Login Screen</li>
          <ul>
            <li>Add Email and Password Login</li>
            <li>Add sign up with email and password with email verification</li>
            <li>Add forgot password</li>
          </ul>
          <li>Offline Mode</li>
            <ul>
                <li>Renamed Guest mode to Offline mode</li>
                <li>Application will automatically go to offline mode when leaving the app on offline mode. No more login screen pop up everytime</li>
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

export default R1_1_8;
