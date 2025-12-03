import React from "react";
import { Users, HeartHandshake, ShieldCheck, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  // Static steps data
  const stepList = [
    {
      icon: "Users",
      title: "Register",
      desc: "Sign up and create your donor profile quickly and securely.",
    },
    {
      icon: "HeartHandshake",
      title: "Choose a Cause",
      desc: "Select a campaign or cause that resonates with you.",
    },
    {
      icon: "ShieldCheck",
      title: "Make a Donation",
      desc: "Contribute safely using our secure donation platform.",
    },
    {
      icon: "Eye",
      title: "Track Impact",
      desc: "Follow the progress and see how your contribution makes a difference.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-[#8A1538]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        How It Works
      </motion.h2>

      {/* Timeline / Process Flow */}
      <div className="mt-16 relative max-w-6xl mx-auto">
        <div className="hidden md:flex absolute top-1/2 left-0 w-full h-1 bg-[#8A1538]/20 -z-10"></div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-6">
          {stepList.map((step, i) => {
            const IconMap = {
              Users: Users,
              HeartHandshake: HeartHandshake,
              ShieldCheck: ShieldCheck,
              Eye: Eye,
            };
            const IconComponent = IconMap[step.icon] || Users;

            return (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#8A1538]/10 border-4 border-[#8A1538] shadow-lg transition-transform hover:scale-110">
                  <IconComponent className="w-10 h-10 text-[#8A1538]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-gray-600">{step.desc}</p>

                {/* Mobile line connector */}
                {i !== stepList.length - 1 && (
                  <div className="md:hidden w-1 h-12 bg-[#8A1538]/30 mt-6"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
