'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BiayaPage() {
  const [buktiTransfer, setBuktiTransfer] = useState<{ name: string; url?: string; file?: File } | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  // Ambil data bukti transfer dari API saat halaman dimuat
  useEffect(() => {
    const fetchBuktiTransfer = async () => {
      try {
        const response = await fetch('/api/biaya');
        if (response.ok) {
          const data = await response.json();
          if (data && data.name) {
            setBuktiTransfer({ name: data.name, url: data.url });
            setIsSubmitted(true);
          }
        }
      } catch (error) {
        console.error('Error fetching bukti transfer:', error);
      }
    };
    fetchBuktiTransfer();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setBuktiTransfer({ name: file.name, url, file });
    }
  };

  const handleSubmit = async () => {
    if (!buktiTransfer?.file) {
      alert('Harap unggah bukti transfer terlebih dahulu.');
      return;
    }

    const formData = new FormData();
    formData.append('buktiTransfer', buktiTransfer.file);

    try {
      const response = await fetch('/api/biaya', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        alert('Bukti transfer berhasil disimpan!');
        router.refresh(); // Refresh halaman untuk memperbarui data dari API
      } else {
        alert('Gagal menyimpan bukti transfer.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat menyimpan.');
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h1 className="text-xl text-gray-600 font-bold dark:text-gray-200">Panduan Pembayaran</h1>
        <p className="text-base text-gray-500 mt-3 dark:text-gray-400">Kepada ananda Muhammad Nouval Rifqi harap melunasi biaya pendaftaran sebagai syarat untuk bisa mengikuti rangkaian proses penerimaan santri baru Cendekia Darussalam.</p>
        <p className="text-base text-gray-600 mt-5 dark:text-gray-200">Nominal yang harus dibayarkan sebesar :</p>
        <p className="text-base font-bold text-blue-600 mt-1 ">Rp 250.0000</p>
        <p className="text-base text-gray-600 mt-5 dark:text-gray-200">Pembayaran dapat dilakukan melalui transfer :</p>
        <p className="text-sm font-bold text-gray-500 mt-1 dark:text-gray-200">Bank Syariah Indonesia</p>
        <p className="text-sm font-bold text-gray-500 dark:text-gray-300">B714 113 7772</p>
        <p className="text-sm font-bold text-gray-500 dark:text-gray-300">a/n Yayasan IDN (PSB)</p>
        <p className="text-sm font-bold text-gray-500 dark:text-gray-300">Kode Bank : 451</p>
        <p className="italic text-base text-gray-500 mt-5 dark:text-gray-300">Setelah melakukan pembayaran, mohon untuk melampirkan Bukti Transfer melalui menu di bawah ini</p>
      </div>
      <div className="mt-4">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h1 className="text-lg text-gray-600 font-bold dark:text-gray-200">Lampiran Bukti Transfer</h1>
          <p className="text-base text-gray-400 mt-2 dark:text-gray-200">
            Bukti transfer anda berhasil di upload, lihat lampiran nya di bawah ini
          </p>

          {/* Menampilkan bukti transfer yang sudah diupload */}
          {buktiTransfer && (
            <div className="mt-4">
              <p className="text-gray-900 dark:text-gray-100">File: {buktiTransfer.name}</p>
              {buktiTransfer.url && (
                <img
                  src={buktiTransfer.url}
                  alt="Bukti Transfer"
                  className="mt-2 max-w-full h-auto rounded"
                />
              )}
            </div>
          )}

          {/* Tombol upload */}
          <label className="inline-block bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer">
            {buktiTransfer ? 'Ganti Bukti Transfer' : 'Unggah Bukti Transfer'}
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* Tombol submit */}
          {!isSubmitted && buktiTransfer && (
            <button
              onClick={handleSubmit}
              className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 dark:hover:bg-green-700"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}