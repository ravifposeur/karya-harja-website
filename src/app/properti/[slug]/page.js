import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
// ================================================================
// 🟢 OPTIMASI SEO: Dynamic Metadata (Biar Link kalau di-share cakep)
// ================================================================
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const query = `*[_type == "property" && slug.current == $slug][0] {
    title,
    address,
    "imageUrl": images[0].asset->url
  }`;

  const property = await client.fetch(query, { slug });

  if (!property) return {};

  return {
    title: `${property.title} | Karya Harja Property`,
    description: `Dijual properti premium di ${property.address}. Hubungi agen untuk info legalitas dan survei lokasi.`,
    openGraph: {
      title: property.title,
      description: `Lokasi: ${property.address}`,
      images: property.imageUrl ? [{ url: property.imageUrl }] : [],
    },
  };
}

// ================================================================
// COMPONENT UTAMA HALAMAN DETAIL
// ================================================================
export default async function PropertyDetailPage({ params }) {
  const { slug } = await params;

  // Query GROQ: Sedot semua data termasuk array semua gambar (multiple images)
  const query = `*[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    propertyType,
    price,
    landSize,
    bedrooms,
    bathrooms,
    address,
    "allImages": images[].asset->url,
    "description": description,
  }`;

  const prop = await client.fetch(query, { slug });

  // Jika slug ngawur / properti tidak ditemukan, lempar ke halaman 404
  if (!prop) {
    notFound();
  }

  // Format Rupiah
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(prop.price);

  const typeLabel = prop.propertyType
    ? prop.propertyType.charAt(0).toUpperCase() + prop.propertyType.slice(1)
    : "Properti";

  // 🟢 URL Halaman ini untuk disisipkan ke pesan WhatsApp
  const currentUrl = `https://karyaharjaproperty.com/properti/${slug}`;

  // 🟢 Link WhatsApp dengan Template Pesan Otomatis (Sudah di-encode agar spasi aman)
  const whatsappMessage = encodeURIComponent(
    `Halo Karya Harja, saya tertarik dengan properti berikut:\n\n*${prop.title}*\nHarga: ${formattedPrice}\nLokasi: ${prop.address}\n\nLink Properti: ${currentUrl}`,
  );
  const whatsappUrl = `https://wa.me/6282327612345?text=${whatsappMessage}`;

  return (
    <main className="w-full min-h-screen pt-28 pb-16 px-6 md:px-16 max-w-7xl mx-auto font-sans relative overflow-x-hidden">
      {/* Background Topografi Samar */}
      <div className="fixed inset-0 bg-topografi bg-cover bg-center opacity-[0.02] pointer-events-none z-0"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* ====================================================
            KIRI: MULTIPLE IMAGES (Galeri Foto Premium)
            ==================================================== */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Foto Utama (Besar) */}
          <div className="w-full aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden relative shadow-sm border border-outline-primary/50">
            {prop.allImages && prop.allImages.length > 0 ? (
              <Image
                src={`${prop.allImages[0]}?auto=format`}
                alt={prop.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-text-muted">
                No Image
              </div>
            )}
          </div>

          {/* Foto-Foto Thumbnail (Jika gambar lebih dari 1) */}
          {prop.allImages && prop.allImages.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {prop.allImages.slice(1, 5).map((imgUrl, index) => (
                <div
                  key={index}
                  className="aspect-square bg-slate-200 rounded-xl overflow-hidden relative border border-outline-primary/40 shadow-sm"
                >
                  <Image
                    src={`${imgUrl}?auto=format`}
                    alt={`${prop.title} gallery ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ====================================================
            KANAN: DETAIL DATA & ACTION BUTTON (WhatsApp Redirect)
            ==================================================== */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="glass p-8 rounded-2xl border border-outline-primary/60 shadow-md">
            <span className="inline-block bg-primary-brand/10 text-primary-brand px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-primary-brand/20">
              {typeLabel}
            </span>

            <h1 className="text-3xl font-bold text-foreground leading-tight mb-2">
              {prop.title}
            </h1>

            <p className="text-sm text-text-muted mb-6 flex items-center gap-2">
              <Image
                src="/icon-location.svg"
                alt="Location"
                width={16}
                height={16}
                className="opacity-70"
              />
              {prop.address || "Lokasi tidak spesifik"}
            </p>

            <div className="text-3xl font-bold text-secondary-brand mb-6">
              {formattedPrice}
            </div>

            <hr className="border-outline-primary/40 mb-6" />

            {/* Spesifikasi Teknis */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/40 p-4 rounded-xl border border-outline-primary/30 text-center">
                <span className="block text-xs text-text-muted mb-1">
                  Luas Tanah
                </span>
                <span className="font-bold text-foreground">
                  {prop.landSize || 0} m²
                </span>
              </div>

              {prop.propertyType === "rumah" && (
                <>
                  <div className="bg-white/40 p-4 rounded-xl border border-outline-primary/30 text-center">
                    <span className="block text-xs text-text-muted mb-1">
                      K. Tidur
                    </span>
                    <span className="font-bold text-foreground">
                      {prop.bedrooms || 0}
                    </span>
                  </div>
                  <div className="bg-white/40 p-4 rounded-xl border border-outline-primary/30 text-center">
                    <span className="block text-xs text-text-muted mb-1">
                      K. Mandi
                    </span>
                    <span className="font-bold text-foreground">
                      {prop.bathrooms || 0}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* 🟢 REDIRECT WHATSAPP BUTTON (Eksklusif & Menonjol) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary-brand hover:bg-primary-brand/90 text-white py-4 rounded-xl font-bold text-center block transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.99] border border-outline-secondary"
            >
              Hubungi Agen & Survei Lokasi
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
