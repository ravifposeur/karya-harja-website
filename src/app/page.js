import Image from "next/image";

export default function MaintenancePage() {
  const socialMedia = [
    {
      name: "TikTok",
      src: "/tiktok.svg",
      link: "https://tiktok.com/@karyaharjaproperty",
    },
    {
      name: "YouTube",
      src: "/youtube.svg",
      link: "https://youtube.com/@karyaharjaproperty",
    },
    {
      name: "Facebook",
      src: "/facebook.svg",
      link: "https://facebook.com/karyaharjaproperti",
    },
    {
      name: "Instagram",
      src: "/instagram.svg",
      link: "https://instagram.com/karyaharjaproperty",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-topografi bg-cover bg-center bg-fixed overflow-hidden relative flex items-center justify-center px-6 py-12 md:px-16 gap-16">
      {/* 🔴 GLOBAL LAYER: BULATAN BLUR BACKGROUND */}
      <div className="absolute right-[-50px] top-[-100px] w-[327px] h-[180px] md:right-[-20px] md:top-[-100px] lg:right-[-50px] lg:top-[-100px] bg-secondary-brand rounded-full opacity-55 blur-mega rotate-[-25] z-0"></div>
      <div className="absolute left-[-80px] bottom-[-110px] w-[254px] h-[254px] md:left-[-80px] md:bottom-[-110px] lg:left-[-80px] lg:bottom-[-110px] bg-secondary-brand rounded-full blur-mega rotate-2 z-0"></div>

      {/* 🌍 CONTAINER MATRIKS UTAMA (Kembali ke Susunan Semula yang Rapi) */}
      <div className="w-full max-w-md flex flex-col items-center gap-12 z-10 md:grid md:grid-cols-12 md:max-w-6xl md:gap-x-16 md:gap-y-6 md:items-center">
        {/* ================================================================
            KOMPONEN 1: TITLE GROUP
            ================================================================ */}
        <div className="flex flex-col items-center text-center gap-2 w-full md:col-span-7 md:row-start-1 md:items-start md:text-left">
          <h3 className="text-[26px] md:text-[32px] text-foreground font-medium tracking-wide flex items-center gap-2">
            Mohon Maaf 🙏️
          </h3>
          <h1 className="text-[38px] md:text-[56px] text-foreground leading-tight font-sans">
            Website sedang dalam fase{" "}
            <span className="font-display italic text-secondary-brand font-semibold block md:inline">
              pengembangan.
            </span>
          </h1>
        </div>

        {/* ================================================================
            KOMPONEN 2: WRAPPER KOTAK LOGO RAKSASA (Kembali ke md:row-span-3)
            ================================================================ */}
        <div className="relative w-full max-w-[280px] md:max-w-[420px] aspect-square flex items-center justify-center md:col-span-5 md:col-start-8 md:row-start-1 md:row-span-3 justify-self-center md:justify-self-end">
          <div className="absolute -top-10 -right-12 w-[140px] h-[140px] md:w-[180px] md:h-[180px] bg-secondary-brand rounded-full z-0"></div>
          <div className="absolute -bottom-4 -left-4 w-[54px] h-[54px] md:w-[64px] md:h-[64px] bg-secondary-brand rounded-full z-0"></div>

          <div className="glass p-12 rounded-2xl w-full h-full flex items-center justify-center shadow-xl relative z-10">
            <Image
              src="/logo.svg"
              alt="Logo Karya Harja"
              width={320}
              height={220}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>

        {/* ================================================================
            KOMPONEN 3: WRAPPER KOTAK DESKRIPSI GLASS
            ================================================================ */}
        <div className="relative w-full max-w-md md:max-w-[520px] md:col-span-7 md:row-start-2 md:justify-self-start">
          <div className="absolute -top-6 -right-6 w-[75px] h-[75px] md:w-[95px] md:h-[95px] bg-secondary-brand rounded-full z-0"></div>
          <div className="absolute -bottom-4 -left-4 w-[54px] h-[54px] md:w-[64px] md:h-[64px] bg-primary-brand rounded-full z-0"></div>

          <div className="glass p-6 rounded-xl w-full flex items-center shadow-md relative z-10">
            <p className="text-[18px] md:text-[18px] text-center md:text-left leading-relaxed text-foreground/90">
              <span className="text-[20px] md:text-[20px] font-display font-bold italic inline-block mr-1">
                Karya Harja Property
              </span>
              akan kembali dengan website yang lebih segar, eksklusif, dan lebih
              siap menemani perjalanan properti Anda.
            </p>
          </div>
        </div>

        {/* ================================================================
            KOMPONEN 4: SOSMED GROUP
            ================================================================ */}
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:col-span-7 md:row-start-3 md:justify-self-start">
          <p className="text-[18px] md:text-[18px] font-medium text-center md:text-left text-foreground/80">
            Hubungi kami untuk informasi lainnya.
          </p>

          <div className="grid grid-cols-2 gap-3 max-w-fit mx-auto md:flex md:flex-row md:max-w-none md:mx-0 md:justify-start">
            {socialMedia.map((sosmed, index) => (
              <a
                key={index}
                href={sosmed.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-xl w-16 h-16 md:w-18 md:h-18 flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95 shadow-sm"
              >
                <Image
                  src={sosmed.src}
                  alt={sosmed.name}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================
          🟢 THE FLOATING WHATSAPP BUTTON (Mengekor di Luar Grid)
          ================================================================ */}
      <a
        href="https://wa.me/6282327612345" // 👈️ Ganti nomor WA di sini
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        // fixed: Mengunci posisi dari layar | z-50: Kasta tertinggi anti tenggelam | glass + hover: Animasi super smooth
        className="fixed bottom-6 right-6 md:bottom-20 md:right-10 z-50 glass p-4 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-secondary-brand shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-90 border border-white/30 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
          className="w-7 h-7 md:w-10 md:h-10 transition-colors duration-300 group-hover:text-[#25D366]"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>
    </main>
  );
}
