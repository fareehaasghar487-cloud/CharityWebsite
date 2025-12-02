import React from "react";
import { Shield, Database, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function SandiInfo() {
  const features = [
    {
      icon: Shield,
      title: "Fairness & Security",
      desc: "Prevents duplicate beneficiaries, ensuring aid reaches those who truly need it.",
      bg: "/about/Sandi-Security.jpg",
    },
    {
      icon: Database,
      title: "Unified Records",
      desc: "Maintains a centralized national database of all charitable transactions.",
      bg: "/about/Sandi-Records.jpg",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "Connects charities, government, and donors for more impactful giving.",
      bg: "/about/Sandi-Collaboration.jpg",
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
    <section className="bg-[palegreen] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            What is <span className="text-[palegreen]">Sandi?</span>
          </h2>
          <p className="mt-6 text-lg text-black leading-relaxed">
            <span className="font-semibold">Sandi</span> is Qatar’s{" "}
            <span className="text-[palegreen] font-semibold">
              national platform
            </span>{" "}
            for charitable and social aid management. It ensures{" "}
            <span className="text-[palegreen] font-semibold">
              fairness, security, and transparency
            </span>{" "}
            in donations by unifying data across organizations, preventing fraud,
            and building trust between donors, charities, and beneficiaries.
          </p>
          <button className="mt-8 px-8 py-3 rounded-full bg-[palegreen] text-black font-semibold shadow-lg hover:scale-105 transition-transform">
            Learn More
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/about/Sandi-Main.jpg"
            alt="Sandi Integration Diagram"
            className="w-full rounded-3xl shadow-2xl border-4 border-[palegreen]/40"
          />
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 max-w-7xl mx-auto">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
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
              <div className="relative z-10 p-8 text-black text-center flex flex-col items-center justify-end h-72 bg-[palegreen]/70 hover:shadow-2xl transition duration-500">
                <Icon className="w-14 h-14 mb-4 text-black" />
                <h3 className="text-2xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm opacity-90 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
