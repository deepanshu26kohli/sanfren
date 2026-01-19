"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Expertise", href: "/expertise" },
        { name: "Contact", href: "/contact" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm py-4" : "bg-white py-6"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center mr-auto">
                        <Link href="/" className="flex items-center gap-2">
                            {/* Logo Icon */}
                            <div className="text-[#0078D4]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                    <path d="M12 2l9 4.9V17l-9 4.9-9-4.9V6.9L12 2z" />
                                    <circle cx="12" cy="12" r="3" />
                                    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold text-[#0078D4] tracking-tight ml-1">
                                SanFren Tech
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[15px] font-medium transition-colors ${isActive(link.href)
                                    ? "text-[#0078D4]"
                                    : "text-gray-600 hover:text-[#0078D4]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center ml-8">
                        <Link
                            href="/contact"
                            className="bg-[#0078D4] hover:bg-[#0063b1] text-white px-6 py-2.5 rounded font-semibold transition-colors"
                        >
                            Schedule Consultation
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center ml-auto">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg h-screen">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.href)
                                    ? "text-[#0078D4] bg-blue-50"
                                    : "text-gray-700 hover:text-[#0078D4] hover:bg-gray-50"
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 mt-4 border-t border-gray-100">
                            <Link
                                href="/contact"
                                className="block w-full text-center bg-[#0078D4] hover:bg-[#0063b1] text-white px-5 py-3 rounded font-semibold transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Schedule Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
