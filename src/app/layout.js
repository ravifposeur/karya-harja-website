import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // WAJIB: Biar bold-nya asli, bukan falan browser
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Karya Harja Property",
  description: "Website sedang dalam fase pengembangan.",
  // 🟢 KODE FAVICON-NYA DI SINI:
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col justify-center items-center">
        {children}
      </body>
    </html>
  );
}
