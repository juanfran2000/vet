"use client";
import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "Hospitalización",
    description:
      "Emergencias 24 horas Servicio de hospitalización: Atención médica y cuidados constantes para tu mascota en caso de enfermedad o accidente.",
    image: "/recursos/pets/pet3.png",
  },

  {
    title: "Cirugía",
    description:
      "Emergencias 24 horas Servicio de cirugía, Cirugía de tejidos blandos - Cirugía de traumatología",
    image: "/recursos/pets/pet4.png",
  },
  {
    title: "Laboratorio",
    description:
      "Química sanguínea -  Microbiología - Urianálisis - Citología - Hematología, haz tus examenes de forma rápida y confiable",
    image: "/recursos/pets/pet1.png",
  },
  {
    title: "Imagenología",
    description:
      "Endoscopía -  Radiografía - Ecografía, con tiempos de espera cortos y atención inmediata",
    image: "/recursos/pets/pet5.png",
  },
  {
    title: "Otros servicios",
    description:
      "Consultas - Análisis especiales - Virales - Hormonas - Mi pet PHARMA - Mi pet SPA - Mi pet Shop",
    image: "/recursos/pets/pet2.png",
  },
];

export const HeroDesktop = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // No need to update current or count here
    });
  }, [api]);

  return (
    <div className="flex flex-col w-full h-full px-6 gap-y-1 relative">
      <Carousel setApi={setApi} className="absolute inset-x-6 inset-y-0">
        <div className="absolute inset-0 top-1">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="relative w-full h-[790px]">
                <div className="absolute inset-0">
                  <div className="flex justify-center items-end mt-16 md:mt-24 lg:mt-4 pl-12 md:pl-24 lg:pl-36">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt="Hero"
                      width={650}
                      height={650}
                      className="w-[350px] md:w-[400px] lg:w-[600px] xl:w-[650px] h-auto"
                      priority
                    />
                  </div>
                </div>
                <div className="relative z-10 flex justify-between w-full h-full px-4 md:px-8 lg:px-12">
                  <div className="flex flex-col gap-y-4 w-full md:w-4/12 lg:w-3/12 mb-10 xl:mb-20 self-end">
                    <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                      {slide.title}
                    </h2>
                    <p className="text-white text-xs md:text-sm">
                      {slide.description}
                    </p>
                    <div className="flex justify-start">
                      <div className="text-blue-600 text-xs md:text-sm font-bold px-3 md:px-4 py-3 md:py-4 bg-white rounded-full flex justify-center items-center">
                        Leer más
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <div className="absolute bottom-64 left--60 right-20 flex justify-between items-center text-white w-6">
          <CarouselPrevious className="w-14 h-14 bg-white text-black hover:bg-blue-600 hover:text-white" />
          <CarouselNext className="w-14 h-14 bg-white text-black hover:bg-blue-600 hover:text-white" />
        </div>
      </Carousel>
      {/* div white*/}
      <div className="min-h-[450px] w-full bg-white rounded-4xl flex justify-between items-center px-12">
        <div className="w-5/12 h-20 flex justify-center items-center">
          <Image
            src="/petAttention/hero.svg"
            alt="Pet Clinic"
            width={800}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-y-8 justify-center items-end">
          <h1 className="text-4xl font-bold w-6/12 text-right ">
            Clínica veterinaria 24 horas
          </h1>
          <p className="text-blue-600 text-2xl xl:text-3xl font-bold">
            +593 98 388 3197
          </p>
          <div className="flex w-full justify-end items-center gap-x-4">
            <p className="w-4/12 text-right">Nuñez de vela y Corea.</p>
            <div className="flex items-center gap-x-2 bg-gradient-to-b from-blue-700 to-blue-600 font-semibold rounded-full px-3 py-2 text-white text-xs">
              <span className="icon-[streamline--interface-lighting-brightness-2-bright-adjust-brightness-adjustment-sun-raise-controls-half]" />
              <p>24 / 7</p>
            </div>
          </div>
        </div>
      </div>
      {/* div blue*/}
      <div className="w-full h-[340px] rounded-4xl bg-gradient-to-r from-blue-600 to-blue-700 flex items-center"></div>
    </div>
  );
};
