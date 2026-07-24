import AnimatedNavbar from "@/components/AnimatedNavbar";
import AnimatedHeroSection from "@/components/AnimatedHeroSection";
import AnimatedAboutSection from "@/components/AnimatedAboutSection";
import AnimatedPropertiesSection from "@/components/AnimatedPropertiesSection";
import AnimatedContactSection from "@/components/AnimatedContactSection";
import AnimatedMapSection from "@/components/AnimatedMapSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Maintenance from "@/components/Maintenance";
import AnimatedPartnerSection from "@/components/AnimatedPartnerSection";
import ErudaTools from '@/components/ErudaTools';
import { client } from "@/sanity/lib/client";

export default async function LandingPage() {
  const isMaintenanceMode = false;

  if (isMaintenanceMode) {
    return <Maintenance />;
  }

  // Fetch properti jika nanti diperlukan
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
    "imageUrl": images[0].asset->url + "?auto=format&w=600&q=80"
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
      <AnimatedNavbar />
      <AnimatedHeroSection />
      <AnimatedAboutSection />
      {/* <AnimatedPropertiesSection properties={formattedProperties} /> */}
      <AnimatedMapSection />
      <AnimatedPartnerSection />
      <footer className="w-full mt-4 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border-t border-white/20 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {/* 1. Hubungi Kami (Brand) */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primary-brand mb-4">
                Hubungi Kami
              </h3>
              <h4 className="font-bold text-foreground text-lg">
                Karya Harja Property
              </h4>
              <div className="flex items-start gap-2 text-sm text-text-muted mt-2">
                <svg
                  className="w-5 h-5 text-primary-brand flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p>Jl. Raya Batu Jamus - Solo km 4,5 Sragen</p>
              </div>
            </div>

            {/* 2. Informasi Kontak */}
            <div className="space-y-2">
              <h4 className="font-bold text-primary-brand uppercase tracking-wider text-sm">
                Informasi Kontak
              </h4>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-primary-brand"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>WhatsApp: 0823-276-12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-primary-brand"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Email: karyaharjaproperty@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* 3. Jam Operasional */}
            <div className="space-y-2">
              <h4 className="font-bold text-primary-brand uppercase tracking-wider text-sm">
                Jam Operasional
              </h4>
              <div className="text-sm text-text-muted space-y-2">
                <p>
                  Senin – Sabtu:{" "}
                  <span className="font-medium text-foreground">
                    08.00 – 16.00 WIB
                  </span>
                </p>
                <p>
                  Minggu:{" "}
                  <span className="font-medium text-primary-brand">Tutup</span>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-left text-xs text-text-muted">
            <p>
              &copy; {new Date().getFullYear()} Karya Harja Property. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
      <ErudaTools />
    </main>
  );
}
