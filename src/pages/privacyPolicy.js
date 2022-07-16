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
            Response Time Track app will not collecr data in offline mode. The times are saved on the hardware of the phone. 
        </p>
        <h3>Offline Mode</h3>
        <p>
            Response Time Track app will not collect any data in offline mode. The data in offline mode stays on the phone hardware.
            Once login, the data will fall under login mode.
        </p>
        <h3>User Mode</h3>
        <p>
            Response Time Track app collects time records of specific first responder's facilities for storage. 
            These times are saved for the facility to send the data to the state. 
            RTT does not send the data to other third party applications.
        </p>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
