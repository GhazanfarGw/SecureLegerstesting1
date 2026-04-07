import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#EEF3FA] py-12 md:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-10 items-center">
          {/* RIGHT IMAGE */}
          <div className="mt-10 relative flex justify-center border border-white/10 rounded-2xl p-1 bg-gradient-to-br from-[#2F6FD6] to-[#1A2B6B] block md:hidden lg:hidden">

            <div className="relative">
              
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-2xl" />

              {/* Image */}
              <img
                src="/liq.png" // 👉 replace with your image
                alt="Client Experience"
                className="relative rounded-2xl shadow-2xl border border-white/10 backdrop-blur-lg"
              />

            </div>

          </div>

        {/* LEFT CONTENT */}
        <div>
          {/* Heading */}
          <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-3xl font-bold leading-tight">
            <span className="text-[#2F6FD6]">Execute High-Volume Crypto</span>{" "}
            <br className="hidden md:block xl:block lg:hidden"/>
            <span className="text-[#1A2B6B]">
              Transactions Without Slippage or Market Exposure
            </span>
          </h1>
          <p className="md:mt-6 mt-2 text-[#6D7380] text-sm md:text-base md:max-w-xl leading-relaxed">
            Access institutional-grade liquidity infrastructure, OTC block execution, and multi-venue routing systems designed for high-value transactions with minimal market impact and optimized settlement efficiency.
          </p>

          {/* Description */}
          <p className="mt-6 text-[#6D7380] text-sm md:text-base max-w-xl leading-relaxed">
            
          </p>

          {/* Buttons */}
          <div className="md:mt-8 mt-6 flex gap-4 flex-wrap">
            <button className="bg-[#2F6FD6] md:text-base text-sm text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition">
              Request Private Liquidity Access  →
            </button>

            <button className="border border-gray-300 md:text-base text-sm px-6 py-3 rounded-xl text-[#1A2B6B] hover:bg-white transition">
              Get Execution Quote 
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
                src="/liq.png" // 👉 replace with your image
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