export interface Project {
  projectId: number
  projectTitle: string
  projectDate: string
  projectImage: string
  projectDescription: string
  links: Links[]
  technologies: string[]
}

export interface Links {
  icon: string
  url: string
  iconContent: string
}

export const projects: Project[] = [
  {
    projectId: 1,
    projectTitle: `Shared Canvas`,
    projectDate: `Diciembre 2023`,
    projectImage: '/projects/project-1.png',
    projectDescription: `Shared Canvas es un proyecto full-stack desarrollado con tecnologías JavaScript. Su objetivo es ofrecer una experiencia de lienzo compartido en tiempo real, permitiendo a los usuarios crear o unirse a salas para colaborar con amigos. Dentro de estas salas, los usuarios pueden chatear, dibujar y compartir imágenes de forma fluida, fomentando un entorno dinámico e interactivo.`,
    links: [
      {
        icon: 'FaGithub',
        url: 'https://github.com/edwinupegui/shared-canvas',
        iconContent: 'Source Code',
      },
      {
        icon: 'BsPlayCircleFill',
        url: 'https://shared-canvas.onrender.com/',
        iconContent: 'Live Demo',
      },
    ],
    technologies: ['TypeScript', 'React.js', 'Next.js', 'Taildwind CSS', 'Framer Motion', 'NodeJS', 'Express.js'],
  },
]
