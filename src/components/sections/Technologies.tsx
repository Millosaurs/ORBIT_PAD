"use client";

import {
    Code2,
    Smartphone,
    Palette,
    Cloud,
    Database,
    Zap,
    Laptop,
    Server,
} from "lucide-react";

const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Tailwind", icon: "💨" },
    { name: "GraphQL", icon: "◈" },
    { name: "Redis", icon: "◆" },
    { name: "Vue.js", icon: "V" },
    { name: "Django", icon: "DJ" },
    { name: "Kubernetes", icon: "☸" },
    { name: "Firebase", icon: "🔥" },
];

// Duplicate for seamless loop
const techLoop = [...technologies, ...technologies];

export function Technologies() {
    return (
        <section className="py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Technologies We Use
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Building with the best tools in the industry
                    </p>
                </div>

                {/* Logo Cloud - Infinite Scroll */}
                <div className="relative">
                    {/* Gradient Overlays for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

                    {/* Scrolling Container */}
                    <div className="overflow-hidden py-8">
                        <div className="flex animate-scroll-left hover:pause-animation">
                            {techLoop.map((tech, index) => (
                                <div
                                    key={`${tech.name}-${index}`}
                                    className="flex-shrink-0 mx-6 group cursor-pointer"
                                >
                                    <div className="flex flex-col items-center justify-center w-32 h-32 border-2 border-border rounded-2xl bg-card hover:border-lime-400 dark:hover:border-lime-500 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                                        <span className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                                            {tech.icon}
                                        </span>
                                        <span className="text-sm font-medium text-center">
                                            {tech.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats or Additional Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
                    <div className="text-center group cursor-pointer">
                        <div className="w-16 h-16 mx-auto mb-3 bg-card border-2 border-border rounded-xl flex items-center justify-center group-hover:border-lime-400 dark:group-hover:border-lime-500 transition-all duration-300 group-hover:scale-110">
                            <Code2 className="w-8 h-8 text-lime-400 dark:text-lime-500" />
                        </div>
                        <p className="font-semibold text-lg">Modern Stack</p>
                        <p className="text-sm text-muted-foreground">
                            Latest tech
                        </p>
                    </div>
                    <div className="text-center group cursor-pointer">
                        <div className="w-16 h-16 mx-auto mb-3 bg-card border-2 border-border rounded-xl flex items-center justify-center group-hover:border-lime-400 dark:group-hover:border-lime-500 transition-all duration-300 group-hover:scale-110">
                            <Zap className="w-8 h-8 text-lime-400 dark:text-lime-500" />
                        </div>
                        <p className="font-semibold text-lg">Fast Deploy</p>
                        <p className="text-sm text-muted-foreground">
                            Quick launch
                        </p>
                    </div>
                    <div className="text-center group cursor-pointer">
                        <div className="w-16 h-16 mx-auto mb-3 bg-card border-2 border-border rounded-xl flex items-center justify-center group-hover:border-lime-400 dark:group-hover:border-lime-500 transition-all duration-300 group-hover:scale-110">
                            <Cloud className="w-8 h-8 text-lime-400 dark:text-lime-500" />
                        </div>
                        <p className="font-semibold text-lg">Scalable</p>
                        <p className="text-sm text-muted-foreground">
                            Grows with you
                        </p>
                    </div>
                    <div className="text-center group cursor-pointer">
                        <div className="w-16 h-16 mx-auto mb-3 bg-card border-2 border-border rounded-xl flex items-center justify-center group-hover:border-lime-400 dark:group-hover:border-lime-500 transition-all duration-300 group-hover:scale-110">
                            <Database className="w-8 h-8 text-lime-400 dark:text-lime-500" />
                        </div>
                        <p className="font-semibold text-lg">Robust Data</p>
                        <p className="text-sm text-muted-foreground">
                            Secure storage
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
