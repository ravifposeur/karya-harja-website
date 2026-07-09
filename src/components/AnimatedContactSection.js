"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, scaleIn } from "@/lib/animations";

export default function AnimatedContactSection() {
  return (
    <section
      id="kontak"
      className="py-12 px-6 md:px-16 w-full max-w-7xl mx-auto z-10 relative"
    >
      <motion.div
        variants={scaleIn}
        initial="initial"
        whileInView="whileInView"
        viewport={scaleIn.viewport}
        transition={scaleIn.transition}
        className="glass p-10 md:p-14 rounded-[2.5rem] border border-outline-primary shadow-xl flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative"
      >
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary-brand/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          variants={fadeInLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={fadeInLeft.viewport}
          transition={fadeInLeft.transition}
          className="flex-1 relative z-10"
        >
          <h2 className="font-display italic font-bold text-3xl md:text-4xl text-primary-brand mb-4">
            Punya Pertanyaan Spesifik?
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-md leading-relaxed">
            Tim spesialis kami siap membantu Anda mencocokkan kriteria, budget,
            dan mengurus jadwal survei lokasi secara gratis.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-foreground font-medium">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary-brand">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-text-muted">WhatsApp</div>
                <div className="text-lg">0823-2761-2345</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="initial"
          whileInView="whileInView"
          viewport={fadeInRight.viewport}
          transition={fadeInRight.transition}
          className="relative z-10 w-full md:w-auto flex-shrink-0"
        >
          <a
            href="https://wa.me/6282327612345"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-brand text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 text-lg"
          >
            Mulai Konsultasi
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
