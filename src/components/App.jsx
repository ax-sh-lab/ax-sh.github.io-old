import React from "react";
import "./App.scss";
import Nav from "./Nav";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import WorkSection from "./sections/WorkSection";

function App() {
  return (
    <div id="app">
      <Nav />
      <section className="coming__soon">
        <a href="/portfolio">Portfolio</a>
      </section>
      {/*
      <AboutSection />
      <WorkSection />
      <ContactSection /> */}
    </div>
  );
}

export default App;
