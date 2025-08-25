import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  const [title, setTitle] = useState("Let us cook!");

  // 👇 Force redirect on any reload
  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const navType = navEntries.length > 0 ? navEntries[0].type : (performance as any).navigation?.type;

    if (navType === "reload" || navType === 1) {
      window.location.href = "https://brian-e-shilo.github.io/ReactApp/";
    }
  }, []);

  return (
    <div className="app">
      <Header title={title} />

      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer year={new Date().getFullYear()} />
    </div>
  );
};

export default App;
