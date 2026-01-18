import React from "react";

interface ContactHeroProps {
    title: string;
    description: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ title, description }) => {
    return (
        <section className="bg-white pt-32 pb-12 lg:pt-40 lg:pb-16 text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {title.split(" ").map((word, index, array) =>
                        // Highlight the last word or specific key words if needed. 
                        // For general "Contact Us" or "Schedule a Consultation", we can just highlight the last word for style
                        // or use specific logic. Here, let's keep it simple or highlight specific words if known.
                        // Based on design, "Consultation" is blue in "Schedule a Consultation".
                        index === array.length - 1 ? (
                            <span key={index} className="text-[#0078D4]">
                                {word}{" "}
                            </span>
                        ) : (
                            <span key={index}>{word} </span>
                        )
                    )}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
};

export default ContactHero;
