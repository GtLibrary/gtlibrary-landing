import React from "react";
import Container from "react-bootstrap/Container";
// import { Parallax } from "react-scroll-parallax";
import "../styles/Feature.css"

const Feature = () => {
    return (
        <div className="feature-collection">
            <Container fluid>
                <div className="row">
                    <div className="col-md-6">
                        <div className="featurehead-img" data-aos="fade-right">
                            <img src="/img/feature.png" className="feature-img" alt="feature logo"></img>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="featurehead-content" data-aos="fade-left">
                            <p className="featurehead-title">What is The Great Library? It`s Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="featurehead-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="row feature-item" data-aos="fade-left">
                    <div className="col-md-6">
                        <div className="featureitem-title">
                            <p>Feature1</p>                            
                        </div>
                        <div className="featureitem-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
                <div className="row feature-item" data-aos="fade-right">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <div className="featureitem-title">
                            <p>Feature2</p>
                        </div>
                        <div className="featureitem-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
                        </div>
                    </div>
                </div>
                <div className="row feature-item" data-aos="fade-left">
                    <div className="col-md-6">
                        <div className="featureitem-title">
                            <p>Feature3</p>
                        </div>
                        <div className="featureitem-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
                <div className="row feature-item" data-aos="fade-right">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <div className="featureitem-title">
                            <p>Feature4</p>
                        </div>
                        <div className="featureitem-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn btn-lg btn-books">View Books</button>
                    </div>
                </div>
            </Container>
            <div className="mountain-area" data-aos="fade-up">
                <img src="/img/mountain.png" className="mountain-img" alt="mountain"></img>
                <img src="/img/faq-top.png" alt="faq-top" className="faq-topimg"></img>
            </div>
        </div>
    );
};

export default Feature;