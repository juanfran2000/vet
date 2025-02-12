"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { scrollTo } from "@/utils/scrollTo";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Añadir efecto para controlar el scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleNavClick = (elementId: string) => {
    setIsMenuOpen(false);
    scrollTo(elementId);
  };

  return (
    <>
      {/* Mobile Nav con SVG */}
      <div className="sm:hidden top-0 w-full fixed z-20">
        <div className="relative h-24">
          <Image
            src="/svg-nav.svg"
            alt="Nav background"
            className="w-full h-full object-cover"
            width={400}
            height={100}
            priority
          />

          {/* Contenido del Nav Mobile */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center px-4 pb-6">
            <div className="flex w-full justify-between items-center">
              {/* Logo y Contacto */}
              <Link
                href="/"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 "
              >
                <Image
                  src="/marca/logo.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </Link>
              <div className="flex items-center gap-x-3">
                <div className="text-white flex flex-row-reverse items-center gap-x-2">
                  <div className="flex items-center gap-x-1 text-xs">
                    <span className="bg-gradient-to-b from-blue-700 to-blue-600 px-2 py-1 rounded-full flex items-center gap-x-1 font-semibold">
                      <span className="icon-[streamline--interface-lighting-brightness-2-bright-adjust-brightness-adjustment-sun-raise-controls-half]" />
                      24 / 7
                    </span>
                  </div>
                  <a href="tel:++593967692618" className="text-sm font-bold">
                    +593 96 769 2618
                  </a>
                </div>
                {/* Menú */}
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span
                    className={`transition-transform duration-300 ${
                      isMenuOpen ? "rotate-90" : ""
                    } icon-[material-symbols-light--menu] text-white text-xl`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Nav con fondo plano */}
      <div className="hidden sm:block fixed top-0 w-full z-20">
        <div className="h-24 lg:h-20 bg-background">
          <div className="h-full flex items-center justify-between px-8">
            <div className="flex items-center gap-x-6">
              <Link
                href="/"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10"
              >
                <Image
                  src="/marca/logo.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </Link>
              <div className="relative w-[180px] h-[32px] items-center bg-white rounded-full hidden lg:flex">
                <span className="icon-[zondicons--search] absolute left-3 text-black text-lg" />
                <input
                  type="text"
                  placeholder="Buscar"
                  className="w-full h-full bg-transparent rounded-full pl-10 pr-4 text-black text-sm outline-none placeholder:text-gray-500 placeholder:text-xs"
                />
              </div>
            </div>

            <div className="flex items-center gap-x-6">
              <div className="text-white flex items-center gap-x-4">
                <a href="tel:++593967692618" className="font-bold sm:text-sm">
                  +593 96 769 2618
                </a>
                <span className="bg-gradient-to-b from-blue-600 to-blue-500 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-x-1 sm:from-transparent sm:to-transparent sm:text-md">
                  <span className="icon-[streamline--interface-lighting-brightness-2-bright-adjust-brightness-adjustment-sun-raise-controls-half]" />
                  24 / 7
                </span>
              </div>

              <a
                href="https://maps.app.goo.gl/XLT4AS6Md3eAAF387"
                target="_blank"
                className="text-white flex items-center gap-x-2"
              >
                <span className="icon-[bx--map] text-[22px]" />
                <p className="text-xs font-bold uppercase">
                  Hernando de la Cruz N32-188 y Av. Atahualpa
                </p>
              </a>

              <button
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-b hover:from-blue-700 hover:to-blue-500 transition duration-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span
                  className={`transition-transform duration-300 ${
                    isMenuOpen ? "rotate-90" : ""
                  } icon-[material-symbols-light--menu] text-white text-xl`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menú desplegable */}
      <div
        className={`fixed inset-0 bg-background z-30 pb-20 lg:pb-0 transition-all duration-500 ease-in-out overflow-y-auto ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{ top: "0" }}
      >
        <div className="min-h-screen px-6">
          <div className="h-20 relative">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white p-2"
            >
              <span className="icon-[material-symbols--close] text-2xl" />
            </button>
          </div>

          <div className="py-2 lg:flex lg:justify-between lg:items-center lg:px-10 xl:px-20 xl:justify-around">
            {/* Logo */}
            <div className="lg:flex lg:flex-col lg:gap-y-8">
              <div className="hidden lg:block">
                <Image
                  src="/marca/hamburguesa.svg"
                  alt="Veterinaria Rumipamba"
                  width={300}
                  height={80}
                  className="mb-8"
                />
              </div>
              <h1 className="text-4xl font-bold text-white mb-8 lg:hidden">
                Veterinaria Rumipamba
              </h1>

              {/* Información de contacto */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-x-2 text-white">
                  <span className="icon-[ph--clock-fill]" />
                  <span>Sin días libres</span>
                  <span className="bg-blue-600 text-xs px-2 py-1 rounded-full">
                    24/7
                  </span>
                </div>
                <div className="flex items-center gap-x-2 text-white">
                  <span className="icon-[ph--phone-fill]" />
                  <span>+593 96 769 2618</span>
                </div>
                <div className="flex items-center gap-x-2 text-white">
                  <span className="icon-[ph--map-pin-fill]" />
                  <span>Hernando de la Cruz N32-188 y Av. Atahualpa</span>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex gap-x-4 mb-8">
                <a
                  href="tel:+593967692618"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-full font-medium text-center"
                >
                  Llamar
                </a>
                <a
                  href="https://maps.app.goo.gl/crL7sdSLH1yZdAyc8"
                  target="_blank"
                  className="flex-1 bg-white/10 text-white py-3 rounded-full font-medium text-center"
                >
                  Maps
                </a>
              </div>

              {/* Mensaje especial */}
              <div className="flex items-center gap-x-2 text-gray-400 mb-12 lg:mb-0">
                <span className="text-blue-500">💙</span>
                <p className="text-sm">
                  Eternamente comprometidos con la salud de tu mascota.
                </p>
              </div>
            </div>

            {/* Enlaces de navegación */}
            <nav className="space-y-6">
              <button
                onClick={() => handleNavClick("sobre-nosotros")}
                className="block text-2xl text-white hover:text-blue-500 transition-colors duration-300"
              >
                Sobre nosotros
              </button>
              <button
                onClick={() => handleNavClick("departamentos")}
                className="block text-2xl text-white hover:text-blue-500 transition-colors duration-300"
              >
                Servicios
              </button>
              <a
                href="#ofertas"
                className="block text-2xl text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs Interesantes
              </a>
              <a
                href="#contacto"
                className="block text-2xl text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Formación
              </a>
              <div className="hidden lg:block">
                <hr className="border-t border-white/10 mb-6 text-background " />
                <div className="flex items-center gap-x-4">
                  <a
                    href="https://www.instagram.com/explore/locations/1662080944096925/clinica-veterinaria-rumipamba/"
                    target="_blank"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl"
                  >
                    <span className="icon-[mdi--instagram]" />
                  </a>
                  <a
                    href="https://www.facebook.com/cvetrumipamba?fref=nf&ref=embed_page"
                    target="_blank"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl "
                  >
                    <span className="icon-[gg--facebook]" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
