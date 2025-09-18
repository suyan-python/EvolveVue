import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import Binayak from "../assets/person/binayak2.jpeg"

function AboutUs()
{
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Blurred Green Gradient Background */}
      <div className="absolute inset-0 flex items-center justify-center 
  before:content-[''] 
  before:absolute 
  before:inset-0 
  before:bg-[radial-gradient(circle,_rgba(34,197,94,0.4)_0%,_rgba(34,197,94,0)_70%)] 
  before:blur-3xl 
  before:opacity-80">
      </div>



      <div className="relative max-w-6xl mx-auto text-white">
        {/* Section Title with Animation */}
        <motion.h2
          className="header text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-yellow-500">Evolve Vue</span>
        </motion.h2>

        {/* Company Overview with Animation */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg transition duration-300 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h3>
          <p className="text-gray-600">
            Evolve Vue is a trusted partner in{" "}
            <strong>
              medical documentation, data processing, and healthcare support
              services
            </strong>
            . Our mission is to provide{" "}
            <strong>accurate, compliant, and efficient</strong> solutions for
            global healthcare providers. With a team of industry experts and
            cutting-edge technology, we empower businesses to focus on what
            truly matters—
            <strong>delivering exceptional patient care</strong>.
          </p>
        </motion.div>

        {/* Vision & Mission Section with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="p-8 rounded-xl shadow-md border-l-8 border-yellow-500 bg-white"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-yellow-500 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To be the <strong>leading provider</strong> of medical
              documentation and healthcare support, ensuring
              <strong> efficiency, compliance, and innovation</strong> in the
              industry.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-xl shadow-md border-l-8 border-green-700 bg-white"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700">
              Our mission is to deliver{" "}
              <strong>precise, high-quality services</strong> while maintaining
              the highest
              <strong>
                {" "}
                ethical standards, efficiency, and technological advancement
              </strong>
              .
            </p>
          </motion.div>
        </div>

        {/* Core Values Section with Animation */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg transition duration-300 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Core Values
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>
              <strong>Integrity:</strong> We operate with honesty and
              transparency.
            </li>
            <li>
              <strong>Excellence:</strong> We strive for top-tier quality in
              every service.
            </li>
            <li>
              <strong>Innovation:</strong> We embrace technology for smarter
              solutions.
            </li>
            <li>
              <strong>Customer-Centric:</strong> Our clients' success is our
              priority.
            </li>
            <li>
              <strong>Ethical Practices:</strong> Sustainability and compliance
              are at our core.
            </li>
          </ul>
        </motion.div>

        {/* Why Choose Us Section with Animation */}
        <motion.div
          className=" rounded-xl transition duration-300 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
            Why Choose Evolve Vue?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="font-semibold text-green-600">Expertise</h4>
              <p>
                10+ years of experience in{" "}
                <strong>medical documentation & healthcare outsourcing</strong>.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="font-semibold text-green-600">Compliance</h4>
              <p>
                Adhering to{" "}
                <strong>global medical standards & regulations</strong>.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="font-semibold text-green-600">
                Advanced Technology
              </h4>
              <p>
                Utilizing the latest{" "}
                <strong>AI-driven documentation tools</strong>.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="font-semibold text-green-600">Global Reach</h4>
              <p>
                Serving <strong>clients worldwide</strong> with 24/7 operational
                support.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Meet Our Team Section with Animation */}

      </div>
    </section>
  );
}

export default AboutUs;
