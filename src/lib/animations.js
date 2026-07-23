// Cek preferensi pengguna (reduce motion)
const isReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const fadeInUp = {
  initial: isReducedMotion ? {} : { opacity: 0, y: 20 },
  animate: isReducedMotion ? {} : { opacity: 1, y: 0 }, // 🔴 Tambahan untuk Hero
  whileInView: isReducedMotion ? {} : { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export const fadeInLeft = {
  initial: isReducedMotion ? {} : { opacity: 0, x: -20 },
  animate: isReducedMotion ? {} : { opacity: 1, x: 0 }, // 🔴 Tambahan untuk Hero
  whileInView: isReducedMotion ? {} : { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export const fadeInRight = {
  initial: isReducedMotion ? {} : { opacity: 0, x: 20 },
  animate: isReducedMotion ? {} : { opacity: 1, x: 0 }, // 🔴 Tambahan untuk Hero
  whileInView: isReducedMotion ? {} : { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export const scaleIn = {
  initial: isReducedMotion ? {} : { opacity: 0, scale: 0.95 },
  animate: isReducedMotion ? {} : { opacity: 1, scale: 1 }, // 🔴 Tambahan untuk Hero
  whileInView: isReducedMotion ? {} : { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  }, // 🔴 Tambahan untuk Hero
  whileInView: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  viewport: { once: true, amount: 0.1 },
};
