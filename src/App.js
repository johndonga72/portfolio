import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Training from "./components/Training/Training";
import ProblemSolving from "./components/ProblemSolving/ProblemSolving";
import Contact from "./components/Contact/Contact";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

function App() {
  return (
    <>
      <Routes>
        {/* Main Portfolio Page */}
        <Route
          path="/"
          element={
            <>
              <div id="header"><Header /></div>
              <div id="hero"><Hero /></div>
              <div id="about"><About /></div>
              <div id="skills"><Skills /></div>
              <div id="projects"><Projects /></div>
              <div id="training"><Training /></div>
              <div id="problem-solving"><ProblemSolving /></div>
              <div id="contact"><Contact /></div>
            </>
          }
        />
        {/* Project Details Page */}
        <Route path="/projectdetails/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
