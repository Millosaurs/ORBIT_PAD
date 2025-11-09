import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const spacegrotesk = Space_Grotesk({
    variable: "--font-spacegrotesk-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ORBITS LLC ",
    description: "Crafting digital solutions for tomorrow",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    const theme = localStorage.getItem('orbits-ui-theme') || 'system';
                                    const root = document.documentElement;

                                    if (theme === 'system') {
                                        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                                        root.classList.add(systemTheme);
                                    } else {
                                        root.classList.add(theme);
                                    }
                                } catch (e) {}
                            })();
                        `,
                    }}
                />
            </head>
            <body
                className={`${spacegrotesk.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    defaultTheme="system"
                    storageKey="orbits-ui-theme"
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
