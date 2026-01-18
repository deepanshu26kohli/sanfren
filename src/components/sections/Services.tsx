import Link from "next/link";
import React from "react";
import Image from "next/image";

const Services = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Comprehensive IT solutions tailored for technology-driven organizations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                        <div className="h-48 overflow-hidden relative">
                            <Image
                                src="/service_web_dev.png"
                                alt="Web Application Development"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 flex-1 flex flex-col items-start text-left">
                            <div className="w-10 h-10 mb-6 text-[#0078D4]">
                                <svg
                                    className="w-full h-full"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                Web Application Development
                            </h4>
                            <p className="text-gray-600 mb-6 leading-relaxed text-base">
                                Custom LAMP and MEVN-based applications for portals, tools, and customer-facing platforms
                            </p>
                            <div className="mt-auto">
                                <Link
                                    href="/services/web-development"
                                    className="text-[#0078D4] font-semibold hover:text-[#0063b1] inline-flex items-center transition-colors"
                                >
                                    Learn More
                                    <svg
                                        className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                        <div className="h-48 overflow-hidden relative">
                            <Image
                                src="/service_power_bi.png"
                                alt="Power BI Dashboards"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 flex-1 flex flex-col items-start text-left">
                            <div className="w-10 h-10 mb-6 text-[#0078D4]">
                                <svg
                                    className="w-full h-full"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                Power BI Dashboards
                            </h4>
                            <p className="text-gray-600 mb-6 leading-relaxed text-base">
                                Analytics dashboards with KPIs, drill-downs, and role-based views for data-driven decisions
                            </p>
                            <div className="mt-auto">
                                <Link
                                    href="/services/power-bi"
                                    className="text-[#0078D4] font-semibold hover:text-[#0063b1] inline-flex items-center transition-colors"
                                >
                                    Learn More
                                    <svg
                                        className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                        <div className="h-48 overflow-hidden relative">
                            <Image
                                src="/service_support.png"
                                alt="Application Support"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 flex-1 flex flex-col items-start text-left">
                            <div className="w-10 h-10 mb-6 text-[#0078D4]">
                                <svg
                                    className="w-full h-full"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                Application Support
                            </h4>
                            <p className="text-gray-600 mb-6 leading-relaxed text-base">
                                Monitoring, maintenance, and optimization to keep your systems secure and performant
                            </p>
                            <div className="mt-auto">
                                <Link
                                    href="/services/support"
                                    className="text-[#0078D4] font-semibold hover:text-[#0063b1] inline-flex items-center transition-colors"
                                >
                                    Learn More
                                    <svg
                                        className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
