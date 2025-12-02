import React from "react";
import { Eye, Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionVisionValues() {
  const values = [
    {
      icon: Target,
      title: "Compliance",
      desc: "Strictly aligned with RACA regulations to ensure all donations are legitimate and ethical.",
      gradient: "from-[palegreen] via-green-300 to-green-400",
    },
    {
      icon: Eye,
      title: "Transparency",
      desc: "Donors, charities, and regulators enjoy complete visibility into donation flows.",
      gradient: "from-[palegreen] via-green-400 to-green-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Integrating Blockchain, AI, and AR/VR to redefine digital giving in Qatar.",
      gradient: "from-[palegreen] via-green-500 to-green-600",
    },
  ];

  // Simple fade up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <section className="relative py-20 px-6 bg-gray-50">
      {/* Section Title */}
      <motion.div
        className="text-center max-w-3xl mx-auto"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[palegreen]">
          Mission, Vision & Values
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Guided by integrity, innovation, and compliance, we're building
          Qatar's most trusted and impactful digital donation ecosystem.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          className="p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2 duration-500"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          <h3 className="text-2xl font-semibold text-[palegreen]">Mission</h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            To provide a{" "}
            <span className="font-semibold">secure, transparent, and efficient</span>{" "}
            digital donation system that ensures fairness and accountability
            across Qatar.
          </p>
        </motion.div>

        <motion.div
          className="p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2 duration-500"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          <h3 className="text-2xl font-semibold text-[palegreen]">Vision</h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            To create a future where{" "}
            <span className="font-semibold">
              every donation is traceable, impactful, and trusted
            </span>{" "}
            — driving social progress in Qatar and beyond.
          </p>
        </motion.div>
      </div>

      {/* Values */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <motion.div
              key={i}
              className={`relative p-8 rounded-2xl shadow-lg cursor-pointer text-white 
              bg-gradient-to-br ${v.gradient} 
              overflow-hidden group transform transition duration-700 
              hover:-translate-y-3 hover:shadow-2xl`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3 + i * 0.1}
            >
              {/* Animated Overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition duration-500"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <Icon className="mx-auto w-14 h-14 text-white animate-bounce" />
                <h3 className="mt-4 text-2xl font-bold">{v.title}</h3>
                <p className="mt-3 text-sm md:text-base text-gray-100 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
