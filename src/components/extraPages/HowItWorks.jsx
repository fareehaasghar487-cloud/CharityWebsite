import React from "react";
import { Users, HeartHandshake, ShieldCheck, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Users className="w-10 h-10 text-[palegreen]" />,
      title: "Donor",
      desc: "Chooses a campaign and makes a secure donation.",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-[palegreen]" />,
      title: "Charity",
      desc: "Receives funds and manages aid distribution.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[palegreen]" />,
      title: "Sandi Sync",
      desc: "Ensures no duplicate beneficiaries.",
    },
    {
      icon: <Eye className="w-10 h-10 text-[palegreen]" />,
      title: "Authority (RACA)",
      desc: "Monitors donations in real-time.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-[palegreen]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        How It Works
      </motion.h2>

      {/* Timeline / Process Flow */}
      <div className="mt-16 relative max-w-6xl mx-auto">
        <div className="hidden md:flex absolute top-1/2 left-0 w-full h-1 bg-[palegreen]/40 -z-10"></div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[palegreen]/10 border-4 border-[palegreen] shadow-lg transition-transform hover:scale-110">
                {step.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-600">{step.desc}</p>

              {/* Mobile line connector */}
              {i !== steps.length - 1 && (
                <div className="md:hidden w-1 h-12 bg-[palegreen]/30 mt-6"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
