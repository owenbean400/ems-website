import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MetaData from "../components/Metadata";
import ContactForm from "../components/ContactForm";
import React, { useState, useEffect } from "react";


const ContactPage = () => {
    const [phoneSize, setPhoneSize] = useState(false);
  
    useEffect(() => {
      function handleResize() {
        setPhoneSize(window.innerWidth <= 768);
      }
  
      window.addEventListener("resize", handleResize);
  
      handleResize();
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <div id="main">
        
      <Navbar isPhone={phoneSize}></Navbar>
      <MetaData title="Response Time Track Contact"
        description="Contact Response Time Track through obean@responsetimetrack.app" />
        <main>
            <h1>Contact</h1>
            <div className="contact-container">
              <div className="contact-info-container">
                  <p>Feel free to contact through email obean@responsetimetrack.app or from our contact form. We do not have an available phone number.</p>
                  <p className="contact-info-email">Email: obean@responsetimetrack.app</p>    
              </div>
              <div className="contact-form-container">
                  <ContactForm />
              </div>
            </div>
        </main>
        
      <Footer></Footer>
    </div>
}

export default ContactPage;