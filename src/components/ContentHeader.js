import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/ContentHeader.css";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const ContentHeader = () => {
  return (
    <div className="content-header">
      <div className="bg-image">
        <img src="/img/content-header1.png" className="header-img" alt=""></img>
      </div>

      <Container fluid>
        <ScrollContainer>
          <ScrollPage page={0}>
            <div className="row">
              <div className="col-md-12">
                <div className="top-content" data-aos="fade-up">
                  <p className="normal-item">Books reimagined for</p>
                  <p className="transition-item">modern life.</p>
                  <button type="button" className="btn btn-viewbook">
                    View Books
                  </button>
                </div>
              </div>
            </div>
          </ScrollPage>
          <ScrollPage page={1}>
            <div className="bottom-content">
              <div className="image-content">
                <Animator
                  animation={batch(Fade(), MoveOut(-1000, 0), Sticky())}
                >
                  <img
                    src="/img/books-hero-left.png"
                    className="left-img"
                    alt="left"
                  ></img>
                </Animator>
                <Animator animation={batch(Fade(), MoveOut(1000, 0), Sticky())}>
                  <img
                    src="/img/books-hero-right.png"
                    className="right-img"
                    alt="right"
                  ></img>
                </Animator>
              </div>
            </div>
          </ScrollPage>
          <ScrollPage page={2}>
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-4 col-md-12">
                <Animator animation={batch(Fade(), MoveOut(), Sticky())}>
                  <div className="mission-content">
                    <img src="/img/mission-top.png" alt="mission effect" className="mission-top"></img>
                    <p className="mission-title">Our Mission</p>
                    <p className="mission-description">
                      The Great Library is a platform for digital goods and
                      services. Our goal is to provide authors and creators the
                      highest royalties possible while at the same time lowering
                      the barrier to entry for new and up and coming names.
                      Where Amazon and other publishing houses take upwards of
                      75 percent, The Great Library sees that content creators
                      receive 95% for all digital products and downloads and up
                      to 10% of all resales. Our goal is to enable creators to
                      continually improve their works so that the value of
                      holding any of the tokens on the site is an attractive
                      proposition. Our KAIZEN approach means new art and
                      illustrations as well as improvements to the texts are
                      always forthcoming. Join us at The Great Library and watch
                      our books and products come alive.
                    </p>
                  </div>
                </Animator>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </ScrollPage>
        </ScrollContainer>
      </Container>
    </div>
  );
};

export default ContentHeader;
