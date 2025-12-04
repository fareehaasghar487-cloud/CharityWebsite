"use client";
import React from "react";
import { Shield, Database, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Using react-router-dom instead of next/link

export default function SandiInfo() {
  const features = [
    {
      icon: Shield,
      title: "Security",
      desc: "All donations are secure, encrypted, and monitored for full compliance.",
      bg: "https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      icon: Database,
      title: "National Records",
      desc: "Sandi maintains comprehensive, transparent records of all contributions.",
      bg: "https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "Fairness and transparency ensured through integrated systems and audits.",
      bg: "https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D",
    },
  ];

  // Motion Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <section className="bg-[#F2EDE9] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#543D2E] leading-tight">
            Sandi Integration{" "}
            <span className="text-[#821435]">Platform Overview</span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Sandi is a national platform ensuring security, transparency, and fairness in all donation records.
          </p>
          <Link to="/donor">
            <button className="mt-8 px-8 py-3 rounded-full hover:bg-[#B62F5E] bg-[#821435] text-white font-semibold shadow-lg hover:scale-105 transition-transform">
              Learn More
            </button>
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D"
            alt="Sandi Integration Diagram"
            className="w-full rounded-3xl shadow-2xl border-4 border-[#723134]/20"
          />
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mt-20 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i * 0.2}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${f.bg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>

            {/* Overlay + Content */}
            <div className="relative z-10 p-8 text-white text-center flex flex-col items-center justify-end h-72 bg-[#723134]/50 hover:shadow-2xl transition duration-500">
              <f.icon className="w-14 h-14 mb-4 text-[#F2EDE9]" />
              <h3 className="text-2xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm opacity-90 leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
