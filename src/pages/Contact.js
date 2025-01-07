import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Import LazyLoadImage
import bolaImage from "../assets/gambar1.jpg"; // Mengimpor gambar
import Breadcrumbs from "../components/Breadcrumbs";

const Contact = () => {
  return (
    <div>
      <Navbar />

      {/* Breadcrumbs Section */}
      <div className="container mx-auto mt-6 mb-4">
        <Breadcrumbs
          links={[
            { to: "/", label: "Home" },
            { label: "Contact" }, // Corrected to "Contact"
          ]}
        />
      </div>

      {/* Header Section with Background Image */}
      <div
        className="bg-cover bg-center h-80"
        style={{
          backgroundImage: `url(${bolaImage})`,
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#FF8400]">Get in Touch</h2>
          <p className="text-lg mt-4">
            If you have any questions or need assistance, feel free to reach out to us!
          </p>
        </div>

        {/* Contact Form and Information */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF8400] text-white p-3 rounded-lg hover:bg-[#e67400]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Our Contact Information</h3>
            <p className="text-base mb-2">
              <strong>Address:</strong> Stadion Elang Bondol, Bogor, Indonesia
            </p>
            <p className="text-base mb-2">
              <strong>Phone:</strong> 085215860675
            </p>
            <p className="text-base mb-2">
              <strong>Email:</strong> contact@youthtiger.com
            </p>

            {/* Embedded Google Map with Lazy Loading */}
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8494843689373!2d106.758211874993!3d-6.540683793452148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c30068d16a6b%3A0x62dc60370020f5bc!2sYouth%20Tiger%20Soccer%20School!5e0!3m2!1sid!2sid!4v1735903389819!5m2!1sid!2sid"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy" // Lazy loading untuk iframe Google Maps
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
