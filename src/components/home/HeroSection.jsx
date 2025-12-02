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
    },
    {
      title: "Give with Confidence.",
      description:
        "Every donation is tracked and verified. Complete transparency with real-time impact reporting and RACA oversight.",
      ctaPrimary: "Support a Cause",
      ctaSecondary: "Learn More",
    },
    {
      title: "Make a Difference in Qatar",
      description:
        "Join thousands of donors helping communities across Qatar through verified, RACA-approved charities.",
      ctaPrimary: "View Campaigns",
      ctaSecondary: "For Charities",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative h-screen max-h-[800px] w-full overflow-hidden bg-gradient-to-br from-green-600 to-green-900 pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-10 rounded-full"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-10 grid-rows-6 h-full w-full">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="border border-white"></div>
          ))}
        </div>
      </div>

      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 flex items-center ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="container mx-auto px-6">
              <div className="max-w-2xl text-white">
                {/* Badge */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg backdrop-blur-sm mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm uppercase tracking-wider font-medium text-white">
                    RACA Approved Platform
                  </span>
                </div>

                {/* Content */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-xl mb-10 opacity-95 max-w-xl text-white">
                  {slide.description}
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button className="bg-white text-green-900 hover:bg-gray-100 font-semibold py-3 px-10 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
                    {slide.ctaPrimary}
                  </button>
                  <button className="bg-transparent hover:bg-white/20 text-white font-semibold py-3 px-10 rounded-lg border-2 border-white transition duration-300">
                    {slide.ctaSecondary}
                  </button>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-6 text-sm text-white">
                  {["Integrated with Sandi", "Blockchain Transparency", "Real-time Tracking"].map(
                    (feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-white"
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
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
