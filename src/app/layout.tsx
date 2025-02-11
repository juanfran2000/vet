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
  description: "Clinica veterinaria 24 horas Mi pet clinic",
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
