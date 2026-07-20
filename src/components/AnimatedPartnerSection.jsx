"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function AnimatedPartnerSection() {
  return (
    <section className="py-4 px-6 w-full max-w-xl mx-auto z-10 relative text-center">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="mb-4"
      >
        <h2 className=" font-bold text-2xl md:text-3xl text-primary-brand mb-3">
          Partner Resmi Kami
        </h2>

        <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Bersama JOS Property, kami menghadirkan jaringan pemasaran properti yang lebih luas, profesional, dan terpercaya di Solo Raya.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ ...fadeInUp.transition, delay: 0.1 }}
        className="glass px-12 py-6 rounded-2xl border border-outline-primary/40 shadow-sm flex flex-col items-center justify-center transition-all hover:shadow-md hover:bg-white/40 group"

      >
        <span className="text-lg font-bold text-text-muted tracking-widest">
          Kunjungi JOS Property
        </span>
        <a
          href="https://www.josproperty.id"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
          <Image
            src="/josproperty.png"
            alt="Logo Jos Property"
            width={160}
            height={48}
            className="object-contain h-16 md:h-20 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        </a>
      </motion.div>
    </section>
  );
}
