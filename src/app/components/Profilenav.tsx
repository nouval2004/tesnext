// components/Profilenav.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Home, User, FileText, DollarSign, Bell, CheckCircle, Sun, Moon } from "lucide-react";

const Profilenav = () => {
  const [theme, setTheme] = useState("light");

  // Sinkronkan tema dengan localStorage atau preferensi sistem
  useEffect(() => {
    // Periksa apakah ada tema yang disimpan di localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Jika tidak ada tema tersimpan, gunakan preferensi sistem
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
      localStorage.setItem("theme", initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="fixed top-4 left-20 w-[calc(100%-90px)] flex justify-between items-center bg-white dark:bg-gray-800 shadow-lg p-4 rounded-xl mx-auto">
      {/* Sisi Kiri: Logo dengan Tooltip */}
      <div className="flex items-center space-x-4">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} className="relative group">
            <item.icon
              className="w-6 h-6 text-gray-700 dark:text-gray-300 cursor-pointer transition duration-200 hover:text-gray-900 dark:hover:text-white"
            />
            {/* Tooltip */}
            <span className="absolute left-1/2 -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 bg-gray-800 dark:bg-gray-600 text-white dark:text-gray-200 text-xs px-2 py-1 rounded-md transition duration-200 whitespace-nowrap">
              {item.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Sisi Kanan: Toggle Theme, Nama & Foto Profil */}
      <div className="flex items-center space-x-3">
        {/* Tombol Toggle Theme */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          ) : (
            <Sun className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          )}
        </button>

        {/* Nama & Foto Profil */}
        <div className="flex items-center space-x-3">
          <div className="flex flex-col">
            <span className="text-gray-800 dark:text-gray-200 font-semibold">Nouval Rifqi</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">Calon Siswa</span>
          </div>
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600"
          />
        </div>
      </div>
    </div>
  );
};

const menuItems = [
  { icon: Home, label: "Home", href: "/home" },
  { icon: User, label: "Biodata", href: "/create/biodata" },
  { icon: FileText, label: "Berkas", href: "/berkas" },
  { icon: DollarSign, label: "Biaya Pendaftaran", href: "/biaya" },
  { icon: Bell, label: "Pengumuman", href: "/pengumuman" },
  { icon: CheckCircle, label: "Daftar Ulang", href: "/daftar-ulang" },
];

export default Profilenav;