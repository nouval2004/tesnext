// app/api/signup/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { name, gender, source, whatsappNumber, password } = await request.json();

    // Validasi input
    if (!name || !gender || !source || !whatsappNumber || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Validasi format nomor WhatsApp (harus dimulai dengan +62)
    if (!whatsappNumber.startsWith("+62")) {
      return NextResponse.json({ message: "Nomor WhatsApp harus dimulai dengan +62" }, { status: 400 });
    }

    const { db } = await connectToDatabase();

    // Cek apakah nomor WhatsApp sudah terdaftar
    const existingUser = await db.collection("users").findOne({ whatsappNumber });
    if (existingUser) {
      return NextResponse.json(
        { message: "Nomor HP anda sudah terdaftar, gunakan nomor yang lain atau login disini" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan pengguna baru
    await db.collection("users").insertOne({
      name,
      gender,
      source,
      whatsappNumber,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Signup successful! Please log in." }, { status: 201 });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ message: "Error during signup" }, { status: 500 });
  }
}