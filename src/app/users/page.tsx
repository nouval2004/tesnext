"use client";

import { useState, useEffect } from "react";

type User = {
  _id: string;
  name: string;
  email: string;
  imageUrl: string; // Properti gambar dari database
};

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State untuk modal

  useEffect(() => {
    // Ambil data pengguna dari API
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const closeModal = () => setSelectedImage(null); // Tutup modal

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Users Dashboard</h1>

      {/* Tabel Data Pengguna */}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border text-black">Nama</th>
            <th className="py-2 px-4 border text-black">Email</th>
            <th className="py-2 px-4 border text-black">Gambar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="py-2 px-4 border">{user.name}</td>
              <td className="py-2 px-4 border">{user.email}</td>
              <td className="py-2 px-4 border">
                {user.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    alt={user.name}
                    className="h-16 w-16 object-cover rounded cursor-pointer"
                    onClick={() => setSelectedImage(user.imageUrl)} // Buka modal saat gambar ditekan
                  />
                ) : (
                  "Tidak ada gambar"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal untuk menampilkan gambar */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal} // Tutup modal saat area luar ditekan
        >
          <img
            src={selectedImage}
            alt="Gambar Besar"
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute top-5 right-5 bg-white text-black px-4 py-2 rounded"
            onClick={closeModal} // Tombol tutup modal
          >
            Tutup
          </button>
        </div>
      )}
    </div>
  );
}
