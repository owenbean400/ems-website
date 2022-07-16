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
        <p>
          The EMS App's goal is to allow paramedics to focus more on the rescue
          and less time on keeping track of reports. Consequently, this goal
          will increase the convenience of tracking times for a report. The App
          idea was born after the frustration from an EMS chief. Maine state
          regulations has paramedics facilities keep track of each rescue.
          Keeping track with paper and pen is a hassle, error-prone, and
          unreliable. That is why this app was developed.
        </p>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
