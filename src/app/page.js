import Image from "next/image";
import Link from "next/link";
import Maintenance from "@/components/Maintenance";
import { client } from "@/sanity/lib/client";

import AnimatedHeroSection from "@/components/AnimatedHeroSection";
import AnimatedAboutSection from "@/components/AnimatedAboutSection";
import AnimatedPropertiesSection from "@/components/AnimatedPropertiesSection";
import AnimatedContactSection from "@/components/AnimatedContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp"; // pastikan file ada
import AnimatedMapSection from "@/components/AnimatedMapSection";
import AnimatedNavbar from "@/components/AnimatedNavbar";

export default async function LandingPage() {
  const isMaintenanceMode = false;

  if (isMaintenanceMode) {
    return <Maintenance />;
  }

  // Fetch Sanity
  const query = `*[_type == "property"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    propertyType,
    price,
    landSize,
    bedrooms,
    bathrooms,
    address,
    "imageUrl": images[0].asset->url + "?auto=format"
  }`;
  const propertiesData = await client.fetch(query);

  const formattedProperties = propertiesData.map((prop) => ({
    id: prop._id,
    title: prop.title,
    location: prop.address || "Lokasi Belum Diatur",
    price: new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(prop.price),
    type: prop.propertyType
      ? prop.propertyType.charAt(0).toUpperCase() + prop.propertyType.slice(1)
      : "Properti",
    beds: prop.bedrooms || 0,
    baths: prop.bathrooms || 0,
    size: prop.landSize || 0,
    imageUrl: prop.imageUrl || null,
    slug: prop.slug || null,
  }));

  return (
    <main className="w-full relative font-sans overflow-x-hidden scroll-smooth">
      {/* Background layers */}
      <div className="fixed inset-0 bg-topografi bg-cover bg-center opacity-[0.03] pointer-events-none z-0" />
      <div className="absolute right-[-10%] top-[-5%] w-[400px] h-[400px] bg-secondary-brand rounded-full opacity-20 blur-[100px] pointer-events-none z-0" />
      <div className="absolute left-[-10%] top-[30%] w-[300px] h-[300px] bg-primary-brand rounded-full opacity-10 blur-[100px] pointer-events-none z-0" />

      {/* Navbar (tetap di sini) */}
      <AnimatedNavbar />

      {/* Sections dengan animasi */}
      <AnimatedHeroSection />
      <AnimatedAboutSection />
      {/*<AnimatedPropertiesSection properties={formattedProperties} />*/}
      <AnimatedContactSection />
      <AnimatedMapSection />
      {/* Footer */}
      <footer className="w-full mt-20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border-t border-white/20 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
          {/* Grid Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
            {/* Brand / Deskripsi */}
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-primary-brand">
                Karya Harja Property
              </h3>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs">
                Mitra terpercaya Anda dalam mewujudkan hunian impian.
                Profesional, terpercaya, dan berpengalaman.
              </p>
              <div className="flex gap-4 pt-2">
                {/* Facebook */}
                <a
                  href="https://facebook.com/karyaharjaproperti"
                  className="text-text-muted hover:text-primary-brand transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com/karyaharjaproperty"
                  className="text-text-muted hover:text-primary-brand transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zm6.162-4.162a4.162 4.162 0 100 8.324 4.162 4.162 0 000-8.324zM17.762 5.31a1.445 1.445 0 10-2.89 0 1.445 1.445 0 002.89 0z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/6282327612345"
                  className="text-text-muted hover:text-primary-brand transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://youtube.com/@karyaharjaproperty"
                  className="text-text-muted hover:text-primary-brand transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Tautan Cepat
              </h4>
              <ul className="space-y-2 text-sm text-text-muted">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-brand transition-colors"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#properti"
                    className="hover:text-primary-brand transition-colors"
                  >
                    Properti
                  </a>
                </li>
                <li>
                  <a
                    href="#tentang"
                    className="hover:text-primary-brand transition-colors"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a
                    href="#kontak"
                    className="hover:text-primary-brand transition-colors"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            {/* Kontak */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Hubungi Kami
              </h4>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 md:w-8 md:h-8 mt-0.5 text-primary-brand"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    Jl Raya Batu Jamus - Gerompol Km 4,5, Kedawung, Sragen
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-primary-brand"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+6282327612345"
                    className="hover:text-primary-brand"
                  >
                    0823-2761-2345
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-primary-brand"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:karyaharjaproperty@gmail.com"
                    className="hover:text-primary-brand"
                  >
                    karyaharjaproperty@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Jam Operasional */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Jam Operasional
              </h4>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex justify-between">
                  <span>Senin - Sabtu</span>
                  <span>08.00 - 16.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Minggu</span>
                  <span className="text-primary-brand font-medium">Tutup</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-text-muted">
                  💬 Konsultasi via WhatsApp <br />
                  tersedia 24 jam
                </p>
              </div>
            </div>
          </div>

          {/* Copyright - Bottom */}
          <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-text-muted">
            <p>
              &copy; {new Date().getFullYear()} Karya Harja Property.
              <span className="hidden md:inline">
                {" "}
                Hak cipta dilindungi undang-undang.
              </span>
              <br className="md:hidden" />
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp interaktif */}
      <FloatingWhatsApp />
    </main>
  );
}
