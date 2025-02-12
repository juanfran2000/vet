import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
interface BlogPost {
  date: string;
  title: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    date: "16.12.2024",
    title: "Tratamiento eficaz de la otitis en perros: guía completa",
    image: "/blogs/imagenes/blog1.jpg",
    tags: ["Dermatología", "Terapia"],
  },
  {
    date: "19/11/2024",
    title: "Úlcera corneal en perros y gatos: cómo reconocerla y tratarla",
    image: "/blogs/imagenes/blog2.jpg",
    tags: ["Oftalmología"],
  },
  {
    date: "11.09.2024",
    title: "Agresión en los gatos como respuesta al afecto",
    image: "/blogs/imagenes/blog3.jpg",
    tags: ["Terapia"],
  },
  {
    date: "06.09.2024",
    title: "Hernias en perros",
    image: "/blogs/imagenes/blog4.jpg",
    tags: ["Cirugía", "Ortopedia"],
  },
];

export const Blogs = () => {
  return (
    <div className="lg:mx-4 xl:mx-6 py-12 bg-white rounded-4xl flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-8">Últimos artículos</h2>

      {/* Versión móvil con carrusel */}
      <div className="md:hidden w-[85%] mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {blogPosts.map((post, index) => (
              <CarouselItem
                key={index}
                className="pl-4 pb-12 lg:pb-0 md:basis-1/2 lg:basis-1/3"
              >
                <BlogCard post={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-0 right-12 w-10">
            <CarouselPrevious className="w-14 h-14 bg-white text-black hover:bg-blue-600 hover:text-white" />
            <CarouselNext className="w-14 h-14 bg-white text-black hover:bg-blue-600 hover:text-white" />
          </div>
        </Carousel>
      </div>

      {/* Versión desktop con grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-14">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="rounded-4xl overflow-hidden bg-gray-50 shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-gray-500 text-sm font-medium">{post.date}</p>
        <h3 className="font-semibold text-lg mt-2 mb-4 line-clamp-2 hover:line-clamp-none">
          {post.title}
        </h3>
        <div className="flex gap-2 flex-wrap">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
