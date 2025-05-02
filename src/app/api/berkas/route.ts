// app/api/berkas/route.ts
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

// Simpan berkas di server (contoh sederhana)
export async function POST(request: Request) {
  const formData = await request.formData();
  const files: { [key: string]: { name: string; url: string } } = {};
  const uploadsDir = path.join(process.cwd(), 'public/uploads');

  for (const [key, value] of formData.entries()) {
    const file = value as File;
    const filePath = path.join(uploadsDir, file.name);
    await writeFile(filePath, Buffer.from(await file.arrayBuffer()));
    files[key] = { name: file.name, url: `/uploads/${file.name}` };
  }

  // Simpan status submitted (misalnya, di database)
  return NextResponse.json({ ...files, isSubmitted: true });
}

// Ambil berkas (contoh sederhana)
export async function GET() {
  // Ambil data dari database atau file system
  // Untuk contoh, kita kembalikan data statis
  return NextResponse.json({
    pasPhoto: null,
    akteKelahiran: null,
    ktpOrangTua: null,
    kartuKeluarga: null,
    ijazahSD: null,
    sertifikatPrestasi: null,
    isSubmitted: false,
  });
}