// components/Hero.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="w-full bg-gradient-to-b from-neutral-900 to-black text-white py-32 px-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                    Hi, I&apos;m <span className="text-emerald-400">Jason</span>.
                </h1>

                <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl">
                    I build clean, performant full-stack experiences with Next.js, React,
                    and modern tooling. Explore my work below.
                </p>

                <div className="mt-10 flex gap-4">
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
            </div>
        </section>
    );
}
