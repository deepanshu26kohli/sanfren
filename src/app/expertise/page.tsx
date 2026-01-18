import React from "react";
import ExpertiseHero from "@/components/expertise/ExpertiseHero";
import TechStackCard from "@/components/expertise/TechStackCard";
import CrossCuttingCapabilities from "@/components/expertise/CrossCuttingCapabilities";
import EnterpriseStandards from "@/components/expertise/EnterpriseStandards";

export default function ExpertisePage() {
    const lampStrengths = [
        "PHP-based application and API development with clean, modular code",
        "MySQL design, indexing, and query optimization for high-traffic scenarios",
        "Secure Linux and Apache configuration for cloud or on-premise hosting",
        "Migration of legacy PHP or other platforms into modern LAMP-based architectures",
        "CI/CD and deployment automation for LAMP workloads",
    ];

    const mevnStrengths = [
        "Vue.js frontends with reusable, component-based UI design",
        "Node.js and Express services for REST APIs and microservices",
        "MongoDB modeling for flexible, document-based data structures",
        "Authentication, rate limiting, and API security patterns for internet-facing applications",
        "Integration with cloud platforms and container-based deployments",
    ];

    const powerBIStrengths = [
        "Data modeling and DAX measures that reflect business KPIs",
        "Integration from multiple sources such as databases, SaaS tools, and files",
        "Interactive reports with drill-down, cross-filtering, and role-based perspectives",
        "Governance and lifecycle management for Power BI workspaces and assets",
        "Training and handover to business and IT teams for self-service analytics",
    ];

    return (
        <div className="flex flex-col">
            <ExpertiseHero />

            <section className="bg-white pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* LAMP Stack */}
                    <TechStackCard
                        title="LAMP Stack Expertise"
                        description="SanFren Tech uses the LAMP stack to deliver stable, server-rendered applications that are ideal for content-heavy and transactional workloads."
                        strengths={lampStrengths}
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
                                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                                />
                            </svg>
                        }
                    />

                    {/* MEVN Stack */}
                    <TechStackCard
                        title="MEVN Stack Expertise"
                        description="For interactive, SPA-style experiences, SanFren Tech leverages the MEVN stack to create fast, modern frontends backed by scalable APIs."
                        strengths={mevnStrengths}
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

                    {/* Power BI */}
                    <TechStackCard
                        title="Power BI & Analytics Expertise"
                        description="SanFren Tech helps organizations gain a unified view of their operations through Power BI dashboards tailored to regional and global reporting needs."
                        strengths={powerBIStrengths}
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
            </section>

            <CrossCuttingCapabilities />
            <EnterpriseStandards />
        </div>
    );
}
