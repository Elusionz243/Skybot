import "./App.scss";
import { useState, useRef, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SkybotData from "./utils/jsons/skybot.json";

function App() {
  const trainingRef = useRef(null);
  const humanResourcesRef = useRef(null);

  const handleClick = (e, section) => {
    // e.preventDefault();
    let ref = section === "training" ? trainingRef : humanResourcesRef;
    if (ref.current.classList.contains("active")) {
      ref.current.classList.remove("active");
      return;
    }
    ref.current.classList.add("active");
  };

  return (
    <div className="App">
      <h1 className="App-title">Skybot</h1>
      <div className="App__content">
        <section
          id="training"
          className="App__section"
          onClick={(e) => handleClick(e, "training")}
        >
          <h2>Training</h2>
        </section>
        <div ref={trainingRef} className="App__section-content">
          <a href="/training/products" className="App__section-content-item">
            <h3>Products</h3>
          </a>
          <div className="App__section-content-item">
            <h3>Security & Compliance</h3>
          </div>
          <div className="App__section-content-item">
            <h3>General Training</h3>
          </div>
        </div>
        <section
          id="human-resources"
          className="App__section"
          onClick={(e) => handleClick(e, "human-resources")}
        >
          <h2>Human Resources</h2>
        </section>
        <div ref={humanResourcesRef} className="App__section-content">
          <a
            href="https://hazelskysmokeshop.com"
            className="App__section-content-item"
          >
            <h3>Benefits</h3>
          </a>
          <div className="App__section-content-item">
            <h3>Employee Handbook</h3>
          </div>
          <div className="App__section-content-item">
            <h3>Organization Chart</h3>
          </div>
          <div className="App__section-content-item">
            <h3>Hazel History</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
