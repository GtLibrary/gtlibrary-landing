import React from "react";
import Container from "react-bootstrap/Container";
// import { Parallax } from "react-scroll-parallax";
import "../styles/Team.css"

const Team = () => {
    return (
        <div className="team-area">
            <Container>
                <div className="row" data-aos="fade-up">
                    <div className="col-md-12">
                        <p className="team-title">Team</p>
                    </div>
                </div>
                <div className="row team-member-area">
                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-right">
                            <h3 className="member-title">John R Raymond</h3>
                            <p className="member-description">Born Rayun Rayaun, John R Raymond is the author of the Scarab Cycle. His background in Byzantine Agreement and cryptography lead him to create The Great Library when it became clear to him that the publishing industry was ripe for a shake up. He is currently the Head Librarian with The Great Library and, when not busy with his own books, he works with others editing theirs. He likes both cats and dogs and supports the arts in whatever form they take.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-left">
                            <h3 className="member-title">Lawrence Stanley</h3>
                            <p className="member-description">Lawrence Stanley works as a scientist and engineer and has struggled all his life to reconcile his knowledge of geology, astronomy, biology and genetics with his religious heritage and personal experience.  He undertook a quest to find the answer, even if it meant losing his faith, or turning his back on science, depending on what he found.  He has studied many scientific and sacred texts.  His startling conclusion is both are correct ways of looking at the world. They are in agreement and complementary.  He undertook writing a series of novels, designed to entertain, and perhaps to heal the wounds resulting from centuries of condemnation on both sides. The world has too much hate and suspicion. That changes today.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" data-aos="fade-up">
                        <button className="btn btn-lg btn-contactus">Contact Us</button>
                    </div>
                </div>
                <div className="row newsletter-area" data-aos="fade-up">
                    <div className="col-md-8">
                        <div className="signup-area">
                            <h2>Sign up to our newsletter</h2>
                            <p>Receive all the latest Library news</p>
                            <div className="mail-area">
                                <input type="text" className="email-input" placeholder="Your email"></input>
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