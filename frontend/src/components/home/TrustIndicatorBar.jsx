import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TrustIndicatorBar = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div
      className="w-full bg-gradient-to-r from-[#821435]/10 to-[#543D2E]/10 py-12 md:py-16 border-t border-b border-[#821435]/20"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-[#821435] mb-3">
            Trusted by Qatar&apos;s Charitable Community
          </h2>
          <p className="text-[#543D2E] font-medium">
            Fully integrated with Sandi for transparent, regulated charitable giving
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">

          {/* Official Partnerships */}
          <div
            className="bg-white rounded-xl p-6 shadow-md border border-[#821435]/30 flex flex-col items-center min-h-[250px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-center mb-5">
              <h3 className="font-semibold text-[#821435] mb-2">Official Partnerships</h3>
              <div className="h-1 w-12 bg-[#543D2E] mx-auto mb-4"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex flex-col items-center" data-aos="zoom-in">
                <div className="w-16 h-16 bg-gradient-to-br from-[#821435] to-[#543D2E] rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-md">
                  RACA
                </div>
                <span className="text-xs text-[#821435] mt-2 font-medium">Regulatory Body</span>
              </div>

              <div className="h-12 w-px bg-[#821435]/20 hidden md:block"></div>
              <div className="w-12 h-px bg-[#821435]/20 md:hidden"></div>

              <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="150">
                <div className="w-16 h-16 bg-gradient-to-br from-[#543D2E] to-[#821435] rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-md">
                  SANDI
                </div>
                <span className="text-xs text-[#821435] mt-2 font-medium">National Platform</span>
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div
            className="bg-white rounded-xl p-6 shadow-md border border-[#821435]/30 min-h-[250px] flex flex-col justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-center mb-5">
              <h3 className="font-semibold text-[#821435] mb-2">Our Impact</h3>
              <div className="h-1 w-12 bg-[#543D2E] mx-auto mb-4"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                { value: "42+", label: "Verified Charities" },
                { value: "12.4M+", label: "Donations Raised" },
                { value: "5,241+", label: "Families Helped" },
                { value: "100%", label: "Compliance" },
              ].map((item, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="text-2xl md:text-3xl font-bold text-[#543D2E]">
                    {item.value}
                  </div>
                  <div className="text-xs text-[#821435] mt-1 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Trust */}
          <div
            className="bg-white rounded-xl p-6 shadow-md border border-[#821435]/30 min-h-[250px]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-center mb-5">
              <h3 className="font-semibold text-[#821435] mb-2">Security & Trust</h3>
              <div className="h-1 w-12 bg-[#543D2E] mx-auto mb-4"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["Secure", "Verified", "Transparent", "Compliant"].map((label, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center"
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                >
                  <div className="w-12 h-12 bg-[#821435]/10 rounded-full flex items-center justify-center border border-[#821435]/20">
                    {idx === 0 && <span className="text-[#543D2E]">🔒</span>}
                    {idx === 1 && <span className="text-[#543D2E]">✔</span>}
                    {idx === 2 && <span className="text-[#543D2E]">⚡</span>}
                    {idx === 3 && <span className="text-[#543D2E]">📜</span>}
                  </div>
                  <span className="text-xs text-[#821435] mt-2 font-medium text-center">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Trust Row */}
        <div
          className="mt-10 pt-8 border-t border-[#821435]/20 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          data-aos="fade-up"
        >
          <span className="text-sm text-[#821435] font-medium">
            ✔ 100% compliant with Qatari charitable regulations
          </span>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-[#821435]/10 px-3 py-1 rounded-lg border border-[#821435]/20">
              <span className="text-xs font-bold text-[#821435]">SSL</span>
              <span className="text-xs text-[#821435]">Secure Encryption</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#821435]/10 px-3 py-1 rounded-lg border border-[#821435]/20">
              <span className="text-xs text-[#821435]">Blockchain Verified</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrustIndicatorBar;
