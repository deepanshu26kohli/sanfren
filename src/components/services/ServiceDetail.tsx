import React from "react";
import Image from "next/image";

interface Capability {
    title: string;
}

interface ServiceDetailProps {
    title: string;
    description: string;
    capabilities: Capability[];
    imageSrc: string;
    imageAlt: string;
    icon?: React.ReactNode;
    reversed?: boolean;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
    title,
    description,
    capabilities,
    imageSrc,
    imageAlt,
    icon,
    reversed = false,
}) => {
    return (
        <section className="bg-white py-16 lg:py-24 overflow-hidden border-t border-gray-100 last:border-b-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${reversed ? "lg:flex-row-reverse" : ""
                        }`}
                >
                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        {icon && <div className="w-12 h-12 mb-6 text-[#0078D4]">{icon}</div>}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            {description}
                        </p>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                Key Capabilities:
                            </h3>
                            <div className="space-y-4">
                                {capabilities.map((cap, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0 group cursor-pointer"
                                    >
                                        <span className="text-gray-700 font-medium group-hover:text-[#0078D4] transition-colors">
                                            {cap.title}
                                        </span>
                                        <svg
                                            className="w-5 h-5 text-gray-400 group-hover:text-[#0078D4] transition-colors"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="lg:w-1/2 relative h-[400px] w-full">
                        <div className={`relative rounded-2xl overflow-hidden shadow-xl w-full h-full ${reversed ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
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

export default ServiceDetail;
