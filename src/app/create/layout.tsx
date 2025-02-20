import Sidebar from "@/app/components/Sidebar";

export default function CreateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten Utama */}
      <div className="flex flex-col flex-grow">
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
