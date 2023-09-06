import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to Shop Velocity Mall, your one-stop destination for all your shopping needs. We are passionate about providing you with a seamless and enjoyable online shopping experience that offers a wide range of high-quality products at competitive prices.
            And we have -
          <ul>
            <li>
            Quality Assurance: We take pride in curating a collection of products that meet the highest standards of quality. Our team meticulously selects each item to ensure you receive only the best.
            </li>
            <li>
           Affordable Pricing: We understand the importance of value for money. That's why we strive to offer competitive prices without compromising on quality.
            </li>
            <li>
            Customer-Centric: Your satisfaction is our top priority. Our dedicated customer support team is always ready to assist you, ensuring a hassle-free shopping experience.
            </li>
            <li>
           Secure Shopping: Your online security matters to us. We employ the latest encryption technology to safeguard your personal and payment information.
                </li>
                  
          </ul>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
