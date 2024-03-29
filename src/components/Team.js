import React from "react";
import Faq from "react-faq-component";
import Container from "react-bootstrap/Container";
import "../styles/Team.css"

const data = {
    rows: [
      {
        title: "1. What inspired you to create The Great Library?",
        content: `The inspiration for The Great Library came from a desire to revolutionize the way we think about reading and the media industry. I wanted to create a platform that would empower independent authors, provide a personalized reading experience for users, and utilize the latest technology to enhance the overall experience. The Great Library is the culmination of years of research and development, and I am excited to see how it will change the way we read and consume literature in the digital age.`,
      },
      {
        title: "2. How does The Great Library differ from other reading platforms currently available?",
        content: `The Great Library differs from other reading platforms currently available in several key ways. Firstly, it utilizes cutting-edge technology such as AI and blockchain to enhance the reading experience for users and provide authors with new opportunities for engagement and monetization. Additionally, The Great Library incorporates gaming elements into its platform, making reading more interactive and engaging for users. The platform also provides a marketplace where authors can sell their works directly to readers and utilizes smart contracts to ensure the exclusive ownership of literary NFTs. Overall, The Great Library aims to revolutionize the way we think about reading and provides a unique and immersive experience for users.`,
      },
      {
        title: "3. Can you explain the use of AI, blockchain technology, and gaming elements in The Great Library?",
        content: `The Great Library utilizes AI to provide authors with instant feedback on their works, allowing them to better understand their audience and improve their writing. Additionally, the platform employs AI to enhance the reading experience for users. This includes personalized book recommendations, interactive reading experiences, and more.

        Blockchain technology is used to provide secure and transparent record-keeping, as well as proof of exclusive ownership of literary NFTs. This ensures that the authors are the rightful owners of their works and that these works cannot be duplicated or replicated without their consent. Additionally, it provides transparency and security for both authors and readers, ensuring that all transactions are fair and accurate.
        
        The Great Library also incorporates gaming elements into its platform to make reading more engaging and interactive. This includes interactive reading experiences, in-game challenges, and rewards for readers who complete certain tasks or reach certain milestones. Additionally, gaming elements are used in smartbooks, which feature interactive elements, such as puzzles and mini-games, that are tied to the story. This not only adds an extra layer of immersion but also creates a sense of exclusivity and rarity for these smartbooks, making them highly sought after by collectors.
        `,
      },
      {
        title: "4. How does The Great Library empower independent authors?",
        content: "The Great Library empowers independent authors by providing them with advanced writer tools, including an analytics suite that gives them detailed insights into their readers' behavior, interactive reading experiences, and a marketplace built on blockchain technology. These tools enable independent authors to better understand their audience, improve their writing, and reach new audiences, while also earning more revenue. Additionally, The Great Library's use of Avalanche ensures that transactions are processed quickly and securely, providing a seamless experience for authors and readers. Overall, The Great Library's writer tools are designed to empower independent authors and provide them with the tools they need to succeed in the digital age."
      },
      {
        title: "5. How does The Great Library's use of Avalanche enhance the platform's functionality?",
        content: "The Great Library's use of Avalanche enhances the platform's functionality in several ways. Firstly, Avalanche offers fast finality times, which is crucial for the functioning of The Great Library ecosystem. The platform's marketplace, where authors can sell their works directly to readers, and its in-game marketplaces require fast and efficient transaction processing. Avalanche's fast finality times ensure that transactions are processed quickly and securely, providing a seamless experience for users. Secondly, Avalanche offers high scalability, which is critical for The Great Library's growth. The platform is designed to attract a large number of users and authors, and the high scalability of Avalanche ensures that The Great Library's ecosystem can handle the increased demand. Thirdly, Avalanche offers a high level of security, which is essential for protecting the integrity of the ecosystem. The Great Library utilizes blockchain technology to provide secure and transparent record-keeping, as well as proof of exclusive ownership of literary NFTs. Avalanche's secure and decentralized network ensures that transactions are recorded on a public ledger and cannot be altered or deleted, providing transparency and security for both authors and readers. Lastly, Avalanche offers a high level of interoperability, which is important for The Great Library's long-term growth. The platform plans to expand into other blockchain networks in the future, and Avalanche's interoperability allows for easy integration with other networks."
      },
      {
        title: "6. How does The Great Library plan to grow and expand in the future?",
        content: "The Great Library plans to continue developing and expanding its use of AI, blockchain technology, and gaming elements to enhance the user experience and provide more opportunities for independent authors. Additionally, we plan to expand our partnerships and collaborations with other organizations and platforms in the media industry to reach new audiences and offer a wider range of content. We also intend to explore new revenue streams and opportunities, such as the use of our own cryptocurrency, Culture Coin, within the community and the potential for licensing and merchandising agreements. Furthermore, we also plan to expand our presence globally, by translating our platform into different languages and reaching out to new regions."
      },
      {
        title: "7. Can you speak to the security measures in place to protect user data on The Great Library?",
        content: "The Great Library takes the protection of user data very seriously. We employ a number of security measures to ensure that user data is kept safe and secure. We use a combination of encryption and secure servers to protect user data from unauthorized access. Additionally, our use of blockchain technology provides a decentralized and immutable ledger of transactions, ensuring that all data is accurate and tamper-proof. Our team is constantly monitoring our systems to identify and address any potential security threats. We also encourage users to take their own security measures, such as using strong passwords and keeping their account information private. Overall, we are committed to providing the highest level of security for our users and their data."
      },
      {
        title: "8. How does The Great Library plan to monetize its platform?",
        content: "The Great Library plans to monetize its platform through various means. One way is through the sale of literary NFTs, which will be unique and exclusive digital assets that can be bought, sold, and traded on the platform's marketplace. Additionally, the Great Library also plans to incorporate in-game marketplaces, where users can purchase exclusive items and access to certain features. Another monetization strategy is through the use of its own cryptocurrency, Culture Coin, which will serve as the primary means of exchange and value within the community. This can be used to access exclusive literary NFTs, participate in whitelisting events, and make purchases within the in-game marketplace. The Great Library also plans to offer paid subscriptions for access to advanced analytics and writer tools, as well as potential advertising opportunities for authors and publishers to reach new audiences."
      },
      {
        title: "9. Can you discuss the process for becoming an author or artist on The Great Library?",
        content: "The process for becoming an author or artist on The Great Library is relatively straightforward. First, interested individuals will need to create an account on the platform and submit a sample of their work for review. The Great Library's team will then review the submission and provide feedback on the quality and suitability of the work. If the work is deemed suitable, the author or artist will be granted access to the platform's tools and resources, including the marketplace where they can sell their works directly to readers. Additionally, The Great Library also offers a variety of resources and support for authors, such as analytics and feedback tools, to help them improve their craft and reach new audiences. Overall, the process is designed to be inclusive and empowering for independent authors and artists."
      },
      {
        title: "10. Can you speak to any partnerships or collaborations that The Great Library has established or plans to establish in the future?",
        content: "The Great Library is constantly seeking new partnerships and collaborations to enhance the platform and provide more opportunities for authors and artists. We are currently in talks with several leading publishers, literary agencies, and literary organizations to expand our author community and provide more opportunities for writers. Additionally, we are also working on partnerships with gaming companies and technology providers to further integrate gaming elements and new technologies into the platform. As we continue to grow and expand, we will look to establish new partnerships and collaborations that align with our mission to revolutionize the media industry and empower independent authors."
      },
    ],
  };
  
  const styles = {
    bgColor: "transparent",
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: "grey",
    arrowColor: "#B95951",
  };
  
  const config = {
    animate: true,
  };
  
