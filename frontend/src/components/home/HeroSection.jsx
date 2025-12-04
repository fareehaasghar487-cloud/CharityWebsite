// 📌 File: HeroSection.jsx
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Transparent Charitable Giving",
      description:
        "Qatar's first fully transparent donation platform integrated with Sandi. Track your charity from donor to beneficiary with blockchain technology.",
      ctaPrimary: "Donate Now",
      ctaSecondary: "How It Works",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
    },
    {
      title: "Give with Confidence",
      description:
        "Every donation is tracked and verified. Complete transparency with real-time impact reporting and RACA oversight.",
      ctaPrimary: "Support a Cause",
      ctaSecondary: "Learn More",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
    },
    {
      title: "Make a Difference in Qatar",
      description:
        "Join thousands of donors helping communities across Qatar through verified, RACA-approved charities.",
      ctaPrimary: "View Campaigns",
      ctaSecondary: "For Charities",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goToNextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center px-6 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              filter: "brightness(0.5)",
            }}
          ></div>

          <div className="relative max-w-3xl text-center text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              {slide.title}
            </h2>

            <p className="text-lg md:text-xl mb-8 opacity-90">
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <button className="px-8 py-3 bg-gradient-to-r from-[#821435] via-[#a72145] to-[#821435] text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition duration-300">
                {slide.ctaPrimary}
              </button>

              <button className="px-8 py-3 border-2 border-[#821435] text-white rounded-lg hover:bg-[#821435]/30 transition duration-300">
                {slide.ctaSecondary}
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base opacity-80">
              {["Integrated with Sandi", "Blockchain Transparency", "Real-time Tracking"].map(
                (feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Prev Button */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#821435] text-white shadow-md p-3 rounded-full hover:scale-110 transition z-20"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#821435] text-white shadow-md p-3 rounded-full hover:scale-110 transition z-20"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? "bg-[#821435] scale-125" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
