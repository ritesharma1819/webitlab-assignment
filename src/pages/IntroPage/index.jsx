import React from "react";
import Header from "../../components/Header";
import "./index.css";
import innovation_image from "../../assets/Images/innovation.svg";

const IntroPage = () => {
  return (
    <div className="intro">
      <Header />
      <div className="intro__feed">
        <img src={innovation_image} alt="" />
        <div className="intro__feed-title">
          <h1>INNOVATION DIGITAL TECHNOLOGY</h1>
          <h2>everthing we do is the consumer, imagination and you.</h2>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
