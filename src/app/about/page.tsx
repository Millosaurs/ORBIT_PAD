"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Full page wrapper with gradient and dots */}
            <div className="flex-1 relative w-full">
                {/* Pixel dots background pattern */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(163, 230, 53, 0.4) 1px, transparent 1px)`,
                        backgroundSize: "24px 24px",
                    }}
                />

                {/* Subtle gradient overlay */}
                {/*<div
          className="absolute top-0 left-0 right-0 h-[100vh] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 10%, rgba(163, 230, 53, 0.08), rgba(132, 204, 22, 0.04) 50%, transparent 80%)',
          }}
        />*/}

                <main className="relative z-10 px-6 md:px-12 py-20 md:py-28 max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 0.6 }}
                        className="text-center mb-24"
                    >
                        {/* Subtle background pill */}

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            About <span className="text-lime-400">Orbits</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            We're a small team of creators, developers, and
                            thinkers — crafting digital experiences that move
                            brands and people forward.
                        </p>
                    </motion.div>

                    {/* Mission + Story */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-30 max-w-8xl">
                        <motion.section
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-muted/20 border border-border hover:border-lime-400/40 transition-colors"
                        >
                            <h2 className="text-3xl font-bold mb-4">
                                Our Mission
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our mission is simple — to design meaningful
                                digital experiences that empower ideas and
                                amplify impact. We blend strategy, design, and
                                technology to build products that feel
                                intuitive, human, and powerful.
                            </p>
                        </motion.section>

                        <motion.section
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-muted/20 border border-border hover:border-lime-400/40 transition-colors"
                        >
                            <h2 className="text-3xl font-bold mb-4">
                                Our Story
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Orbits began as a collective of designers and
                                engineers who loved bringing creative ideas to
                                life. Over time, we've become a trusted partner
                                for brands seeking thoughtful design and
                                cutting-edge technology that make a lasting
                                impression.
                            </p>
                        </motion.section>
                    </div>

                    {/* Values */}
                    <motion.section
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-24 relative overflow-hidden rounded-3xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/20 via-transparent to-transparent blur-3xl pointer-events-none "></div>

                        <h2 className="text-3xl font-bold mb-12 text-center relative z-10">
                            <span className="text-zinc-200">Our Values</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 ">
                            {[
                                {
                                    title: "Innovation",
                                    desc: "Pushing boundaries through creativity and technology.",
                                },
                                {
                                    title: "Craft",
                                    desc: "Attention to detail and a love for beautiful, functional design.",
                                },
                                {
                                    title: "Collaboration",
                                    desc: "Working closely with clients as partners in success.",
                                },
                                {
                                    title: "Integrity",
                                    desc: "Building with honesty, respect, and authenticity.",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{
                                        y: -6,
                                        scale: 1,
                                        boxShadow:
                                            "0 0 25px rgba(255,255,255,0.05)",
                                        borderColor: "rgba(255,255,255,0.15)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15,
                                    }}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/30 via-zinc-800/20 to-zinc-900/20 border border-zinc-800 transition-all backdrop-blur-md"
                                >
                                    <h3 className="font-bold text-xl mb-2 text-zinc-100 text-center">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-zinc-400 text-center   ">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Expertise */}
                    <motion.section
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-24 relative overflow-hidden rounded-3xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-lime-900/10 via-transparent to-transparent blur-3xl pointer-events-none"></div>

                        <h2 className="text-3xl font-bold mb-12 text-center relative z-10">
                            <span className="">Our Expertise</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                            {[
                                {
                                    title: "Web Development",
                                    desc: "Custom websites and web applications.",
                                },
                                {
                                    title: "UI/UX Design",
                                    desc: "Intuitive and visually engaging interfaces.",
                                },
                                {
                                    title: "Cloud Solutions",
                                    desc: "Scalable, secure, and efficient cloud systems.",
                                },
                                {
                                    title: "Technology Consulting",
                                    desc: "Helping businesses leverage tech effectively.",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{
                                        y: -6,
                                        scale: 1,
                                        boxShadow:
                                            "0 0 25px rgba(163, 230, 53, 0.2)",
                                        borderColor: "rgba(163, 230, 53, 0.5)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15,
                                    }}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-muted/30 via-background to-muted/20 border border-border transition-all backdrop-blur-md"
                                >
                                    <h3 className="font-bold text-xl mb-2 text-lime-400 text-center">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground text-center">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Stats */}
                    <motion.section
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold mb-10">
                            By The Numbers
                        </h2>
                        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
                            {[
                                { num: "50+", label: "Projects" },
                                { num: "30+", label: "Clients" },
                                { num: "100%", label: "Satisfaction" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="p-6 rounded-2xl bg-muted/20 border border-border transition-all"
                                >
                                    <div className="text-4xl font-bold text-lime-400 mb-2">
                                        {stat.num}
                                    </div>
                                    <p className="text-sm text-muted-foreground font-medium">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </main>
            </div>

            <Footer />
        </div>
    );
}
