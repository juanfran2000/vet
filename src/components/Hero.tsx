import Image from "next/image";
import React from "react";

// className="text-blue-600 sm:text-red-600 md:text-green-600 lg:text-purple-600 xl:text-orange-400"

export const Hero = () => {
  return (
    <div className="w-full min-h-[610px] bg-white rounded-4xl flex flex-col pt-8 px-6 sm:px-8 relative">
      <div className="font-bold text-2xl sm:text-3xl sm:w-9/12 w-8/12">
        <h1 className="text-black">Clínica veterinaria 24 horas</h1>
      </div>
      <div className="flex sm:flex-row justify-between text-sm items-start sm:items-center mt-4 gap-y-4 sm:gap-y-0 relative z-10">
        <a
          href="https://www.google.com/maps/place/Corea+%26+N%C3%BA%C3%B1ez+de+Vela,+170102+Quito,+Ecuador/@-0.1772028,-78.4897584,17z/data=!3m1!4b1!4m6!3m5!1s0x91d59a8f667d8edd:0x54f94551ff1174a1!8m2!3d-0.1772028!4d-78.4871835!16s%2Fg%2F11f32pcg89?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
          target="_blank"
          className="max-w-28 text-xs"
        >
          Nuñez de vela y Corea
        </a>
        <div className="flex flex-col">
          <p>Teléfono:</p>
          <a
            href="tel:+593983883197"
            className="text-blue-600 text-xs font-bold"
          >
            +593 98 388 3197
          </a>
        </div>
        <div className="flex items-center gap-x-2 bg-gradient-to-b from-blue-700 to-blue-600 font-semibold rounded-full px-2 py-2 text-white text-xs">
          <span className="icon-[streamline--interface-lighting-brightness-2-bright-adjust-brightness-adjustment-sun-raise-controls-half]" />
          <p>24 / 7</p>
        </div>
      </div>
      <div className="absolute inset-0 pt-44 flex flex-col items-center">
        <Image
          src="/petAttention/centrada.svg"
          alt="Pet Clinic"
          width={800}
          height={200}
          className="w-full h-auto"
          priority
        />
        <Image
          src="/recursos/pets/pet3.png"
          alt="Pet Portada"
          width={860}
          height={200}
          className="w-[290px] h-auto absolute bottom-0"
          priority
        />
      </div>
    </div>
  );
};
