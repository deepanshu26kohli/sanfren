import React from "react";
import ServiceDetail from "@/components/services/ServiceDetail";
import ContactHero from "@/components/contact/ContactHero";

export default function WebDevelopmentPage() {
    const webCapabilities = [
        { title: "Custom business applications for operations, finance, and customer engagement" },
        { title: "RESTful API and microservice development, including integrations with CRM, ERP, and third-party platforms" },
        { title: "Authentication, authorization, and secure session management for global deployments" },
        { title: "Performance optimization and responsive UI for users across regions and devices" },
        { title: "Migration and modernization of legacy systems into maintainable, scalable architectures" },
    ];

    return (
        <div className="flex flex-col">
            <ContactHero
                title="Web Application Development"
                description="SanFren Tech designs and develops custom web applications using LAMP and MEVN stacks to support portals, internal tools, and customer-facing platforms."
            />

            <ServiceDetail
                title="Building Scalable Web Solutions"
                description="Our team focuses on creating robust, secure, and user-centric applications tailored to your specific business needs. From initial design to deployment and scaling, we ensure your web platform is a reliable asset for your growth."
                capabilities={webCapabilities}
                imageSrc="/service_web_code_screen.png"
                imageAlt="Web Application Development Code"
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-full h-full"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                    </svg>
                }
            />
        </div>
    );
}
