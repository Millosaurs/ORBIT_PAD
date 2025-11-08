"use client";

import { Card } from "../ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "E-Commerce Platform",
        image: "/logo-0.png",
        link: "#",
        github: "#",
    },
    {
        title: "Healthcare Dashboard",
        image: "/logo-0.png",
        link: "#",
        github: "#",
    },
    {
        title: "AI-Powered Chat App",
        image: "/logo-0.png",
        link: "#",
        github: "#",
    },
    {
        title: "Project Management Tool",
        image: "/logo-0.png",
        link: "#",
        github: "#",
    },
    {
        title: "Financial Analytics",
        image: "/logo-0.png",
        link: "#",
        github: "#",
    },
    {
        title: "Social Media Manager",
        image: "/logo-0.png",
        link: "#",
        github: "#",
    },
];

export function Portfolio() {
    return (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-muted/30">
            <div className="max-w-[1600px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Our Work
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Projects that showcase our expertise and innovation
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={project.title}
                            className="overflow-hidden border-border bg-card group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 aspect-video"
                        >
                            {/* Project Image Container */}
                            <div className="relative h-72 md:h-80 overflow-hidden">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] "></div>

                                {/* Blurred Logo Image */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={200}
                                        height={200}
                                        className="opacity-20 blur-sm group-hover:blur-md group-hover:scale-110 transition-all duration-500"
                                    />
                                </div>

                                {/* Bottom Bar - Always Visible */}
                                <div className="absolute bottom-0 left-0 right-0 bg-card/90 backdrop-blur-md border-t border-border px-6 py-4 flex items-center justify-between">
                                    <h3 className="text-lg md:text-xl font-semibold truncate">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2 flex-shrink-0">
                                        <a
                                            href={project.link}
                                            className="w-9 h-9 hover:bg-lime-400 hover:text-black dark:hover:bg-lime-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-border hover:border-transparent"
                                            onClick={(e) => e.stopPropagation()}
                                            aria-label="View project"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={project.github}
                                            className="w-9 h-9 hover:bg-lime-400 hover:text-black dark:hover:bg-lime-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-border hover:border-transparent"
                                            onClick={(e) => e.stopPropagation()}
                                            aria-label="View on GitHub"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
