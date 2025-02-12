"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

export const Our = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        // Ocultar controles después de 1 segundo
        timeoutRef.current = setTimeout(() => {
          setShowControls(false);
        }, 1000);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-y-1 lg:gap-y-0 lg:px-4 xl:px-6 lg:gap-x-1">
      {/* Video*/}
      <div
        className="bg-white rounded-4xl w-full lg:w-1/2 relative group"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => !isPlaying && setShowControls(true)}
      >
        <video
          ref={videoRef}
          src="/marca/consulta.mp4"
          poster="/video-portada.jpg"
          className="w-full h-full object-cover rounded-4xl cursor-pointer"
          onClick={handlePlayPause}
        />
        {(showControls || !isPlaying) && (
          <button
            onClick={handlePlayPause}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              bg-blue-600 hover:bg-blue-600/50 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center
              transition-all duration-300 ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
          >
            {isPlaying ? (
              <span className="icon-[iconoir--pause] text-white text-2xl" />
            ) : (
              <span className="icon-[iconoir--play] text-white text-2xl" />
            )}
          </button>
        )}
      </div>
      {/* Somos*/}
      <div className="bg-white rounded-4xl w-full py-8 flex flex-col gap-y-8 items-start px-6 lg:w-1/2">
        <h2 className="text-xl font-bold lg:text-3xl lg:w-3/4">
          <span className="text-blue-700">Somos</span> una clínica veterinaria
          multidisciplinar con una gama completa de servicios: desde exámenes
          preventivos hasta atención de urgencias.
        </h2>
        <h3 className="text-sm w-4/5">
          Un equipo de veterinarios experimentados, equipos avanzados, seguridad
          contra infecciones, manejo del dolor: todo esto ha hecho de Vetcity un
          socio para los propietarios de más de 70 mil mascotas.
        </h3>
        <div>
          <div className="w-full flex flex-col items-center gap-y-4 text-sm lg:mt-24 lg:flex-row">
            <div className="flex gap-x-4">
              <div className="w-1/2 flex flex-col gap-y-5">
                <Image
                  src="/recursos/iconos/quirurgico.svg"
                  alt="icono1"
                  width={60}
                  height={60}
                />
                <p>Bloque quirúrgico con cinco quirófanos</p>
              </div>
              <div className="w-1/2 flex flex-col gap-y-4">
                <Image
                  src="/recursos/iconos/cuidados.svg"
                  alt="icono1"
                  width={55}
                  height={55}
                />
                <p>Unidad de cuidados intensivos y hospitales</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="w-1/2 flex flex-col gap-y-4">
                <Image
                  src="/recursos/iconos/chekeo.svg"
                  alt="icono1"
                  width={60}
                  height={60}
                />
                <p>Bloque quirúrgico con cinco quirófanos</p>
              </div>
              <div className="w-1/2 flex flex-col gap-y-4">
                <Image
                  className="mt-4"
                  src="/recursos/iconos/24horas.svg"
                  alt="icono1"
                  width={95}
                  height={95}
                />
                <p>Unidad de cuidados intensivos y hospitales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
