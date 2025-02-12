import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Guiselle Llanos",
    text: "Una gran experiencia y atención en mi Pet Clinic, me atendió Maria Jose Camacho y es una grandiosa doctora para mis perritos 🤗💖💖….",
    rating: 5,
    image: "/recursos/pets/review1.webp",
  },
  {
    name: "Susy Martínez",
    text: "Excelente atención y recomendado que  tratan a los animalitos muy bien y con amor. Fui atendida por la doctora María José y súper bien 10 /10",
    rating: 5,
    image: "/recursos/pets/review2.webp",
  },
  {
    name: "Carla Domenica Castro",
    text: "Recomiendo ampliamente la clínica y a todo su equipo médico, en especial a la doctora María José Camacho. Desde el momento en que llegamos, recibimos una atención excepcional; revisaron a mi perrita Cora con mucho cuidado, y la doctora nos brindó un diagnóstico claro y detallado.",
    rating: 5,
    image: "/recursos/pets/review3.webp",
  },
  {
    name: "Amy Masache",
    text: "Excelente clínica, tienen todo lo necesario para atender a tus mascotitas, explican todo con mucho amor y paciencia. Mi Rocko se siente como en casa. Gracias a la Dra. Viviana una excelente profesional",
    rating: 5,
    image: "/recursos/pets/review3.webp",
  },
  {
    name: "Monica Borja",
    text: "Excelente servicio y rápida atención, sin duda el mejor lugar para cuidar al consentido de la casa . 100% recomendado",
    rating: 5,
    image: "/recursos/pets/review3.webp",
  },
];

export const Servicios = () => {
  return (
    <div className="lg:mx-4 xl:mx-6 py-12 bg-white rounded-4xl">
      <div className="w-full">
        <Image
          src="/marca/departamentos.svg"
          alt="Servicios"
          className="object-contain w-full"
          width={1000}
          height={1000}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {[
          {
            title: "Terapia",
            services: 50,
            image: "/recursos/pets/perroPeludo.webp",
            className: "lg:col-span-1 row-span-1",
            slug: "terapia",
          },
          {
            title: "Cirugía",
            services: 35,
            image: "/recursos/pets/gatoBlanco.webp",
            className: "lg:col-span-1 row-span-1",
            slug: "cirugia",
          },
          {
            title: "Oncología",
            services: 45,
            image: "/recursos/pets/loboBlanco.webp",
            className: "lg:col-span-2 row-span-1",
            slug: "oncologia",
          },
          {
            title: "Neurología",
            services: 25,
            image: "/recursos/pets/loboMalo.webp",
            className: "lg:col-span-1 row-span-2",
            slug: "neurologia",
          },
          {
            title: "Odontología",
            services: 25,
            image: "/recursos/pets/pugNegro.webp",
            className: "lg:col-span-2 row-span-1",
            slug: "odontologia",
          },
          {
            title: "Ortopedia",
            services: 85,
            image: "/recursos/pets/perroLobo.webp",
            className: "lg:col-span-1 row-span-1",
            slug: "ortopedia",
          },
          {
            title: "Cardiología",
            services: 30,
            image: "/recursos/pets/gatoGris.webp",
            className: "lg:col-span-2 row-span-1",
            slug: "cardiologia",
          },
          {
            title: "Oftalmología",
            services: 65,
            image: "/recursos/pets/perroOjos.webp",
            className: "lg:col-span-1 row-span-1",
            slug: "oftalmologia",
          },
          {
            title: "Dermatología",
            services: 40,
            image: "/recursos/pets/perroChiguagua.webp",
            className: "lg:col-span-1 row-span-1",
            slug: "dermatologia",
          },
          {
            title: "Odontología",
            services: 40,
            image: "/recursos/pets/perroDientes.webp",
            className: "lg:col-span-2 row-span-1",
            slug: "odontologia-2",
          },
        ].map((service, index) => (
          <Link
            href={`/servicios/${service.slug}`}
            key={index}
            className={`relative rounded-4xl overflow-hidden transition-transform hover:scale-[1.02] ${service.className}`}
          >
            <div className="absolute top-4 left-4 z-10">
              <div className="flex flex-col gap-y-1">
                <h3 className="text-lg font-bold text-white">
                  {service.title}
                </h3>
                <div className="py-2 px-4 bg-white/60 backdrop-blur-sm rounded-full text-xs text-center w-fit">
                  {service.services} servicios
                </div>
              </div>
            </div>
            <Image
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-full"
              width={1000}
              height={1000}
            />
          </Link>
        ))}

        {/* Reviews Card */}
        <div className="lg:col-span-1 row-span-1 rounded-4xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full h-full"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-white text-sm">{review.text}</p>
                      <p className="text-white font-semibold">{review.name}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute bottom-8 right-20 flex gap-2">
              <CarouselPrevious className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 text-white border-none" />
              <CarouselNext className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 text-white border-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
