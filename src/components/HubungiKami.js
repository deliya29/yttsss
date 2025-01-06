import React from "react";

const HubungiKami = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Kolom Formulir Hubungi Kami */}
        <div className="p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#FF8400]">Hubungi Kami</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg text-gray-700">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border-2 border-gray-300 rounded-lg mt-2"
                placeholder="Masukkan Nama Lengkap"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border-2 border-gray-300 rounded-lg mt-2"
                placeholder="Masukkan Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg text-gray-700">Pesan</label>
              <textarea
                id="message"
                className="w-full p-3 border-2 border-gray-300 rounded-lg mt-2"
                rows="4"
                placeholder="Masukkan Pesan Anda"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#FF8400] text-white font-semibold rounded-lg hover:bg-[#e77a00] transition duration-300"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* Kolom Lokasi */}
        <div className=" rounded-lg">
          <div className="w-full h-full bg-gray-300 rounded-lg mb-4">
            {/* Menampilkan peta dengan iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8494843689373!2d106.758211874993!3d-6.540683793452148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c30068d16a6b%3A0x62dc60370020f5bc!2sYouth%20Tiger%20Soccer%20School!5e0!3m2!1sid!2sid!4v1735903389819!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kami"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubungiKami;
