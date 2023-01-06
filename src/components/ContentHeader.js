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
          <div className="col-md-12">
            <Fade direction="up" triggerOnce={true}>
              <div className="top-content">
                <p className="normal-item">Books reimagined for</p>
                <p className="transition-item">modern life.</p>
                <button type="button" className="btn btn-viewbook">View Books</button>
              </div>
            </Fade>
          </div>
          <div className="col-md-12">
            <Fade direction="up" triggerOnce={true}>
              <div className="bottom-content">
                <div className="image-content">
                  <Parallax translateX={["0%", "-100%"]} speed={10}>
                    <img src="/img/books-hero-left.png" className="left-img" alt="left"></img>
                  </Parallax>
                  <Parallax translateX={["0%", "100%"]} speed={10}>
                    <img src="/img/books-hero-right.png" className="right-img" alt="right"></img>
                  </Parallax>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-2"></div>
          <div className="col-lg-4 col-md-8">
              <div className="mission-content" data-aos="fade-up">
                <p className="mission-title">Our Mission</p>
                <p className="mission-description">The Great Library is a platform for digital goods and services. Our goal is to provide authors and creators the highest royalties possible while at the same time lowering the barrier to entry for new and up and coming names. Where Amazon and other publishing houses take upwards of 75 percent, The Great Library sees that content creators receive 95% for all digital products and downloads and up to 10% of all resales. Our goal is to enable creators to continually improve their works so that the value of holding any of the tokens on the site is an attractive proposition. Our KAIZEN approach means new art and illustrations as well as improvements to the texts are always forthcoming. Join us at The Great Library and watch our books and products come alive.</p>
              </div>
          </div>
          <div className="col-lg-4 col-md-2"></div>
        </div>
      </Container>
    </div>
  );
};

export default ContentHeader;