// lib/dbConnect.ts
import { MongoClient } from "mongodb";

const uri: string = process.env.MONGODB_URI ?? "";
const dbName: string = process.env.DATABASE_NAME ?? "";

if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local");
}

if (!dbName) {
  throw new Error("Please add your DATABASE_NAME to .env.local");
}

let cachedClient: MongoClient | null = null;
let cachedDb: any = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    cachedClient = client;
    cachedDb = db;
    return { client, db };
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}