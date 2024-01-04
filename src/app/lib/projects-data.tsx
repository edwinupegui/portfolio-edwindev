export interface Project {
  projectId: number
  projectTitle: string
  projectDate: string
  projectImage: string
  projectDescription: string
  links: Links[]
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
    projectDate: `dic 2023 - jan 2024`,
    projectImage: '/edwin-icon-full-volumen.png',
    projectDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem eaque omnis fugiat. Quos deserunt ea
    totam odio mollitia, maiores nulla praesentium in, quo ut expedita voluptate nihil fugiat nam.`,
    links: [
      {
        icon: 'FaGithub',
        url: 'https://github.com/edwinupegui/shared-canvas',
        iconContent: 'Source Code',
      },
      {
        icon: 'BsPlayCircleFill',
        url: 'https://shared-canvas-edwindev.onrender.com/',
        iconContent: 'Live Demo',
      },
    ],
  },
  {
    projectId: 2,
    projectTitle: `Development Project 2`,
    projectDate: `sep 2016 - january 2020`,
    projectImage: '/edwin-icon-full-hd.png',
    projectDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem eaque omnis fugiat. Quos deserunt ea
    totam odio mollitia, maiores nulla praesentium in, quo ut expedita voluptate nihil fugiat nam.`,
    links: [
      {
        icon: 'FaGithub',
        url: 'https://github.com/edwinupegui',
        iconContent: 'Source Code',
      },
      {
        icon: 'BsPlayCircleFill',
        url: 'https://github.com/edwinupegui',
        iconContent: 'Live Demo',
      },
    ],
  },
  {
    projectId: 3,
    projectTitle: `Development Project 3`,
    projectDate: `sep 2016 - january 2020`,
    projectImage: '/edwin-icon-full-anime.png',
    projectDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem eaque omnis fugiat. Quos deserunt ea
    totam odio mollitia, maiores nulla praesentium in, quo ut expedita voluptate nihil fugiat nam.`,
    links: [
      {
        icon: 'FaGithub',
        url: 'https://github.com/edwinupegui',
        iconContent: 'Source Code',
      },
      {
        icon: 'BsPlayCircleFill',
        url: 'https://github.com/edwinupegui',
        iconContent: 'Live Demo',
      },
    ],
  },
  {
    projectId: 4,
    projectTitle: `Development Project 4`,
    projectDate: `sep 2016 - january 2020`,
    projectImage: '/edwin-icon-full-pixel-art-2.png',
    projectDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem eaque omnis fugiat. Quos deserunt ea
    totam odio mollitia, maiores nulla praesentium in, quo ut expedita voluptate nihil fugiat nam.`,
    links: [
      {
        icon: 'FaGithub',
        url: 'https://github.com/edwinupegui',
        iconContent: 'Source Code',
      },
      {
        icon: 'BsPlayCircleFill',
        url: 'https://github.com/edwinupegui',
        iconContent: 'Live Demo',
      },
    ],
  },
]
