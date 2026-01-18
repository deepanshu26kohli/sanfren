import Link from "next/link";
import React from "react";

const CTA = () => {
    return (
        <section className="bg-[#0091FF] py-20 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto">
                    Let&apos;s discuss how we can help you build scalable web applications and insightful dashboards
                </p>
                <Link
                    href="/consultation"
                    className="bg-white text-[#0091FF] font-semibold py-3.5 px-8 rounded-md transition-colors inline-flex items-center hover:bg-gray-50 uppercase tracking-wide text-sm"
                >
                    Schedule Consultation
                    <svg
                        className="w-4 h-4 ml-2"
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
        </section>
    );
};

export default CTA;
