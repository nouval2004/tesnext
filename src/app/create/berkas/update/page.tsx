// app/berkas/update/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type FileData = {
  name: string;
  url?: string;
  file?: File; // Menyimpan file asli untuk dikirim ke server
};

export default function UpdateBerkasPage() {
  const [files, setFiles] = useState<{
    pasPhoto: FileData | null;
    akteKelahiran: FileData | null;
    ktpOrangTua: FileData | null;
    kartuKeluarga: FileData | null;
    ijazahSD: FileData | null;
    sertifikatPrestasi: FileData | null;
  }>({
    pasPhoto: null,
    akteKelahiran: null,
    ktpOrangTua: null,
    kartuKeluarga: null,
    ijazahSD: null,
    sertifikatPrestasi: null,
  });

  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof files) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFiles((prev) => ({
        ...prev,
        [field]: { name: file.name, url, file },
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    if (files.pasPhoto?.file) formData.append('pasPhoto', files.pasPhoto.file);
    if (files.akteKelahiran?.file) formData.append('akteKelahiran', files.akteKelahiran.file);
    if (files.ktpOrangTua?.file) formData.append('ktpOrangTua', files.ktpOrangTua.file);
    if (files.kartuKeluarga?.file) formData.append('kartuKeluarga', files.kartuKeluarga.file);
    if (files.ijazahSD?.file) formData.append('ijazahSD', files.ijazahSD.file);
    if (files.sertifikatPrestasi?.file) formData.append('sertifikatPrestasi', files.sertifikatPrestasi.file);

    try {
      const response = await fetch('/api/berkas', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Berkas berhasil disubmit!');
        router.push('/berkas');
      } else {
        alert('Gagal menyimpan berkas.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat menyimpan berkas.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Update Berkas</h1>
      <p className="italic font-semibold text-gray-600 dark:text-gray-400">
        Perhatian! Ukuran masing-masing file <span className="text-red-500">Maksimal 1 MB</span>
        </p>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Unggah berkas yang diperlukan di bawah ini. Pastikan file dalam format PDF, JPG, atau PNG.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          {/* Kolom Kiri */}
          <div>
            <div className="mb-4">
              <label className="block text-gray-600 dark:text-gray-400 mb-2">Pas Photo Santri</label>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => handleFileChange(e, 'pasPhoto')}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {files.pasPhoto && (
                <div className="mt-2">
                  <p className="text-gray-900 dark:text-gray-100">File: {files.pasPhoto.name}</p>
                  {files.pasPhoto.url && (
                    <img
                      src={files.pasPhoto.url}
                      alt="Preview Pas Photo"
                      className="mt-2 max-w-full h-auto rounded"
                    />
                  )}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 dark:text-gray-400 mb-2">Akte Kelahiran</label>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => handleFileChange(e, 'akteKelahiran')}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {files.akteKelahiran && (
                <div className="mt-2">
                  <p className="text-gray-900 dark:text-gray-100">File: {files.akteKelahiran.name}</p>
                  {files.akteKelahiran.url && (
                    <img
                      src={files.akteKelahiran.url}
                      alt="Preview Akte Kelahiran"
                      className="mt-2 max-w-full h-auto rounded"
                    />
                  )}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 dark:text-gray-400 mb-2">KTP Orang Tua</label>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => handleFileChange(e, 'ktpOrangTua')}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {files.ktpOrangTua && (
                <div className="mt-2">
                  <p className="text-gray-900 dark:text-gray-100">File: {files.ktpOrangTua.name}</p>
                  {files.ktpOrangTua.url && (
                    <img
                      src={files.ktpOrangTua.url}
                      alt="Preview KTP Orang Tua"
                      className="mt-2 max-w-full h-auto rounded"
                    />
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Kolom Kanan */}
          <div>
            <div className="mb-4">
              <label className="block text-gray-600 dark:text-gray-400 mb-2">Kartu Keluarga</label>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => handleFileChange(e, 'kartuKeluarga')}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {files.kartuKeluarga && (
                <div className="mt-2">
                  <p className="text-gray-900 dark:text-gray-100">File: {files.kartuKeluarga.name}</p>
                  {files.kartuKeluarga.url && (
                    <img
                      src={files.kartuKeluarga.url}
                      alt="Preview Kartu Keluarga"
                      className="mt-2 max-w-full h-auto rounded"
                    />
                  )}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 dark:text-gray-400 mb-2">Ijazah SD</label>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => handleFileChange(e, 'ijazahSD')}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {files.ijazahSD && (
                <div className="mt-2">
                  <p className="text-gray-900 dark:text-gray-100">File: {files.ijazahSD.name}</p>
                  {files.ijazahSD.url && (
                    <img
                      src={files.ijazahSD.url}
                      alt="Preview Ijazah SD"
                      className="mt-2 max-w-full h-auto rounded"
                    />
                  )}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 dark:text-gray-400 mb-2">Sertifikat Prestasi (Jika Ada)</label>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => handleFileChange(e, 'sertifikatPrestasi')}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {files.sertifikatPrestasi && (
                <div className="mt-2">
                  <p className="text-gray-900 dark:text-gray-100">File: {files.sertifikatPrestasi.name}</p>
                  {files.sertifikatPrestasi.url && (
                    <img
                      src={files.sertifikatPrestasi.url}
                      alt="Preview Sertifikat Prestasi"
                      className="mt-2 max-w-full h-auto rounded"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}