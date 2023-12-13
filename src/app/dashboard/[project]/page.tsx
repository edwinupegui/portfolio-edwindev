'use client'
import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { BsPlayCircleFill } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa6'
import { Link, Tooltip } from '@nextui-org/react'

import Skills from '@/app/components/atoms/Skills'
import TerminalModule from '@/app/components/molecules/terminal/Terminal'
type Params = {
  project: string
}

type Page = {
  params: Params
}

export default function projectPage({ params }: Page) {
  const projectData = [
    {
      projectId: '1',
      projectTitle: `Titulo del proyecto ${params.project}`,
      projectImage: '/edwin-icon-full-anime.png',
      projectDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem eaque omnis fugiat. Quos deserunt ea
      totam odio mollitia, maiores nulla praesentium in, quo ut expedita voluptate nihil fugiat nam.`,
      links: [
        {
          icon: <FaGithub className="text-2xl text-neutral-100" />,
          url: 'https://github.com/edwinupegui',
          iconContent: 'Source Code',
        },
        {
          icon: <BsPlayCircleFill className="text-2xl text-neutral-100" />,
          url: 'https://github.com/edwinupegui',
          iconContent: 'Live Demo',
        },
      ],
    },
  ]

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          delay: 0.3,
          display: 0.3,
          type: 'spring',
          stiffness: 200,
        },
      }}
      className="flex w-full flex-col gap-3 rounded-2xl lg:w-[634px]"
    >
      <TerminalModule />
      <div className="h-auto w-full rounded-2xl border border-neutral-800 bg-[#1C1C1C] lg:w-[634px]">
        {projectData.map((item, key) => (
          <div key={key} className="flex flex-col items-center justify-center gap-2 py-2">
            <h2 className="text-xl font-bold text-neutral-200">{item.projectTitle}</h2>
            <Skills isProject={true} />
            <div className="rounded-md px-5 py-3">
              <Image
                width={300}
                height={50}
                className="w-fit rounded-md object-cover"
                src={item.projectImage}
                alt="Pixel Art EdwinDev"
              />
            </div>
            <p className="px-10 py-5 text-base font-medium text-neutral-200">{item.projectDescription}</p>
            <div className="my-2 w-[87%] border border-[#282828] text-neutral-300"></div>
            <div className="mb-1 flex gap-x-4">
              {item.links.map((item, key) => (
                <Tooltip
                  key={key}
                  showArrow
                  placement="top"
                  content={item.iconContent}
                  classNames={{
                    base: [
                      // arrow color
                      'before:bg-neutral-400 dark:before:bg-white',
                    ],
                    content: ['p-2 px-4 shadow-xl', 'text-black bg-gradient-to-br from-white to-neutral-400'],
                  }}
                >
                  <Link href={item.url} isExternal>
                    {item.icon}
                  </Link>
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
