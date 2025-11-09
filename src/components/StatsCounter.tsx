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
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 p-3 sm:p-4 md:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 max-w-full">
            {stats.map((stat, index) => {
                const isHovered = hoveredIndex === index;
                return (
                    <div
                        key={stat.label}
                        className="flex flex-col min-w-0 sm:min-w-[120px] md:min-w-[140px] cursor-pointer group transition-all duration-300 hover:scale-105 sm:hover:scale-110"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="flex items-baseline gap-0.5 sm:gap-1">
                            <span
                                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tabular-nums transition-all duration-300 ${
                                    isHovered
                                        ? "text-lime-500 dark:text-lime-400"
                                        : ""
                                }`}
                            >
                                {formatCount(counts[index], stat.value)}
                            </span>
                            {stat.suffix && (
                                <span
                                    className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-muted-foreground transition-all duration-300 ${
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
                            className={`text-xs sm:text-sm md:text-base text-muted-foreground mt-0.5 sm:mt-1 transition-colors duration-300 truncate ${
                                isHovered ? "text-foreground" : ""
                            }`}
                        >
                            {stat.label}
                        </span>
                        {/* Animated underline */}
                        <div
                            className={`h-0.5 bg-lime-400 dark:bg-lime-500 mt-1 sm:mt-2 transition-all duration-300 ${
                                isHovered ? "w-full" : "w-0"
                            }`}
                        />
                    </div>
                );
            })}
        </div>
    );
}
