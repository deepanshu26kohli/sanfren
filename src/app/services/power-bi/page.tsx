import React from "react";
import ServiceDetail from "@/components/services/ServiceDetail";
import ContactHero from "@/components/contact/ContactHero";

export default function PowerBIPage() {
    const powerBICapabilities = [
        { title: "Workshops to define KPIs and reporting needs for IT, startup, and consulting environments" },
        { title: "Data modeling and transformation to prepare clean, analytics-ready datasets" },
        { title: "Design of intuitive dashboards with drill-downs, filters, and role-based views" },
        { title: "Row-level security, governed access, and workspace structures that match your organization" },
        { title: "Embedding dashboards into portals and applications for seamless access" },
    ];

    return (
        <div className="flex flex-col">
            <ContactHero
                title="Power BI Dashboard Development"
                description="SanFren Tech builds Power BI dashboards that connect to your existing data sources and provide a clear view of KPIs across countries, regions, and business units."
            />

            <ServiceDetail
                title="Data-Driven Insights for Your Business"
                description="Transform raw data into actionable intelligence with our custom Power BI solutions. We design dashboards that allow you to monitor performance, identify trends, and make informed decisions with confidence."
                capabilities={powerBICapabilities}
                imageSrc="/service_power_bi.png"
                imageAlt="Power BI Dashboard"
                reversed={true}
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
                            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                        />
                    </svg>
                }
            />
        </div>
    );
}
