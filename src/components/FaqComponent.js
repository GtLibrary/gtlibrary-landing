import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Container from "react-bootstrap/Container";
// import { Parallax } from "react-scroll-parallax";
import "../styles/Faq.css";

const data = {
  title: "FAQ",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
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
      <div className="roadmap">
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
    </div>
  );
};

export default FaqComponent;
