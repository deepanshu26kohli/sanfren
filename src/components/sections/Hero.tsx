import Link from "next/link";
import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2 text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                            Web Platforms &<br />
                            Dashboards for <span className="text-[#0078D4]">Tech-<br />Driven Businesses</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                            SanFren Tech delivers LAMP and MEVN-based applications plus tailored Power BI dashboards for IT companies, startups, and consulting firms across North America and Europe.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/consultation"
                                className="bg-[#0078D4] hover:bg-[#0063b1] text-white font-semibold py-3.5 px-8 rounded-md transition-colors text-center shadow-sm"
                            >
                                Schedule Consultation &rarr;
                            </Link>
                            <Link
                                href="/services"
                                className="bg-white border text-[#0078D4] border-gray-200 hover:border-[#0078D4] font-semibold py-3.5 px-8 rounded-md transition-colors text-center"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative h-[400px]">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl w-full h-full">
                            <Image
                                src="/hero_team_meeting.png"
                                alt="Team working"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
