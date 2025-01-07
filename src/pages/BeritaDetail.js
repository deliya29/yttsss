import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs"; // Pastikan komponen Breadcrumbs sudah ada
import { LazyLoadImage } from "react-lazy-load-image-component";

const news = [
  {
    id: 1,
    slug: "kemenangan-besar",
    title: "Kemenangan Besar",
    description:
      "Tim kami meraih kemenangan gemilang dengan skor 3-0 melawan rival abadi. Gol pertama dicetak pada menit ke-15 oleh striker andalan kami.",
    content:
      "Pertandingan berlangsung sangat menegangkan di stadion utama. Gol pertama dicetak pada menit ke-15 oleh striker andalan kami, memberikan keunggulan awal. Strategi pelatih yang solid dan performa tim yang luar biasa membuat kemenangan ini menjadi momen bersejarah. Ribuan pendukung bersorak merayakan kemenangan ini.",
    image: require("../assets/gambar2.jpg"),
  },
  {
    id: 2,
    slug: "pemain-baru-bergabung",
    title: "Pemain Baru Bergabung",
    description:
      "Pemain muda berbakat bergabung dengan tim untuk memperkuat skuad. Ia dikenal dengan kecepatan dan kemampuan mencetak gol dari berbagai sudut.",
    content:
      "Tim kami secara resmi memperkenalkan pemain muda berbakat yang akan memperkuat skuad musim ini. Pemain ini memiliki reputasi yang sangat baik di klub sebelumnya dan diharapkan dapat memberikan kontribusi besar pada musim mendatang.",
    image: require("../assets/images.jpeg"),
  },
  {
    id: 3,
    slug: "turnamen-mendatang",
    title: "Turnamen Mendatang",
    description:
      "Persiapan intensif sedang dilakukan untuk menghadapi turnamen besar. Dukungan dari para penggemar sangat penting dalam memberikan semangat.",
    content:
      "Turnamen besar yang akan datang menjadi fokus utama kami saat ini. Para pemain menjalani latihan intensif dan pelatih merancang strategi khusus untuk menghadapi lawan-lawan tangguh. Kami berharap dukungan penuh dari para penggemar untuk menyemangati tim dalam perjalanan ini.",
    image: require("../assets/ssb-semplak.jpg"),
  },
];

function BeritaDetail() {
  const { slug } = useParams();
  const berita = news.find((item) => item.slug === slug);

  if (!berita) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto py-24 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Berita Tidak Ditemukan</h1>
          <Link
            to="/berita"
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            Kembali ke Berita
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      {/* Breadcrumbs */}
      <div className="container mx-auto mt-6 mb-4">
        <Breadcrumbs
          links={[
            { to: "/", label: "Home" },
            { to: "/berita", label: "Berita" },
            { label: berita.title }, // Menambahkan berita sebagai link terakhir
          ]}
        />
      </div>

      <div className="container mx-auto py-24">
        <div className="flex flex-col items-center">
          {/* Gambar Berita */}
          <LazyLoadImage
            src={berita.image}
            alt={berita.title}
            className="w-full max-w-3xl rounded-lg shadow-lg"
            effect="opacity" // Menggunakan efek transisi tanpa blur
            threshold={100} // Memuat gambar saat mendekati viewport
            placeholderSrc="/assets/placeholder.jpg" // Menambahkan gambar placeholder sementara
            onError={(e) => (e.target.src = "/assets/placeholder.jpg")} // Gambar pengganti jika gagal
          />
          <h1 className="text-4xl font-bold text-gray-800 mt-6">{berita.title}</h1>
          <p className="text-gray-600 mt-4">{berita.content}</p>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/berita"
            className="text-blue-600 hover:underline font-semibold"
          >
            ← Kembali ke Berita
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BeritaDetail;
