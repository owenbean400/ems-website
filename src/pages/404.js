import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// markup
const NotFoundPage = () => {
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
    <div>
      <Navbar isPhone={phoneSize}></Navbar>
      <main>
        <title>FRT - Not found</title>
        <p>Page not found</p>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default NotFoundPage;
