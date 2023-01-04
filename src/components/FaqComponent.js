import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Container from "react-bootstrap/Container";
// import { Parallax } from "react-scroll-parallax";
import "../styles/Faq.css";

const data = {
  title: "FAQ",
  rows: [
    {
      title: "Why The Great Library?",
      content: `The Great Library's singular mission is to shed light on ignorance, in its many forms.
      		As civilizations across the globe hang in the balance, the Library seeks to pump wonder
		into the hearts and minds of all who breathe free air.  
		At the Library you will see the dead are not gone; they are not forgotten.`,
    },
    {
      title: "What Makes Culture Coin's Tokenomics So Stellar?",
      content: `There are only a set number of Culture Coins ever minted. 
		The administrators will hold some in reserve, but most are brought into circulation by the community using the ICO and dexes. 
		The token's internal dex has the unique property that any CC returned will automatically be burned. This means the token is strictly deflationary. 
		The primary function of Culture Coin is as a gas token--its primary role is to be burned for products and services, like for casting spells in the games--leaving those left in circulation worth more.`,
    },
    {
      title: "Why Stake Your Culture Coin?",
      content: `Staking is the process of burning Culture Coin in exchange for a principal plus interest payment at a later date. 
		Staking is a mechanism built directly into the Culture Coin token�s underlying smart contract.`,
    }
  ],
};

const styles = {
  bgColor: "black",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "grey",
  arrowColor: "yellow",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const FaqComponent = () => {
  return (
    <div className="faq-area">
      <div className="faq">
        <Container>
          <div className="row">
            <div className="col-md-12" data-aos="fade-up">
              <Faq data={data} styles={styles} config={config} />
            </div>
          </div>
        </Container>
      </div>
      <div className="roadmap" data-aos="fade-up">
        <h2 className="roadmap-title">Road Map</h2>
        <section id="timeline">
          <div className="tl-item">
            <div className="tl-bg img-area1"></div>

            <div className="tl-year">
              <p className="f2 heading--sanSerif">2011</p>
            </div>

            <div className="tl-content">
              <h1>Lorem ipsum dolor sit</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit.
              </p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg img-area2"></div>

            <div className="tl-year">
              <p className="f2 heading--sanSerif">2013</p>
            </div>

            <div className="tl-content">
              <h1 className="f3 text--accent ttu">Vestibulum laoreet lorem</h1>
              <p>
                Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan
                risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas.
                Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed
                felis. Morbi sed nisl et arcu.
              </p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg img-area3"></div>

            <div className="tl-year">
              <p className="f2 heading--sanSerif">2014</p>
            </div>

            <div className="tl-content">
              <h1 className="f3 text--accent ttu">Phasellus mauris elit</h1>
              <p>
                Mauris cursus magna at libero lobortis tempor. Suspendisse
                potenti. Aliquam interdum vulputate neque sit amet varius.
                Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique
                dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus
                nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis
                efficitur vel, pretium sed.
              </p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg img-area4"></div>

            <div className="tl-year">
              <p className="f2 heading--sanSerif">2016</p>
            </div>

            <div className="tl-content">
              <h1 className="f3 text--accent ttu">Mauris vitae nunc elem</h1>
              <p>
                Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis
                ornare purus non euismod. Donec vestibulum efficitur tortor,
                eget efficitur enim facilisis consequat. Vivamus laoreet laoreet
                elit. Ut ut varius metus, bibendum imperdiet ex. Curabitur diam
                quam, blandit at risus nec, pulvinar porttitor lorem.
                Pellentesque dolor elit.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="team-topeffect">
          <img src="/img/faq-bottom.png" className="top-effect-img" alt="top-effect"></img>
          <img src="/img/spider.png" className="spider-effect" alt="spider"></img>
      </div>
    </div>
  );
};

export default FaqComponent;
