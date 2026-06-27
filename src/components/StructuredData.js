// components/StructuredData.js
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Karya Harja Property",
    url: "https://karyaharjaproperty.com",
    logo: "https://karyaharjaproperty.com/logo.svg",
    image: "https://karyaharjaproperty.com/og-image.jpg",
    description: "Jual beli rumah dan tanah terpercaya di Yogyakarta.",
    telephone: "+6282327612345",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yogyakarta",
      addressRegion: "DIY",
      addressCountry: "ID",
    },
    sameAs: [
      "https://facebook.com/karyaharjaproperti",
      "https://instagram.com/karyaharjaproperty",
      "https://tiktok.com/@karyaharjaproperty",
      "https://youtube.com/@karyaharjaproperty",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
