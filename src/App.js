import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Header/Header';
import Info from './General Info/General';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';
import Certifications from './Certifications/Certifications';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <>
          <Route path="/info" element={<Info />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
