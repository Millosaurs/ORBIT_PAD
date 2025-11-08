"use client";

import { Card } from "../ui/card";
import { Avatar } from "../ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO at TechStart",
        image: "/logo-0.png",
        rating: 5,
        text: "ORBITS LLC transformed our vision into reality. Their attention to detail and technical expertise exceeded our expectations. Highly recommend!",
    },
    {
        name: "Michael Chen",
        role: "Product Manager at DataFlow",
        image: "/logo-0.png",
        rating: 5,
        text: "Working with ORBITS was a game-changer for our project. They delivered on time, within budget, and the quality was outstanding.",
    },
    {
        name: "Emily Rodriguez",
        role: "Founder at HealthHub",
        image: "/logo-0.png",
        rating: 5,
        text: "The team's professionalism and dedication to our success made all the difference. They're not just developers, they're true partners.",
    },
    {
        name: "David Thompson",
        role: "CTO at FinanceCore",
        image: "/logo-0.png",
        rating: 5,
        text: "Exceptional work on our financial platform. The architecture is solid, scalable, and exactly what we needed for our growth.",
    },
    {
        name: "Lisa Anderson",
        role: "Director at EduTech",
        image: "/logo-0.png",
        rating: 5,
        text: "ORBITS brought innovative solutions to complex problems. Their expertise in both design and development is truly impressive.",
    },
    {
        name: "James Wilson",
        role: "VP Engineering at CloudBase",
        image: "/logo-0.png",
        rating: 5,
        text: "From concept to deployment, ORBITS handled everything seamlessly. Their communication and project management were top-notch.",
    },
];

export function Testimonials() {
    return (
        <section className="py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-lime-400/10 dark:bg-lime-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16 relative z-10">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Don't just take our word for it - hear from our satisfied clients
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={testimonial.name}
                            className="p-6 md:p-8 border-border bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-lime-400 text-lime-400 dark:fill-lime-500 dark:text-lime-500"
                                    />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4">
                                <Avatar className="w-12 h-12 border-2 border-lime-400 dark:border-lime-500">
                                    <div className="w-full h-full bg-muted flex items-center justify-center">
                                        <span className="text-lg font-semibold">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Decorative Quote Mark */}
                <div className="hidden lg:block absolute top-20 right-32 text-9xl font-serif text-lime-400/20 dark:text-lime-500/20">
                    "
                </div>
            </div>
        </section>
    );
}
