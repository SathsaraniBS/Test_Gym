import React from "react";
import{ BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/Workout";

function App() {

  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions/>
      
    </Router>
  )
}

export default App
