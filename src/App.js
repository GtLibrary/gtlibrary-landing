import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import ContentHeader from "./components/ContentHeader";
import Feature from "./components/Feature";
import FaqComponent from "./components/FaqComponent";
import Team from "./components/Team";
import AOS from 'aos';
import './App.css';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, [])
  return (
    <div className="App">
      <Header />
      <ContentHeader />
      <Feature />
      <FaqComponent />
      <Team />
    </div>
  );
}

export default App;
