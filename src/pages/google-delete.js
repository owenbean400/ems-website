import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DeleteAccountImage from "../images/delete/delete-account-app.jpg";
import "../style/markdown.sass";

// markup
const GoogleDeletePage = () => {
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
      title="Response Time Track Delete Account Documentation"
      description="Learn how to delete your account in the Response Time Tracker app with our step-by-step guide." />
      <Navbar isPhone={phoneSize}></Navbar>
      <main>
        <title>Google Delete Page</title>
        <h1>How to Delete Account</h1>
        <p>If you want to delete your account, you must delete your account within the app. Within the main window of the app, press on delete account and tap yes to delete your account and all of your data.</p>
        <img className="delete-image" src={DeleteAccountImage} alt="Delete Account Image"></img>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default GoogleDeletePage;
