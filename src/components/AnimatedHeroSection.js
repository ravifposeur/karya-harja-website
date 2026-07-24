"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const socialLinks = [
  {
    name: "Facebook",
    link: "https://facebook.com/karyaharjaproperti",
    src: "/facebook.svg",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/karyaharjaproperty",
    src: "/instagram.svg",
  },
  {
    name: "TikTok",
    link: "https://tiktok.com/@karyaharjaproperty",
    src: "/tiktok.svg",
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@jualbelitanahsragenkaranganyar",
    src: "/youtube.svg",
  },
];

export default function AnimatedHeroSection() {
  return (
    <section
      id="beranda"
      className="relative pt-40 pb-12 px-6 md:px-16 w-full max-w-7xl mx-auto flex flex-col items-center text-center z-10 justify-center gap-4"
    >
      {/* Badge */}
      <motion.span
        variants={fadeInUp}
        initial="initial"
        animate="whileInView"
        className="text-secondary-brand font-bold tracking-widest uppercase text-sm mb-2"
      >
        Investasi Masa Depan Anda
      </motion.span>

      {/* Heading Baru (Font Standar, Bold, No Italic) */}
      <motion.h1
        variants={fadeInUp}
        initial="initial"
        animate="whileInView"
        className="text-[36px] md:text-[52px] text-primary-brand leading-[1.2] font-extrabold max-w-4xl"
      >
        Pusat Jual Beli dan
        Pemasaran Properti Terbesar Solo Raya
      </motion.h1>

      {/* Deskripsi */}
      <motion.p
        variants={fadeInUp}
        initial="initial"
        animate="whileInView"
        className="mt-4 text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed"
      >
        Proses mudah, aman, dan transparan untuk setiap kebutuhan properti Anda.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        variants={scaleIn}
        initial="initial"
        animate="whileInView"
        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5 w-full"
      >
        <a
          href="https://wa.me/6282327612345?text=Halo%20Admin%2C%20saya%20ingin%20konsultasi%20mengenai%20properti."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_25px_rgba(37,211,102,0.5)] hover:-translate-y-1 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          Hubungi via WhatsApp
        </a>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="whileInView"
        className="mt-12 glass p-6 md:p-8 rounded-3xl border border-outline-primary/40 shadow-lg max-w-3xl w-full text-center"
      >
        <h2 className=" font-bold text-2xl md:text-3xl text-primary-brand mb-3">
          Tentang Kami
        </h2>
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="whileInView"
          className="mt-4 text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed"
        >
          Karya Harja Property adalah mitra terpercaya dalam jual beli
          dan pemasaran tanah, rumah, ruko, gudang, dan real estate di Solo Raya
          dan sekitarnya.
        </motion.p>
      </motion.div>
      {/* Media Sosial Besar */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={staggerContainer.viewport}
        className="mt-8 flex flex-col items-center justify-center gap-5 text-text-muted w-full"
      >
        <motion.span variants={fadeInUp} className="text-large font-medium">
          Ikuti dan temukan pilihan properti terbaik di media sosial kami
        </motion.span>
        <div className="flex gap-4 md:gap-6">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              variants={fadeInUp}
              href={social.link}
              aria-label={social.name}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-16 h-16 md:w-18 md:h-18 rounded-full glass flex items-center justify-center shadow-md border border-outline-primary/50 hover:shadow-xl hover:bg-white/50"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={64}
                height={64}
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
