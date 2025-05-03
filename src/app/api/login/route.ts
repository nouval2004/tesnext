// app/api/login/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/dbConnect";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const { whatsappNumber, password } = await request.json();

    // Validasi input
    if (!whatsappNumber || !password) {
      return NextResponse.json(
        { message: "Nomor WhatsApp and password are required" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    // Cari pengguna berdasarkan nomor WhatsApp
    const user = await db.collection("users").findOne({ whatsappNumber });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Verifikasi password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Incorrect password" }, { status: 401 });
    }

    // Buat JWT token
    const token = jwt.sign(
      { whatsappNumber: user.whatsappNumber, id: user._id },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "1h" }
    );

    return NextResponse.json({ message: "Login successful", token }, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Error during login" }, { status: 500 });
  }
}