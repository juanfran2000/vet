import Image from "next/image";
import React from "react";

export const Nav = () => {
  return (
    <>
      {/* Mobile Nav con SVG */}
      <div className="sm:hidden top-0 w-full fixed z-50">
        <div className="relative h-24">
          <Image
            src="/recursos/nav.svg"
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
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10">
                <Image
                  src="/marca/petVet.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-x-3">
                <div className="text-white flex flex-row-reverse items-center gap-x-2">
                  <div className="flex items-center gap-x-1 text-xs">
                    <span className="bg-gradient-to-b from-blue-700 to-blue-600 px-2 py-1 rounded-full flex items-center gap-x-1 font-semibold">
                      <span className="icon-[streamline--interface-lighting-brightness-2-bright-adjust-brightness-adjustment-sun-raise-controls-half]" />
                      24 / 7
                    </span>
                  </div>
                  <p className="text-sm font-bold">+593 998 934 269</p>
                </div>
                {/* Menú */}
                <button className="w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="icon-[material-symbols-light--menu] text-white text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Nav con fondo plano */}
      <div className="hidden sm:block fixed top-0 w-full z-50">
        <div className="h-24 lg:h-20 bg-[#1b1b29]">
          <div className="h-full flex items-center justify-between px-8">
            <div className="flex items-center gap-x-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10">
                <Image
                  src="/marca/petVet.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
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
                <a href="tel:+593998934269" className="font-bold sm:text-sm">
                  +593 998 934 269
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
                  Mariscal Sucre y Taisha.
                </p>
              </a>

              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="icon-[material-symbols-light--menu] text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
