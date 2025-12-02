import React from "react";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(
          to right,
          rgba(152, 251, 152, 0.3),
          rgba(152, 251, 152, 0.6),
          rgba(152, 251, 152, 0.3)
        ), url('https://your-online-image-url.com/CallToAction.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
      className="relative py-20 px-6 text-center text-black overflow-hidden"
    >
      {/* Background decorative shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 left-10 w-40 h-40 bg-[palegreen]/40 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-10 right-10 w-56 h-56 bg-[palegreen]/40 rounded-full blur-3xl"
      />

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold leading-tight relative z-10 text-black"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Join us in making donations <br className="hidden md:block" />
        transparent and impactful
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="mt-4 text-lg md:text-xl max-w-2xl mx-auto relative z-10 text-black"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Be part of a trusted system backed by{" "}
        <span className="font-semibold">RACA</span> & integrated with{" "}
        <span className="font-semibold">Sandi</span>
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex md:flex-row items-center justify-center gap-4 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-[palegreen] text-black px-6 md:px-8 py-3 rounded-lg shadow font-semibold transition"
        >
          Donate Now
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "palegreen",
            color: "black",
            boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          className="border border-black px-6 md:px-8 py-3 rounded-lg font-semibold transition text-black"
        >
          Register as Charity
        </motion.button>
      </motion.div>
    </section>
  );
}
