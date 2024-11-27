import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MetaData from "../components/Metadata";
import "../style/markdown.sass";
import { Link } from "gatsby";

// markup
const ELUA = () => {
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
      <MetaData title="Response Time Track End User License Agreement"
        description="The Response Time Tracker End User License Agreement (EULA) details the terms and conditions for using the app." />
      <main>
        <h1>End User License Agreement</h1>
        <h3>Introduction</h3>
        <p>
        PLEASE READ THIS END USER LICENSE AGREEMENT CAREFULLY. This End User License Agreement ("EULA") is a legally binding agreement between you (the "User") and Response Time Track governing your access to and use of the Response Time Track mobile applications, which are designed for use with Apple iOS and Google Android OS operating systems (the "Applications"). By downloading, installing, or using the Applications you agree to be bound by the terms of this EULA. Response Time Track reserves the right to change or modify any of the terms and conditions contained in this EULA without notice. All such revisions will be effective immediately upon posting and will apply to all access and continued use of the Applications.
        </p>
        <p>BY DOWNLOADING/INSTALLING/USING THE APPLICATIONS, YOU:</p>
        <ol>
            <li>Agree to all of the terms and conditions contained in this EULA;</li>
            <li>Agree to all other policies maintained by Response Time Track, such as our <Link to="/privacyPolicy">Privacy Policy</Link>, which explains what information we collect from you;</li>
            <li>Understand that if you access Response Time Track from outside permitted areas you are doing so at your own risk;</li>
            <li>Understand that if you do not agree with any portion of this EULA, you must refrain from downloading, installing or using the Applications.</li>
        </ol>
        <h3>License</h3>
        <p>Response Time Track grants you a non-transferable, non-sublicenseable, commercial and personal license to install and/or use the application in its entirety or its components, until either party terminates this EULA. This application is not sold to you but licensed to you.</p>
        <ol>
            <li>You shall not, directly or indirectly, exploit any part or the whole of the product, reverse engineer, decompile, disassemble, adapt or otherwise reproduce the software or create derivative works of it;</li>
            <li>You shall not copy, modify, translate, adapt or otherwise create improvements (whether patentable or not) from the application;</li>
            <li>You shall not directly or indirectly sell, rent, lease sublicense distribute publish transfer nor market any features of the application.</li>
        </ol>
        <h3>Ownership</h3>
        <p>All title, ownership rights, and intellectual property rights in the Product and any copies thereof are owned by Response Time Track or its licensors. The Product is protected by national and international laws, copyright treaties, conventions, and other laws. Response Time Track may also assert its rights in the event of any violation of this Agreement. Any reproduction or representation of these licensed materials for any reason is prohibited without Response Time Track's prior permission. The license does not grant title nor ownership in the Product. <br></br>

        We do not assert any ownership over the content produced through the App. You retain full ownership of all your content and any intellectual property rights associated with it. We are not responsible for the content produced through the Application, which remains yours alone. We do reserve the right to utilize data provided to us</p>
        <h3>Updates</h3>
        <p>Response Time Track may develop and provide application updates, which may include upgrades, bug fixes, patches, and other error corrections and/or new features. Updates may modify or delete in their entirely certain features or functinoality. You agree Response Time Track has no obiligation to provide any updates or to continue to provide or enable features and functionality. Depending on your mobile device setting, when your mobile device is connected to the internet: 1. The application will automatically download or install updates or 2. modify, translate, adapt or otherwise create derivative works or improvements, whether or not patentable of application 3. You may receive notice or be prompted to download and install available updates. <br></br>

        You shall promptly download and install all updates and acknowledge and agree to that application or part of the application may not operate properly should you fail to do so. Furthermore, you agree that all updated are part of Response Time Track and be subject to all terms and conditions of this agreement.</p>
        <h3>Terms of Termination</h3>
        <p>The term of this Agreement commences when you download/install Response Time Track and will continue to stay in effect until terminated. You may terminate this Agreement by deleting the Application, unsubscribing to the Application, and removal of all data within Response Time Track. Response Time Track also reserves the right to terminate this Agreement at any time without prior notice if it ceases to support the Application. Furthermore, this Agreement will be immediately terminated without prior notice if you violate any of the terms and conditions of this Agreement. Upon termination, all rights and obligations under this Agreement shall also be terminated and you must cease all use of the Application.</p>
        <h3>Disclaimer of Warranties</h3>
        <p>YOU ACKNOWLEDGE AND AGREE THAT USE OF THE LICENSE IS AT YOUR OWN RISK. UNDER APPLICABLE LAW, THE PRODUCT IS SUPPLIED ON AN 'AS IS' AND 'AS AVAILABLE' BASIS. ELUA MAKES NO WARRANTIES OR GUARANTEES, EITHER EXPRESSED OR IMPLIED, CONCERNING: (A) ITS ACCURACY, CURRENTNESS, COMPLETENESS, RELIABILITY OR SECURITY; (B) ANY IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT; (C) ITS MARKET VALUE; OR (D) YOUR SATISFACTION. NO ORAL OR WRITTEN INFORMATION OR ADVICE PROVIDED BY ELUA OR ITS AUTHORIZED REPRESENTATIVE SHALL CREATE ANY WARRANTY.</p>
        <h3>Limitation of Liability</h3>
        <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ELUA AND ITS AFFILIATES, SERVICE PROVIDERS, OR LICENSORS SHALL NOT BE LIABLE FOR ANY PERSONAL INJURIES OR DAMAGES OF ANY INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL NATURE WHATSOEVER, INCLUDING LOSSES OF PROFITS, DATA, BUSINESS INTERRUPTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES THAT MAY ARISE OUT OF OR ARE RELATED TO YOUR USE OF OR INABILITY TO USE THE APPLICATION. THIS LIMITATION APPLIES REGARDLESS OF THEORY OF LIABILITY AND CONTINUES EVEN IF ELUA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
        <p>The Licensed Application and related documentation are "Commercial Items", as that term is defined at 48 C.F.R. §2.101, consisting of "Commercial Computer Software" and "Commercial Computer Software Documentation", as such terms are used in 48 C.F.R. §12.212 or 48 C.F.R. §227.7202, as applicable. Consistent with 48 C.F.R. §12.212 or 48 C.F.R. §227.7202-1 through 227.7202-4, as applicable, the Commercial Computer Software and Commercial Computer Software Documentation are being licensed to U.S. Government end users (a) only as Commercial Items and (b) with only those rights as are granted to all other end users pursuant to the terms and conditions herein. Unpublished-rights reserved under the copyright laws of the United States.</p>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ELUA;
