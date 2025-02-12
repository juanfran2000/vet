import { services } from "@/data/services";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

// Definimos los tipos correctamente según Next.js
type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  return {
    title: service?.title || "Servicio no encontrado",
    description: service?.details.description || "",
  };
}

export default async function Page({ params }: Props) {
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-[400px] rounded-4xl overflow-hidden mb-8">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <h1 className="text-4xl font-bold text-white">{service.title}</h1>
          </div>
        </div>

        <div className="space-y-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-200">
              {service.details.description}
            </p>
          </div>

          <div className="text-gray-200">
            <h2 className="text-2xl font-bold mb-4">Beneficios</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.details.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <span className="text-blue-500">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-gray-200">
            <h2 className="text-2xl font-bold mb-4">El servicio incluye</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.details.includes.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <span className="text-green-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {service.details.price && (
            <div className="bg-blue-50 p-6 rounded-2xl">
              <h2 className="text-2xl font-bold mb-2">Precio</h2>
              <p className="text-lg text-blue-800">{service.details.price}</p>
            </div>
          )}

          <div className="flex justify-center">
            <Link
              href={`https://wa.me/+593998934269?text=Me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20veterinarios%20de%20${encodeURIComponent(
                service.title
              )}%20por%20favor`}
              target="_blank"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Solicitar Cita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
