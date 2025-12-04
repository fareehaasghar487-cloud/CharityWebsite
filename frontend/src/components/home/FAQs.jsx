"use client";
import React, { useState } from "react";

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqData = {
    general: [
      {
        id: "gen-1",
        question: "What is the Qatar Charity Platform?",
        answer:
          "The Qatar Charity Platform is a comprehensive digital system for managing, monitoring, and regulating charitable donations and campaigns in Qatar. It integrates with the Sandi platform to ensure transparency, compliance, and efficient distribution of aid.",
      },
      {
        id: "gen-2",
        question: "How does the platform ensure transparency?",
        answer:
          "We use blockchain technology to create tamper-proof records of all transactions. Donors can track their contributions in real-time from donation to distribution, with proof of spending provided by charities.",
      },
      {
        id: "gen-3",
        question: "Is my personal information secure?",
        answer:
          "Yes, we employ bank-level security measures including encryption, secure servers, and compliance with Qatar data protection regulations. Your information is never shared without your consent.",
      },
      {
        id: "gen-4",
        question: "What languages are supported?",
        answer:
          "The platform is fully available in both Arabic and English, with plans to add more languages in the future based on user needs.",
      },
    ],
    donors: [
      {
        id: "donor-1",
        question: "How can I make a donation?",
        answer:
          "You can donate through multiple methods: credit/debit cards, bank transfer, QR code payments, or digital wallets. Simply register an account, browse campaigns, and select your preferred payment method.",
      },
      {
        id: "donor-2",
        question: "Will I receive a receipt for my donation?",
        answer:
          "Yes, you will receive an instant digital receipt for every donation, which can be used for tax purposes. All receipts are stored in your account dashboard for easy access.",
      },
      {
        id: "donor-3",
        question: "How can I track the impact of my donation?",
        answer:
          "Our real-time tracking system allows you to follow your donation from start to finish. You'll receive updates, photos, and reports showing how your contribution made a difference.",
      },
      {
        id: "donor-4",
        question: "Can I set up recurring donations?",
        answer:
          "Yes, you can set up monthly, quarterly, or annual recurring donations to your preferred charities with customizable amounts.",
      },
      {
        id: "donor-5",
        question: "Are there any fees for donating?",
        answer:
          "The platform charges a minimal processing fee of 1.5% to cover transaction costs and platform maintenance. Charities receive 98.5% of your donation amount.",
      },
    ],
    charities: [
      {
        id: "charity-1",
        question: "How can my organization register on the platform?",
        answer:
          "Charities must apply through the registration portal, providing all required documentation including valid licenses from RACA. The approval process typically takes 5-7 business days.",
      },
      {
        id: "charity-2",
        question: "What are the reporting requirements?",
        answer:
          "Registered charities must submit regular reports including proof of spending, beneficiary information, and impact assessments. The platform provides templates to simplify this process.",
      },
      {
        id: "charity-3",
        question: "How does the Sandi integration work?",
        answer:
          "The platform automatically syncs with Sandi to verify beneficiaries and prevent duplicate aid. Charities can access verified beneficiary lists and report distributions directly through the system.",
      },
      {
        id: "charity-4",
        question: "What support is available for charity administrators?",
        answer:
          "We provide comprehensive training, dedicated account managers, and 24/7 technical support to help charities maximize their use of the platform.",
      },
    ],
    technical: [
      {
        id: "tech-1",
        question: "What browsers are supported?",
        answer:
          "The platform works best on Chrome, Firefox, Safari, and Edge browsers updated to their latest versions. For optimal experience, enable JavaScript and cookies.",
      },
      {
        id: "tech-2",
        question: "Is there a mobile app available?",
        answer:
          "Yes, we have native iOS and Android apps available for download from their respective app stores. The mobile apps offer all the functionality of the web platform.",
      },
      {
        id: "tech-3",
        question: "What if I encounter technical issues?",
        answer:
          "Our support team is available 24/7 through live chat, email, or phone. You can also visit our Help Center for troubleshooting guides and video tutorials.",
      },
      {
        id: "tech-4",
        question: "How often is the platform updated?",
        answer:
          "We release regular updates every two weeks with new features, security enhancements, and performance improvements. All updates are thoroughly tested before deployment.",
      },
    ],
  };

  const categories = [
    { id: "general", name: "General Questions", icon: "📋" },
    { id: "donors", name: "For Donors", icon: "🤲" },
    { id: "charities", name: "For Charities", icon: "🏛️" },
    { id: "technical", name: "Technical Support", icon: "🔧" },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-green-400 rounded-full shadow-lg mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about Qatar's premier charity
            management platform
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                activeCategory === category.id
                  ? "bg-green-400 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 hover:text-green-600 shadow-md"
              }`}
            >
              <span className="mr-3 text-xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-gray-100">
          {faqData[activeCategory].map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-100 last:border-b-0 transition-all duration-300 hover:bg-gray-50"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left focus:outline-none group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4 group-hover:text-green-700 transition-colors duration-300">
                    {item.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 ml-2 transform transition-transform duration-300 ${
                      openItems[item.id] ? "rotate-180" : ""
                    }`}
                  >
                    <div className="bg-gray-100 rounded-full p-2 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-gray-600 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openItems[item.id]
                      ? "max-h-96 opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed pb-2">
                    {item.answer}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="relative bg-green-400 rounded-2xl shadow-2xl p-10 md:p-14 text-white text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white opacity-10"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white opacity-10"></div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              Still have questions?
            </h2>
            <p className="mb-7 max-w-2xl mx-auto text-lg opacity-95">
              Our support team is ready to help you with any additional
              questions you might have about the platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <button className="px-8 py-4 bg-white text-green-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
