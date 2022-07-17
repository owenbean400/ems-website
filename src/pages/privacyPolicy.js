import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
        <h3>User Mode</h3>
        <p>
          In user mode, the account must be set up by the organization. Users
          can not create their own account.
        </p>
        <h5>Data Collected</h5>
        <p className="doc-txt">
          The data we collect are for account setup and timed records. For an
          indiviual account, we only grab username use and name. For an
          organization, only the name of the organization is collected for
          keeping identification. The other data collected are time records. The
          time records are for first responders going out for a rescue. These
          times are for call, enroute, scene, transport, and destination.
          Lastly, the mileage is travelled that has been entered will be
          collected.
        </p>
        <h5>Information Is For</h5>
        <p className="doc-txt">
          The information is for the organization to report to the state. Also,
          the organization can do whatever they want with their own information.
        </p>
        <h5>Information Sharing</h5>
        <p className="doc-txt">
          The information collected is only shared to the organization behind
          the accounts. There are no other third parties that will collect data
          from Response Time Track app.
        </p>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
