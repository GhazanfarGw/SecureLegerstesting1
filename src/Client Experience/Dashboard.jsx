import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#0F172A] via-[#1A2B6B] to-[#2F6FD6] text-white py-12 md:py-28 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-5 md:px-10 relative z-10">

        <div className="grid lg:grid-cols-2 gap-10 items-center mt-16">
          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center border border-white/10 rounded-2xl p-1 bg-gradient-to-br from-[#2F6FD6] to-[#1A2B6B] block md:hidden lg:hidden">

            <div className="relative">
              
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-2xl" />

              {/* Image */}
              <img
                src="/client.jpg" // 👉 replace with your image
                alt="Client Experience"
                className="relative rounded-2xl shadow-2xl border border-white/10 backdrop-blur-lg"
              />

            </div>

          </div>

          {/* LEFT CONTENT */}
          <div>

            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              A Private, Institutional-Grade Experience for High-Value Clients
            </h1>

            <p className="mt-6 text-blue-100 text-sm md:text-base leading-relaxed">
              Designed for individuals and organizations requiring discretion, precision execution, and high-touch advisory across digital asset transactions, liquidity operations, and security frameworks.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <button className="bg-white text-sm text-[#2F6FD6] px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition">
                Request a Private Consultation
              </button>
            </div>

            {/* Trust Line */}
            <p className="mt-6 text-sm text-blue-200 max-w-xl">
              Built for clients who demand confidential handling, structured execution, and institutional-level service standards.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center border border-white/10 rounded-2xl p-1 bg-gradient-to-br from-[#2F6FD6] to-[#1A2B6B] hidden md:block lg:block">

            <div className="relative">
              
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-2xl" />

              {/* Image */}
              <img
                src="/client.jpg" // 👉 replace with your image
                alt="Client Experience"
                className="relative rounded-2xl shadow-2xl border border-white/10 backdrop-blur-lg"
              />

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default HeroSection;