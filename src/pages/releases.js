import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MetaData from "../components/Metadata";
import "../style/markdown.sass";
import "../style/download.sass";
import ReleaseItem from "../components/ReleaseItem";

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

  const releases = [
    {
      release: "1.1.9",
      description: "New feature for premium subscribers—track location position over time for enhanced tracking.",
      date: "11/27/2024",
      link: "/releases/1-1-9"
    },
    {
      release: "1.1.8",
      description: "Added email account login capability and renamed guest mode to offline mode for improved user access.",
      date: "10/02/2024",
      link: "/releases/1-1-8"
    },
    {
      release: "1.1.7",
      description: "Added truck data information, updated UI, and fixed third-party login bug for improved functionality.",
      date: "09/21/2024",
      link: "/releases/1-1-7"
    },
    {
      release: "1.1.5",
      description: "New feature added—filter search through time rescue history by notes for better tracking.",
      date: "10/05/2023",
      link: "/releases/1-1-5"
    },
    {
      release: "1.1.4",
      description: "Bug fix for guest login issues to improve user experience.",
      date: "08/29/2023",
      link: "/releases/1-1-4"
    },
    {
      release: "1.1.2",
      description: "The app is now free to download, with select features moved to the subscription plan.",
      date: "08/09/2024",
      link: "/releases/1-1-2"
    },
    {
      release: "1.1.1",
      description: "New feature added—log notes to rescue times for improved tracking.",
      date: "07/15/2023",
      link: "/releases/1-1-1"
    },
    {
      release: "1.02",
      description: "Added mileage tracking to time rescues for improved reporting and accuracy.",
      date: "05/22/2023",
      link: "/releases/1-02"
    },
    {
      release: "1.01",
      description: "Added multiple UI options for viewing time rescues for better user experience.",
      date: "08/01/2022",
      link: "/releases/1-01"
    }
  ]

  return (
    <div id="main">
      <Navbar isPhone={phoneSize}></Navbar>
      <MetaData title="Response Time Track Releases"
        description="Explore the Response Time Tracker Release Notes for detailed updates on app versions, features, and improvements." />
      <main>
        <h1>Release Notes</h1>
        { releases.map((release) => {
          return <ReleaseItem 
            releaseLink={release.link}
            release={release.release}
            description={release.description}
            releaseDate={release.date}/>
        }) }
      </main>
      <Footer></Footer>
    </div>
  );
};

export default R1_01;
