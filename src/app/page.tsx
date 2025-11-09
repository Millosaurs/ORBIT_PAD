"use client";

import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { useEffect, useState, useRef } from "react";
import PixelBlast from "@/components/bg-pixel";
import { useIsDark } from "@/components/providers/ThemeProvider";

export default function Home() {
    const [isRevealed, setIsRevealed] = useState(false);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
    const isSnapping = useRef(false);
    const lastScrollY = useRef(0);
    const isDark = useIsDark();

    useEffect(() => {
        const handleScroll = () => {
            if (isSnapping.current) return;

            const scrollY = window.scrollY;
            const scrollDirection =
                scrollY > lastScrollY.current ? "down" : "up";
            lastScrollY.current = scrollY;

            const threshold = window.innerHeight * 0.15; // 15% threshold

            // Clear existing timeout
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            // Set timeout to snap after user stops scrolling
            scrollTimeout.current = setTimeout(() => {
                isSnapping.current = true;

                if (!isRevealed && scrollY > threshold) {
                    // User scrolled down from hero - reveal CTA/Footer
                    setIsRevealed(true);
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: "smooth",
                    });
                } else if (!isRevealed && scrollY > 0 && scrollY <= threshold) {
                    // User scrolled down a bit but not enough - snap back to top
                    setIsRevealed(false);
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                } else if (
                    isRevealed &&
                    scrollDirection === "up" &&
                    scrollY < window.innerHeight + threshold
                ) {
                    // User scrolled up while CTA/Footer is revealed - go back to hero
                    setIsRevealed(false);
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }

                setTimeout(() => {
                    isSnapping.current = false;
                }, 700);
            }, 150);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, [isRevealed]);

    // Calculate transform values for the overlay
    const overlayTransform = isRevealed ? "translateY(-100%)" : "translateY(0)";

    return (
        <>
            {/* Global styles to hide scrollbar */}
            <style jsx global>{`
                html {
                    scroll-behavior: smooth;
                }
                body {
                    overflow-x: hidden;
                }
                body::-webkit-scrollbar {
                    display: none;
                }
                body {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            {/* Static Bottom Layer - CTA and Footer (Fixed) */}
            <div className="fixed top-0 left-0 w-full h-screen bg-muted/50 overflow-hidden">
                <div className="h-full overflow-y-auto">
                    <CTA />
                    <Footer />
                </div>
            </div>

            {/* Hero Overlay - Slides up on scroll */}
            <div
                className="fixed top-0 left-0 w-full h-screen z-50 pointer-events-none transition-transform duration-700 ease-in-out"
                style={{
                    transform: overlayTransform,
                }}
            >
                <main className="h-screen flex flex-col pointer-events-auto relative">
                    {/* PixelBlast Background */}
                    <div
                        className="absolute inset-0 -z-10"
                        style={{
                            backgroundColor: isDark ? "#000000" : "#ffffff",
                        }}
                    >
                        <PixelBlast
                            variant="circle"
                            pixelSize={6}
                            color="#84cc16"
                            patternScale={3}
                            patternDensity={1.2}
                            pixelSizeJitter={0.5}
                            enableRipples
                            rippleSpeed={0.4}
                            rippleThickness={0.12}
                            rippleIntensityScale={1.5}
                            liquid
                            liquidStrength={0.12}
                            liquidRadius={1.2}
                            liquidWobbleSpeed={5}
                            speed={0.6}
                            edgeFade={0.25}
                            transparent={true}
                        />
                    </div>

                    {/* Nav and Hero content on top of PixelBlast */}
                    <div className="relative z-10 flex flex-col h-full">
                        <Navbar />
                        <Hero />
                    </div>
                </main>
            </div>

            {/* Invisible spacer to enable scrolling */}
            <div
                className="relative h-[200vh]"
                style={{ pointerEvents: "none" }}
            />
        </>
    );
}
