// app/berkas/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type FileData = {
  name: string;
  url?: string;
};

type BerkasData = {
  pasPhoto: FileData | null;
  akteKelahiran: FileData | null;
  ktpOrangTua: FileData | null;
  kartuKeluarga: FileData | null;
  ijazahSD: FileData | null;
  sertifikatPrestasi: FileData | null;
  isSubmitted: boolean;
};

export default function BerkasPage() {
  const [berkas, setBerkas] = useState<BerkasData | null>(null);

  useEffect(() => {
    const fetchBerkas = async () => {
      try {
        const response = await fetch('/api/berkas');
        if (response.ok) {
          const data = await response.json();
          setBerkas(data);
        }
      } catch (error) {
        console.error('Error fetching berkas:', error);
      }
    };
    fetchBerkas();
  }, []);

  if (!berkas || !Object.values(berkas).some((file) => file && typeof file === 'object' && 'name' in file)) {
    return (
      <div className="max-w-2xl mx-auto p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Pengumpulan Berkas</h1>
        <p className="text-gray-600 dark:text-gray-400">Belum ada berkas yang diunggah.</p>
        <Link href="/create/berkas/update">
          <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700">
            Unggah Berkas
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Pengumpulan Berkas</h1>
      {berkas.isSubmitted && (
        <p className="text-green-600 dark:text-green-400 mb-6">
          Berkas telah tersubmit dan menunggu verifikasi admin.
        </p>
      )}
      <div className="grid grid-cols-2 gap-6">
        {/* Kolom Kiri */}
        <div>
          <div className="mb-4">
            <label className="block text-gray-600 dark:text-gray-400 mb-2">Pas Photo Santri</label>
            {berkas.pasPhoto ? (
              <div>
                <p className="text-gray-900 dark:text-gray-100">File: {berkas.pasPhoto.name}</p>
                {berkas.pasPhoto.url && (
                  <img
                    src={berkas.pasPhoto.url}
                    alt="Pas Photo Santri"
                    className="mt-2 max-w-full h-auto rounded"
                  />
                )}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Belum diunggah</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 dark:text-gray-400 mb-2">Akte Kelahiran</label>
            {berkas.akteKelahiran ? (
              <div>
                <p className="text-gray-900 dark:text-gray-100">File: {berkas.akteKelahiran.name}</p>
                {berkas.akteKelahiran.url && (
                  <img
                    src={berkas.akteKelahiran.url}
                    alt="Akte Kelahiran"
                    className="mt-2 max-w-full h-auto rounded"
                  />
                )}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Belum diunggah</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 dark:text-gray-400 mb-2">KTP Orang Tua</label>
            {berkas.ktpOrangTua ? (
              <div>
                <p className="text-gray-900 dark:text-gray-100">File: {berkas.ktpOrangTua.name}</p>
                {berkas.ktpOrangTua.url && (
                  <img
                    src={berkas.ktpOrangTua.url}
                    alt="KTP Orang Tua"
                    className="mt-2 max-w-full h-auto rounded"
                  />
                )}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Belum diunggah</p>
            )}
          </div>
        </div>

        {/* Kolom Kanan */}
        <div>
          <div className="mb-4">
            <label className="block text-gray-600 dark:text-gray-400 mb-2">Kartu Keluarga</label>
            {berkas.kartuKeluarga ? (
              <div>
                <p className="text-gray-900 dark:text-gray-100">File: {berkas.kartuKeluarga.name}</p>
                {berkas.kartuKeluarga.url && (
                  <img
                    src={berkas.kartuKeluarga.url}
                    alt="Kartu Keluarga"
                    className="mt-2 max-w-full h-auto rounded"
                  />
                )}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Belum diunggah</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 dark:text-gray-400 mb-2">Ijazah SD</label>
            {berkas.ijazahSD ? (
              <div>
                <p className="text-gray-900 dark:text-gray-100">File: {berkas.ijazahSD.name}</p>
                {berkas.ijazahSD.url && (
                  <img
                    src={berkas.ijazahSD.url}
                    alt="Ijazah SD"
                    className="mt-2 max-w-full h-auto rounded"
                  />
                )}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Belum diunggah</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 dark:text-gray-400 mb-2">Sertifikat Prestasi (Jika Ada)</label>
            {berkas.sertifikatPrestasi ? (
              <div>
                <p className="text-gray-900 dark:text-gray-100">File: {berkas.sertifikatPrestasi.name}</p>
                {berkas.sertifikatPrestasi.url && (
                  <img
                    src={berkas.sertifikatPrestasi.url}
                    alt="Sertifikat Prestasi"
                    className="mt-2 max-w-full h-auto rounded"
                  />
                )}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Belum diunggah</p>
            )}
          </div>
        </div>
      </div>

      <Link href="berkas/update">
        <button className="mt-6 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700">
          Update Berkas
        </button>
      </Link>
    </div>
  );
}