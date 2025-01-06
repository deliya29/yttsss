import React from "react";
import Navbar from "../components/Navbar"; // Mengimpor komponen Navbar
import Hero from "../components/Hero"; // Mengimpor komponen Hero
import Informasi from "../components/Informasi"; // Mengimpor komponen Informasi
import Jadwal from "../components/Jadwal"; // Mengimpor komponen Jadwal
import HubungiKami from "../components/HubungiKami"; // Mengimpor komponen HubungiKami
import Footer from "../components/Footer"; // Mengimpor komponen Footer

const Home = () => {
  return (
    <div>
      <Navbar /> 
      <Hero /> 
      <Informasi />
      <Jadwal /> 
      <HubungiKami /> 
      <Footer /> 
    </div>
  );
};

export default Home;
