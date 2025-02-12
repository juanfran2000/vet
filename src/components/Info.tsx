"use client";
import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export const Info = () => {
  const baseImages = useMemo(
    () => [
      "/clientes/cliente37.png",
      "/clientes/cliente1.png",
      "/clientes/cliente2.png",
      "/clientes/cliente3.png",
      "/clientes/cliente4.png",
      "/clientes/cliente5.png",
      "/clientes/cliente6.png",
      "/clientes/cliente7.png",
      "/clientes/cliente8.png",
      "/clientes/cliente9.png",
      "/clientes/cliente10.png",
      "/clientes/cliente11.png",
      "/clientes/cliente12.png",
      "/clientes/cliente13.png",
      "/clientes/cliente14.png",
      "/clientes/cliente15.png",
      "/clientes/cliente16.png",
      "/clientes/cliente17.png",
      "/clientes/cliente18.png",
      "/clientes/cliente19.png",
      "/clientes/cliente20.png",
      "/clientes/cliente21.png",
      "/clientes/cliente22.png",
      "/clientes/cliente23.png",
      "/clientes/cliente24.png",
      "/clientes/cliente25.png",
      "/clientes/cliente26.png",
      "/clientes/cliente27.png",
      "/clientes/cliente28.png",
      "/clientes/cliente29.png",
      "/clientes/cliente30.png",
      "/clientes/cliente31.png",
      "/clientes/cliente32.png",
      "/clientes/cliente33.png",
      "/clientes/cliente34.png",
      "/clientes/cliente35.png",
      "/clientes/cliente36.png",
    ],
    []
  );

  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="flex flex-col lg:flex-row lg:px-4 xl:px-6 lg:gap-x-1 gap-y-1 lg:gap-y-0">
      {/* carousel */}
      <div className="w-full lg:w-1/2 rounded-4xl relative h-[400px] lg:h-[600px]">
        <Carousel
          className="w-full h-full"
          opts={{
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent className="h-full">
            {baseImages.map((image, index) => (
              <CarouselItem
                key={`client-${index}`}
                className="h-[400px] lg:h-[600px]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`Cliente ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-4xl"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="h-8 w-8 lg:h-10 lg:w-10 bg-white text-black hover:bg-blue-600 hover:text-white absolute left-2 lg:left-4" />
          <CarouselNext className="h-8 w-8 lg:h-10 lg:w-10 bg-white text-black hover:bg-blue-600 hover:text-white absolute right-2 lg:right-4" />
        </Carousel>
      </div>

      {/* nosotros */}
      <div className="bg-white rounded-4xl w-full lg:w-1/2 py-10 lg:py-12 flex flex-col gap-y-4 lg:gap-y-8 items-start px-4 lg:px-6 lg:overflow-y-auto  lg:h-[600px]">
        <h2 className="text-xs font-bold text-gray-400">
          MÉDICOS DE MI PET CLINIC
        </h2>
        <h3 className="text-lg lg:text-3xl font-bold lg:w-3/4">
          Nuestros especialistas reciben formación periódica y mejoran sus
          cualificaciones.
        </h3>
        <h3 className="text-sm w-11/12">
          Somos una clínica veterinaria ubicada sur de Quito con atención de 24
          horas, dedicados al cuidado y atención de mascotas. Disponemos de las
          mejores instalaciones y el personal mejor capacitado para garantizar
          el bienestar de tu mascota. Tu tranquilidad y la salud de tu amigo
          estarán en las mejores manos, porque tú y tu mascota al entrar por las
          puertas de nuestra clínica, pasarán a formar parte de nuestra gran
          familia.&quot;
        </h3>
        <div className="text-sm w-4/5">
          <p className="font-bold mb-4">
            Nuestros médicos participan regularmente en:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>En clases prácticas;</li>
            <li>En programas de formación interna de la clínica;</li>
            <li>En congresos y conferencias nacionales y extranjeros.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
