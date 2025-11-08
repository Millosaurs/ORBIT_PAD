"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Heart, Share2, Play, MapPin } from "lucide-react";
import { useTheme } from "./providers/ThemeProvider";
import { StatsCounter } from "./StatsCounter";

export default function Hero() {
    const { theme } = useTheme();
    const isDark =
        theme === "dark" ||
        (theme === "system" &&
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);

    return (
        <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-8 md:py-12 relative">
            <div className="max-w-[1600px] w-full flex items-center justify-between gap-8 md:gap-12">
                {/* Left Side - Text Content */}
                <div className="flex flex-col max-w-2xl space-y-6 text-center lg:text-center mx-auto lg:mx-0">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Digital solutions for tomorrow
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground ">
                        Our software design and development agency helps
                        businesses innovate and scale through custom web
                        applications, UI/UX design, and enterprise solutions.
                    </p>

                    <Button className=" sm:text-lg px-6 sm:px-8 py-4 sm:py-4 rounded-xl  transition-all duration-300">
                        Start a project
                    </Button>
                </div>

                {/* Right Side - Decorative Logo Design */}
                <div className="hidden lg:flex relative w-full max-w-2xl h-[500px] items-center justify-center">
                    {/* Orbital Rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-[450px] h-[450px] border-2 border-border rounded-full transform -rotate-12"></div>
                        <div className="absolute w-[380px] h-[380px] border-2 border-border rounded-full transform -rotate-12"></div>
                        <div className="absolute w-[310px] h-[310px] border-2 border-border rounded-full transform -rotate-12"></div>
                    </div>

                    {/* Center Logo/Megaphone */}
                    <div className="relative z-10 flex items-center justify-center">
                        <div className="relative w-32 h-32 transform rotate-45">
                            <Image
                                src={isDark ? "/logo-1.png" : "/logo-0.png"}
                                alt="Orbits Logo"
                                width={128}
                                height={128}
                                className="object-contain rotate-315"
                            />
                            {/* Green accent behind logo */}
                            <div className="absolute inset-0 bg-lime-400 dark:bg-lime-500 rounded-lg -z-10 transform scale-90"></div>
                        </div>
                    </div>

                    {/* Floating Icons */}
                    {/* Top Right - Heart */}
                    <div className="absolute top-12 right-32 w-14 h-14 bg-black dark:bg-white rounded-full flex items-center justify-center">
                        <Heart className="w-7 h-7 text-white dark:text-black fill-white dark:fill-black" />
                    </div>

                    {/* Top Right - Share */}
                    <div className="absolute top-8 right-12 w-14 h-14 bg-lime-400 dark:bg-lime-500 rounded-full flex items-center justify-center">
                        <Share2 className="w-7 h-7 text-black dark:text-white" />
                    </div>

                    {/* Middle Right - Play */}
                    <div className="absolute top-1/2 right-8 w-14 h-14 bg-black dark:bg-white rounded-full flex items-center justify-center transform -translate-y-1/2">
                        <Play className="w-7 h-7 text-lime-400 dark:text-lime-500 fill-lime-400 dark:fill-lime-500" />
                    </div>

                    {/* Bottom Right - Map Pin */}
                    <div className="absolute bottom-20 right-20 w-14 h-14 bg-lime-400 dark:bg-lime-500 rounded-full flex items-center justify-center">
                        <MapPin className="w-7 h-7 text-black dark:text-white" />
                    </div>

                    {/* Decorative Dots */}
                    <div className="absolute top-20 left-20 w-16 h-16 bg-black dark:bg-white rounded-full"></div>
                    <div className="absolute top-32 left-32 w-6 h-6 bg-lime-400 dark:bg-lime-500 rounded-full"></div>
                    <div className="absolute bottom-32 right-48 w-4 h-4 bg-lime-400 dark:bg-lime-500 rounded-full"></div>

                    {/* Star Shapes */}
                    <div className="absolute bottom-24 left-32 text-4xl text-black dark:text-white">
                        ✦
                    </div>
                    <div className="absolute bottom-40 right-40 text-3xl text-black dark:text-white">
                        ✦
                    </div>
                </div>
            </div>

            {/* Stats Counter - Bottom Left */}
            <div className="absolute bottom-8 left-6 md:left-12">
                <StatsCounter />
            </div>
        </div>
    );
}
