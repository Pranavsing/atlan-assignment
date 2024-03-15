import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationFeatured from "./animation/animationFeatured.json";
import animationFire from "./animation/animationFire.json";

const FeaturedList = ({ featuredModels, onModelClick }) => {
  return (
    <div className="modyContainer">
      <div className="mody">
        <div className="topi">
          <h2>Featured Model</h2>
          <Lottie animationData={animationFire}></Lottie>
        </div>
        <div className="moye">
          <div>
            <Lottie animationData={animationFeatured}></Lottie>
          </div>
          <div className="conte">
            <div>
              <h2
                style={{
                  textAlign: "center",
                  fontWeight: "1000",
                }}
              >
                Image-to-Text Transformer
              </h2>
              <p
                style={{
                  fontSize: "20px",
                  paddingTop: "40px",
                  marginLeft: "50px",
                  paddingRight: "40px",
                  fontStyle: "italic",
                }}
              >
                Exceptional Accuracy, Beloved by Developers. Renowned for
                converting images into precise text, our Image-to-Text
                Transformer earns its featured status through widespread
                developer acclaim. Its consistent high performance and ability
                to extract valuable insights make it a cherished gem in the AI
                landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="btnContainer">
          <a href="/generate" target="_blank" rel="noopener noreferrer">
            <button className="featured-card">Try</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedList;
