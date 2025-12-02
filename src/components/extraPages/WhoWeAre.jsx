import React from "react";
import { Shield, Users, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  const values = [
    {
      icon: Shield,
      title: "Security",
      desc: "Every donation is encrypted, monitored, and protected under Qatar’s compliance laws.",
      bg: "/about/WhoWeAre-Security.jpg",
    },
    {
      icon: Users,
      title: "Transparency",
      desc: "Track your donations with complete visibility from donor to beneficiary.",
      bg: "/about/WhoWeAre-Transparency.jpg",
    },
    {
      icon: HeartHandshake,
      title: "Trust",
      desc: "Backed by RACA & integrated with Sandi for fairness and accountability.",
      bg: "/about/WhoWeAre-Trust.jpg",
    },
  ];

  // Framer Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    }),
  };

  return (
    <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto bg-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-black tracking-tight"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          Who We Are
        </motion.h2>
        <motion.p
          className="mt-5 max-w-2xl mx-auto text-black text-lg leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          We are Qatar’s trusted national donation platform, dedicated to
          building{" "}
          <span className="font-semibold text-[palegreen]">secure</span>,{" "}
          <span className="font-semibold text-[palegreen]">transparent</span>, and{" "}
          <span className="font-semibold text-[palegreen]">impactful</span> giving
          experiences.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <motion.div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group"
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.2}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition duration-700"
                style={{ backgroundImage: `url(${v.bg})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[palegreen]/70 backdrop-blur-[2px]" />
              {/* Content */}
              <div className="relative p-10 text-center text-black flex flex-col items-center justify-end h-72">
                <Icon className="mx-auto w-16 h-16 mb-5 text-black" />
                <h3 className="text-2xl font-bold tracking-wide">{v.title}</h3>
                <p className="mt-4 text-sm md:text-base leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mission Statement */}
      <motion.div
        className="mt-20 text-center bg-white p-10 rounded-3xl shadow-xl border border-[palegreen]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.5}
      >
        <h3 className="text-3xl md:text-4xl font-extrabold text-black">
          Our Mission
        </h3>
        <p className="mt-5 text-black max-w-3xl mx-auto leading-relaxed text-lg">
          To revolutionize charitable giving in Qatar by combining{" "}
          <span className="font-semibold text-[palegreen]">innovation</span>,{" "}
          <span className="font-semibold text-[palegreen]">compliance</span>, and{" "}
          <span className="font-semibold text-[palegreen]">compassion</span> — ensuring every contribution reaches those in need with maximum impact.
        </p>
        <button className="mt-8 px-8 py-3 rounded-full bg-[palegreen] text-black font-semibold shadow-lg hover:scale-105 transition">
          Learn More
        </button>
      </motion.div>
    </section>
  );
}
