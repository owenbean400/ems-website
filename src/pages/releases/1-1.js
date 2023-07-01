import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_1 = () => {
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
      <MetaData title="Response Time Track - 1.1 Release" />
      <main>
        <h1>1.1 Release Notes</h1>
        <p>
          Added account authentication through Firebase that includes signin
          with Apple or Google. The Apple and Google account will be linked with
          the same email. Account deleting is allowed within the settings tab.
          The account will be for later release of cloud storage of rescue
          times.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>Login UI Rework</li>
          <ul>
            <li>Added login with Apple</li>
            <li>Added login with Google</li>
            <li>Added continue as guest</li>
          </ul>
          <li>Settings has option to delete account</li>
        </ul>
        <h3>Future Plans</h3>
        <p>Next release will include cloud storage of rescue times.</p>
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

export default R1_1;
