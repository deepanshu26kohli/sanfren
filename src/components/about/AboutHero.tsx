import React from "react";
import Image from "next/image";

const AboutHero = () => {
    return (
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2 text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                            About <span className="text-[#0078D4]">SanFren Tech</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            SanFren Tech focuses on the needs of technology-led organizations that
                            must deliver quickly, integrate with many systems, and maintain high
                            standards of reliability.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We are an IT services company specializing in web application
                            development and business intelligence for IT companies, startups, and
                            consulting firms. Our team brings together architects, developers, and
                            data specialists who understand modern technology stacks and
                            enterprise delivery expectations.
                        </p>
                    </div>
                    <div className="lg:w-1/2 relative h-[400px]">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl w-full h-full">
                            <Image
                                src="/about_team_collaboration.png"
                                alt="About SanFren Tech Team"
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

export default AboutHero;
