import React, { useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
// import { Parallax } from "react-scroll-parallax";
import "../styles/Roadmap.css";

const RoadmapComponent = () => {
  const markRef = useRef();
  useEffect(() => {
      const path = document.getElementById('roadline');
      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = pathLength + ', ' + pathLength;
      path.style.strokeDashoffset = pathLength;
      path.getBoundingClientRect();
      window.addEventListener("scroll", function (e) {
          const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 10.5;
          const drawLength = pathLength * scrollPercentage;
          path.style.strokeDashoffset = pathLength - drawLength;
          // if (scrollPercentage >= 0.99) {
          //     path.style.strokeDasharray = "none";
          // } else {
          //     path.style.strokeDasharray = pathLength + ', ' + pathLength;
          // }
      });
  })
  return (
    <div className="faq-area">
      <div className="roadmap" data-aos="fade-up">
        <h2 className="roadmap-title">Road Map</h2>
        <div className="roadmap-content">
          <div className="roadmap-line">
            <svg width="631" height="1882" viewBox="0 0 631 1882" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="roadline" ref={markRef} d="M433.941 0V250.036C424.12 354.486 146.911 461.232 64.4028 461.232C-18.1056 461.232 -10.1045 378.748 31.8995 373.355C112.408 363.019 96.8578 434.529 105.407 496.188C115.143 566.408 221.89 544.673 223.891 644.319C223.928 646.168 223.662 648.086 223.156 649.865C183.795 788.463 150.111 925.781 568.452 913.239C640.959 913.239 644.959 817.109 598.455 799.145C552.157 781.261 497.001 805.833 488 884C468.831 964.918 424 1208 336 1289C163 1414 226.663 1752.02 268 1881" stroke="#EAC94D" stroke-width="3" stroke-linejoin="round" stroke-dasharray="20 20"/>
                <path fill="#14120B" d="M194 1529a30 30 0 1 0 60 0a30 30 0 1 0 -60 0" />
                <path fill="#EAC94D" d="M210 1529a14 14 0 1 0 28 0a14 14 0 1 0 -28 0" />
                <path fill="#14120B" d="M404 1081a30 30 0 1 0 60 0a30 30 0 1 0 -60 0" />
                <path fill="#EAC94D" d="M420 1081.3a14 14 0 1 0 28 0a14 14 0 1 0 -28 0" />
                <path fill="#14120B" d="M194 662a30 30 0 1 0 60 0a30 30 0 1 0 -60 0" />
                <path fill="#EAC94D" d="M210 662a14 14 0 1 0 28 0a14 14 0 1 0 -28 0" />
                <path fill="#14120B" d="M404 168a30 30 0 1 0 60 0a30 30 0 1 0 -60 0" />
                <path fill="#EAC94D" d="M420 168a14 14 0 1 0 28 0a14 14 0 1 0 -28 0" />
            </svg>
          </div>
          <div className="roadmap-item1">
            <div className="rm-item-content">
              <img src="/img/circle1.png" alt="quater1"></img>
              <h3>Step 1</h3>
              <p>Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
            </div>
          </div>
          <div className="roadmap-item2">
            <div className="rm-item-content">
              <img src="/img/circle2.png" alt="quater1"></img>
              <h3>Step 2</h3>
              <p>Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
            </div>
          </div>
          <div className="roadmap-item3">
            <div className="rm-item-content">
              <img src="/img/circle3.png" alt="quater1"></img>
              <h3>Step 3</h3>
              <p>Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
            </div>
          </div>
          <div className="roadmap-item4">
            <div className="rm-item-content">
              <img src="/img/circle4.png" alt="quater1"></img>
              <h3>Step 4</h3>
              <p>Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
            </div>
          </div>
        </div>
      </div>
      <div className="team-topeffect">
          <img src="/img/faq-bottom.png" className="top-effect-img" alt="top-effect"></img>
          <img src="/img/spider.png" className="spider-effect" alt="spider"></img>
      </div>
    </div>
  );
};

export default RoadmapComponent;
