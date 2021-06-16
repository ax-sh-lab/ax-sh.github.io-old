import React from "react";
import "./App.scss";
import Nav from "./Nav";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import WorkSection from "./sections/WorkSection";

const ComingSoon = () => {
  return (
    <section className="coming__soon">
      <a href="/portfolio">Portfolio</a>
    </section>
  );
};

function App() {
  return (
    <div id="app">
      {/* <ComingSoon /> */}
      <Nav />
      <AboutSection />
      {/*
      <WorkSection />
      <ContactSection /> */}
    </div>
  );
}

export default App;
