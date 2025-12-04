import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Donor",
      feedback:
        "Supporting campaigns here has been an amazing experience. I can actually see the change my donation makes.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "David Martinez",
      role: "Volunteer",
      feedback:
        "Being a volunteer taught me the value of community support. This platform has transformed countless lives.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Aisha Khan",
      role: "Beneficiary",
      feedback:
        "Thanks to the donors, my village received clean water. This has truly changed our daily lives for the better.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-3xl font-bold mb-12"
          data-aos="fade-up"
          style={{ color: "#821435" }}
        >
          What People Say
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-[#543D2E]"
                />
              </div>
              <p className="text-gray-600 italic mb-4">"{t.feedback}"</p>
              <h4 className="font-semibold" style={{ color: "#543D2E" }}>
                {t.name}
              </h4>
              <p className="text-sm" style={{ color: "#821435" }}>
                {t.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
