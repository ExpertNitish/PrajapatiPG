import React from "react";
import "./Choose.css";
import FeatureItem from "../FeaturesItem/FeatureItem";

const Choose = () => {
  return (
    <div id="choose" className="choose">
      <h1>Why Choose Prajapati PG</h1>
      <p>
        Choose Prajapati PG for a comfortable and convenient living experience.
        With a variety of room options, modern amenities, and a welcoming
        environment, we provide more than just accommodation; we offer a home
        away from home, ensuring a pleasant and productive stay.
      </p> <div className="items">
      <FeatureItem />
    </div>
    </div>
  );
};

export default Choose;
