import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <ul>
          <li>Personal Information: We may collect personal information from you, such as your name, email address, phone number, shipping address, and payment information, when you make a purchase or create an account.</li>
          <li>
            Usage Information: We collect information about your interactions with our website, including the pages you visit, your IP address, browser type, and referral URLs
          </li>
          <li>
            We use the information we collect for various purposes, including:
          </li>
          a. Processing your orders and providing customer support.<br></br>
          b. Personalizing your shopping experience and recommending products.<br></br>
          c. Analyzing website traffic and improving our services.
           </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
