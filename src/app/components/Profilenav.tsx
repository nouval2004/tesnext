"use client";
import Link from "next/link";
import { Home, User, FileText, DollarSign, Bell, CheckCircle } from "lucide-react";

const Profilenav = () => {
  return (
    <div className="fixed top-4 left-20 w-[calc(100%-90px)] flex justify-between items-center bg-white shadow-lg p-4 rounded-xl mx-auto">

      {/* Sisi Kiri: Logo dengan Tooltip */}
      <div className="flex items-center space-x-4">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} className="relative group">
            <item.icon className="w-6 h-6 text-gray-700 cursor-pointer transition duration-200 hover:text-gray-900" />
            {/* Tooltip */}
            <span className="absolute left-1/2 -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-2 py-1 rounded-md transition duration-200 whitespace-nowrap">
              {item.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Sisi Kanan: Nama & Foto Profil */}
      <div className="flex items-center space-x-3">
        <div className="flex flex-col">
          <span className="text-gray-800 font-semibold">Nouval Rifqi</span>
          <span className="text-gray-500 text-sm">Calon Siswa</span>
        </div>
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-300"
        />
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