import React from "react";

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-[#f8f5f4] text-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          {/* Badge using #543D2E */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#543D2E]/15 rounded-full text-sm mb-6 text-[#543D2E] font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Transparent Process
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Your Donation Makes an Impact
          </h2>

          <p className="text-lg text-gray-700/80">
            Our platform ensures complete transparency from donation to distribution,
            with full integration to Qatar's Sandi system
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-16">

          {/* Step Component (Reusable styles) */}
          {[1, 2, 3].map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="mb-6">

                {/* Icon Block → Gradient using both colors */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#821435] to-[#543D2E] flex items-center justify-center mx-auto mb-4 relative shadow-lg">

                  {/* Step number bubble → Separate color usage */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-white text-[#821435] rounded-full flex items-center justify-center font-bold border-2 border-[#821435] shadow-md">
                    {step}
                  </div>

                  {/* Icons */}
                  {step === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}

                  {step === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  )}

                  {step === 3 && (
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04 12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-[#543D2E]">
                  {step === 1 && "Choose a Verified Campaign"}
                  {step === 2 && "Donate Securely"}
                  {step === 3 && "Track Your Impact"}
                </h3>

                <p className="text-gray-700/80">
                  {step === 1 && "Browse RACA-approved campaigns from trusted charities in Qatar"}
                  {step === 2 && "Give easily via card, bank transfer, or digital wallet with encryption"}
                  {step === 3 && "Receive real-time updates on how your donation is being used"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-md border border-[#543D2E]/25">

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-[#543D2E]">
                Complete Transparency with Sandi Integration
              </h3>

              <p className="text-gray-700/80 mb-4">
                Our platform uses blockchain technology to create an immutable
                record of every transaction, ensuring complete transparency.
              </p>

              <ul className="space-y-3">
                {[
                  "Integrated with Sandi to prevent duplicate aid distribution",
                  "RACA approved and monitored campaigns with full oversight",
                  "Regular impact reports with photos and beneficiary stories",
                  "Blockchain-verified transaction records for full auditability",
                ].map((text, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-6 h-6 bg-[#821435]/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#821435]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-900">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Box (Gradient + Strong Primary Color) */}
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-[#821435] to-[#543D2E] rounded-2xl flex items-center justify-center p-6 text-white text-center shadow-lg">
                <div>
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-lg font-medium">Transparent Donation Tracking</div>
                  <div className="text-sm opacity-80 mt-2">From donor to beneficiary</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-[#821435] hover:bg-[#543D2E] text-white font-semibold py-3 px-10 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Donating Now
          </button>

          <p className="text-sm text-gray-600 mt-4">
            All donations are processed securely and are tax-deductible in Qatar
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
