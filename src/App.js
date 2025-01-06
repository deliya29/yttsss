import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Berita from "./pages/Berita";
import Contact from "./pages/Contact";
import BeritaDetail from "./pages/BeritaDetail"; // Import halaman detail berita

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Beranda */}
        <Route path="/" element={<Home />} />

        {/* Halaman Galeri */}
        <Route path="/Gallery" element={<Gallery />} />

        {/* Halaman Berita */}
        <Route path="/Berita" element={<Berita />} />

        {/* Halaman Detail Berita */}
        <Route path="/Berita/:slug" element={<BeritaDetail />} />

        {/* Halaman Kontak */}
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
