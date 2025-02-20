"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, User, FileText, DollarSign, Bell, CheckCircle } from "lucide-react"; // Ikon untuk sidebar

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Daftar menu sidebar dengan ikon
  const menuItems = [
    { icon: <Home />, label: "Home", href: "/home" },
    { icon: <User />, label: "Biodata", href: "/Biodata" },
    { icon: <FileText />, label: "Berkas", href: "/berkas" },
    { icon: <DollarSign />, label: "Biaya Pendaftaran", href: "/biaya" },
    { icon: <Bell />, label: "Pengumuman", href: "/pengumuman" },
    { icon: <CheckCircle />, label: "Daftar Ulang", href: "/daftar-ulang" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen ${
        isHovered ? "w-64" : "w-16"
      } bg-gray-800 text-white transition-all duration-300 ease-in-out z-50`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="p-4 text-lg font-bold border-b border-gray-700 flex items-center justify-center">
        {isHovered ? "Menu Navigasi" : "MN"} {/* Singkatan saat sidebar mengecil */}
      </div>
      {/* Menu */}
      <nav className="mt-4">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center p-4 hover:bg-gray-700">
              <span className="mr-4">{item.icon}</span>
              {isHovered && <Link href={item.href}>{item.label}</Link>}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
