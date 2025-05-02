import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Implementasi logika untuk mengambil data bukti transfer
    return NextResponse.json({ message: 'Success' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const buktiTransfer = formData.get('buktiTransfer');
    
    // Implementasi logika untuk menyimpan bukti transfer
    
    return NextResponse.json({ message: 'Bukti transfer berhasil disimpan' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}