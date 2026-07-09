"use client";

import Image from "next/image";
import Link from "next/link";

export default function AnimatedNavbar() {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 glass border-b border-outline-primary/50 px-6 md:px-16 py-4 flex flex-col md:flex-row justify-center md:justify-between items-center rounded-none shadow-sm backdrop-blur-xl gap-4 md:gap-0">
      <div className="flex items-center">
        <Image
          src="/logo-type.svg"
          alt="Logo Karya Harja"
          width={100}
          height={100}
          className="object-contain"
          priority
        />
      </div>
      <div className="hidden md:flex gap-8 font-medium text-foreground/80">
        <Link
          href="#beranda"
          className="hover:text-secondary-brand transition duration-300"
        >
          Beranda
        </Link>
        <Link
          href="#tentang"
          className="hover:text-secondary-brand transition duration-300"
        >
          Tentang Kami
        </Link>
        <Link
          href="#properti"
          className="hover:text-secondary-brand transition duration-300"
        >
          Properti
        </Link>
      </div>
    </nav>
  );
}
