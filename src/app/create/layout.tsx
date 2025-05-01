// app/create/layout.tsx
import Sidebar from "@/app/components/Sidebar";
import Profilenav from "@/app/components/Profilenav";

export default function CreateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Kontainer utama */}
      <div className="flex flex-col flex-grow">
        {/* Navbar */}
        <Profilenav />

        {/* Konten Utama */}
        <main className="pt-40 ml-20 flex-grow overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}