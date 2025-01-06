import React from "react";

const Jadwal = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-[1260px] mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8 text-[#333]">Jadwal Latihan Bola</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Jadwal Selasa & Kamis */}
          <div className="bg-[#FF8400] p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Selasa & Kamis</h3>
            <p className="text-lg text-white mb-4">Waktu: 16.00 - 18.00 WIB</p>
            <p className="text-white mb-4">Latihan untuk permainan bola dengan berbagai teknik dasar.</p>
            <button className="px-6 py-2 mt-4 bg-white text-[#FF8400] rounded-md border-2 border-[#FF8400] hover:bg-[#FF8400] hover:text-white transition duration-200">
              Daftar Sekarang
            </button>
          </div>

          {/* Jadwal Minggu */}
          <div className="bg-[#FF5733] p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Minggu</h3>
            <p className="text-lg text-white mb-4">Waktu: 08.00 - 10.00 WIB</p>
            <p className="text-white mb-4">Latihan untuk permainan bola dengan fokus pada strategi tim.</p>
            <button className="px-6 py-2 mt-4 bg-white text-[#FF5733] rounded-md border-2 border-[#FF5733] hover:bg-[#FF5733] hover:text-white transition duration-200">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jadwal;
