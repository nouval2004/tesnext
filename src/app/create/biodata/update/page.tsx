// app/create/biodata/update/page.tsx
'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { h1 } from 'motion/react-client';

type FormData = {
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

export default function UpdateBiodataPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const router = useRouter();
  const [countryCode, setCountryCode] = useState('+62');

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/pendaftaran/biodata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          ayah: { ...data.ayah, whatsapp: `${countryCode}${data.ayah.whatsapp}` },
          ibu: { ...data.ibu, whatsapp: `${countryCode}${data.ibu.whatsapp}` },
          wali: { ...data.wali, whatsapp: `${countryCode}${data.wali.whatsapp}` },
        }),
      });
      if (response.ok) {
        alert('Biodata berhasil disimpan!');
        router.push('/create/biodata');
      } else {
        alert('Gagal menyimpan biodata.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Update Biodata</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Silahkan isi data diri anda dengan lengkap dan benar, kekeliruan dalam pengisian dapat membuat anda tidak lulus verifikasi data.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Data Calon Santri */}
        <div>
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Data Calon Santri</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Nama Lengkap</label>
              <input
                {...register('calonSantri.namaLengkap', { required: 'Nama lengkap wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.calonSantri?.namaLengkap && (
                <p className="text-red-500">{errors.calonSantri.namaLengkap.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Tempat Lahir</label>
              <input
                {...register('calonSantri.tempatLahir', { required: 'Tempat lahir wajib diisi' })}
                placeholder="Tulis kabupaten/kota kelahiran"
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.calonSantri?.tempatLahir && (
                <p className="text-red-500">{errors.calonSantri.tempatLahir.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Tanggal Lahir</label>
              <input
                type="date"
                {...register('calonSantri.tanggalLahir', { required: 'Tanggal lahir wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.calonSantri?.tanggalLahir && (
                <p className="text-red-500">{errors.calonSantri.tanggalLahir.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">NISN</label>
              <input
                {...register('calonSantri.nisn', { required: 'NISN wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.calonSantri?.nisn && (
                <p className="text-red-500">{errors.calonSantri.nisn.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Asal Sekolah</label>
              <input
                {...register('calonSantri.asalSekolah', { required: 'Asal sekolah wajib diisi' })}
                placeholder="Tulis nama sekolah"
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.calonSantri?.asalSekolah && (
                <p className="text-red-500">{errors.calonSantri.asalSekolah.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Alamat Sekolah Asal</label>
              <textarea
                {...register('calonSantri.alamatSekolahAsal', { required: 'Alamat sekolah wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.calonSantri?.alamatSekolahAsal && (
                <p className="text-red-500">{errors.calonSantri.alamatSekolahAsal.message}</p>
              )}
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600 dark:text-gray-300">Alamat Tinggal</label>
              <textarea
                {...register('calonSantri.alamatTinggal', { required: 'Alamat tinggal wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.calonSantri?.alamatTinggal && (
                <p className="text-red-500">{errors.calonSantri.alamatTinggal.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Data Ayah */}
        <div>
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Data Ayah</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Nama Ayah</label>
              <input
                {...register('ayah.nama', { required: 'Nama ayah wajib diisi' })}
                placeholder="Tulis nama lengkap ayah"
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.ayah?.nama && <p className="text-red-500">{errors.ayah.nama.message}</p>}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Tempat Lahir</label>
              <input
                {...register('ayah.tempatLahir', { required: 'Tempat lahir wajib diisi' })}
                placeholder="Kota kelahiran ayah"
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.ayah?.tempatLahir && (
                <p className="text-red-500">{errors.ayah.tempatLahir.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Tanggal Lahir</label>
              <input
                type="date"
                {...register('ayah.tanggalLahir', { required: 'Tanggal lahir wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.ayah?.tanggalLahir && (
                <p className="text-red-500">{errors.ayah.tanggalLahir.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Nomor WhatsApp</label>
              <div className="flex">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="p-2 border rounded-l text-black dark:text-white bg-white dark:bg-gray-700"
                >
                  <option value="+62">Indonesia (+62)</option>
                  <option value="+60">Malaysia (+60)</option>
                </select>
                <input
                  {...register('ayah.whatsapp', {
                    required: 'Nomor WhatsApp wajib diisi',
                    pattern: { value: /^\d{8,12}$/, message: 'Nomor WhatsApp tidak valid' },
                  })}
                  placeholder="85775745484"
                  className="w-full p-2 border rounded-r text-black dark:text-white bg-white dark:bg-gray-700"
                />
              </div>
              {errors.ayah?.whatsapp && <p className="text-red-500">{errors.ayah.whatsapp.message}</p>}
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600 dark:text-gray-300">Alamat Ayah</label>
              <textarea
                {...register('ayah.alamat', { required: 'Alamat wajib diisi' })}
                placeholder="Tulis alamat lengkap tempat tinggal ayah"
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.ayah?.alamat && <p className="text-red-500">{errors.ayah.alamat.message}</p>}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Pendidikan Terakhir</label>
              <select
                {...register('ayah.pendidikanTerakhir', { required: 'Pendidikan terakhir wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              >
                <option value="">--Pilih--</option>
                <option value="SD">SD</option>
                <option value="SMP">SMP</option>
                <option value="SMA">SMA</option>
                <option value="D3">D3</option>
                <option value="S1">S1</option>
                <option value="S2">S2</option>
                <option value="S3">S3</option>
              </select>
              {errors.ayah?.pendidikanTerakhir && (
                <p className="text-red-500">{errors.ayah.pendidikanTerakhir.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Pekerjaan Ayah</label>
              <select
                {...register('ayah.pekerjaan', { required: 'Pekerjaan wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              >
                <option value="">--Pilih--</option>
                <option value="PNS">PNS</option>
                <option value="Swasta">Karyawan Swasta</option>
                <option value="Wirausaha">Wirausaha</option>
                <option value="Petani">Petani</option>
                <option value="Lainnya">Lainnya</option>
              </select>
              {errors.ayah?.pekerjaan && (
                <p className="text-red-500">{errors.ayah.pekerjaan.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Penghasilan Ayah</label>
              <input
                {...register('ayah.penghasilan', { required: 'Penghasilan wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.ayah?.penghasilan && (
                <p className="text-red-500">{errors.ayah.penghasilan.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Data Ibu */}
        <div>
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Data Ibu</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Nama Ibu</label>
              <input
                {...register('ibu.nama', { required: 'Nama ibu wajib diisi' })}
                placeholder="Tulis nama lengkap ibu"
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.ibu?.nama && <p className="text-red-500">{errors.ibu.nama.message}</p>}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Tempat Lahir</label>
              <input
                {...register('ibu.tempatLahir', { required: 'Tempat lahir wajib diisi' })}
                placeholder="Kota kelahiran ibu"
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.ibu?.tempatLahir && (
                <p className="text-red-500">{errors.ibu.tempatLahir.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Tanggal Lahir</label>
              <input
                type="date"
                {...register('ibu.tanggalLahir', { required: 'Tanggal lahir wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.ibu?.tanggalLahir && (
                <p className="text-red-500">{errors.ibu.tanggalLahir.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Nomor WhatsApp</label>
              <div className="flex">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="p-2 border rounded-l text-black dark:text-white bg-white dark:bg-gray-700"
                >
                  <option value="+62">Indonesia (+62)</option>
                  <option value="+60">Malaysia (+60)</option>
                </select>
                <input
                  {...register('ibu.whatsapp', {
                    required: 'Nomor WhatsApp wajib diisi',
                    pattern: { value: /^\d{8,12}$/, message: 'Nomor WhatsApp tidak valid' },
                  })}
                  placeholder="85775745484"
                  className="w-full p-2 border rounded-r text-black dark:text-white bg-white dark:bg-gray-700"
                />
              </div>
              {errors.ibu?.whatsapp && <p className="text-red-500">{errors.ibu.whatsapp.message}</p>}
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600 dark:text-gray-300">Alamat Ibu</label>
              <textarea
                {...register('ibu.alamat', { required: 'Alamat wajib diisi' })}
                placeholder="Tulis alamat lengkap tempat tinggal ibu"
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.ibu?.alamat && <p className="text-red-500">{errors.ibu.alamat.message}</p>}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Pendidikan Terakhir</label>
              <select
                {...register('ibu.pendidikanTerakhir', { required: 'Pendidikan terakhir wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              >
                <option value="">--Pilih--</option>
                <option value="SD">SD</option>
                <option value="SMP">SMP</option>
                <option value="SMA">SMA</option>
                <option value="D3">D3</option>
                <option value="S1">S1</option>
                <option value="S2">S2</option>
                <option value="S3">S3</option>
              </select>
              {errors.ibu?.pendidikanTerakhir && (
                <p className="text-red-500">{errors.ibu.pendidikanTerakhir.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Pekerjaan Ibu</label>
              <select
                {...register('ibu.pekerjaan', { required: 'Pekerjaan wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              >
                <option value="">--Pilih--</option>
                <option value="PNS">PNS</option>
                <option value="Swasta">Karyawan Swasta</option>
                <option value="Wirausaha">Wirausaha</option>
                <option value="Petani">Petani</option>
                <option value="Lainnya">Lainnya</option>
              </select>
              {errors.ibu?.pekerjaan && (
                <p className="text-red-500">{errors.ibu.pekerjaan.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Penghasilan Ibu</label>
              <input
                {...register('ibu.penghasilan', { required: 'Penghasilan wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.ibu?.penghasilan && (
                <p className="text-red-500">{errors.ibu.penghasilan.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Data Wali */}
        <div>
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Data Wali</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Nama Wali</label>
              <input
                {...register('wali.nama', { required: 'Nama wali wajib diisi' })}
                placeholder="Tulis nama lengkap wali"
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.wali?.nama && <p className="text-red-500">{errors.wali.nama.message}</p>}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Tempat Lahir</label>
              <input
                {...register('wali.tempatLahir', { required: 'Tempat lahir wajib diisi' })}
                placeholder="Kota kelahiran wali"
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.wali?.tempatLahir && (
                <p className="text-red-500">{errors.wali.tempatLahir.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Tanggal Lahir</label>
              <input
                type="date"
                {...register('wali.tanggalLahir', { required: 'Tanggal lahir wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.wali?.tanggalLahir && (
                <p className="text-red-500">{errors.wali.tanggalLahir.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Nomor WhatsApp</label>
              <div className="flex">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="p-2 border rounded-l text-black dark:text-white bg-white dark:bg-gray-700"
                >
                  <option value="+62">Indonesia (+62)</option>
                  <option value="+60">Malaysia (+60)</option>
                </select>
                <input
                  {...register('wali.whatsapp', {
                    required: 'Nomor WhatsApp wajib diisi',
                    pattern: { value: /^\d{8,12}$/, message: 'Nomor WhatsApp tidak valid' },
                  })}
                  placeholder="85775745484"
                  className="w-full p-2 border rounded-r text-black dark:text-white bg-white dark:bg-gray-700"
                />
              </div>
              {errors.wali?.whatsapp && <p className="text-red-500">{errors.wali.whatsapp.message}</p>}
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600 dark:text-gray-300">Alamat Wali</label>
              <textarea
                {...register('wali.alamat', { required: 'Alamat wajib diisi' })}
                placeholder="Tulis alamat lengkap tempat tinggal wali"
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.wali?.alamat && <p className="text-red-500">{errors.wali.alamat.message}</p>}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Pendidikan Terakhir</label>
              <select
                {...register('wali.pendidikanTerakhir', { required: 'Pendidikan terakhir wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              >
                <option value="">--Pilih--</option>
                <option value="SD">SD</option>
                <option value="SMP">SMP</option>
                <option value="SMA">SMA</option>
                <option value="D3">D3</option>
                <option value="S1">S1</option>
                <option value="S2">S2</option>
                <option value="S3">S3</option>
              </select>
              {errors.wali?.pendidikanTerakhir && (
                <p className="text-red-500">{errors.wali.pendidikanTerakhir.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Pekerjaan Wali</label>
              <select
                {...register('wali.pekerjaan', { required: 'Pekerjaan wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              >
                <option value="">--Pilih--</option>
                <option value="PNS">PNS</option>
                <option value="Swasta">Karyawan Swasta</option>
                <option value="Wirausaha">Wirausaha</option>
                <option value="Petani">Petani</option>
                <option value="Lainnya">Lainnya</option>
              </select>
              {errors.wali?.pekerjaan && (
                <p className="text-red-500">{errors.wali.pekerjaan.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">Penghasilan Wali</label>
              <input
                {...register('wali.penghasilan', { required: 'Penghasilan wajib diisi' })}
                className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
              />
              {errors.wali?.penghasilan && (
                <p className="text-red-500">{errors.wali.penghasilan.message}</p>
              )}
            </div>
          </div>
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Simpan Biodata
        </button>
      </form>
    </div>
  );
}