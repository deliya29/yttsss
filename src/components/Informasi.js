import React from "react";
import "../styles.css"; // Pastikan untuk membuat file ini jika belum ada

const Informasi = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Kolom Teks */}
          <div>
            <h2 className="text-5xl mb-4">
              <span className="text-black font-normal">Tentang </span>
              <span className="text-[#FF8400] font-bold">Kami</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4">
            Youth Tiger Soccer School berdedikasi untuk mengembangkan bakat sepak bola dan memberikan pemain muda alat dan keterampilan yang mereka butuhkan untuk unggul di dalam dan luar lapangan. Misi kami adalah menginspirasi dan memberdayakan generasi muda melalui indahnya permainan sepak bola, dengan menanamkan nilai kerja sama tim, disiplin, dan sportivitas.
            </p>
           
            <div className="flex justify-start">
              <button className="mt-5 px-4 py-2 bg-[#FF8400] text-white font-bold rounded-lg hover:bg-[#e77a00] transition duration-300 w-auto">
                Lihat Selengkapnya
              </button>
            </div>
          </div>

          {/* Kolom Gambar */}
          <div className="flex justify-center">
            <div className="relative w-50 h-50 rounded-full overflow-hidden  flex justify-center items-center">
              <img
                src={require("../assets/bola.png")} // Ganti dengan path gambar Anda
                alt="Gambar Bola"
                className="w-full h-full object-cover animate-spin-slow shadow-custom shadow-md" // Pastikan gambar mengisi seluruh lingkaran
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informasi;
