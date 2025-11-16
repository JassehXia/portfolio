import React, { JSX } from "react";

export const metadata = {
    title: "About — Portfolio",
    description: "About page for my portfolio. Short intro, skills, and contact.",
};

export default function AboutPage(): JSX.Element {
    return (
        <main style={{ padding: "2rem", maxWidth: 900, margin: "0 auto", lineHeight: 1.6 }}>
            <header>
                <h1 style={{ marginBottom: "0.25rem" }}>About</h1>
                <p style={{ color: "#555", marginTop: 0 }}>A brief introduction and summary of skills.</p>
            </header>

            <section aria-labelledby="intro" style={{ marginTop: "1.5rem" }}>
                <h2 id="intro" style={{ fontSize: "1.125rem" }}>Intro</h2>
                <p>
                    I build web applications with a focus on clean, maintainable TypeScript and React code. I
                    enjoy turning ideas into accessible, performant interfaces and learning new tools along
                    the way.
                </p>
            </section>

            <section aria-labelledby="skills" style={{ marginTop: "1rem" }}>
                <h2 id="skills" style={{ fontSize: "1.125rem" }}>Skills</h2>
                <ul>
                    <li>TypeScript, React, Next.js</li>
                    <li>HTML, CSS, responsive design</li>
                    <li>Node.js, API design, testing</li>
                    <li>Tooling: Git, ESLint, Prettier, CI</li>
                </ul>
            </section>

            <section aria-labelledby="contact" style={{ marginTop: "1rem" }}>
                <h2 id="contact" style={{ fontSize: "1.125rem" }}>Contact</h2>
                <p>
                    For inquiries or collaborations, include a contact email or link here:
                    <br />
                    <a href="mailto:your.email@example.com">your.email@example.com</a>
                </p>
            </section>
        </main>
    );
}