import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Services } from "@/components/sections/Services";
import { Technologies } from "@/components/sections/Technologies";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
    return (
        <>
            <main className="h-screen flex flex-col">
                <Navbar />
                <Hero />
            </main>
            <Services />
            <Technologies />
            <Portfolio />
            <Testimonials />
            <CTA />
            <Footer />
        </>
    );
}
