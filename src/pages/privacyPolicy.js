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
          Response Time Track app will not collect data in offline mode. The
          times are saved on the hardware of the phone.
        </p>
        <h3>Offline Mode</h3>
        <p className="doc-txt">
          Response Time Track app will not collect any data in offline mode. The
          data in offline mode stays on the phone hardware. We can't acess this
          data on the hardware as long as it is not sent to the server. Once
          login, the data can be sent to the server, which is under the user
          mode.
        </p>
        <h3>Third Party Login</h3>
        <p className="doc-txt">
          The app uses Firebase authentication for users who sign up with Google
          or Apple. The account is for cloud stoage for those who pay for it.
          Accounts can be deleted by going to the setting page of the app.
        </p>
        <h5>Data Collected</h5>
        <p className="doc-txt">
          Firebase analytics collects users clicks throughout the app. The
          clicks are not identifiable with any user. Firebase crashlytics is
          used to detect crashes from the app. Email can be shared with account
          login to help sync the user.
        </p>
        <h5>Information Is For</h5>
        <p className="doc-txt">
          The information rescue times is used for first responders to identify
          and analysis rescue times.
        </p>
        <h5>Information Sharing</h5>
        <p className="doc-txt">
          The information from accounts is shared with Firebase database and
          will only be access by the user.
        </p>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
