"use client";

import Image from "next/image";
import Link from "next/link"; // 🟢 1. IMPORT LINK DARI NEXT.JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import CSS bawaan Swiper
import "swiper/css";

export default function PropertyCarousel({ properties }) {
  return (
    <div className="w-full relative px-2 py-4 cursor-grab active:cursor-grabbing">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-8"
      >
        {properties.map((prop, index) => (
          <SwiperSlide key={`${prop.id}-${index}`} className="h-auto">
            {/* 🟢 2. KARTU DIBUNGKUS LINK MENUJU HALAMAN DETAIL */}
            <Link
              href={`/properti/${prop.slug}`}
              className="block h-full group"
            >
              <div className="glass rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                {/* Bagian Gambar */}
                <div className="w-full h-56 bg-white/20 relative overflow-hidden shrink-0 border-b border-white/20">
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary-brand z-10 shadow-sm border border-white/50">
                    {prop.type}
                  </div>

                  <div className="w-full h-full group-hover:scale-110 transition-transform duration-700 bg-slate-100 relative">
                    {prop.imageUrl ? (
                      <Image
                        src={prop.imageUrl}
                        alt={prop.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-primary-brand/50 font-medium bg-gradient-to-br from-white/10 to-transparent">
                        No Image
                      </div>
                    )}
                  </div>
                </div>

                {/* Bagian Konten Text */}
                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary-brand transition-colors duration-300">
                    {prop.title}
                  </h3>

                  <p className="text-sm text-foreground/70 mb-4 flex items-center gap-2">
                    <Image
                      src="/icon-location.svg"
                      alt="Lokasi"
                      width={16}
                      height={16}
                      className="opacity-70"
                    />
                    {prop.location}
                  </p>

                  <div className="text-2xl font-bold text-secondary-brand mb-6">
                    {prop.price}
                  </div>

                  <div className="mt-auto">
                    <hr className="border-outline-primary/40 mb-4" />
                    <div className="flex gap-4 text-sm text-foreground/80 font-medium">
                      {prop.type === "Rumah" && (
                        <>
                          <span className="flex items-center gap-1.5">
                            <Image
                              src="/icon-bed.svg"
                              alt="Kamar Tidur"
                              width={18}
                              height={18}
                              className="opacity-70"
                            />
                            {prop.beds}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Image
                              src="/icon-bath.svg"
                              alt="Kamar Mandi"
                              width={18}
                              height={18}
                              className="opacity-70"
                            />
                            {prop.baths}
                          </span>
                        </>
                      )}
                      <span className="flex items-center gap-1.5">
                        <Image
                          src="/icon-area.svg"
                          alt="Luas Area"
                          width={18}
                          height={18}
                          className="opacity-70"
                        />
                        {prop.size} m²
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
