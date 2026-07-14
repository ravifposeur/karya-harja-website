"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function AnimatedPartnerSection() {
  return (
    <section className="py-8 px-6 md:px-16 w-full max-w-7xl mx-auto z-10 relative">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.5 }}
        transition={fadeInUp.transition}
        className="glass px-8 py-6 rounded-3xl border border-outline-primary/40 shadow-sm flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center md:text-left transition-all hover:shadow-md hover:bg-white/40"
      >
        <span className="text-sm font-bold text-text-muted uppercase tracking-widest">
          Mitra Strategis Kami
        </span>

        {/* Garis pemisah (hanya muncul di PC) */}
        <div className="hidden md:block w-px h-8 bg-outline-primary/50"></div>

        <a
          href="https://www.josproperty.id" // TODO: Jangan lupa ganti # dengan link asli website/sosmed Jos Property
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
        >
          <span className="font-display italic text-2xl font-bold text-foreground group-hover:text-primary-brand transition-colors">
            Jos Property
          </span>
          {/* Ikon Eksternal Link */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-text-muted group-hover:text-primary-brand transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
