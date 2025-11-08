"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function CTA() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-muted/30 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* Decorative Orbital Rings */}
                <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
                    <div className="absolute inset-0 border-2 border-border rounded-full animate-pulse"></div>
                    <div className="absolute inset-8 border-2 border-lime-400 dark:border-lime-500 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-16 border-2 border-border rounded-full animate-spin-reverse"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
                    {/* Left Side - CTA Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                            Ready to start your project?
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                            Let's turn your ideas into reality. Get in touch with
                            us and let's discuss how we can help bring your vision
                            to life.
                        </p>

                        {/* Contact Info Cards */}
                        <div className="space-y-4 pt-6">
                            <Card className="p-4 border-border bg-card/50 backdrop-blur-sm flex items-center gap-4 hover:bg-card transition-colors">
                                <div className="w-12 h-12 bg-lime-400 dark:bg-lime-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-black dark:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Email us at
                                    </p>
                                    <p className="font-semibold">
                                        hello@orbitsllc.com
                                    </p>
                                </div>
                            </Card>

                            <Card className="p-4 border-border bg-card/50 backdrop-blur-sm flex items-center gap-4 hover:bg-card transition-colors">
                                <div className="w-12 h-12 bg-lime-400 dark:bg-lime-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-black dark:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Call us at
                                    </p>
                                    <p className="font-semibold">
                                        +1 (555) 123-4567
                                    </p>
                                </div>
                            </Card>

                            <Card className="p-4 border-border bg-card/50 backdrop-blur-sm flex items-center gap-4 hover:bg-card transition-colors">
                                <div className="w-12 h-12 bg-lime-400 dark:bg-lime-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-black dark:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Visit us at
                                    </p>
                                    <p className="font-semibold">
                                        123 Tech Street, Silicon Valley
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <Card className="p-8 md:p-10 border-border bg-card shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Name
                                </label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="w-full bg-background border-border"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email Address
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className="w-full bg-background border-border"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Message
                                </label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    className="w-full min-h-[150px] bg-background border-border resize-none"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-xl group"
                            >
                                <span>Send Message</span>
                                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
}
