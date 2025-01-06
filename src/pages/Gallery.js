import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs"; // Pastikan komponen Breadcrumbs sudah ada
import image1 from "../assets/WhatsApp-Image-2023-08-20-at-161123-2385524594.webp"; // Gambar pertama
import image2 from "../assets/gambar5.jpg"; // Gambar kedua
import image3 from "../assets/images.jpeg"; // Gambar ketiga
import image4 from "../assets/9113a_flying-tiger.jpg"; // Gambar ketiga
import image5 from "../assets/ffb2f_talenta-sepakbola.jpg"; // Gambar ketiga
import image6 from "../assets/ssb-semplak.jpg"; // Gambar ketiga
import image7 from "../assets/ssb-kt-bogor.jpg"; // Gambar ketiga
import image8 from "../assets/gambar3.jpg"; // Gambar ketiga

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8]; // Daftar gambar lokal

  return (
    <div>
      <Navbar />

      {/* Breadcrumbs */}
      <div className="container mx-auto mt-6 mb-4">
        <Breadcrumbs
          links={[
            { to: "/", label: "Home" },
            { label: "Gallery" }, // Menambahkan Gallery sebagai link terakhir
          ]}
        />
      </div>

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-center text-3xl font-bold text-[#FF8400] mb-8">
          Gallery
        </h1>

        <p className="text-center text-lg mb-10">
          Explore our photo gallery. Here are some of the best moments captured.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
              <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="text-lg font-semibold">View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
