import React from "react";

const WhyChooseUs = () => {
    const features = [
        {
            text: "Product-ready web platforms for SaaS startups and IT product companies",
        },
        {
            text: "Internal tools, portals, and reporting layers for consulting and services organizations",
        },
        {
            text: "Architecture, integration, and analytics aligned with how technology and consulting teams operate",
        },
    ];

    return (
        <section className="bg-white py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    Why Choose SanFren Tech
                </h2>
                <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto">
                    We focus on delivering solutions that align with your business needs
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-start text-left h-full"
                        >
                            <div className="w-12 h-12 rounded-full border-2 border-[#0078D4] flex items-center justify-center mb-6 shrink-0 text-[#0078D4]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 011.04-.207z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
