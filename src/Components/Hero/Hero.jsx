import "./Hero.css";
import React, { useEffect, useState } from "react";
import img2 from "/img2.jpg";
import img3 from "/img3.jpg";
import img5 from "/img5.jpg";
import img6 from "/img6.jpg";
import img7 from "/img7.jpg";

const images = [img2, img3, img5, img6, img7];
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="hero">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="text">
        <h1>Welcome to Prajapati PG</h1>
        <p className="para">
          <p>Experience Comfort and Convenience at Prajapati PG</p>
          <p>
            Your gateway to a balanced and fulfilling living experience. Enjoy
            our variety of room options, modern amenities, and a welcoming
            environment that makes you feel right at home.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Hero;
