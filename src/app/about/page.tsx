"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function AboutPage() {
    return (
        <>
            {/* Main Content - Full Screen */}
            <div className="h-screen flex flex-col overflow-hidden">
                <Navbar />

                <main className="flex-1 px-6 md:px-12 py-12 overflow-hidden bg-background">
                    <div className="max-w-[1800px] mx-auto h-full flex flex-col">
                        {/* Header */}
                        <div className="mb-12 py-8 text-center shrink-0">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                                About Orbits LLC
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                                Building exceptional digital experiences through
                                innovation, collaboration, and expertise.
                            </p>
                        </div>

                        {/* Two Column Layout */}
                        <div className="grid lg:grid-cols-2 gap-12 flex-1 min-h-0">
                            {/* Left Column */}
                            <div className="space-y-8 overflow-hidden">
                                {/* Mission */}
                                <section className="space-y-4 p-6 rounded-xl bg-muted/30 border border-border">
                                    <h2 className="text-3xl font-bold">
                                        Our Mission
                                    </h2>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        We're on a mission to transform
                                        businesses through innovative design and
                                        cutting-edge technology. Our goal is to
                                        create digital experiences that not only
                                        look stunning but drive real, measurable
                                        results for our clients.
                                    </p>
                                </section>

                                {/* Story */}
                                <section className="space-y-4 p-6 rounded-xl bg-card border border-border">
                                    <h2 className="text-3xl font-bold">
                                        Our Story
                                    </h2>
                                    <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
                                        <p>
                                            Founded with a passion for
                                            technology and design, Orbits LLC
                                            has grown into a trusted partner for
                                            businesses looking to make their
                                            mark in the digital world.
                                        </p>
                                        <p>
                                            Our team of experienced designers,
                                            developers, and strategists work
                                            together to create solutions that
                                            are beautiful, functional, and
                                            scalable.
                                        </p>
                                        <p>
                                            From startups to established
                                            enterprises, we've helped countless
                                            clients bring their visions to life
                                            through custom web applications and
                                            stunning UI/UX design.
                                        </p>
                                    </div>
                                </section>

                                {/* Expertise */}
                                <section className="space-y-4">
                                    <h2 className="text-3xl font-bold">
                                        Our Expertise
                                    </h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-5 rounded-xl bg-card border border-border hover:border-lime-400/50 transition-colors">
                                            <h3 className="font-bold text-lg mb-2">
                                                Web Development
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Custom websites & web
                                                applications
                                            </p>
                                        </div>
                                        <div className="p-5 rounded-xl bg-card border border-border hover:border-lime-400/50 transition-colors">
                                            <h3 className="font-bold text-lg mb-2">
                                                UI/UX Design
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Beautiful, intuitive interfaces
                                            </p>
                                        </div>
                                        <div className="p-5 rounded-xl bg-card border border-border hover:border-lime-400/50 transition-colors">
                                            <h3 className="font-bold text-lg mb-2">
                                                Cloud Solutions
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Scalable infrastructure
                                            </p>
                                        </div>
                                        <div className="p-5 rounded-xl bg-card border border-border hover:border-lime-400/50 transition-colors">
                                            <h3 className="font-bold text-lg mb-2">
                                                Technical Consulting
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Expert guidance & strategy
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-8 overflow-hidden">
                                {/* Values */}
                                <section className="space-y-4">
                                    <h2 className="text-3xl font-bold">
                                        Our Values
                                    </h2>
                                    <div className="grid grid-cols-2 gap-5">
                                        {/* Value 1 */}
                                        <div className="p-5 rounded-xl bg-card border border-border hover:border-lime-400/50 transition-colors">
                                            <h3 className="text-xl font-bold mb-2">
                                                Innovation
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                We constantly push boundaries
                                                and explore new technologies to
                                                deliver cutting-edge solutions.
                                            </p>
                                        </div>

                                        {/* Value 2 */}
                                        <div className="p-5 rounded-xl bg-card border border-border hover:border-lime-400/50 transition-colors">
                                            <h3 className="text-xl font-bold mb-2">
                                                Collaboration
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                We work closely with our clients
                                                as partners to achieve shared
                                                success.
                                            </p>
                                        </div>

                                        {/* Value 3 */}
                                        <div className="p-5 rounded-xl bg-card border border-border hover:border-lime-400/50 transition-colors">
                                            <h3 className="text-xl font-bold mb-2">
                                                Excellence
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                We're committed to delivering
                                                exceptional quality in every
                                                project we undertake.
                                            </p>
                                        </div>

                                        {/* Value 4 */}
                                        <div className="p-5 rounded-xl bg-card border border-border hover:border-lime-400/50 transition-colors">
                                            <h3 className="text-xl font-bold mb-2">
                                                Growth
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                We're dedicated to helping our
                                                clients grow and scale their
                                                businesses.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Approach */}
                                <section className="space-y-4 p-6 rounded-xl bg-muted/30 border border-border">
                                    <h2 className="text-3xl font-bold">
                                        Our Approach
                                    </h2>
                                    <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
                                        <p>
                                            We believe in a collaborative,
                                            transparent process that keeps you
                                            involved every step of the way. From
                                            initial concept to final deployment,
                                            we work as an extension of your
                                            team.
                                        </p>
                                        <p>
                                            Our agile methodology ensures rapid
                                            iteration and continuous
                                            improvement, delivering value at
                                            every stage of development.
                                        </p>
                                    </div>
                                </section>

                                {/* Stats */}
                                <section className="space-y-4">
                                    <h2 className="text-3xl font-bold">
                                        By The Numbers
                                    </h2>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-lime-400/50 transition-colors">
                                            <div className="text-4xl font-bold text-lime-400 dark:text-lime-500 mb-2">
                                                50+
                                            </div>
                                            <div className="text-sm text-muted-foreground font-medium">
                                                Projects
                                            </div>
                                        </div>
                                        <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-lime-400/50 transition-colors">
                                            <div className="text-4xl font-bold text-lime-400 dark:text-lime-500 mb-2">
                                                30+
                                            </div>
                                            <div className="text-sm text-muted-foreground font-medium">
                                                Clients
                                            </div>
                                        </div>
                                        <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-lime-400/50 transition-colors">
                                            <div className="text-4xl font-bold text-lime-400 dark:text-lime-500 mb-2">
                                                100%
                                            </div>
                                            <div className="text-sm text-muted-foreground font-medium">
                                                Satisfaction
                                            </div>
                                        </div>
                                    </div>
                                </section>
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
