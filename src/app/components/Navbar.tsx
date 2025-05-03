// src/app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === null) return;

    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  if (theme === null) {
    return null;
  }

  return (
    <nav className="bg-white dark:bg-black px-12 py-4 text-black dark:text-white flex justify-between items-center shadow-md">
      <div>
        <Link href="/" className="font-bold text-lg text-black dark:text-white">
          Nouval'ss
        </Link>
      </div>
      <div className="flex gap-8 items-center">
        <Link href="/" className="hover:underline text-black dark:text-white">
          Home
        </Link>
        <Link href="/about" className="hover:underline text-black dark:text-white">
          About
        </Link>
        <Link href="/contact" className="hover:underline text-black dark:text-white">
          Contact
        </Link>
        <Link href="/login" className="hover:underline text-black dark:text-white">
          Login
        </Link>
        <Link href="signup" className="hover:underline text-black dark:text-white">
          Signup
        </Link>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon className="w-6 h-6 text-black dark:text-white" />
          ) : (
            <Sun className="w-6 h-6 text-black dark:text-white" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;