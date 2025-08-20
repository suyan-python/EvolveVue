import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const teamPhotos = [
  { id: 1, src: "/images/team1.jpg", alt: "Team dinner night" },
  { id: 2, src: "/images/team2.jpg", alt: "Office birthday celebration" },
  { id: 3, src: "/images/team3.jpg", alt: "Outdoor adventure" },
  { id: 4, src: "/images/team4.jpg", alt: "Team building activity" },
  { id: 5, src: "/images/team5.jpg", alt: "Casual coffee break" },
  { id: 6, src: "/images/team6.jpg", alt: "Weekend trip memories" },
];

function TeamFun() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="w-full  py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        {/* Fun Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold  mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Beyond Work:{" "}
          <span className="text-purple-700">Our Happy Moments 🎉</span>
        </motion.h2>

        <p className="text-lg mb-10">
          We believe in working hard and celebrating harder! Here's a peek into
          our fun team culture, from outings to celebrations.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: photo.id * 0.1 }}
              onClick={() => setSelectedImage(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-purple-700 bg-opacity-30 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                {photo.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox View for Enlarged Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl">
            <button
              className="absolute top-3 right-3 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default TeamFun;
