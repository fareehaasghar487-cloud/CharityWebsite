import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(138, 21, 56, 0.3), rgba(166, 45, 76, 0.6), rgba(138, 21, 56, 0.3)), url('https://images.unsplash.com/photo-1593113630400-ea4288922497?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvbmF0aW9ufGVufDB8fDB8fHww')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundAttachment: "fixed"
      }}
      className="py-20 px-6 text-center bg-[#8A1513] text-white overflow-hidden relative"
    >
      {/* Background shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-10 right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl"
      />

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold leading-tight relative z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Make a Difference Today
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="mt-4 text-lg md:text-xl max-w-2xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Join us in empowering communities and creating meaningful impact through your support.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex md:flex-row items-center justify-center gap-4 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link to="/contact">
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 10px 25px rgba(255,255,255,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#8A1538] px-6 md:px-8 py-3 rounded-lg shadow font-semibold transition"
          >
            Donate Now
          </motion.button>
        </Link>

        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "white",
            color: "#8A1538",
            boxShadow: "0px 10px 25px rgba(255,255,255,0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          className="border border-white px-6 md:px-8 py-3 rounded-lg font-semibold transition"
        >
          Register
        </motion.button>
      </motion.div>
    </section>
  );
}
