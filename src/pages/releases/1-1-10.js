import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_1_10 = () => {
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
      <MetaData title="Response Time Track 1.1.10"
        description="Added in-app review rating and crash bug fix on login screen." />
      <main>
        <h1>1.1.10 Release Notes</h1>
        <p>
            Added in-app review rating and crash bug fix on login screen.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>In App Review Rating</li>
          <ul>
            <li>Added in app review prompt that displays once ever after history date filter search for gaining more feedback of app.</li>
          </ul>
          <li>Bug Fixes</li>
          <ul>
             <li>Added card history layout option</li>
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

export default R1_1_10;
