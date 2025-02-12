import { Inter } from "next/font/google";
import "./globals.css";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Clinica veterinaria 24 horas",
  description: "Clinica veterinaria Rumipamba",
  openGraph: {
    title: "Clinica veterinaria 24 horas",
    description: "Clinica veterinaria Rumipamba",
    images: [
      {
        url: "/og-image.png", // Ruta a tu imagen en la carpeta public
        width: 1200,
        height: 630,
        alt: "Clinica Veterinaria Rumipamba",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased flex flex-col gap-y-2`}
      >
        <Nav />
        <div className="px-1 mt-16 sm:mt-24 sm:px-10 md:px-28 lg:mt-20 lg:px-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
