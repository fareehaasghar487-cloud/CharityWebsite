import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutCause = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
            alt="Charity work"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Text */}
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Our Cause
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We are committed to making a difference by supporting vulnerable
            communities through education, healthcare, and emergency relief.
            Every campaign is designed to bring real change to those who need it
            most.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With your support, we’ve impacted thousands of lives, built schools,
            provided medical aid, and delivered relief during natural disasters.
            Together, we can continue to spread hope and kindness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCause;
