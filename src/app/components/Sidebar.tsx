// components/Sidebar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, User, FileText, DollarSign, Bell, CheckCircle } from "lucide-react";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { icon: <Home />, label: "Home", href: "/home" },
    { icon: <User />, label: "Biodata", href: "/create/biodata" },
    { icon: <FileText />, label: "Berkas", href: "/create/berkas" },
    { icon: <DollarSign />, label: "Biaya Pendaftaran", href: "/create/biaya" },
    { icon: <Bell />, label: "Pengumuman", href: "/pengumuman" },
    { icon: <CheckCircle />, label: "Daftar Ulang", href: "/daftar-ulang" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen ${
        isHovered ? "w-64" : "w-16"
      } bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 ease-in-out z-50 overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 text-lg font-bold border-b border-gray-300 dark:border-gray-600 flex items-center justify-center whitespace-nowrap">
        {isHovered ? "Menu Navigasi" : "MN"}
      </div>

      <nav className="mt-4">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center p-4 hover:bg-gray-200 dark:hover:bg-gray-700 whitespace-nowrap transition-all duration-200 transform hover:translate-x-2"
            >
              <span className="mr-4 flex-shrink-0">{item.icon}</span>
              <span
                className={`transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                }`}
              >
                <Link href={item.href}>{item.label}</Link>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;