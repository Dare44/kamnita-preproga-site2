import React, { useState } from "react";

export default function App() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [
    { src: "/images/projekt1.jpg", alt: "Stopnišče - izdelava" },
    { src: "/images/projekt2.jpg", alt: "Terasa z okvirjem" },
    { src: "/images/projekt3.jpg", alt: "Stopnice s kontrastom" },
    { src: "/images/projekt4.jpg", alt: "Vhodne stopnice - detajl" },
    { src: "/images/projekt5.jpg", alt: "Elegantno stopnišče" },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 space-y-16">
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Kamnita preproga po meri</h1>
        <p className="text-lg mb-6">
          Nudimo profesionalno izvedbo resin bound površin za dvorišča, poti,
          terase in poslovne objekte.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Pošlji povpraševanje
        </button>
      </section>

      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold mb-6">Zaključeni projekti</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="rounded-xl shadow cursor-pointer hover:scale-105 transition"
              onClick={() => setLightboxImage(img)}
            />
          ))}
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-w-full max-h-full rounded-lg shadow-2xl"
          />
        </div>
      )}

      <section className="w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Pošlji povpraševanje</h2>
        <form className="bg-white shadow-md rounded-xl p-6 space-y-4 w-full">
          <input className="w-full border p-2 rounded" placeholder="Vaše ime" />
          <input className="w-full border p-2 rounded" type="email" placeholder="Email naslov" />
          <input className="w-full border p-2 rounded" type="tel" placeholder="Telefonska številka" />
          <textarea className="w-full border p-2 rounded" placeholder="Opis želja / lokacija projekta" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Pošlji
          </button>
        </form>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        <p>
          Telefon: <a href="tel:+38640123456" className="text-blue-600">+386 40 123 456</a> | Email:{" "}
          <a href="mailto:info@kamnitapreproga.si" className="text-blue-600">info@kamnitapreproga.si</a>
        </p>
        <p className="mt-2">© 2025 Kamnita Preproga. Vse pravice pridržane.</p>
      </footer>
    </div>
  );
}
