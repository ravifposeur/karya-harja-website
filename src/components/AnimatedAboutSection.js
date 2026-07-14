"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const features = [
  {
    title: "Solusi Properti yang Pas",
    desc: "Kami membantu menemukan rumah, tanah, maupun aset komersial yang benar-benar sesuai dengan keinginan dan anggaran Anda.",
  },
  {
    title: "Jaringan Mitra Luas",
    desc: "Didukung oleh banyak mitra tepercaya, kami punya akses ke pilihan properti terbaik di seluruh wilayah Solo Raya.",
  },
  {
    title: "Legalitas Terjamin",
    desc: "Semua dokumen kami pastikan aman dan terverifikasi secara resmi, sehingga transaksi Anda tenang tanpa kendala.",
  },
  {
    title: "Strategi Pemasaran",
    desc: "Kami menggunakan cara promosi yang efektif, mulai dari media sosial hingga promosi langsung di lapangan agar properti lebih cepat terjual.",
  },
];

export default function AnimatedAboutSection() {
  return (
    <section
      id="tentang"
      className="py-12 px-6 md:px-16 w-full max-w-6xl mx-auto z-10 relative"
    >
      <div className="text-center mb-12 md:mb-16 relative z-10">
        <motion.h2
          variants={fadeInUp}
          className="font-bold text-3xl md:text-5xl text-primary-brand mb-6"
        >
          Mengapa Memilih Karya Harja Property?
        </motion.h2>
        {/* Garis batas elegan di bawah judul utama */}

      </div>
      {/* 🔴 MEGA CARD: Satu kotak besar pembungkus semuanya */}
      <motion.div
        variants={scaleIn}
        initial="initial"
        whileInView="whileInView"
        viewport={scaleIn.viewport}
        transition={scaleIn.transition}
        className="glass p-8 md:p-16 rounded-[1.5rem] border border-outline-primary/50 shadow-2xl relative overflow-hidden"
      >
        {/* Dekorasi blur di sudut kotak agar tidak kaku */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-brand/10 rounded-full blur-3xl pointer-events-none" />



        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={staggerContainer.viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 text-center relative z-10"
        >
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="flex flex-col items-center group"
            >
              {/* 🔴 PENGGANTI IKON: Garis aksen minimalis (Divider) */}
              <div className="w-10 h-1 bg-primary-brand/40 rounded-full mb-5 transition-all duration-300 group-hover:w-16 group-hover:bg-primary-brand"></div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 w-full">
                {feat.title}
              </h3>

              {/* 🔴 TEKS BODY DIPERBESAR (text-[17px] di mobile, text-lg di md) */}
              <p className="text-[17px] md:text-lg text-text-muted leading-relaxed w-full font-medium">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
