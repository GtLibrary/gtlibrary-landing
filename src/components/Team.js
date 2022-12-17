import React from "react";
import Container from "react-bootstrap/Container";
// import { Parallax } from "react-scroll-parallax";
import "../styles/Team.css"

const Team = () => {
    return (
        <div className="team-area">
            <Container>
                <div className="row">
                    <div className="col-md-12">
                        <p className="team-title">Team</p>
                    </div>
                </div>
                <div className="row team-member-area">
                    <div className="col-md-6">
                        <div className="team-member-item">
                            <h3 className="member-title">Name1</h3>
                            <p className="member-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="team-member-item">
                            <h3 className="member-title">Name1</h3>
                            <p className="member-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-lg btn-contactus">Contact Us</button>
                    </div>
                </div>
                <div className="row newsletter-area">
                    <div className="col-md-8">
                        <div className="signup-area">
                            <h2>Sign up to our newsletter</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum tellus arcu.</p>
                            <div className="mail-area">
                                <input type="text" className="email" placeholder="Your email"></input>
                                <button className="btn btn-subscribe" type="button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="/img/gentleman.png" alt="man-img" className="gentleman"></img>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Team;