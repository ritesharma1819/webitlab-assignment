import React from "react";
import "./index.css";
import media_image from "../../assets/Images/media.svg";
import health_image from "../../assets/Images/health.svg";
import hospitality_image from "../../assets/Images/hospitality.svg";
import retail_image from "../../assets/Images/retail.svg";
import education_image from "../../assets/Images/eduation.svg";
import travel_image from "../../assets/Images/travel.svg";
import mobile_image from "../../assets/Images/mobile.svg";
import it_image from "../../assets/Images/IT.svg";
import agritech_image from "../../assets/Images/agritech.svg";

const IndustriesPage = () => {
  const industriesData = [
    {
      title: "MEDIA & ENTERTAINMENT",
      image: media_image,
    },
    {
      title: "HEALTH CARE & WELLNESS",
      image: health_image,
    },
    {
      title: "HOSPITALITY & REAL ESTATE",
      image: hospitality_image,
    },
    {
      title: "RETAIL & E COMMERCE",
      image: retail_image,
    },
    {
      title: "EDUCATION & LEARNING",
      image: education_image,
    },
    {
      title: "TRAVEL & TRANSPORT",
      image: travel_image,
    },
    {
      title: "MOBILE & TELECOM",
      image: mobile_image,
    },
    {
      title: "IT & ITES",
      image: it_image,
    },
    {
      title: "AGRITECH",
      image: agritech_image,
    },
  ];
  return (
    <div className="industries">
      <div className="industries__title">
        <h1>WE ARE WORKING </h1>
        <h1 className="industries__title-success">WITH THESE INDUSTRIES</h1>
        <p>Our process-driven approach keeps us going</p>
      </div>
      <div className="industries__content">
        {industriesData.map((item, i) => {
          return (
            <div className="industries__content-item" key={i}>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndustriesPage;
