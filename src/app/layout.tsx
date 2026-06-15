import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "N.A.D.I. — Modernong Pangangalaga para sa Bawat Ina",
  description: "Ang N.A.D.I. (Neonatal and Antenatal Digital Intelligence) ay isang offline-first digital health platform na tumutulong sa mga BHW at DTTB na subaybayan ang kalusugan ng mga buntis — kahit walang internet.",
  keywords: ["NADI", "Health Tech", "Philippines", "BHW", "DTTB", "Maternal Health", "Offline-first"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
