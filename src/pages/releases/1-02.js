import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_02 = () => {
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
      <MetaData title="Response Time Track 1.02 Release Notes"
        description="Added mileage tracking to time rescues for improved reporting and accuracy." />
      <main>
        <h1>1.02 Release Notes</h1>
        <p>
          1.02 release is an update to add mileage travel tracking and Firebase
          integration. The mileage travel allows users to let the app track the
          mileage traveled and automatically fill out mileage. Firebase
          integration include crashlytics for monitoring app crashes. App
          crashes is not pleasant to experience as a user. Firebase analytics
          has been added for tracking how people utilize the app. This will
          allow to understand what features users love to use and what features
          users don't use. Lastly, there has been code refactoring in the app to
          prepare for cloud storage.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>
            Distance mileage tracker during time tracking for automatic mileage
            traveled calculation
          </li>
          <li>Add settings page</li>
          <ul>
            <li>
              Includes option to turn on/off location mileage tracking feature
            </li>
            <li>Default layout setting for history page</li>
          </ul>
          <li>Firebase Crashlytics for monitoring crash message</li>
          <li>
            Firebase Analytics for understanding how users interact with app
          </li>
        </ul>
        <h3>Future Plans</h3>
        <p>
          Next plan is to allow option for cloud storage of records at a monthly
          service cost. This allows users to have logins and ability to store
          their time records in the cloud. Users will be able to fetch these
          records on other devices or have user use multiple devices at the same
          time.
        </p>
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

export default R1_02;
