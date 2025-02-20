import React from "react";
import CustomComponent from "@/app/components/CustomComponents";

const About = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black p-6">
      <CustomComponent
        imageSrc="https://images.unsplash.com/photo-1737958108322-43b24ea9bc18?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D" // Ganti dengan URL gambar asli
        title="About Our Mission"
        description="We are dedicated to providing the best solutions for our users. Our team is passionate about delivering exceptional experiences through technology."
      />
    </main>
  );
};

export default About;
