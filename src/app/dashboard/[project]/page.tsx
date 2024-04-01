'use client'
import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { BsPlayCircleFill } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa6'
import { VscBracketError } from 'react-icons/vsc'
import useSWRImmutable from 'swr/immutable'
import { Link, Tooltip } from '@nextui-org/react'
import { Skeleton } from '@nextui-org/react'

import Skills from '@/app/components/atoms/Skills'
import TerminalModule from '@/app/components/molecules/terminal/Terminal'
import { Project } from '@/app/lib/projects-data'
type Params = {
  project: string
}

type Page = {
  params: Params
}

const ProjectPage = ({ params }: Page) => {
  const { data: project, isLoading } = useSWRImmutable(`/api/projects/${Number(params.project)}`)

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
      <div className="flex h-auto w-full flex-col items-center justify-center rounded-2xl border border-neutral-800 bg-[#1C1C1C] lg:w-[634px]">
        {project &&
          project.length > 0 &&
          project.map(({ links, projectDescription, projectImage, projectTitle, projectId, technologies }: Project) => (
            <div key={projectId} className="flex flex-col items-center justify-center gap-2 py-2">
              <h2 className="text-xl font-bold text-neutral-200">{projectTitle}</h2>
              <div className="px-10">
                <Skills isProject={true} technologies={technologies} />
              </div>
              <div className="rounded-md px-5 py-3">
                <Image
                  width={300}
                  height={50}
                  className="w-fit rounded-md object-cover"
                  src={projectImage}
                  alt="Image of project"
                />
              </div>
              <p className="px-10 py-5 text-base font-medium text-neutral-200">{projectDescription}</p>
              <div className="my-2 w-[87%] border border-[#282828] text-neutral-300"></div>
              <div className="mb-1 flex gap-x-4">
                {links.map((item, key) => (
                  <Tooltip
                    key={key}
                    showArrow
                    placement="top"
                    content={item.iconContent}
                    classNames={{
                      base: ['before:bg-neutral-400 dark:before:bg-white'],
                      content: ['p-2 px-4 shadow-xl', 'text-black bg-gradient-to-br from-white to-neutral-400'],
                    }}
                  >
                    <Link href={item.url} isExternal>
                      {(() => {
                        switch (item.icon) {
                          case 'BsPlayCircleFill':
                            return <BsPlayCircleFill className="text-2xl text-neutral-100" />
                          case 'FaGithub':
                            return <FaGithub className="text-2xl text-neutral-100" />
                          default:
                            return <FaGithub className="text-2xl text-neutral-100" />
                        }
                      })()}
                    </Link>
                  </Tooltip>
                ))}
              </div>
            </div>
          ))}
        {project && project.error === 'project no found' && (
          <div className="flex h-32 flex-col items-center justify-center gap-2">
            <VscBracketError className="text-4xl text-neutral-200" />
            <p className="text-xl font-semibold text-neutral-200">Project not found</p>
          </div>
        )}
        {isLoading && (
          <div className="flex h-auto w-full max-w-[300px] flex-col items-center justify-center gap-3 py-10">
            <div>
              <Skeleton className="flex h-32 w-32 rounded-md bg-[#282828]" />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <Skeleton className="h-3 w-5/6 rounded-md bg-[#282828]" />
              <Skeleton className="h-3 w-5/6 rounded-md bg-[#282828]" />
              <Skeleton className="h-3 w-4/6 rounded-md bg-[#282828]" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectPage
