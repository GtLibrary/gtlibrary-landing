import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import ContentHeader from "./components/ContentHeader";
import Feature from "./components/Feature";
import RoadmapComponent from "./components/RoadmapComponent";
import Team from "./components/Team";
import SignLetter from "./components/SignLetter";
import Footer from "./components/Footer";
import AOS from 'aos';
import './App.css';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration : 1000
    });
  }, [])
  return (
    <div className="App">
      <Header />
      <ContentHeader />
      <Feature />
      <RoadmapComponent />
      <Team />
      <SignLetter />
      <Footer />
    </div>
  );
}

export default App;
