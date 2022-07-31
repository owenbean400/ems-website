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
      <MetaData title="Response Time Track" />
      <Navbar isPhone={phoneSize}></Navbar>
      <div id="header-photo">
        <h2>Recording</h2>
        <h2>Rescues</h2>
      </div>
      <main>
        <p>
          The Response Time Track App's goal is to allow paramedics to focus
          more on the rescue and less time on keeping track of reports. It keeps
          tracks of the times of receiving calls, going on enroute, on scene,
          transport, and destination. This data is saved for any desired use of
          the data.The app will keep track of each rescue, specifically tracking
          the time of call, enroute, scene, transport, and destination. Each
          change in action of the rescue will only need a push of a button. At
          the end of the trip, the mileage can be recorded for reporting. These
          rescue records is saved on the phone, which can be saved as csv file,
          written down, or sent to a server.
        </p>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
