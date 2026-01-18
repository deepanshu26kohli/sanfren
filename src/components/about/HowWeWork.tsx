import React from "react";

const HowWeWork = () => {
    const steps = [
        {
            id: 1,
            text: "Engage with product owners, founders, and consulting leaders to translate business models into robust architectures"
        },
        {
            id: 2,
            text: "Blend engineering and analytics capabilities to provide both systems of record and systems of insight"
        },
        {
            id: 3,
            text: "Use iterative, transparent delivery with clear milestones and communication across time zones"
        }
    ];

    return (
        <section className="bg-white py-20 mb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                        How We Work
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Our approach ensures transparent, effective collaboration
                    </p>
                </div>

                <div className="space-y-6">
                    {steps.map((step) => (
                        <div key={step.id} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-6">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0078D4] text-white flex items-center justify-center font-bold text-lg">
                                {step.id}
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed pt-1">
                                {step.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
