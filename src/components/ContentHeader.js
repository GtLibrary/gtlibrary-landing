import React, { useState } from "react";
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
  const [loadingleft, setLoadingleft] = useState(true);
  const [loadingright, setLoadingright] = useState(true);
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
                  <p className="transition-item">Are you an author?</p>
                  <p className="normal-item">Start your Web3 publishing journey <a href="https://author.greatlibrary.io">now!</a></p>
	  	  <p className="normal-item">If you are a reader begin by checking out the books:</p>
                  <button type="button" className="btn btn-viewbook" 
	  		onClick={(e) => {
      				e.preventDefault();
      				window.location.href='https://books.greatlibrary.io';
			}}
                    >View Books
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
	  Attention Web3 Enthusiasts, have you heard of The Great Library? The all-in-one platform for authors, readers, and gamers alike, where smart books, NFTs, and exclusive merchandise come together to create an immersive experience. Take your love for the digital world to the next level with The Great Library.
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
