import React from "react"; // eslint-disable-next-line
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculater from "./components/BMICalculater"; 
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculater />
      <Footer />
      <ToastContainer theme="dark" position="top-center"/>
    </Router>
  );
}

export default App;
