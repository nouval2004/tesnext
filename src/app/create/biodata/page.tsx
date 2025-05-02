// app/create/biodata/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Biodata = {
  calonSantri: {
    namaLengkap: string;
    tempatLahir: string;
    tanggalLahir: string;
    nisn: string;
    asalSekolah: string;
    alamatSekolahAsal: string;
    alamatTinggal: string;
  };
  ayah: {
    nama: string;
    tempatLahir: string;
    tanggalLahir: string;
    whatsapp: string;
    alamat: string;
    pendidikanTerakhir: string;
    pekerjaan: string;
    penghasilan: string;
  };
  ibu: {
    nama: string;
    tempatLahir: string;
    tanggalLahir: string;
    whatsapp: string;
    alamat: string;
    pendidikanTerakhir: string;
    pekerjaan: string;
    penghasilan: string;
  };
  wali: {
    nama: string;
    tempatLahir: string;
    tanggalLahir: string;
    whatsapp: string;
    alamat: string;
    pendidikanTerakhir: string;
    pekerjaan: string;
    penghasilan: string;
  };
};

export default function BiodataPage() {
  const [biodata, setBiodata] = useState<Biodata | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Ambil data biodata dari API
    const fetchBiodata = async () => {
      try {
        const response = await fetch('/api/pendaftaran/biodata');
        if (response.ok) {
          const data = await response.json();
          setBiodata(data);
        }
      } catch (error) {
        console.error('Error fetching biodata:', error);
      }
    };
    fetchBiodata();
  }, []);

  if (!biodata) {
    return (
      <div className="max-w-2xl mx-auto p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Biodata</h1>
        <p className="text-gray-600 dark:text-gray-400">Belum ada data biodata.</p>
        <Link href="/create/biodata/update">
          <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700">
            Isi Biodata
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Biodata</h1>
      <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Data Calon Santri</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Nama Lengkap</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.calonSantri.namaLengkap}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Tempat Lahir</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.calonSantri.tempatLahir}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Tanggal Lahir</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.calonSantri.tanggalLahir}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">NISN</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.calonSantri.nisn}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Asal Sekolah</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.calonSantri.asalSekolah}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Alamat Sekolah Asal</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.calonSantri.alamatSekolahAsal}</p>
        </div>
        <div className="col-span-2">
          <label className="block text-gray-600 dark:text-gray-400">Alamat Tinggal</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.calonSantri.alamatTinggal}</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Data Ayah</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Nama</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ayah.nama}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Tempat Lahir</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ayah.tempatLahir}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Tanggal Lahir</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ayah.tanggalLahir}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Nomor WhatsApp</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ayah.whatsapp}</p>
        </div>
        <div className="col-span-2">
          <label className="block text-gray-600 dark:text-gray-400">Alamat</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ayah.alamat}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Pendidikan Terakhir</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ayah.pendidikanTerakhir}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Pekerjaan</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ayah.pekerjaan}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Penghasilan</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ayah.penghasilan}</p>
        </div>
      </div>

      {/* Data Ibu */}
      <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Data Ibu</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Nama</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ibu.nama}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Tempat Lahir</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ibu.tempatLahir}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Tanggal Lahir</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ibu.tanggalLahir}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Nomor WhatsApp</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ibu.whatsapp}</p>
        </div>
        <div className="col-span-2">
          <label className="block text-gray-600 dark:text-gray-400">Alamat</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ibu.alamat}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Pendidikan Terakhir</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ibu.pendidikanTerakhir}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Pekerjaan</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ibu.pekerjaan}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Penghasilan</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.ibu.penghasilan}</p>
        </div>
      </div>

      {/* Data Wali */}
      <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Data Wali</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Nama</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.wali.nama}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Tempat Lahir</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.wali.tempatLahir}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Tanggal Lahir</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.wali.tanggalLahir}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Nomor WhatsApp</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.wali.whatsapp}</p>
        </div>
        <div className="col-span-2">
          <label className="block text-gray-600 dark:text-gray-400">Alamat</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.wali.alamat}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Pendidikan Terakhir</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.wali.pendidikanTerakhir}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Pekerjaan</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.wali.pekerjaan}</p>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Penghasilan</label>
          <p className="text-gray-900 dark:text-gray-100">{biodata.wali.penghasilan}</p>
        </div>
      </div>

      <Link href="/create/biodata/update">
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700">
          Update Biodata
        </button>
      </Link>
    </div>
  );
}