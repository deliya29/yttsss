import React, { useState, useEffect, useRef } from 'react';
import { Typed } from 'react-typed';

// Impor gambar lokal dari folder 'assets'
import image5 from '../assets/gambar5.jpg'; // Ganti dengan path gambar Anda
import image2 from '../assets/gambar2.jpg'; // Ganti dengan path gambar Anda
import image3 from '../assets/gambar3.jpg'; // Ganti dengan path gambar Anda

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const typedRef = useRef(null);

  // Array gambar lokal
  const images = [image5, image2, image3];

  // Mengganti gambar setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Membersihkan interval ketika komponen dibersihkan
  }, );

  useEffect(() => {
    if (typedRef.current) {
      new Typed(typedRef.current, {
        strings: ['Pelatihan', 'Keterampilan', 'Pemain Hebat'],
        typeSpeed: 120,
        backSpeed: 140,
        loop: true,
      });
    }
  }, []);

  return (
    <div className="text-white">
      <div
        className="h-screen bg-cover bg-center relative flex justify-center items-center"
        style={{ backgroundImage: `url(${images[currentSlide]})` }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50" />
        <div className="max-w-[800px] w-full text-center z-10">
         
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Join Youth Tiger Soccer
          </h1>
          <div className="flex justify-center items-center mt-4">
            <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
            Mengasah kemampuan melalui
            </p>
            <span
              ref={typedRef}
              className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-[#FF8400]"
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-white mt-4">
          Latihan sepak bola untuk masa depan yang lebih cerah.
          </p>
          {/* <button className="bg-[#FF8400] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#FF8400]">
            Mulai Sekarang
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
