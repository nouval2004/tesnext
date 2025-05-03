// app/create/page.tsx
'use client';

import { useEffect, useState } from 'react';

type Step = {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'processing' | 'pending';
};

export default function HomePage() {
  const [steps, setSteps] = useState<Step[]>([
    { id: 1, title: 'Registrasi Akun', description: 'Alhamdulillah, anda telah resmi menjadi calon santri', status: 'completed' },
    { id: 2, title: 'Transfer Biaya Pendaftaran', description: 'Kami sedang melakukan pengecekan, mohon ditunggu.', status: 'pending' },
    { id: 3, title: 'Lengkapi Biodata', description: 'Silahkan lengkapi biodata anda disini > Biodata', status: 'pending' },
    { id: 4, title: 'Lengkapi Berkas', description: 'Kami sedang melakukan pengecekan berkas anda, mohon ditunggu', status: 'processing' },
    { id: 5, title: 'Tes Masuk', description: 'Anda harus melunasi Biaya Pendaftaran, lalu melengkapi Biodata dan Berkas untuk bisa mengikuti Tes Masuk', status: 'pending' },
    { id: 6, title: 'Pengumuman Hasil Tes', description: 'Anda harus menyelesaikan seluruh rangkaian tes untuk bisa melihat pengumuman hasil tes', status: 'pending' },
    { id: 7, title: 'Daftar Ulang', description: 'Menunggu pengumuman hasil tes', status: 'pending' },
  ]);

  useEffect(() => {
    // Simulasi status berdasarkan login (langkah 1 otomatis selesai)
    // Di masa depan, ini bisa diganti dengan data dari API
  }, []);

  const getCircleColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'processing':
        return 'bg-yellow-500';
      case 'pending':
        return 'bg-gray-300';
      default:
        return 'bg-gray-300';
    }
  };

  const getTextColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 dark:text-green-400';
      case 'processing':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'pending':
        return 'text-gray-500 dark:text-gray-400';
      default:
        return 'text-gray-500 dark:text-gray-400';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-2xl rounded-lg mb-10">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Alur PSB Online</h1>
      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.id} className="flex items-start">
            <div className={`w-8 h-8 ${getCircleColor(step.status)} rounded-full flex items-center justify-center mr-4 text-white font-semibold`}>
              {step.id}
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{step.title}</h2>
              <p className={`text-sm ${getTextColor(step.status)}`}>{step.description}</p>
              {step.status === 'processing' && (
                <span className={`inline-block ml-2 px-2 py-1 rounded text-xs ${getTextColor(step.status)}`}>Diproses</span>
              )}
              {step.status === 'completed' && (
                <span className={`inline-block ml-2 px-2 py-1 rounded text-xs ${getTextColor(step.status)}`}>Selesai</span>
              )}
              {step.status === 'pending' && (
                <span className={`inline-block ml-2 px-2 py-1 rounded text-xs ${getTextColor(step.status)}`}>Belum</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}