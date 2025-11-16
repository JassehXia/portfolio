"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="bg-gray-100 dark:bg-gray-900 shadow-md fixed w-full z-50">
            <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-0">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-gray-900 dark:text-white no-underlinet"
                >
                    Portfolio
                </Link>

                {/* Links */}
                <ul className="flex space-x-8 list-none m-0 p-0">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`px-3 py-1 rounded transition-colors no-underline text-lg ${isActive
                                        ? "bg-blue-500 text-white"
                                        : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
