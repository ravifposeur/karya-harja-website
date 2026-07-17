"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function AnimatedPartnerSection() {
  return (
    <section className="py-4 px-6 w-full max-w-xl mx-auto z-10 relative text-center">
      {/* 🟢 Judul dikeluarkan dari box & ditaruh di atas */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="mb-4"
      >
        <span className="text-xl font-bold text-text-muted uppercase tracking-widest">
          Mitra Strategis Kami
        </span>
      </motion.div>

      {/* 🟢 Kotak Glass khusus membungkus logo secara compact */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ ...fadeInUp.transition, delay: 0.1 }}
        className="glass px-8 py-5 rounded-2xl border border-outline-primary/40 shadow-sm flex items-center justify-center transition-all hover:shadow-md hover:bg-white/40 group"
      >
        <a
          href="https://www.josproperty.com" // TODO: Jangan lupa ganti # dengan link asli
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
          {/* Logo Jos Property */}
          <Image
            src="/josproperty.png"
            alt="Logo Jos Property"
            width={160}
            height={48}
            className="object-contain h-24 md:h-28 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        </a>
      </motion.div>
    </section>
  );
}
