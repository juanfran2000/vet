import { Our } from "@/components/Our";
import { Hero } from "../components/Hero";
import { HeroDesktop } from "../components/HeroDesktop";
import { Servicios } from "@/components/Servicios";
import { Info } from "@/components/Info";
import { Blogs } from "@/components/Blogs";
export default function Home() {
  return (
    <main className="flex flex-col gap-y-1">
      <div className="block lg:hidden">
        <Hero />
      </div>
      <div className="hidden lg:block">
        <HeroDesktop />
      </div>
      <div id="sobre-nosotros">
        <Our />
      </div>
      <div id="departamentos">
        <Servicios />
      </div>
      <a
        href="https://wa.me/+593998934269"
        target="_blanck"
        className="w-16 h-16 bg-gradient-to-t from-blue-600 to-blue-500 rounded-full flex items-center justify-center fixed bottom-8 right-6 sm:right-14 md:right-32 lg:right-14 shadow-md animate-bounce z-50"
      >
        <span className="icon-[logos--whatsapp-icon] text-3xl" />
      </a>
      <div id="contacto">
        <Info />
      </div>
      <div id="ofertas">
        <Blogs />
      </div>
    </main>
  );
}
