"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";

const footerLinks = {
    company: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
    ],
    services: [
        { name: "Web Development", href: "#" },
        { name: "Mobile Apps", href: "#" },
        { name: "UI/UX Design", href: "#" },
        { name: "Cloud Solutions", href: "#" },
    ],
    resources: [
        { name: "Documentation", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
    ],
};

const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
    const { theme } = useTheme();
    const isDark =
        theme === "dark" ||
        (theme === "system" &&
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);

    return (
        <footer className="bg-card border-t border-border">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-4">
                            <Image
                                src={isDark ? "/logo-1.png" : "/logo-0.png"}
                                alt="Orbits Logo"
                                width={40}
                                height={40}
                            />
                            <span className="text-2xl md:text-3xl font-semibold ml-2">
                                ORBITS
                                <sub className="text-sm">LLC</sub>
                            </span>
                        </div>
                        <p className="text-muted-foreground mb-6 max-w-sm">
                            Crafting digital solutions for tomorrow. We help
                            businesses innovate and scale through cutting-edge
                            software development.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <Button
                                        key={social.label}
                                        variant="ghost"
                                        size="icon"
                                        className="hover:bg-lime-400 hover:text-black dark:hover:bg-lime-500 transition-colors"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </Button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator className="mb-8" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm text-center md:text-left">
                        © {new Date().getFullYear()} ORBITS LLC. All rights
                        reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Privacy
                        </a>
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Terms
                        </a>
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
