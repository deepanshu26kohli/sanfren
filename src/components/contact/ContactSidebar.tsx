import React from "react";

const ContactSidebar = () => {
    return (
        <div className="space-y-8">
            {/* Get in Touch */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
                <div className="space-y-8">
                    <div className="flex items-start">
                        <div className="text-[#0078D4] mr-4 mt-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 mb-1">Email</p>
                            <a href="mailto:info@sanfrentech.com" className="text-gray-600 hover:text-[#0078D4] transition-colors">
                                info@sanfrentech.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="text-[#0078D4] mr-4 mt-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 mb-1">Phone</p>
                            <a href="tel:+15551234567" className="text-gray-600 hover:text-[#0078D4] transition-colors">
                                +1 (555) 123-4567
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="text-[#0078D4] mr-4 mt-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 mb-1">Service Areas</p>
                            <p className="text-gray-600">US, Canada, UK & Europe</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="text-[#0078D4] mr-4 mt-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 mb-1">Business Hours</p>
                            <p className="text-gray-600">Mon-Fri: 9AM - 6PM EST</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-blue-50">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                    {[
                        "Expert team with proven track record",
                        "Transparent delivery process",
                        "Scalable & secure solutions",
                        "Global support coverage"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start">
                            <span className="text-[#0078D4] mr-3 mt-1.5 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2 h-2">
                                    <circle cx="12" cy="12" r="12" />
                                </svg>
                            </span>
                            <span className="text-gray-700 text-sm font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ContactSidebar;
