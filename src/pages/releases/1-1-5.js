import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaData from "../../components/Metadata";
import "../../style/markdown.sass";
import "../../style/download.sass";

const R1_1_5 = () => {
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
      <MetaData title="Response Time Track 1.1.5 Release Notes"
        description="New feature added—filter search through time rescue history by notes for better tracking." />
      <main>
        <h1>1.1.5 Release Notes</h1>
        <p>
          Added search functionality to notes for filtering out words within the rescue times.
        </p>
        <h3>Changes</h3>
        <ul>
          <li>Add note history filtering</li>
          <ul>
            <li>Added magnifying glass to history page on top right corner that will toggle the display search bar on tap</li>
            <li>Search bar for notes filtering allows for words to be typed out for filtering</li>
            <li>Magnifying glass on left of search bar on tap will filter the rescue times based on the search bar words in the notes</li>
          </ul>
        </ul>
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

export default R1_1_5;
