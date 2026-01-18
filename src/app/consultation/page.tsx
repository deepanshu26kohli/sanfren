import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";

export default function ConsultationPage() {
    return (
        <div className="flex flex-col">
            <ContactHero
                title="Schedule a Consultation"
                description="Let's discuss how SanFren Tech can help transform your business with modern web applications and insightful dashboards."
            />

            <section className="bg-white pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        {/* Form Side */}
                        <div className="lg:w-2/3">
                            <ContactForm submitLabel="Schedule Consultation" />
                        </div>

                        {/* Sidebar Side */}
                        <div className="lg:w-1/3">
                            <ContactSidebar />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
