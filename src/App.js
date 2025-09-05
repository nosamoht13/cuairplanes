// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Team from "./Pages/Team";
import "./App.css";
import JoinPage from "./Pages/JoinPage";
import SponsorsPage from "./Pages/SponsorsPage";
import ContactPage from "./Pages/ContactPage";
import HistoryPage from "./Pages/HistoryPage";

export default function App() {
  return (
    <Routes>
      {/* with basename set in index.js, use root-relative paths */}
      <Route path="/" element={<Homepage />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/sponsors" element={<SponsorsPage />} />
      <Route path="/joinpage" element={<JoinPage />} />
    </Routes>
  );
}
