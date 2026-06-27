"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";
import PropertyCarousel from "./PropertyCarousel";

export default function AnimatedPropertiesSection({ properties }) {
  return (
    <section
      id="properti"
      className="py-24 px-6 md:px-16 w-full max-w-7xl mx-auto z-10 relative"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={staggerContainer.viewport}
        className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="font-display italic font-bold text-3xl md:text-4xl text-primary-brand mb-2">
            Properti Pilihan
          </h2>
          <p className="text-text-muted text-lg">
            Koleksi properti terbaik yang siap menjadi milik Anda.
          </p>
        </motion.div>
        <Link
          href="#"
          className="text-secondary-brand font-medium hover:underline flex items-center gap-1 transition-all"
        >
          Lihat Semua Properti
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
      <PropertyCarousel properties={properties} />
    </section>
  );
}
