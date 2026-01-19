import React from "react";

interface ContactHeroProps {
    title: string;
    description: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ title, description }) => {
    return (
        <>
            <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {title.split(" ").map((word, index, array) =>
                            index === array.length - 1 ? (
                                <span key={index} className="text-[#0078D4]">
                                    {word}{" "}
                                </span>
                            ) : (
                                <span key={index}>{word} </span>
                            )
                        )}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>
            </section>
        </>
    );
};

export default ContactHero;
