import React from "react";
import Container from "react-bootstrap/Container";
import { Parallax } from "react-scroll-parallax";
import { Fade } from "react-awesome-reveal";
import "../styles/ContentHeader.css"

const ContentHeader = () => {
  return (
    <div className="content-header">
      <div className="bg-image">
        <img src="/img/content-header1.png" className="header-img" alt=""></img>
      </div>
      <Container fluid>
        <div className="row">
          <div className="col-md-6">
            <Fade direction="up" triggerOnce={true}>
              <div className="left-content">
                <p className="normal-item">Books</p>
                <p className="normal-item">reimagined for</p>
                <p className="transition-item">modern life.</p>
                <button type="button" className="btn btn-viewbook">View Books</button>
              </div>
            </Fade>
          </div>
          <div className="col-md-6">
            <Fade direction="right" triggerOnce={true}>
              <Parallax translateY={[50, -50]} speed={2} tagOuter="div">
              <div className="right-content">
                <img src="/img/author.png" className="author-img" alt="author"></img>
              </div>
              </Parallax>
            </Fade>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-2"></div>
          <div className="col-lg-4 col-md-8">
              <div className="mission-content" data-aos="fade-up">
                <p className="mission-title">Our Mission</p>
                <p className="mission-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
          </div>
          <div className="col-lg-4 col-md-2"></div>
        </div>
      </Container>
    </div>
  );
};

export default ContentHeader;