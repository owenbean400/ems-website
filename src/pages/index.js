import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MetaData from "../components/Metadata";
import "../style/markdown.sass";
import AndroidDownloadImage from "../images/download/download_android.png";
import AppleDownloadImage from "../images/download/download_apple.png";
import "../style/download.sass";

// markup
const IndexPage = () => {
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
      <MetaData title="Response Time Track" />
      <Navbar isPhone={phoneSize}></Navbar>
      <div id="header-photo"></div>
      <main>
        <p>
          The goal of the Response Time Track App is to enable paramedics to
          dedicate more time to rescuing and less time to report keeping. It
          records the time of receiving calls, enroute, on scene, transport, and
          destination, and this data can be saved for any desired use. The app
          keeps track of each rescue, recording the time of call, enroute,
          scene, transport, and destination with a single button press. At the
          end of the trip, mileage can be recorded for reporting. These rescue
          records are saved on the phone, and can be exported as a CSV file,
          written down, or sent to a server.
        </p>
        <h2>Download</h2>
        <div className="download-grid">
          <div>
            <h3>iOS</h3>
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/response-time-track/id1629269991"
            >
              <img src={AppleDownloadImage} alt="Apple Download Image" />
            </a>
          </div>
          <div>
            <h3>Android</h3>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.owenbean.ems"
            >
              <img src={AndroidDownloadImage} alt="Android Download Image" />
            </a>
          </div>
        </div>
        <h2>Documentation</h2>
        <p>
          Documentation has been composed to assist users in comprehending the
          functioning of the mobile application. The documentation has been
          divided into the various screens. Each screen will elucidate the
          purpose of every button and text. Please click the button below to be
          directed to the documentation webpage.
        </p>
        <Link to="/documentation">
          <button>Documentation</button>
        </Link>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
