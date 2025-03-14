import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MetaData from "../components/Metadata";
import AndroidDownloadImage from "../images/download/download_android.png";
import AppleDownloadImage from "../images/download/download_apple.png";
import "../style/markdown.sass";
import "../style/download.sass";

const DownloadPage = () => {
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
      <MetaData title="Response Time Track Download"
        description="Download the Response Time Tracker app for Android and iOS to start tracking response times effortlessly." />
      <main>
        <h1>Download</h1>
        <div className="download-grid">
          <div>
            <h2>iOS</h2>
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/response-time-track/id1629269991"
              rel="noreferrer"
            >
              <img src={AppleDownloadImage} alt="Apple Download" />
            </a>
          </div>
          <div>
            <h2>Android</h2>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.owenbean.ems"
              rel="noreferrer"
            >
              <img src={AndroidDownloadImage} alt="Android Download" />
            </a>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default DownloadPage;
