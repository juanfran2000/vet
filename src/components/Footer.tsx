import Image from "next/image";

export const Footer = () => {
  return (
    <footer className=" text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Columna 1: Logo e información */}
          <div className="space-y-6">
            <div className="flex items-center gap-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10">
                <Image
                  src="/marca/petVet.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Mi Pet Clinic</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-x-2">
                <span className="icon-[ph--clock-fill]" />
                <span>Trabajamos 7 días a la semana</span>
                <span className="bg-blue-600 text-xs px-2 py-1 rounded-full">
                  24/7
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="icon-[ph--map-pin-fill]" />
                <span>Mariscal Sucre y Taisha</span>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="icon-[ph--phone-fill]" />
                <span>+593 998 934 269</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Enlaces rápidos</h3>
            <nav className="space-y-3">
              <a href="#sobre-nosotros" className="block hover:text-blue-500">
                Sobre nosotros
              </a>
              <a href="#departamentos" className="block hover:text-blue-500">
                Departamentos
              </a>
              <a href="#ofertas" className="block hover:text-blue-500">
                Ofertas especiales
              </a>
              <a href="#contacto" className="block hover:text-blue-500">
                Contacto
              </a>
            </nav>
          </div>

          {/* Columna 3: Redes sociales y mensaje */}
          <div className="space-y-6">
            <div className="flex items-center gap-x-4">
              <a
                href="https://www.instagram.com/mipetclinic/"
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <span className="icon-[mdi--instagram] text-xl" />
              </a>
              <a
                href="https://www.facebook.com/mipetclinic/?locale=es_LA"
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <span className="icon-[gg--facebook] text-xl" />
              </a>
            </div>
            <div className="flex items-center gap-x-2 text-gray-400">
              <span className="text-blue-500">💙</span>
              <p className="text-sm">
                Eternamente comprometidos con la salud de tu mascota.
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Mi Pet Clinic. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
