import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Fungsi untuk memotong teks deskripsi
function truncate(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

function Berita() {
  const news = [
    {
      id: 1,
      slug: "kemenangan-besar",
      title: "Kemenangan Besar",
      description:
        "Tim kami meraih kemenangan gemilang dengan skor 3-0 melawan rival abadi. Gol pertama dicetak pada menit ke-15 oleh striker andalan kami.",
      image:  require("../assets/gambar2.jpg")
    },
    {
      id: 2,
      slug: "pemain-baru-bergabung",
      title: "Pemain Baru Bergabung",
      description:
        "Pemain muda berbakat bergabung dengan tim untuk memperkuat skuad. Ia dikenal dengan kecepatan dan kemampuan mencetak gol dari berbagai sudut.",
      image: require("../assets/images.jpeg"),
    },
    {
      id: 3,
      slug: "turnamen-mendatang",
      title: "Turnamen Mendatang",
      description:
        "Persiapan intensif sedang dilakukan untuk menghadapi turnamen besar. Dukungan dari para penggemar sangat penting dalam memberikan semangat.",
      image: require("../assets/ssb-semplak.jpg"),
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <section className="py-24 bg-gray-50">
        {/* Breadcrumbs */}
        <div className="container mx-auto -mt-20 mb-3">
          <Breadcrumbs
            links={[{ to: "/", label: "Home" }, { label: "Berita" }]}
          />
        </div>

        <div className="container mx-auto">
          {/* Header Section */}
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6 text-center">
            Berita
          </h2>
          <p className="text-xl text-gray-600 mb-10 text-center">
            Informasi terbaru tentang perjalanan tim kami.
          </p>

          {/* Content Section */}
          {news.length === 0 ? (
            <p className="text-center text-gray-600">
              Belum ada berita tersedia.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  {/* Gambar Berita */}
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={`Berita: ${item.title}`}
                      className="w-full h-48 object-cover"
                      onError={(e) =>
                        (e.target.src = "/assets/placeholder.jpg")
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                  </div>

                  {/* Deskripsi dan Link */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {truncate(item.description, 100)}
                    </p>
                    <Link
                      to={`/berita/${item.slug}`}
                      className="text-blue-600 hover:underline font-semibold"
                      title={`Baca selengkapnya tentang ${item.title}`}
                    >
                      Baca Selengkapnya →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Berita;
