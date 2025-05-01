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
      <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Biodata</h1>
        <p className="text-gray-500">Belum ada data biodata.</p>
        <Link href="/create/biodata/update">
          <button className="mt-4 bg-blue-500 text-white p-2 rounded">Isi Biodata</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Biodata</h1>
      <h2 className="text-lg font-semibold text-blue-600">Data Calon Santri</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-600">Nama Lengkap</label>
          <p>{biodata.calonSantri.namaLengkap}</p>
        </div>
        <div>
          <label className="block text-gray-600">Tempat Lahir</label>
          <p>{biodata.calonSantri.tempatLahir}</p>
        </div>
        <div>
          <label className="block text-gray-600">Tanggal Lahir</label>
          <p>{biodata.calonSantri.tanggalLahir}</p>
        </div>
        <div>
          <label className="block text-gray-600">NISN</label>
          <p>{biodata.calonSantri.nisn}</p>
        </div>
        <div>
          <label className="block text-gray-600">Asal Sekolah</label>
          <p>{biodata.calonSantri.asalSekolah}</p>
        </div>
        <div>
          <label className="block text-gray-600">Alamat Sekolah Asal</label>
          <p>{biodata.calonSantri.alamatSekolahAsal}</p>
        </div>
        <div className="col-span-2">
          <label className="block text-gray-600">Alamat Tinggal</label>
          <p>{biodata.calonSantri.alamatTinggal}</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-blue-600">Data Ayah</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-600">Nama</label>
          <p>{biodata.ayah.nama}</p>
        </div>
        <div>
          <label className="block text-gray-600">Tempat Lahir</label>
          <p>{biodata.ayah.tempatLahir}</p>
        </div>
        <div>
          <label className="block text-gray-600">Tanggal Lahir</label>
          <p>{biodata.ayah.tanggalLahir}</p>
        </div>
        <div>
          <label className="block text-gray-600">Nomor WhatsApp</label>
          <p>{biodata.ayah.whatsapp}</p>
        </div>
        <div className="col-span-2">
          <label className="block text-gray-600">Alamat</label>
          <p>{biodata.ayah.alamat}</p>
        </div>
        <div>
          <label className="block text-gray-600">Pendidikan Terakhir</label>
          <p>{biodata.ayah.pendidikanTerakhir}</p>
        </div>
        <div>
          <label className="block text-gray-600">Pekerjaan</label>
          <p>{biodata.ayah.pekerjaan}</p>
        </div>
        <div>
          <label className="block text-gray-600">Penghasilan</label>
          <p>{biodata.ayah.penghasilan}</p>
        </div>
      </div>

      {/* Data Ibu dan Wali serupa dengan Data Ayah */}
      <Link href="/create/biodata/update">
        <button className="bg-blue-500 text-white p-2 rounded">Update Biodata</button>
      </Link>
    </div>
  );
}