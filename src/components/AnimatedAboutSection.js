"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    title: "Solusi Properti yang Pas",
    desc: "Kami membantu menemukan rumah, tanah, maupun aset komersial yang benar-benar sesuai dengan keinginan dan anggaran Anda.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Jaringan Mitra Luas",
    desc: "Didukung oleh banyak mitra tepercaya, kami punya akses ke pilihan properti terbaik di seluruh wilayah Solo Raya.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Legalitas Terjamin",
    desc: "Semua dokumen kami pastikan aman dan terverifikasi secara resmi, sehingga transaksi Anda tenang tanpa kendala.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Strategi Pemasaran",
    desc: "Kami menggunakan cara promosi yang efektif, mulai dari media sosial hingga promosi langsung di lapangan agar properti lebih cepat terjual.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function AnimatedAboutSection() {
  return (
    <section
      id="tentang"
      className="py-12 px-6 md:px-16 w-full max-w-7xl mx-auto z-10 relative"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={staggerContainer.viewport}
        className="text-center mb-16"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-display italic font-bold text-3xl md:text-5xl text-primary-brand mb-3"
        >
          Mengapa Memilih Karya Harja Property?
        </motion.h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={staggerContainer.viewport}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center"
      >
        {features.map((feat, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="glass p-8 rounded-3xl border border-outline-primary/50 group flex flex-col items-center"
          >
            <motion.div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-brand mb-6 shadow-sm group-hover:bg-primary-brand group-hover:text-white group-hover:scale-110 transition-all duration-500 mx-auto">
              {feat.icon}
            </motion.div>
            <h3 className="text-xl font-bold text-foreground mb-4 w-full">
              {feat.title}
            </h3>
            <p className="text-base text-text-muted leading-relaxed w-full">
              {feat.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
