/* eslint-disable tailwindcss/no-custom-classname */
import React, { ReactNode } from 'react'

import clsx from 'clsx'

import { allSkills, frameworksSkills, languageSkills } from '@/app/mocks/userData.mock'

interface ISkills {
  isMovile?: boolean
  isProject?: boolean
  technologies?: string[]
}

const Skills = ({ isMovile, isProject, technologies }: ISkills) => {
  let projectSkills
  if (technologies) projectSkills = allSkills.filter((skill) => technologies.includes(skill.skillName))
  return (
    <>
      {isProject && projectSkills ? (
        <>
          <div className={clsx('flex w-full', (isMovile || isProject) && 'justify-center')}>
            <div className={clsx('my-4 flex flex-wrap gap-3 gap-x-1 text-xs')}>
              {projectSkills.map((skill, key) => (
                <span
                  key={key}
                  className="flex h-7 shrink-0 items-center justify-center rounded-md bg-[#282828] p-2 text-[11px] font-bold text-neutral-300"
                >
                  <div className={`avatar-color-${skill.skillColor} flex items-center justify-center gap-1`}>
                    {skill.skillIcon as ReactNode}
                    {skill.skillName}
                  </div>
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={clsx('flex w-full', (isMovile || isProject) && 'justify-center')}>
            <div className={clsx('my-4 flex flex-wrap gap-3 gap-x-1 text-xs')}>
              {languageSkills.map((skill, key) => (
                <span
                  key={key}
                  className="flex h-7 shrink-0 items-center justify-center rounded-md bg-[#282828] p-2 text-[11px] font-bold text-neutral-300"
                >
                  <div className={`avatar-color-${skill.skillColor} flex items-center justify-center gap-1`}>
                    {skill.skillIcon as ReactNode}
                    {skill.skillName}
                  </div>
                </span>
              ))}
            </div>
          </div>
          <div className={clsx('flex w-full', (isMovile || isProject) && 'justify-center')}>
            <div className={clsx('my-4 flex flex-wrap gap-3 gap-x-1 text-xs')}>
              {frameworksSkills.map((skill, key) => (
                <span
                  key={key}
                  className="flex h-7 shrink-0 items-center justify-center rounded-md bg-[#282828] p-2 text-[11px] font-bold text-neutral-300"
                >
                  <div className={`avatar-color-${skill.skillColor} flex items-center justify-center gap-1`}>
                    {skill.skillIcon as ReactNode}
                    {skill.skillName}
                  </div>
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Skills
