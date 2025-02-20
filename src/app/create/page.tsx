"use client";
import { useState } from "react";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) {
      setError("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);

    try {
      const response = await fetch("/api/create", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        setName("");
        setEmail("");
        setImage(null);
      } else {
        throw new Error("Error creating user");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create New User</h1>

      {isSuccess && (
        <p className="text-center text-green-600 bg-green-100 p-3 rounded-md mb-4">
          User created successfully!
        </p>
      )}
      {error && (
        <p className="text-center text-red-600 bg-red-100 p-3 rounded-md mb-4">{error}</p>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="text-lg font-medium text-gray-700">
            Profile Image
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="mt-2"
            accept="image/*"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
