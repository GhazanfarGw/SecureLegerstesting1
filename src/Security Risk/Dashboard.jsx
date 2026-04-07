import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#EEF3FA] py-12 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-7 md:px-10 grid lg:grid-cols-2 gap-10 items-center">
        {/* RIGHT IMAGE */}
        <div className="mt-10 relative flex justify-center border border-white/10 rounded-2xl p-1 bg-gradient-to-br from-[#2F6FD6] to-[#1A2B6B] block md:hidden lg:hidden">
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-2xl" />
            {/* Image */}
            <img
              src="/edited-image-03.1.jpg.jpeg" // 👉 replace with your image
              alt="Client Experience"
              className="relative rounded-2xl shadow-2xl border border-white/10 backdrop-blur-lg"
            />

          </div>
        </div>

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm md:text-sm text-xs text-[#1A2B6B] mb-6">
            <span className="w-2 h-2 bg-[#1A2B6B] rounded-full"></span>
              Enterprise Security Solutions
          </div>

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            <span className="text-[#2F6FD6]">Protect Digital Assets</span>{" "}
            <br />
            <span className="text-[#1A2B6B]">
              with Institutional-Grade Security & Risk Control
            </span>
          </h1>
          <p className="md:mt-6 mt-2 text-[#6D7380] text-sm md:text-base max-w-xl leading-relaxed">
            Advanced crypto security architecture, transaction risk intelligence, and
            compliance-aligned frameworks designed to safeguard digital assets,
            eliminate exposure, and ensure controlled execution across high-value
            transactions.
          </p>

          <div className="bg-[#E3F2FD] p-4 rounded-xl md:text-sm text-xs text-[#2F77C8] md:mt-6 mt-4 font-bold border-l-4 border-[#2F6FD6]">
            <p>
              Engineered for institutions, funds, and high-net-worth participants requiring structured custody, risk mitigation, and operational security OpSec.
            </p>
          </div>
          {/* Buttons */}
          <div className="md:mt-8 mt-6 flex gap-4 flex-wrap">
            <button className="bg-[#2F6FD6] md:text-base text-sm text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition">
              Request Private Risk Assessment →
            </button>

            <button className="border border-gray-300 md:text-base text-sm px-6 py-3 rounded-xl text-[#1A2B6B] hover:bg-white transition">
              Learn More
            </button>
          </div>
        </div>
          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center border border-white/10 rounded-2xl p-1 bg-gradient-to-br from-[#2F6FD6] to-[#1A2B6B] hidden md:block lg:block">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-2xl" />
              {/* Image */}
              <img
                src="/edited-image-03.1.jpg.jpeg" // 👉 replace with your image
                alt="Client Experience"
                className="relative rounded-2xl shadow-2xl border border-white/10 backdrop-blur-lg"
              />
            </div>
          </div>

      </div>
    </section>
  );
};

export default Hero;