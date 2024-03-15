// ModelCard.js
import React from "react";
import Lottie from "lottie-react";
import "./ModelCard.css";
import animationImageToText from "./animation/animationImageToText.json";
import animationLanguage from "./animation/animationLanguage.json";
import animationImage from "./animation/animationImage.json";

const modelDescriptions = [
  "Transform images into text with precision and speed.",
  "Empower your applications with advanced language capabilities.",
  "Unleash the power of image recognition for diverse use cases.",
];

const ModelCard = ({ model, isActive, onModelClick }) => {
  const animations = [animationImageToText, animationLanguage, animationImage];
  const animationData = animations[model.id - 1];

  return (
    <div
      className={`model-card ${isActive ? "active" : ""}`}
      onClick={onModelClick}
    >
      <div className="animation-container">
        <Lottie animationData={animationData} className="animation" />
      </div>
      <div className="model-name">
        <p>{model.name}</p>
        <br></br>
        <div className="content">{modelDescriptions[model.id - 1]}</div>
      </div>
    </div>
  );
};

export default ModelCard;
