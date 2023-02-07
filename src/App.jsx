import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Specials from "./components/Specials";
import Story from "./components/Story";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/story" element={<Story />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
