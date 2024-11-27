import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MetaData from "../components/Metadata";
import "../style/markdown.sass";

const PricesPage = () => {
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
            <MetaData title="Response Time Track Prices"
                description="Response Time Tracker offers a free plan for EMS professionals, with an optional premium upgrade at $4.99/month. Premium features include cloud storage and advanced location functionality." />
            <Navbar isPhone={phoneSize}></Navbar>
            <main className="prices-page">
                <h1>Get the full potential of tracking</h1>
                <div className="prices-container">
                    <div className="price-container">
                        <h2>Free</h2>
                        <p className="price-info">Basic free use for individual EMS</p>
                        <p className="price-tag">$<span className="price-money">0</span> per month</p>
                        <ul className="feature-list">
                            <li>Track time of rescue</li>
                            <li>Track truck used of rescue</li>
                            <li>Record travel distance</li>
                            <li>Attach note to rescue</li>
                            <li>View and filter rescues</li>
                            <li>Edit data of rescue</li>
                            <li>Export Rescues to CSV</li>
                            <li>Customize default settings</li>
                        </ul>
                    </div>
                    <div className="price-container">
                        <h2>Premium</h2>
                        <p className="price-info">Location and Cloud Storage for EMS</p>
                        <p className="price-tag">$<span className="price-money">4.99</span> per month</p>
                        <ul className="feature-list">
                            <li>Everything from free</li>
                            <li>Precise location of time</li>
                            <li>Mileage traveled measured</li>
                            <li>View time positions on map</li>
                            <li>Cloud storage of rescues</li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default PricesPage;