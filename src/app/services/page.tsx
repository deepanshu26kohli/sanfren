import Link from "next/link";
import React from "react";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceDetail from "@/components/services/ServiceDetail";

export default function ServicesPage() {
    const webCapabilities = [
        { title: "Custom business applications for operations, finance, and customer engagement" },
        { title: "RESTful API and microservice development, including integrations with CRM, ERP, and third-party platforms" },
        { title: "Authentication, authorization, and secure session management for global deployments" },
        { title: "Performance optimization and responsive UI for users across regions and devices" },
        { title: "Migration and modernization of legacy systems into maintainable, scalable architectures" },
    ];

    const powerBICapabilities = [
        { title: "Workshops to define KPIs and reporting needs for IT, startup, and consulting environments" },
        { title: "Data modeling and transformation to prepare clean, analytics-ready datasets" },
        { title: "Design of intuitive dashboards with drill-downs, filters, and role-based views" },
        { title: "Row-level security, governed access, and workspace structures that match your organization" },
        { title: "Embedding dashboards into portals and applications for seamless access" },
    ];

    const supportCapabilities = [
        { title: "Monitoring, incident management, and SLA-based response for production environments" },
        { title: "Bug fixes, minor enhancements, and periodic refactoring for better performance" },
        { title: "Security reviews, patching, and dependency updates aligned with compliance needs" },
        { title: "Database health checks, optimization, and backup strategies" },
        { title: "Documentation, knowledge transfer, and collaboration with internal IT teams" },
    ];

    return (
        <div className="flex flex-col">
            <ServicesHero />

            {/* Web Application Development */}
            <div id="web-development">
                <ServiceDetail
                    title="Web Application Development"
                    description="SanFren Tech designs and develops custom web applications using LAMP and MEVN stacks to support portals, internal tools, and customer-facing platforms."
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 -mt-12">
                    <Link
                        href="/services/web-development"
                        className="inline-flex items-center text-[#0078D4] font-semibold hover:text-[#0063b1] transition-colors"
                    >
                        View Dedicated Page
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Power BI Dashboard Development */}
            <div id="power-bi">
                <ServiceDetail
                    title="Power BI Dashboard Development"
                    description="SanFren Tech builds Power BI dashboards that connect to your existing data sources and provide a clear view of KPIs across countries, regions, and business units."
                    capabilities={powerBICapabilities}
                    imageSrc="/service_power_bi.png"
                    /* Using existing image as fallback since generation failed */
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 -mt-12 text-right">
                    <Link
                        href="/services/power-bi"
                        className="inline-flex items-center text-[#0078D4] font-semibold hover:text-[#0063b1] transition-colors"
                    >
                        View Dedicated Page
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Application Maintenance & Support */}
            <div id="maintenance-support">
                <ServiceDetail
                    title="Application Maintenance & Support"
                    description="SanFren Tech offers structured support plans to keep your LAMP and MEVN applications and Power BI assets secure, available, and up to date."
                    capabilities={supportCapabilities}
                    imageSrc="/service_support.png"
                    /* Using existing image as fallback since generation failed */
                    imageAlt="Application Support Desk"
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
                                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.581-.495.644-.869l.214-1.281z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    }
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 -mt-12">
                    <Link
                        href="/services/maintenance-support"
                        className="inline-flex items-center text-[#0078D4] font-semibold hover:text-[#0063b1] transition-colors"
                    >
                        View Dedicated Page
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
