// ModelList.js
import React, { useState, useRef } from "react";
import Lottie from "lottie-react";
import "./ModelList.css";
import ModelCard from "./ModelCard";

import animationImageToText from "./animation/animationImageToText.json";
import animationLanguage from "./animation/animationLanguage.json";
import animationImage from "./animation/animationImage.json";

const ModelList = ({ models, onModelClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % models.length);
  };

  const handlePrevClick = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + models.length) % models.length
    );
  };

  const handleModelClick = (model) => {
    onModelClick(model);
  };

  return (
    <div className="modyContainer">
      <div className="mody">
        <div className="topic" style={{ textAlign: "center" }}>
          <h2>Browse Models</h2>
        </div>
        <div className="carousel-container">
          <div className="carousel" ref={carouselRef}>
            {models.map((model, index) => (
              <ModelCard
                key={model.id}
                model={model}
                isActive={index === activeIndex}
                onModelClick={() => handleModelClick(model)}
              />
            ))}
          </div>
          <button className="prev-button" onClick={handlePrevClick}>
            &lt;
          </button>
          <button className="next-button" onClick={handleNextClick}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelList;
