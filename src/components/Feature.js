import React from "react";
import Container from "react-bootstrap/Container";
// import { Parallax } from "react-scroll-parallax";
import "../styles/Feature.css"

const Feature = () => {
    return (
        <div className="feature-collection">
            <Container fluid>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="featurehead-img" data-aos="fade-right">
                            <img src="/img/feature.png" className="feature-img" alt="feature logo"></img>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="featurehead-content" data-aos="fade-left">
                            <p className="featurehead-title">What is The Great Library? It's a community of readers and authors.</p>
                            <p className="featurehead-description">The Great Library is a community of readers, authors, and artists.

The Great Library is a free-access platform that allows authors to share their works with readers. Unlike Patreon, The Great Library does not have a subscription or traditional payment system, but uses WEB3 tokens to mediate access to the art, books, games, illustrations, etc. It also curates works to ensure quality and relevancy, which is something that Patreon does not do. Additionally, The Great Library offers tools for authors to interact with their readers, such as chat and voting, as well as providing analytics to help authors better understand their readers. In addtion to art and illustrations, The Great Library includes games and other digital products.</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="row feature-item" data-aos="fade-left">
                    <div className="col-lg-6 col-md-12">
                        <div className="featureitem-title">
                            <p>Book Tokens</p>                            
                        </div>
                        <div className="featureitem-description">
                            <p>The most basic of The Great Library's NFTs are book tokens, which give readers the ability to purchase, transfer, or resale ebooks on the site. Where other ebook formats cannot be resold, all NFTs sold through the site can be resold at any time, and are the only way to achieve true ownership of an ebook.</p>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
                <div className="row feature-item" data-aos="fade-right">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6 col-md-12">
                        <div className="featureitem-title">
                            <p>Bookmark Tokens</p>
                        </div>
                        <div className="featureitem-description">
                            <p>Bookmark Tokens are Image-NFTs and so much more. Like the Book Tokens, Bookmark Tokens can be bought, sold, and transfered using WEB3 technologies. But beyond pointing to illustrations and images from the books they are associated with, Bookmark Tokens act like properties and can be improved using the site's cryptocurrency. These improvements impact the games as well as the AI capabilities tied to the tokens.</p>
	    		    <p>Bookmark Tokens build on the Book Tokens to form a complete ecosystem.</p>
                        </div>
                    </div>
                </div>
                <div className="row feature-item" data-aos="fade-left">
                    <div className="col-lg-6 col-md-12">
                        <div className="featureitem-title">
                            <p>Hardcopy Tokens</p>
                        </div>
                        <div className="featureitem-description">
                            <p>Hardcopy versions of the books are limited. The only way to access these limited copies are through the purchase of these burnable Hardcopy Tokens. Once the token is burnt the book will be shipped and the token is then retired and is no longer transferable.</p>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
                <div className="row feature-item" data-aos="fade-right">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6 col-md-12">
                        <div className="featureitem-title">
                            <p>Culture Coin</p>
                        </div>
                        <div className="featureitem-description">
                            <p>The Great Library is dedicated to preserving and sharing human knowledge. Culture Coin is the lifeblood of the Library. It is a strictly deflationary token with only a limited number in existence. All purchases using Culture Coin burn the token so that those who hold onto the token long term are guaranteed that they own a greater and greater percentage of the coin.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
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