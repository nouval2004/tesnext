// app/create/signup/page.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FormData = {
  name: string;
  gender: "Laki-laki" | "Perempuan";
  source: string;
  whatsappNumber: string;
  password: string;
};

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      whatsappNumber: "+62",
    },
  });
  const [message, setMessage] = useState<string | null>(null);
  const [isNumberTaken, setIsNumberTaken] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(result.message);
        setIsNumberTaken(false);
        setTimeout(() => router.push("login"), 1000); // Redirect ke login
      } else {
        setMessage(result.message);
        if (result.message.includes("Nomor HP anda sudah terdaftar")) {
          setIsNumberTaken(true);
        }
      }
    } catch (error) {
      console.error("Signup error:", error);
      setMessage("Error during signup. Please try again.");
    }
  };

  // Opsi untuk dropdown "Dimana Anda Tahu Tentang Cendekia"
  const sourceOptions = [
    "Sosial Media",
    "Teman",
    "Website Resmi",
    "Iklan",
    "Lainnya",
  ];

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-black dark:text-white mb-6">
        Sign Up
      </h1>
      {message && (
        <p
          className={`text-center mb-4 ${
            message.includes("Error") || message.includes("Nomor HP")
              ? "text-red-600 dark:text-red-400"
              : "text-green-600 dark:text-green-400"
          }`}
        >
          {message}
          {isNumberTaken && (
            <span>
              {" "}
              <Link href="login" className="underline text-blue-500 dark:text-blue-400">
                Login disini
              </Link>
            </span>
          )}
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Nama Calon Santri */}
        <div>
          <label className="block text-black dark:text-white">Nama Calon Santri</label>
          <input
            {...register("name", { required: "Nama calon santri is required" })}
            className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
          />
          {errors.name && (
            <p className="text-red-600 dark:text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Jenis Kelamin */}
        <div>
          <label className="block text-black dark:text-white">Jenis Kelamin</label>
          <div className="flex gap-4">
            <label className="flex items-center text-black dark:text-white">
              <input
                type="radio"
                value="Laki-laki"
                {...register("gender", { required: "Jenis kelamin is required" })}
                className="mr-2"
              />
              Laki-laki
            </label>
            <label className="flex items-center text-black dark:text-white">
              <input
                type="radio"
                value="Perempuan"
                {...register("gender", { required: "Jenis kelamin is required" })}
                className="mr-2"
              />
              Perempuan
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-600 dark:text-red-400">{errors.gender.message}</p>
          )}
        </div>

        {/* Dimana Anda Tahu Tentang Cendekia */}
        <div>
          <label className="block text-black dark:text-white">
            Dimana Anda Tahu Tentang Cendekia
          </label>
          <select
            {...register("source", { required: "Pilih salah satu opsi" })}
            className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
          >
            <option value="">Pilih opsi</option>
            {sourceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.source && (
            <p className="text-red-600 dark:text-red-400">{errors.source.message}</p>
          )}
        </div>

        <h2 className="text-lg font-semibold text-black dark:text-white">Data Login</h2>

        {/* Nomor WhatsApp */}
        <div>
          <label className="block text-black dark:text-white">Nomor WhatsApp</label>
          <input
            {...register("whatsappNumber", {
              required: "Nomor WhatsApp is required",
              pattern: {
                value: /^\+62\d{9,12}$/,
                message: "Nomor harus diawali +62 dan memiliki 9-12 digit",
              },
            })}
            onChange={(e) => setValue("whatsappNumber", e.target.value)} // Update nilai
            className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
          />
          {errors.whatsappNumber && (
            <p className="text-red-600 dark:text-red-400">{errors.whatsappNumber.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-black dark:text-white">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
          />
          {errors.password && (
            <p className="text-red-600 dark:text-red-400">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}