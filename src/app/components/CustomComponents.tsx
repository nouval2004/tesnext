"use client";

import React from "react";

interface CustomComponentProps {
  imageSrc: string;
  title: string;
  description: string;
}

const CustomComponent: React.FC<CustomComponentProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Gambar */}
      <div className="w-full md:w-1/2">
        <img
          src={imageSrc}
          alt="Custom Illustration"
          className="w-full h-auto object-cover rounded-md shadow-md"
        />
      </div>

      {/* Konten Tulisan */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* Judul */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        {/* Deskripsi */}
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CustomComponent;
