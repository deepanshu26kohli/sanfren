import React from "react";

const ServicesHero = () => {
    return (
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Our <span className="text-[#0078D4]">Services</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    SanFren Tech provides a focused portfolio centered on web application
                    development and analytics, tailored to how IT firms, startups, and
                    consulting companies operate.
                </p>
            </div>
        </section>
    );
};

export default ServicesHero;
