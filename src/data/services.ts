export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  services: number;
  image: string;
  className: string;
  details: {
    description: string;
    benefits: string[];
    includes: string[];
    price?: string;
  };
}

export const services: Service[] = [
  {
    id: "terapia",
    title: "Terapia",
    slug: "terapia",
    description: "Servicios terapéuticos especializados para mascotas",
    services: 50,
    image: "/recursos/pets/perroPeludo.webp",
    className: "lg:col-span-1 row-span-1",
    details: {
      description: "Servicio especializado de terapia física y rehabilitación para mascotas con problemas de movilidad o en recuperación.",
      benefits: [
        "Terapia física personalizada",
        "Rehabilitación post-operatoria",
        "Tratamiento del dolor crónico",
        "Mejora de la movilidad"
      ],
      includes: [
        "Evaluación inicial",
        "Plan de terapia personalizado",
        "Sesiones de rehabilitación",
        "Seguimiento del progreso"
      ],
      price: "Preguntar mediante WhatsApp"
    }
  },
  {
    id: "cirugia",
    title: "Cirugía",
    slug: "cirugia",
    description: "Procedimientos quirúrgicos avanzados",
    services: 35,
    image: "/recursos/pets/gatoBlanco.webp",
    className: "lg:col-span-1 row-span-1",
    details: {
      description: "Servicios quirúrgicos de alta precisión con tecnología avanzada y equipo especializado.",
      benefits: [
        "Cirugías mínimamente invasivas",
        "Equipo de última generación",
        "Personal altamente capacitado",
        "Recuperación monitoreada"
      ],
      includes: [
        "Evaluación pre-quirúrgica",
        "Procedimiento quirúrgico",
        "Monitoreo post-operatorio",
        "Medicamentos necesarios"
      ],
       price: "Preguntar mediante WhatsApp"
    }
  },
  {
    id: "oncologia",
    title: "Oncología",
    slug: "oncologia",
    description: "Tratamiento especializado contra el cáncer",
    services: 45,
    image: "/recursos/pets/loboBlanco.webp",
    className: "lg:col-span-2 row-span-1",
    details: {
      description: "Diagnóstico y tratamiento especializado de diferentes tipos de cáncer en mascotas.",
      benefits: [
        "Diagnóstico temprano",
        "Tratamientos personalizados",
        "Terapias innovadoras",
        "Cuidados paliativos"
      ],
      includes: [
        "Evaluación oncológica",
        "Pruebas diagnósticas",
        "Plan de tratamiento",
        "Seguimiento continuo"
      ],
  price: "Preguntar mediante WhatsApp"
    }
  },
  {
    id: "neurologia",
    title: "Neurología",
    slug: "neurologia",
    description: "Atención especializada en problemas neurológicos",
    services: 25,
    image: "/recursos/pets/loboMalo.webp",
    className: "lg:col-span-1 row-span-2",
    details: {
      description: "Diagnóstico y tratamiento de trastornos neurológicos en mascotas.",
      benefits: [
        "Diagnóstico preciso",
        "Tratamientos especializados",
        "Monitoreo continuo",
        "Rehabilitación neurológica"
      ],
      includes: [
        "Evaluación neurológica",
        "Pruebas diagnósticas",
        "Plan de tratamiento",
        "Terapia de rehabilitación"
      ],
       price: "Preguntar mediante WhatsApp"
    }
  },
  {
    id: "odontologia",
    title: "Odontología",
    slug: "odontologia",
    description: "Cuidado dental integral para mascotas",
    services: 25,
    image: "/recursos/pets/pugNegro.webp",
    className: "lg:col-span-2 row-span-1",
    details: {
      description: "Servicios dentales completos para mantener la salud bucal de tu mascota, desde limpiezas hasta procedimientos especializados.",
      benefits: [
        "Prevención de enfermedades dentales",
        "Tratamiento de problemas periodontales",
        "Extracciones cuando sea necesario",
        "Mejora del aliento y la higiene bucal"
      ],
      includes: [
        "Evaluación dental completa",
        "Limpieza dental profunda",
        "Radiografías dentales",
        "Recomendaciones de cuidado en casa"
      ],
      price: "Preguntar mediante WhatsApp"
    }
  },
  {
    id: "odontologia-2",
    title: "Odontología",
    slug: "odontologia-2",
    description: "Servicios dentales avanzados y especializados",
    services: 40,
    image: "/recursos/pets/perroDientes.webp",
    className: "lg:col-span-2 row-span-1",
    details: {
      description: "Servicios odontológicos avanzados con tecnología de última generación para el diagnóstico y tratamiento de problemas dentales complejos en mascotas.",
      benefits: [
        "Tratamientos dentales especializados",
        "Cirugía dental avanzada",
        "Control de enfermedades periodontales",
        "Prevención de problemas bucales"
      ],
      includes: [
        "Examen dental digital",
        "Limpieza dental ultrasónica",
        "Tratamientos especializados",
        "Plan de cuidado dental personalizado"
      ],
      price: "Preguntar mediante WhatsApp"
    }
  },
  {
    id: "ortopedia",
    title: "Ortopedia",
    slug: "ortopedia",
    description: "Tratamiento de problemas musculoesqueléticos",
    services: 85,
    image: "/recursos/pets/perroLobo.webp",
    className: "lg:col-span-1 row-span-1",
    details: {
      description: "Diagnóstico y tratamiento especializado de problemas óseos, articulares y musculares en mascotas.",
      benefits: [
        "Tratamiento de fracturas",
        "Corrección de problemas congénitos",
        "Cirugía articular",
        "Rehabilitación post-quirúrgica"
      ],
      includes: [
        "Evaluación ortopédica",
        "Radiografías especializadas",
        "Plan de tratamiento personalizado",
        "Seguimiento de recuperación"
      ],
      price: "Preguntar mediante WhatsApp"
    }
  },
  {
    id: "cardiologia",
    title: "Cardiología",
    slug: "cardiologia",
    description: "Atención especializada del corazón",
    services: 30,
    image: "/recursos/pets/gatoGris.webp",
    className: "lg:col-span-2 row-span-1",
    details: {
      description: "Diagnóstico y tratamiento de enfermedades cardíacas en mascotas, con tecnología avanzada y cuidado experto.",
      benefits: [
        "Detección temprana de problemas cardíacos",
        "Monitoreo continuo",
        "Tratamientos personalizados",
        "Control de enfermedades crónicas"
      ],
      includes: [
        "Ecocardiograma",
        "Electrocardiograma",
        "Consulta especializada",
        "Plan de tratamiento cardíaco"
      ],
      price: "Preguntar mediante WhatsApp"
    }
  },
  {
    id: "oftalmologia",
    title: "Oftalmología",
    slug: "oftalmologia",
    description: "Cuidado especializado de los ojos",
    services: 65,
    image: "/recursos/pets/perroOjos.webp",
    className: "lg:col-span-1 row-span-1",
    details: {
      description: "Atención completa para la salud ocular de tu mascota, desde exámenes rutinarios hasta cirugías especializadas.",
      benefits: [
        "Diagnóstico preciso de problemas oculares",
        "Tratamiento de enfermedades de la retina",
        "Cirugía ocular especializada",
        "Prevención de problemas visuales"
      ],
      includes: [
        "Examen oftalmológico completo",
        "Pruebas de presión ocular",
        "Evaluación de la retina",
        "Tratamientos específicos"
      ],
      price: "Preguntar mediante WhatsApp"
    }
  },
  {
    id: "dermatologia",
    title: "Dermatología",
    slug: "dermatologia",
    description: "Tratamiento de problemas de piel",
    services: 40,
    image: "/recursos/pets/perroChiguagua.webp",
    className: "lg:col-span-1 row-span-1",
    details: {
      description: "Diagnóstico y tratamiento de problemas dermatológicos en mascotas, desde alergias hasta infecciones cutáneas.",
      benefits: [
        "Diagnóstico de alergias",
        "Tratamiento de infecciones",
        "Control de problemas crónicos",
        "Mejora de la salud del pelaje"
      ],
      includes: [
        "Examen dermatológico",
        "Pruebas de alergia",
        "Tratamientos tópicos",
        "Plan de cuidado personalizado"
      ],
      price: "Preguntar mediante WhatsApp"
    }
  }
]; 