"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    title: "Amanah & Jujur",
    desc: "Keterbukaan informasi penuh tanpa ada biaya yang disembunyikan.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Tim Profesional",
    desc: "Pendampingan penuh dari cek lokasi hingga serah terima kunci.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Terpercaya",
    desc: "Legalitas properti dijamin aman, bersih, dan sesuai hukum yang berlaku.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Fast Response",
    desc: "Konsultasi tanggap & responsif menghemat waktu berharga Anda.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function AnimatedAboutSection() {
  return (
    <section
      id="tentang"
      className="py-24 px-6 md:px-16 w-full max-w-7xl mx-auto z-10 relative"
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
          className="font-display italic text-3xl md:text-4xl font-bold text-primary-brand mb-4"
        >
          Mengapa Memilih Kami?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Kami memastikan pengalaman pencarian properti Anda transparan, aman,
          dan didampingi oleh profesional di setiap langkahnya.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={staggerContainer.viewport}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((feat, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="glass p-8 rounded-3xl border border-outline-primary/50 group"
          >
            <motion.div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-brand mb-6 shadow-sm group-hover:bg-primary-brand group-hover:text-white group-hover:scale-110 transition-all duration-500">
              {feat.icon}
            </motion.div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              {feat.title}
            </h3>
            <p className="text-base text-text-muted leading-relaxed font-medium">
              {feat.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
