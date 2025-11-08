"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./providers/ThemeProvider";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme } = useTheme();
    const isDark =
        theme === "dark" ||
        (theme === "system" &&
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative">
            <div className="flex justify-between items-center p-6 px-6 md:px-12">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src={isDark ? "/logo-1.png" : "/logo-0.png"}
                        alt="Logo"
                        width={50}
                        height={32}
                    />
                    <span className="text-2xl sm:text-3xl md:text-4xl font-semibold pt-2">
                        ORBITS
                        <sub className="text-xs sm:text-sm md:text-base">
                            LLC
                        </sub>
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-2">
                    <ul className="flex space-x-2 xl:space-x-4">
                        <Button
                            variant={"ghost"}
                            className="text-lg xl:text-xl"
                        >
                            About us
                        </Button>
                        <Button
                            variant={"ghost"}
                            className="text-lg xl:text-xl"
                        >
                            Services
                        </Button>
                        <Button
                            variant={"ghost"}
                            className="text-lg xl:text-xl"
                        >
                            Portfolio
                        </Button>
                        <Button
                            variant={"ghost"}
                            className="text-lg xl:text-xl"
                        >
                            Pricing
                        </Button>
                        <Button
                            variant={"ghost"}
                            className="text-lg xl:text-xl"
                        >
                            Blog
                        </Button>
                        <Button
                            variant={"default"}
                            className="text-lg xl:text-xl transition-all duration-300 ease-in-out px-4"
                        >
                            Contact
                        </Button>
                    </ul>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button & Theme Toggle */}
                <div className="flex lg:hidden items-center gap-2">
                    <ThemeToggle />
                    <button
                        className="p-2 hover:bg-muted rounded-md transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg z-50 rounded-md">
                    <ul className="flex flex-col p-4 space-y-2">
                        <Button
                            variant={"ghost"}
                            className="text-lg w-full justify-start"
                            onClick={toggleMenu}
                        >
                            About us
                        </Button>
                        <Button
                            variant={"ghost"}
                            className="text-lg w-full justify-start"
                            onClick={toggleMenu}
                        >
                            Services
                        </Button>
                        <Button
                            variant={"ghost"}
                            className="text-lg w-full justify-start"
                            onClick={toggleMenu}
                        >
                            Portfolio
                        </Button>
                        <Button
                            variant={"ghost"}
                            className="text-lg w-full justify-start"
                            onClick={toggleMenu}
                        >
                            Pricing
                        </Button>
                        <Button
                            variant={"ghost"}
                            className="text-lg w-full justify-start"
                            onClick={toggleMenu}
                        >
                            Blog
                        </Button>
                        <Button
                            variant={"default"}
                            className="text-lg  transition-all duration-300 ease-in-out w-full"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Button>
                    </ul>
                </div>
            )}
        </nav>
    );
};
