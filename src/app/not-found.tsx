"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useIsDark } from "@/components/providers/ThemeProvider";
import Image from "next/image";

export default function NotFound() {
    const isDark = useIsDark();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-12 py-12 bg-background relative overflow-hidden">
                {/* Decorative Orbital Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] opacity-10 pointer-events-none">
                    <div className="absolute inset-0 border-2 border-border rounded-full animate-pulse"></div>
                    <div className="absolute inset-8 border-2 border-lime-400 dark:border-lime-500 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-16 border-2 border-border rounded-full animate-spin-reverse"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    {/* 404 Text */}
                    <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                            404
                        </h1>
                        <div className="space-y-3 sm:space-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                Page Not Found
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                                Oops! The page you're looking for seems to have
                                drifted out of orbit. Let's get you back on
                                track.
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                        <Link href="/">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto px-8 py-6 text-base bg-lime-400 dark:bg-lime-500 text-black dark:text-white hover:bg-lime-500 dark:hover:bg-lime-600 transition-colors"
                            >
                                Back to Home
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto px-8 py-6 text-base border-border hover:bg-accent transition-colors"
                            >
                                View Services
                            </Button>
                        </Link>
                    </div>

                    {/* Popular Links */}
                    <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-4">
                            Or explore these pages:
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                            <Link
                                href="/about"
                                className="text-sm sm:text-base text-muted-foreground hover:text-lime-400 dark:hover:text-lime-500 transition-colors"
                            >
                                About Us
                            </Link>
                            <span className="text-muted-foreground">•</span>
                            <Link
                                href="/services"
                                className="text-sm sm:text-base text-muted-foreground hover:text-lime-400 dark:hover:text-lime-500 transition-colors"
                            >
                                Services
                            </Link>
                            <span className="text-muted-foreground">•</span>
                            <Link
                                href="/privacy"
                                className="text-sm sm:text-base text-muted-foreground hover:text-lime-400 dark:hover:text-lime-500 transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <span className="text-muted-foreground">•</span>
                            <Link
                                href="/terms"
                                className="text-sm sm:text-base text-muted-foreground hover:text-lime-400 dark:hover:text-lime-500 transition-colors"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
