import React from "react";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <HeroSection />
      </Router>
    </div>
  );
}

export default App;
