import React, { useState, useRef } from "react";
import { FileCheck, Scale, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OversightCompliance() {
  const points = [
    {
      icon: FileCheck,
      title: "Campaign Approval",
      desc: "Every campaign is reviewed and verified by RACA before launch.",
      img: "/about/Insights-Compaign.jpg",
    },
    {
      icon: Scale,
      title: "Compliance",
      desc: "Strict financial monitoring & anti-fraud mechanisms ensure trust.",
      img: "/about/Insights-Compliance.jpg",
    },
    {
      icon: ShieldCheck,
      title: "Transparency",
      desc: "Blockchain provides tamper-proof donation and fund tracking.",
      img: "/about/Insights-Transparency.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? points.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === points.length - 1 ? 0 : prev + 1));

  // --- Swipe logic ---
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) nextSlide();
    if (touchEndX.current - touchStartX.current > 75) prevSlide();
  };

  return (
    <motion.section
      className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.png')] opacity-5 bg-cover bg-center"></div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-[palegreen] mb-12 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Oversight & Compliance
      </motion.h2>

      <div className="relative flex items-center justify-center">
        {/* Left button */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-1 md:left-6 z-30 bg-[palegreen] text-black px-5 py-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          ‹
        </button>

        {/* Carousel */}
        <div
          className="flex items-center justify-center w-full max-w-4xl h-[380px] md:h-[420px] relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {points.map((p, index) => {
            let position = "nextSlide";
            if (index === current) position = "activeSlide";
            if (
              index === current - 1 ||
              (current === 0 && index === points.length - 1)
            )
              position = "lastSlide";

            const Icon = p.icon;

            return (
              <AnimatePresence key={index}>
                {position === "activeSlide" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 60 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -60 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute w-[85%] md:w-[65%] h-full rounded-2xl shadow-2xl overflow-hidden z-20"
                  >
                    {/* Background image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${p.img})` }}
                    ></div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[palegreen]/40"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 h-full text-black">
                      <Icon className="w-16 h-16 text-black" />
                      <h3 className="mt-6 text-2xl font-semibold">{p.title}</h3>
                      <p className="mt-3 text-lg leading-relaxed max-w-md opacity-90">
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                )}

                {position === "lastSlide" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 0.5,
                      scale: 0.85,
                      x: -150,
                      rotateY: 15,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute w-[70%] md:w-[50%] h-4/5 rounded-2xl shadow-xl overflow-hidden bg-[palegreen]/10"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-70"
                      style={{ backgroundImage: `url(${p.img})` }}
                    ></div>
                  </motion.div>
                )}

                {position === "nextSlide" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 0.5,
                      scale: 0.85,
                      x: 150,
                      rotateY: -15,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute w-[70%] md:w-[50%] h-4/5 rounded-2xl shadow-xl overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-70"
                      style={{ backgroundImage: `url(${p.img})` }}
                    ></div>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>

        {/* Right button */}
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-1 md:right-6 z-20 bg-[palegreen] text-black px-5 py-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          ›
        </button>
      </div>

      <motion.p
        className="text-center text-black mt-10 text-lg relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Ensuring accountability, compliance, and trust at every step.
      </motion.p>
    </motion.section>
  );
}
