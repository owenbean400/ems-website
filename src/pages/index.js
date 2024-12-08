import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MetaData from "../components/Metadata";
import "../style/markdown.sass";
import "../style/download.sass";
import CallImg from "../images/screenshot/call.png"
import EnrouteImg from "../images/screenshot/enroute.png"
import SceneImg from "../images/screenshot/scene.png"
import TransportImg from "../images/screenshot/transport.png"
import DestinationImg from "../images/screenshot/destination.png"
import ContactForm from "../components/ContactForm";
import CaptiveImg from "../images/phoneCaptive.png"

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
      <MetaData 
        title="Response Time Track"
        description="Track response times effortlessly with the Response Time Tracker App, designed for EMTs, paramedics, and EMS professionals. Available now for Android and iOS, this app simplifies time recording with just a few taps." />
      <Navbar isPhone={phoneSize}></Navbar>
      <div className="index-page">
        <div className="header-color-background"></div>
        <div className="header-container">
          <img src={CaptiveImg} />
          <div className="header-text-container">
            <div className="title-container">
              <h1>Time Tracking for EMS</h1>
              <Link to="/download">Download Now &rarr;</Link>
            </div>
            <div className="documentation-container">
              <p><Link to="/documentation">Read more about how our mobile app function in our documentation page &rarr;</Link></p>
            </div>
          </div>
        </div>
        <div className="displays-container">
          <div className="display-container">
            <h2>Premium Tracker</h2>
            <p><Link to="/prices">Get precise location tracking with time records and secure cloud storage to stay organized &rarr;</Link></p>
          </div>
          {!phoneSize ? <hr></hr> : undefined}
          <div className="display-container">
            <h2>Releases</h2>
            <p><Link to="/releases">Our app keeps you updated with the newest releases, ensuring you"re always equipped with the latest enhancements &rarr;</Link></p>
          </div>
          {!phoneSize ? <hr></hr> : undefined}
          <div className="display-container">
            <h2>Download</h2>
            <p><Link to="/download">Our app is available on Android and iOS &rarr;</Link></p>
          </div>
        </div>
        <div className="feedback-container">
          <h2>Feedback</h2>
          <p className="feedback-text">Love to hear feedback on our app and how we can improve it</p>
          <ContactForm />
        </div>
        <div className="screenshot-container">
          {(!phoneSize) ? <img src={CallImg}></img> : <div></div>}
          <img src={EnrouteImg}></img>
          <img src={SceneImg}></img>
          <img src={TransportImg}></img>
          {(!phoneSize) ? <img src={DestinationImg}></img> : <div></div>}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
