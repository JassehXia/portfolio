// components/Hero.tsx
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProjectScrollable from "./ProjectScrollable";
import Image from "next/image";
import Jason from "../public/jason.png";
import { useEffect, useState } from "react";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsVisible(true); // triggers fade-in on mount
    }, []);

    return (
        <section className="w-full bg-gradient-to-b from-neutral-900 to-black text-white py-32 px-6">
            <div className={`max-w-6xl mx-auto transition-opacity duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

                {/* Main flex container */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

                    {/* Text content */}
                    <div className="flex-1">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                            Hi, I&apos;m <span className="text-emerald-400">Jason</span>.
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl">
                            I&apos;m a student at Ohio State University and create full-stack applications.
                        </p>

                        <div className="mt-10 flex gap-4 flex-wrap">
                            <Link href="/projects">
                                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                                    View Projects
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-white border-neutral-700 hover:bg-neutral-800"
                                >
                                    Contact Me
                                </Button>
                            </Link>
                        </div>

                        {/* ProjectScrollable now inside the flex column */}
                        <div className="mt-12 md:mt-16">
                            <ProjectScrollable />
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 flex justify-center md:justify-end -ml-12 md:-ml-16 transform md:-translate-x-8 pb-20">
                        <Image
                            src={Jason}
                            alt="Jason"
                            width={500}
                            height={500}
                            className="rounded-full object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
