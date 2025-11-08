"use client";

import { Button } from "../ui/button";

export function CTA() {
    return (
        <section className=" flex items-center py-24 md:py-32 px-6 md:px-12  relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* Decorative border container */}
                <div className="border border-border rounded-lg p-12 md:p-20 lg:p-24 relative overflow-hidden">
                    {/* Decorative Orbital Rings */}
                    <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 border-2 border-border rounded-full animate-pulse"></div>
                        <div className="absolute inset-8 border-2 border-lime-400 dark:border-lime-500 rounded-full animate-spin-slow"></div>
                        <div className="absolute inset-16 border-2 border-border rounded-full animate-spin-reverse"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                        {/* Main Heading */}
                        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                            Ready to launch your vision?
                        </h2>

                        {/* Subtitle */}
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            Expert web & mobile development, stunning UI/UX
                            design, and scalable solutions. Let's transform your
                            ideas into powerful digital experiences.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button
                                size="lg"
                                className="px-8 py-4 text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                            >
                                Start your project
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
