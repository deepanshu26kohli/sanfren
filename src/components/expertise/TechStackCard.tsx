import React from "react";

interface TechStackCardProps {
    title: string;
    description: string;
    strengths: string[];
    icon: React.ReactNode;
}

const TechStackCard: React.FC<TechStackCardProps> = ({
    title,
    description,
    strengths,
    icon,
}) => {
    return (
        <div className="bg-[#F0F8FF] rounded-2xl overflow-hidden border border-blue-50 shadow-sm mb-12 last:mb-0">
            <div className="flex flex-col md:flex-row">
                {/* Left Side: Icon & Title */}
                <div className="md:w-1/3 p-10 flex flex-col items-center justify-center text-center bg-white border-b md:border-b-0 md:border-r border-blue-50">
                    <div className="w-20 h-20 mb-6 text-[#0078D4]">
                        {icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                </div>

                {/* Right Side: Content */}
                <div className="md:w-2/3 p-10 bg-white">
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        {description}
                    </p>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Key Strengths:</h4>
                        <ul className="space-y-3">
                            {strengths.map((strength, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-[#0078D4] mr-3 mt-1.5 flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-3 h-3"
                                        >
                                            <circle cx="12" cy="12" r="12" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700">{strength}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStackCard;
