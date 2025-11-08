"use client";

import { useEffect, useState } from "react";

interface Stat {
    label: string;
    value: number;
    suffix?: string;
}

const stats: Stat[] = [
    { label: "Projects completed", value: 47, suffix: "+" },
    { label: "Average rating", value: 4.8, suffix: "/5" },
    { label: "Team members", value: 12, suffix: "+" },
    { label: "Years of experience", value: 8, suffix: "+" },
];

export function StatsCounter() {
    const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const interval = duration / steps;

        const timers = stats.map((stat, index) => {
            const increment = stat.value / steps;
            let currentCount = 0;

            return setInterval(() => {
                currentCount += increment;
                if (currentCount >= stat.value) {
                    setCounts((prev) => {
                        const newCounts = [...prev];
                        newCounts[index] = stat.value;
                        return newCounts;
                    });
                    clearInterval(timers[index]);
                } else {
                    setCounts((prev) => {
                        const newCounts = [...prev];
                        newCounts[index] = currentCount;
                        return newCounts;
                    });
                }
            }, interval);
        });

        return () => {
            timers.forEach((timer) => {
                if (timer) clearInterval(timer);
            });
        };
    }, []);

    const formatCount = (count: number, value: number): string => {
        if (value % 1 !== 0) {
            return count.toFixed(1);
        }
        return Math.floor(count).toString();
    };

    return (
        <div className="flex flex-wrap items-center gap-6 md:gap-8 lg:gap-12 p-6 md:p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
            {stats.map((stat, index) => {
                const isHovered = hoveredIndex === index;
                return (
                    <div
                        key={stat.label}
                        className="flex flex-col min-w-[140px] cursor-pointer group transition-all duration-300 hover:scale-110"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="flex items-baseline gap-1">
                            <span
                                className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tabular-nums transition-all duration-300 ${
                                    isHovered
                                        ? "text-lime-500 dark:text-lime-400"
                                        : ""
                                }`}
                            >
                                {formatCount(counts[index], stat.value)}
                            </span>
                            {stat.suffix && (
                                <span
                                    className={`text-xl md:text-2xl font-semibold text-muted-foreground transition-all duration-300 ${
                                        isHovered
                                            ? "text-lime-500 dark:text-lime-400"
                                            : ""
                                    }`}
                                >
                                    {stat.suffix}
                                </span>
                            )}
                        </div>
                        <span
                            className={`text-sm md:text-base text-muted-foreground mt-1 transition-colors duration-300 ${
                                isHovered ? "text-foreground" : ""
                            }`}
                        >
                            {stat.label}
                        </span>
                        {/* Animated underline */}
                        <div
                            className={`h-0.5 bg-lime-400 dark:bg-lime-500 mt-2 transition-all duration-300 ${
                                isHovered ? "w-full" : "w-0"
                            }`}
                        ></div>
                    </div>
                );
            })}
        </div>
    );
}
