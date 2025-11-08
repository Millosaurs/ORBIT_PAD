"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function ServicesPage() {
    return (
        <>
            {/* Main Content - Full Screen */}
            <div className=" flex flex-col overflow-hidden">
                <Navbar />

                <main className="flex-1 px-6 md:px-12 py-12 overflow-hidden bg-background">
                    <div className="max-w-[1800px] mx-auto h-full flex flex-col">
                        {/* Header */}
                        <div className="mb-12 py-8 text-center shrink-0">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                                Our Services
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                                Comprehensive digital solutions tailored to your
                                business needs. From concept to deployment,
                                we've got you covered.
                            </p>
                        </div>

                        {/* Two Column Layout */}
                        <div className="grid lg:grid-cols-2 gap-12 flex-1 min-h-0">
                            {/* Left Column */}
                            <div className="space-y-8 overflow-hidden">
                                {/* Web Development */}
                                <section className="space-y-4 p-6 rounded-xl bg-card border border-border">
                                    <h2 className="text-3xl font-bold">
                                        Web Development
                                    </h2>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Custom websites and web applications
                                        built with the latest technologies. We
                                        create fast, secure, and scalable
                                        solutions that grow with your business.
                                    </p>
                                    <div className="pt-2 space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                Custom web applications
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                E-commerce solutions
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                Progressive web apps (PWA)
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                API development & integration
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* UI/UX Design */}
                                <section className="space-y-4 p-6 rounded-xl bg-card border border-border">
                                    <h2 className="text-3xl font-bold">
                                        UI/UX Design
                                    </h2>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        User-centered design that combines
                                        aesthetics with functionality. We create
                                        intuitive experiences that users love.
                                    </p>
                                    <div className="pt-2 space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                User research & testing
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                Wireframing & prototyping
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                Visual design & branding
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                Design systems
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-8 overflow-hidden">
                                {/* Cloud Solutions */}
                                <section className="space-y-4 p-6 rounded-xl bg-muted/30 border border-border">
                                    <h2 className="text-3xl font-bold">
                                        Cloud Solutions
                                    </h2>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Scalable cloud infrastructure and
                                        deployment solutions. We help you
                                        leverage cloud technologies for maximum
                                        efficiency.
                                    </p>
                                    <div className="pt-2 space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                AWS, Azure, Google Cloud
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                DevOps & CI/CD pipelines
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                Infrastructure as code
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                Containerization & orchestration
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Consulting */}
                                <section className="space-y-4 p-6 rounded-xl bg-card border border-border">
                                    <h2 className="text-3xl font-bold">
                                        Technical Consulting
                                    </h2>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Expert guidance on technology strategy,
                                        architecture, and best practices. We
                                        help you make informed decisions.
                                    </p>
                                    <div className="pt-2 space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                Technology stack selection
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                Architecture design
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                Code reviews & audits
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                Performance optimization
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Maintenance & Support */}
                                {/*<section className="space-y-4 p-6 rounded-xl bg-muted/30 border border-border">
                                    <h2 className="text-3xl font-bold">
                                        Maintenance & Support
                                    </h2>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Ongoing support and maintenance to keep
                                        your applications running smoothly.
                                        We're here when you need us.
                                    </p>
                                    <div className="pt-2 space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                24/7 monitoring & support
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                Bug fixes & updates
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                Security patches
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 dark:bg-lime-500 mt-2 shrink-0"></div>
                                            <p className="text-sm text-muted-foreground">
                                                Feature enhancements
                                            </p>
                                        </div>
                                    </div>
                                </section>*/}
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Footer - Appears after scroll */}
            <div className="w-full">
                <Footer />
            </div>
        </>
    );
}