const Team = () => {
    return (
        <div className="team-area">
            <Container>
                <div className="row teamarea-body" data-aos="fade-up">
                    <div className="col-md-12">
                        <p className="team-title">Team</p>
                    </div>
                </div>

                <div className="row team-member-area">

                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-right">
                            <div className="team-member-avatar">
                                <img src="/img/jp-medium.png" width="300" height="300" alt="team member avatar"></img>
                            </div>
                            <h3 className="member-title">Jason Palmer</h3>
                            <p className="member-description">Jason Palmer – Chief Executive Officer: An MBA graduate, and a former musician, Jason has a deep understanding of business process and negotiation. His background is in managing a portfolio of vendors and controlling overall business spend, while ensuring vendors are paid promptly and agreed upon contractual obligations are met. A hands-off leader, Jason thrives when he ensures his best folks have the freedom to do their best work.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-right">
                            <div className="team-member-avatar">
                                <img src="/img/kn-medium.png" width="300" height="300" alt="team member avatar"></img>
                            </div>
                            <h3 className="member-title">Kazuya Nomura</h3>
                            <p className="member-description">Kazuya Nomura – Lead Developer: Kazuya has worked in several kinds of blockchain applications for 5 years and web apps for 8 years. As a creative & passionate developer or a lead developer, and fast learner with details and high quality, he is always trying to improve development and team communication processes.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-right">
                            <div className="team-member-avatar">
                                <img src="/img/lk-medium.png" width="300" height="300" alt="team member avatar"></img>
                            </div>
                            <h3 className="member-title">Leon Kanei</h3>
                            <p className="member-description">Leon Kanei is a Full-Stack Web Developer at The Great Library. With over 5 years of experience in creating cohesive and engaging experiences for clients, Leon is skilled in Javascript/Typescript, Web3/Ethers, Solidity, React.js, and more. He has worked on a range of projects, including decentralized yield farming protocols, NFT yield farming platforms, and financial data companies. In his free time, Leon enjoys gaming, photography, climbing, and camping.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-right">
                            <div className="team-member-avatar">
                                <img src="/img/cb-medium.png" width="300" height="300" alt="team member avatar"></img>
                            </div>
                            <h3 className="member-title">Collin Brown</h3>
                            <p className="member-description">Collin Brown – Lead Unity Developer: With over 8 years of cooperative and independent development experience, Collin has developed many complex games, a variety of applications, platforms, and software titles. His background covers a wide variety of software technologies, not the least of which are Blockchain and Unity Development. He has worked as a Senior Game and Blockchain Developer for Zomfi, Crypto Racing, and MarketMaking Pro. His personal projects include Age of Kingdom, a battle strategy game where users can play with millions of online players from all over the world, and Critical Ops, a 3D Multiplayer FPS game which features competitive combat, beautiful maps, and several game modes.  </p>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-right">
                            <div className="team-member-avatar">
                                <img src="/img/ah-medium.webp" width="300" height="300" alt="team member avatar"></img>
                            </div>
                            <h3 className="member-title">Akira Humada</h3>
                            <p className="member-description">Akira Humada – Smart Contract Developer: Akira is a senior blockchain engineer, with many years of experience and talent skill. He was born in Japan. He has 6+ years of experience in web development and 5+ years of experience in Blockchain development giving his deep knowledge about the web and smart contracts. After graduation, he entered several regular companies in Japan & Canada. He has worked on Flow, Algorand, Ethereum, CosWasm, Substrate, Polkadot and Solana technology. In 2017, he focused on blockchain technology and started to research it.</p>
                        </div>
                    </div>

	            <p className="team-title">Authors</p>

                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-right">
                            <div className="team-member-avatar">
                                <img src="/img/jrr-medium.jpg" width="300" height="300" alt="team member avatar"></img>
                            </div>
                            <h3 className="member-title">John R Raymond</h3>
                            <p className="member-description">John R Raymond is the author of the Scarab Cycle. His background in Byzantine Agreement and cryptography lead him to create The Great Library when it became clear to him that the publishing industry was ripe for a shake up. He is currently the Head Librarian with The Great Library and, when not busy with his own books, he works with others editing theirs. He likes both cats and dogs and supports the arts in whatever form they take.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-left">
                            <div className="team-member-avatar">
                                <img src="/img/ls-medium.png" width="300" height="300" alt="team member avatar"></img>
                            </div>
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
            </Container>
            <div className="faq">
                <Container>
                    <div className="row">
                        <h2 className="faq-title">FAQ</h2>
                        <div className="col-lg-9" data-aos="fade-up">
                            <Faq data={data} styles={styles} config={config} />
                        </div>
                        <div className="col-lg-3 faq-img">
                            <img className="gentleman" alt="gentle man" src="/img/gentleman.png"></img>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Team;
