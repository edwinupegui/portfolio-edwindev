import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Skills from '../../atoms/Skills'
import { VscBracketError } from 'react-icons/vsc'
import useSWRImmutable from 'swr/immutable'
import { Skeleton } from '@nextui-org/react'

import { Project } from '@/app/lib/projects-data'

const Projects = () => {
  const { data: projects, isLoading } = useSWRImmutable(`/api/projects`)

  return (
    <div className="h-full w-full rounded-2xl border border-neutral-800 bg-[#1C1C1C]">
      <div className="flex flex-col">
        {projects &&
          projects.length > 0 &&
          projects.map(({ projectDate, projectImage, projectTitle, projectId, technologies }: Project, key: number) => (
            <div key={key}>
              <Link href={`/dashboard/${projectId}`}>
                <div className="m-2 flex cursor-pointer rounded-2xl py-3 hover:bg-neutral-800">
                  <div className="rounded-md px-5">
                    <Image
                      width={70}
                      height={70}
                      className="w-fit rounded-md object-cover"
                      src={projectImage}
                      alt="Pixel Art EdwinDev"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-base font-medium">{projectTitle}</h3>
                      <small className="text-[9px] text-neutral-300">{projectDate}</small>
                    </div>
                    <div>
                      <Skills isProject={true} technologies={technologies} />
                    </div>
                  </div>
                </div>
              </Link>
              {key !== projects.length - 1 && <div className="my-2 border border-[#282828] text-neutral-300"></div>}
              {key === projects.length - 1 && <div className="my-2"></div>}
            </div>
          ))}
        {projects && projects.error === 'project no found' && (
          <div className="flex h-32 flex-col items-center justify-center gap-2">
            <VscBracketError className="text-4xl text-neutral-200" />
            <p className="text-xl font-semibold text-neutral-200">Project not found</p>
          </div>
        )}
        {isLoading && (
          <div className="ml-7 flex h-auto w-full max-w-[300px] items-end justify-start gap-3 py-10">
            <div>
              <Skeleton className="flex h-24 w-24 rounded-md bg-[#282828]" />
            </div>
            <div className="flex w-full flex-col items-start justify-end gap-4">
              <Skeleton className="h-3 w-8/12 rounded-md bg-[#282828]" />
              <Skeleton className="h-3 w-8/12 rounded-md bg-[#282828]" />
              <Skeleton className="h-3 w-10/12 rounded-md bg-[#282828]" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
