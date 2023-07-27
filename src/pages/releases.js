import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MetaData from "../components/Metadata";
import "../style/markdown.sass";
import "../style/download.sass";

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
      <MetaData title="Response Time Track - Releases" />
      <main>
        <h1>Release Notes</h1>
        <ul>
          <li>
            <Link to="/releases/1-1-2">
              <p className="release-goto">1.1.2</p>
            </Link>
          </li>
          <li>
            <Link to="/releases/1-1-1">
              <p className="release-goto">1.1.1</p>
            </Link>
          </li>
          <li>
            <Link to="/releases/1-1">
              <p className="release-goto">1.1</p>
            </Link>
          </li>
          <li>
            <Link to="/releases/1-03">
              <p className="release-goto">1.03</p>
            </Link>
          </li>
          <li>
            <Link to="/releases/1-02">
              <p className="release-goto">1.02</p>
            </Link>
          </li>
          <li>
            <Link to="/releases/1-01">
              <p className="release-goto">1.01</p>
            </Link>
          </li>
        </ul>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default R1_01;
