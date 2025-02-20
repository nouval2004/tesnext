import { MongoClient } from "mongodb";

export async function GET() {
  const client = await MongoClient.connect(
    "mongodb+srv://tes:qwerty2004@cluster0.tmzz1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const usersCollection = db.collection("users");
  const users = await usersCollection.find().toArray();

  client.close();

  // Map data agar `_id` menjadi string dan gunakan `imageUrl`
  const formattedUsers = users.map((user) => ({
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
    imageUrl: user.imageUrl || "", // Gunakan properti `imageUrl`
  }));

  return new Response(JSON.stringify(formattedUsers), { status: 200 });
}
