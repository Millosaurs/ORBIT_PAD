"use client";

import { Card, CardContent, CardHeader } from "../ui/card";
import { Code2, Smartphone, Palette, Cloud, Database, Zap } from "lucide-react";
import { ReactNode } from "react";

const services = [
    {
        icon: Code2,
        title: "Web Development",
        description:
            "Custom web applications built with cutting-edge technologies",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description:
            "Native and cross-platform apps that deliver seamless experiences",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Beautiful interfaces that users love to interact with",
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description: "Scalable infrastructure that grows with your business",
    },
    {
        icon: Database,
        title: "Database Design",
        description: "Robust data architecture for complex requirements",
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description: "Lightning-fast applications that keep users engaged",
    },
];

export function Services() {
    return (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-muted/30">
            <div className="@container mx-auto max-w-[1600px]">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-balance text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        What We Do
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive solutions to power your digital presence
                    </p>
                </div>

                {/* Services Grid */}
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto grid max-w-sm gap-6 md:gap-8 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:grid-cols-2 lg:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <Card
                                key={service.title}
                                className="group  shadow-none hover:shadow-xl transition-all duration-500"
                            >
                                <CardHeader className="">
                                    <CardDecorator>
                                        <Icon className="size-6" aria-hidden />
                                    </CardDecorator>

                                    <h3 className=" font-semibold text-xl md:text-2xl">
                                        {service.title}
                                    </h3>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-500 [--color-border:color-mix(in_oklab,var(--color-border)_10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-lime-400)_30%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-lime-500)_30%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] transition-all duration-500"
        />

        <div className="bg-card absolute inset-0 m-auto flex size-14 md:size-16 items-center justify-center border-l border-t border-border  ">
            <div className="bg-lime-400 dark:bg-lime-500 p-2 rounded-lg ">
                <div className="text-black dark:text-white">{children}</div>
            </div>
        </div>
    </div>
);
