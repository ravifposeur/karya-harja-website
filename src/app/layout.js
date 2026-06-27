import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
<head>
  <StructuredData />
</head>;
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

// app/layout.js
export const metadata = {
  title: "Karya Harja Property | Jual Beli Rumah & Tanah Terpercaya",
  description:
    "Temukan rumah impian dan lahan strategis di Soloraya dengan legalitas aman, harga transparan, dan didampingi agen profesional.",
  keywords: [
    "rumah dijual",
    "tanah dijual",
    "properti soloraya",
    "jual beli properti",
  ],
  openGraph: {
    title: "Karya Harja Property",
    description: "Properti eksklusif & terpercaya di Soloraya.",
    url: "https://karyaharjaproperty.com",
    siteName: "Karya Harja Property",
    images: [
      {
        url: "/og.png", // buat gambar 1200x630 di public/
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karya Harja Property",
    description: "Properti eksklusif & terpercaya di Soloraya.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <head>
        {/* Structured Data JSON-LD */}
        <StructuredData />
      </head>
      {/* 🔴 UPDATE DI SINI: Hapus justify-center items-center, tambah bg-background */}
      <body className="min-h-full flex flex-col bg-background text-foreground relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
