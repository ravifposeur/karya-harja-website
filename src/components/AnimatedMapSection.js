"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function AnimatedMapSection() {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63287.67181705042!2d110.93584484863281!3d-7.522562500000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1ff2b8f41913%3A0x773554a0c235b860!2sKARYA%20HARJA%20Property!5e0!3m2!1sid!2sid!4v1782586824255!5m2!1sid!2sid&z=17";

  return (
    <section className="py-16 md:py-20 px-4 md:px-16 w-full max-w-7xl mx-auto z-10 relative">
      {/* Judul Section */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={fadeInUp.viewport}
        transition={fadeInUp.transition}
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="font-display italic font-bold text-3xl md:text-5xl text-primary-brand mb-3">
          Kunjungi Kami
        </h2>
        <p className="text-text-muted text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
          Datang langsung ke kantor kami untuk konsultasi lebih lanjut.
        </p>
      </motion.div>

      {/* Card Map Premium */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative max-w-5xl mx-auto group"
      >
        {/* Outer glow & shadow ring */}
        <div className="absolute -inset-1 bg-gradient-to-br from-primary-brand/20 via-secondary-brand/10 to-primary-brand/5 rounded-[2rem] md:rounded-[2.5rem] blur-sm opacity-70 group-hover:opacity-100 transition duration-500" />

        {/* Main card */}
        <div className="relative glass !border-white/20 !backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] ring-1 ring-white/50">
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent pointer-events-none z-10" />

          {/* Peta */}
          <div className="relative w-full h-0 pb-[75%] md:pb-[40%] bg-white/5">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", top: 0, left: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor Karya Harja Property"
              className="rounded-t-[2rem] md:rounded-t-[2.5rem]"
            />
          </div>

          {/* Informasi Alamat + CTA */}
          <div className="relative p-5 md:p-10 bg-white/60 backdrop-blur-xl border-t border-white/30">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              {/* Ikon Lokasi dengan animasi subtle */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-primary-brand/20 to-primary-brand/5 rounded-2xl flex items-center justify-center flex-shrink-0 self-start shadow-inner"
              >
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
                  className="text-primary-brand w-6 h-6 md:w-8 md:h-8"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </motion.div>

              {/* Alamat */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 tracking-tight">
                  Karya Harja Property
                </h3>
                <p className="text-text-muted text-sm md:text-xl leading-relaxed font-medium">
                  Jl Raya Batu Jamus - Gerompol Km 4,5 Kedawung, Sragen
                </p>
              </div>

              {/* Tombol Dapatkan Arah */}
              <a
                href="https://maps.app.goo.gl/mMZ9RA5BBxT42PAx6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-brand text-white px-5 py-3 rounded-full font-semibold hover:bg-primary-brand/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary-brand/20 flex-shrink-0 text-sm md:text-base w-full md:w-auto mt-2 md:mt-0"
              >
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
                >
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Dapatkan Arah
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
