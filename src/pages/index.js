import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MetaData from "../components/Metadata";
import "../style/markdown.sass";
import AndroidDownloadImage from "../images/download/download_android.png";
import AppleDownloadImage from "../images/download/download_apple.png";
import "../style/download.sass";
import CallImg from "../images/screenshot/call.png"
import EnrouteImg from "../images/screenshot/enroute.png"
import SceneImg from "../images/screenshot/scene.png"
import TransportImg from "../images/screenshot/transport.png"
import DestinationImg from "../images/screenshot/destination.png"

// markup
const IndexPage = () => {
  const [phoneSize, setPhoneSize] = useState(false);
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [feedbackStatus, setFeedbackStatus] = useState("");

  useEffect(() => {
    function handleResize() {
      setPhoneSize(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleCommentChange = (event) => {
    const value = event.target.value;
    setComment(value);
  };

  const submitEmail = () => {

    const url = "https://feedback-3tggii3mlq-uc.a.run.app/feedback";

    const data = {
      "email": email,
      "comment": comment
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          setFeedbackStatus("Error sending feedback.");
          return;
        }
        setFeedbackStatus("Feedback sent!");
      })
      .catch((error) => {
        setFeedbackStatus("Error sending feedback.");
      });
  };

  return (
    <div id="main">
      <MetaData title="Response Time Track" />
      <Navbar isPhone={phoneSize}></Navbar>
      <div className="index-page">
        <div className="title-container">
          <h1>Effortless Time Tracking for EMS</h1>
          <Link to="/download">Download Now &rarr;</Link>
        </div>
        <div className="screenshot-container">
          {(!phoneSize) ? <img src={CallImg}></img> : <div></div>}
          <img src={EnrouteImg}></img>
          <img src={SceneImg}></img>
          <img src={TransportImg}></img>
          {(!phoneSize) ? <img src={DestinationImg}></img> : <div></div>}
        </div>
        <div className="documentation-container">
          <p><Link to="/documentation">Read more about how our mobile app function in our documentation page &rarr;</Link></p>
        </div>
        <div className="displays-container">
          <div className="display-container">
            <h2>Premium Tracker</h2>
            <p><Link to="/prices">Get precise location tracking with time records and secure cloud storage to stay organized &rarr;</Link></p>
          </div>
          <div className="display-container">
            <h2>Releases</h2>
            <p><Link to="/releases">Our app keeps you updated with the newest releases, ensuring you"re always equipped with the latest enhancements &rarr;</Link></p>
          </div>
          <div className="display-container">
            <h2>Download</h2>
            <p><Link to="/download">Our app is available on Android and iOS &rarr;</Link></p>
          </div>
        </div>
        <div className="feedback-container">
          <h2>Feedback</h2>
          <p className="feedback-text">Love to hear feedback on our app and how we can improve it</p>
          {(feedbackStatus !== "") ? <p className="feedback-response">{feedbackStatus}</p> : undefined}
          <div>
            <p className="feedback-label">Email (Optional)</p>
            <input className="email-input" maxlength="100" type="email" onChange={handleEmailChange}></input>
          </div>
          <div>
            <p className="feedback-label">Comment</p>
            <textarea className="comment-input" data-limit-rows="true" maxlength="100" rows="5" onChange={handleCommentChange}></textarea>
          </div>
          <button onClick={() => submitEmail()}>Send Feedback</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
