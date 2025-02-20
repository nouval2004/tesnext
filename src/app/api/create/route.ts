import { MongoClient } from "mongodb";
import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const image = formData.get("image") as File;

  if (!name || !email || !image) {
    return new NextResponse("Missing required fields", { status: 400 });
  }

  // Save the image to a local directory (e.g., "uploads")
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadsDir, { recursive: true });

  const imageFilePath = path.join(uploadsDir, image.name);
  const imageBuffer = Buffer.from(await image.arrayBuffer());
  await fs.writeFile(imageFilePath, imageBuffer);

  // Save user data to MongoDB
  const imageUrl = `/uploads/${image.name}`; // URL for the saved image
  const client = await MongoClient.connect(
    "mongodb+srv://tes:qwerty2004@cluster0.tmzz1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const usersCollection = db.collection("users");

  const result = await usersCollection.insertOne({
    name,
    email,
    imageUrl,
  });

  client.close();

  return new Response(JSON.stringify(result), { status: 201 });
}
