import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-5 lg:col-span-5">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="text-[#0078D4]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                    <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold text-[#0078D4] tracking-tight">
                                SanFren Tech
                            </span>
                        </Link>
                        <p className="text-gray-600 mb-8 leading-relaxed max-w-sm">
                            Your trusted IT services partner for web applications and data platforms. Serving IT companies, startups, and consulting firms across the US, Canada, UK, and Europe.
                        </p>
                        <div className="flex space-x-4">
                            {/* LinkedIn */}
                            <a href="#" className="text-gray-400 hover:text-[#0078D4] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                            </a>
                            {/* Twitter */}
                            <a href="#" className="text-gray-400 hover:text-[#0078D4] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 lg:col-span-3 lg:col-start-7">
                        <h3 className="text-gray-900 font-bold mb-6 text-base tracking-wide">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-600 hover:text-[#0078D4] transition-colors text-sm">Home</Link></li>
                            <li><Link href="/about" className="text-gray-600 hover:text-[#0078D4] transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-600 hover:text-[#0078D4] transition-colors text-sm">Services</Link></li>
                            <li><Link href="/expertise" className="text-gray-600 hover:text-[#0078D4] transition-colors text-sm">Expertise</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-[#0078D4] transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <h3 className="text-gray-900 font-bold mb-6 text-base tracking-wide">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 mr-3 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <a href="mailto:info@sanfrentech.com" className="text-gray-600 hover:text-[#0078D4] transition-colors text-sm">
                                    info@sanfrentech.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 mr-3 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <a href="tel:+15551234567" className="text-gray-600 hover:text-[#0078D4] transition-colors text-sm">
                                    +1 (555) 123-4567
                                </a>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 mr-3 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span className="text-gray-600 text-sm">
                                    Serving US, Canada, UK & Europe
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © 2026 SanFren Tech. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
