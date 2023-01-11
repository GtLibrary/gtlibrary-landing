import React from "react";
import Container from "react-bootstrap/Container";
// import { Parallax } from "react-scroll-parallax";
import "../styles/Roadmap.css";

const RoadmapComponent = () => {
  return (
    <div className="faq-area">
      <div className="roadmap" data-aos="fade-up">
        <h2 className="roadmap-title">Road Map</h2>
        
      </div>
      <div className="team-topeffect">
          <img src="/img/faq-bottom.png" className="top-effect-img" alt="top-effect"></img>
          <img src="/img/spider.png" className="spider-effect" alt="spider"></img>
      </div>
    </div>
  );
};

export default RoadmapComponent;
