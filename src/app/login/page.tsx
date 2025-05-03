// app/create/login/page.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type FormData = {
  whatsappNumber: string;
  password: string;
};

export default function LoginPage() {
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
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        // Simpan token di localStorage
        localStorage.setItem("token", result.token);
        setMessage(result.message);
        setTimeout(() => router.push("/create/home"), 1000); // Redirect ke portal pendaftaran
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Error during login. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-black dark:text-white mb-6">
        Log In
      </h1>
      {message && (
        <p
          className={`text-center mb-4 ${
            message.includes("Error") ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"
          }`}
        >
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            onChange={(e) => setValue("whatsappNumber", e.target.value)}
            className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
          />
          {errors.whatsappNumber && (
            <p className="text-red-600 dark:text-red-400">{errors.whatsappNumber.message}</p>
          )}
        </div>
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
          Log In
        </button>
      </form>
    </div>
  );
}