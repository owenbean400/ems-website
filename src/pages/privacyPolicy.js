import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MetaData from "../components/Metadata";
import "../style/markdown.sass";

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
      <Navbar isPhone={phoneSize}></Navbar>
      <MetaData title="Response Time Track - Private Policy" />
      <main>
        <h1>Privacy Policy</h1>
        <p>
          Responses vary in their data collection process, depending on the type of data provided. The manner in which the data is handled is contingent on its type.
        </p>
        <h3>Times</h3>
        <p className="doc-txt">
          Response Time Track app will not collect nor share any times in guest mode. Response Time Track does not accept any responsibility for any data lost in guest mode and does not have any backups of times in guest mode. Data stored with the app is stored locally on the user's device and will be lost when uninstalling, clearing storage, or the phone being broken. For users who do not have an account with Response Time Tracker, their times data will not be collected. Moreover, Response Time Track does not accept any responsibility for data stored on local storage; such data will only be stored on local devices and will be lost when uninstalling, clearing storage, or the phone being broken. </p>
        <p className="doc-txt">
          For those users with a premium Response Time Tracker account, their times are collected for cloud storage and are stored on Google systems. Furthermore, these times are synchronized with cloud storage so that in cases of uninstalling, clearing storage, or a broken phone the data can be restored.
        </p>
        <h3>Settings</h3>
        <p className="doc-txt">
          We do not keep track of the settings in Response Time Track. Furthermore, we can't support updating settings, as that is stored locally on your device.
        </p>
        <h3>Users</h3>
        <p className="doc-txt">
          We utilize email, Google, and Apple login capabilities to match users on multiple devices using the same credentials. Additionally, we generate a user ID to track usage and subscription information.
        </p>
        <h5>Analytics</h5>
        <p className="doc-txt">
          We use Firebase Analytics to track user interactions with the Response Time Track app, so that we can better understand how it is being used and use this information to develop new features.
        </p>
        <h5>Crashes</h5>
        <p className="doc-txt">
          We utilize Firebase Crashlytics to keep track of crash logs users may encounter while utilizing the Response Time Track app. This information is used solely to help debug and improve the quality of the app. No user data is collected and there is no option for users to opt-out of this process.
        </p>
        <h5>ADs</h5>
        <p className="doc-txt">
          We do not collect device identifiers or seek to identify individuals for advertising purposes. We use advertising to help fund the servers and backend used in Response Time Track.
        </p>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
