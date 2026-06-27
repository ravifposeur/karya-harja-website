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
    <nav className="w-full fixed top-0 left-0 z-50 glass border-b border-outline-primary/50 px-6 md:px-16 py-4 flex justify-between items-center rounded-none shadow-sm backdrop-blur-xl">
      <div className="flex items-center gap-3">
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
        <a
          href="#beranda"
          onClick={(e) => handleSmoothScroll(e, "beranda")}
          className="hover:text-secondary-brand transition duration-300"
        >
          Beranda
        </a>
        <a
          href="#tentang"
          onClick={(e) => handleSmoothScroll(e, "tentang")}
          className="hover:text-secondary-brand transition duration-300"
        >
          Tentang Kami
        </a>
        {/*
        <a
          href="#properti"
          onClick={(e) => handleSmoothScroll(e, "properti")}
          className="hover:text-secondary-brand transition duration-300"
        >
          Properti
        </a>
        */}
        <a
          href="#kontak"
          onClick={(e) => handleSmoothScroll(e, "kontak")}
          className="hover:text-secondary-brand transition duration-300"
        >
          Kontak
        </a>
      </div>

      <a
        href="https://wa.me/6282327612345"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary-brand text-white px-5 py-2.5 text-sm md:text-base rounded-full font-medium hover:bg-primary-brand/90 hover:shadow-lg active:scale-95 transition-all duration-300"
      >
        Hubungi Kami
      </a>
    </nav>
  );
}
