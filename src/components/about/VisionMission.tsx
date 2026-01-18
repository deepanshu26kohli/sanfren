import React from "react";

const VisionMission = () => {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                        Our Vision & Mission
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Vision Card */}
                    <div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100">
                        <div className="w-12 h-12 mb-6 text-[#0078D4]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-2.25m0-9V4.5" />
                                {/* Using a target/goal icon equivalent */}
                                <circle cx="12" cy="12" r="3" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                            </svg>

                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To be a trusted technology partner for global businesses seeking dependable, future-ready web and analytics solutions
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100">
                        <div className="w-12 h-12 mb-6 text-[#0078D4]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To design and deliver secure, scalable applications and dashboards that are closely aligned with how teams operate and make decisions across different regions
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
