import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center text-center px-6 pt-24 md:pt-32"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl text-white px-4">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug md:leading-tight drop-shadow-lg"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <span className="text-white">Together We Rise</span> <br />
          Building Hope Through Charity
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          Every act of giving makes a difference. With{" "}
          <span className="font-semibold text-white">transparency</span>,{" "}
          <span className="font-semibold text-white">trust</span>, and{" "}
          <span className="font-semibold text-white">impact</span>, we empower
          communities across Qatar.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          <button className="bg-[palegreen] text-black px-8 py-3 rounded-xl text-base sm:text-lg font-semibold shadow-lg border border-black hover:bg-white hover:text-[palegreen] transition-all duration-300">
            Donate Now
          </button>
          <button className="border-2 border-[palegreen] text-white px-8 py-3 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:bg-[palegreen] hover:text-black transition-all duration-300">
            Explore Campaigns
          </button>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
        >
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              10K+
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-white">
              Lives Impacted
            </p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              500+
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-white">
              Campaigns
            </p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              100%
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-white">
              Transparency
            </p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              24/7
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-white">
              Support
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
