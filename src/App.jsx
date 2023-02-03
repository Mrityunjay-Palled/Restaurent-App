import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Awards from "./components/Awards";
import Specials from "./components/Specials";
import Story from "./components/story";

const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/awards" element ={<Awards/>}/>
          <Route path="/specials" element={<Specials/>}/>
          <Route path="/story" element={<Story/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
