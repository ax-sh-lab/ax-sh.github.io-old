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
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
}

export default App;
