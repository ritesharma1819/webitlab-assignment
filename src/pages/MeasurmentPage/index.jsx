import React from "react";
import "./index.css";
import transprancy_image from "../../assets/Images/transprency.svg";
import realTime_image from "../../assets/Images/real_time_project.svg";
import wellStructured_image from "../../assets/Images/well_structrured.svg";
import aglie_image from "../../assets/Images/angle.svg";
import onsite_image from "../../assets/Images/onsite.svg";
import innovationWork_image from "../../assets/Images/innovation_work.svg";
import client_image from "../../assets/Images/client.svg";
import dedicated_image from "../../assets/Images/dedicated.svg";

const MeasurmentPage = () => {
  const measurmentData = [
    {
      title: "TRANSPARENCY AND RELIABILITY",
      image: transprancy_image,
    },
    {
      title: "REAL TIME PROJECT STATUS",
      image: realTime_image,
    },
    {
      title: "WELL STRUCTURED COMMUNICATION",
      image: wellStructured_image,
    },
    {
      title: "AGILE METHODOLOGY",
      image: aglie_image,
    },
    {
      title: "ONSITE COLLABORATION",
      image: onsite_image,
    },
    {
      title: "INNOVATION AT WORK",
      image: innovationWork_image,
    },
    {
      title: "CLIENT'S INVOLVEMENT IN EACH MILESTONE",
      image: client_image,
    },
    {
      title: "DEDICATED TEAM",
      image: dedicated_image,
    },
  ];
  return (
    <div className="measurment">
      <div className="measurment__title">
        <h1>MEASUREMENT</h1>
        <h1 className="measurment__title-success">TO OUR SUCCESS</h1>
        <p>Our process-driven approach keeps us going</p>
      </div>
      <div className="measurment__content">
        {measurmentData.map((item, i) => {
          return (
            <div className="measurment__content-item" key={i}>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeasurmentPage;
