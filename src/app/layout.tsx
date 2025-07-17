import type { Metadata } from "next";
import { Teko, Bebas_Neue, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";
import PageLayout from "@/components/common/PageLayout";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  weight: "400",
  variable: "--font-playfair",
  subsets: ["latin-ext"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chandrayaan-3 landing: India's historic moment on the Moon",
  description:
    "Chandrayaan-3's historic Moon journey reaches final approach. Learn about propulsion module, advanced lander technology, and countdown to monumental event on August 23. Stay updated and achievements with ISRO's progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${oswald.variable} ${playfair.variable} ${teko.variable} antialiased`}
      >
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
