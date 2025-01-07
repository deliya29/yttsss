import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs"; // Pastikan komponen Breadcrumbs sudah ada
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "react-modal";

// Import gambar
import image1 from "../assets/WhatsApp-Image-2023-08-20-at-161123-2385524594.webp";
import image2 from "../assets/gambar5.jpg";
import image3 from "../assets/images.jpeg";
import image4 from "../assets/9113a_flying-tiger.jpg";
import image5 from "../assets/ffb2f_talenta-sepakbola.jpg";
import image6 from "../assets/ssb-semplak.jpg";
import image7 from "../assets/ssb-kt-bogor.jpg";
import image8 from "../assets/gambar3.jpg";

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  // State untuk modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Fungsi untuk membuka modal
  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };

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
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(image)}
            >
              {/* Lazy Load Image */}
              <LazyLoadImage
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                threshold={100} // Jarak sebelum gambar dimuat
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
              <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="text-lg font-semibold">View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal untuk menampilkan gambar */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="View Image Modal"
        className="bg-white w-full max-w-3xl mx-auto mt-20 rounded-lg shadow-lg overflow-hidden"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
        ariaHideApp={false}
      >
        {currentImage && (
          <div className="relative">
            <img
              src={currentImage}
              alt="Selected"
              className="w-full h-auto object-cover"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        )}
      </Modal>

      <Footer />
    </div>
  );
};

export default Gallery;
