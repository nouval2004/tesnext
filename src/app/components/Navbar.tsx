// src/app/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black-500 px-12 p-8 px-20 text-white flex justify-between items-center">
  <div>
    <a href="/" className="font-bold text-lg">Nouval'ss</a>
  </div>
  <div className="flex gap-8">
    <a href="/" className="hover:underline">Home</a>
    <a href="/about" className="hover:underline">About</a>
    <a href="/contact" className="hover:underline">Contact</a>
  </div>
</nav>

  );
};
export default Navbar;
