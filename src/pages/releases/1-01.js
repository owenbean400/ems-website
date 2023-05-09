import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_01 = () => {
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
      <MetaData title="Response Time Track - 1.02 Release" />
      <main>
        <h1>1.01 Release Notes</h1>
        <p>
          Updated release allows you to obtain different ways of time tracked
          records. The layout of record information expanded to two layouts;
          card layout and grid layout. Allow option to download csv file of
          times tracked onto phone.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>Two layouts to display time records history</li>
          <ul>
            <li>Card layout</li>
            <li>Grid layout</li>
          </ul>
          <li>Added ability to download time records in csv file on phone</li>
        </ul>
        <h3>Future Plans</h3>
        <p>
          Next release will include an update with Firebase integration and
          track traveled mileage distance during rescue.
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

export default R1_01;
