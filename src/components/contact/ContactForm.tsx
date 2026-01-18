import React from "react";

interface ContactFormProps {
    submitLabel?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ submitLabel = "Submit" }) => {
    return (
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="john@company.com"
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-2">
                            Company Name *
                        </label>
                        <input
                            type="text"
                            id="company"
                            placeholder="Your Company"
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="+1 (555) 123-4567"
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="details" className="block text-sm font-bold text-gray-900 mb-2">
                        Project Details *
                    </label>
                    <textarea
                        id="details"
                        rows={5}
                        placeholder="Tell us about your project requirements..."
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400 resize-none"
                    ></textarea>
                </div>

                <button
                    type="button"
                    className="w-full bg-[#0078D4] hover:bg-[#005a9e] text-white font-bold py-4 rounded-lg transition-colors shadow-md text-lg"
                >
                    {submitLabel}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
