/* eslint-disable tailwindcss/no-custom-classname */
'use client'
import React, { ReactNode, useState } from 'react'

import clsx from 'clsx'
import { FaGithub } from 'react-icons/fa6'
import { PiHouseLight } from 'react-icons/pi'
import { Avatar, Link } from '@nextui-org/react'

import useLoading from '@/app/hooks/useLoading'
import { skills } from '@/app/mocks/userData.mock'

interface IAvatarComponent {
  isMovile: boolean
}

const AvatarComponent = ({ isMovile }: IAvatarComponent) => {
  const { setLoading } = useLoading()
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className={clsx('relative w-full', isMovile && 'flex flex-col items-center gap-x-5')}>
          <Avatar className="h-28 w-28 rounded-full object-cover" src="/edwin-icon-full-mini.png" alt="edwin-icon" />
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={clsx(
              'absolute h-4 w-4 animate-pulse cursor-pointer rounded-full bg-lime-400',
              isMovile ? 'right-[16.5rem] top-20' : 'left-24 top-20',
            )}
          >
            {open && (
              <div
                className={clsx(
                  'absolute flex h-5  items-center justify-center rounded-2xl border border-lime-400 px-2',
                  isMovile ? 'left-3 top-[-0.15rem] w-20' : 'right-[-4.3rem] top-[-0.15rem] w-fit',
                )}
              >
                <p className="text-[9px] font-medium text-lime-300">Open to work</p>
              </div>
            )}
          </div>
          <h1 className="mt-3 text-xl font-extrabold text-neutral-300">Edwin Upegui</h1>
          {isMovile && (
            <Link
              href="https://github.com/edwinupegui"
              size="sm"
              className="my-1 flex gap-1 font-medium text-neutral-300"
            >
              <FaGithub className="text-lg" /> <p>edwinupegui</p>
            </Link>
          )}
        </div>
        {!isMovile && (
          <div className="flex h-fit w-full justify-end gap-x-1">
            <Link href={'/'}>
              <div
                onClick={() => setLoading(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-700/50"
              >
                <PiHouseLight className="text-neutral-100" />
              </div>
            </Link>
            <Link href="https://github.com/edwinupegui" isExternal>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-700/50">
                <FaGithub className="text-neutral-100" />
              </div>
            </Link>
          </div>
        )}
      </div>
      <div className={clsx('flex w-full', isMovile && 'justify-center')}>
        <div className={clsx('my-4 flex flex-wrap gap-3 gap-x-1 text-xs')}>
          {skills.map((skill, key) => (
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
    </div>
  )
}

export default AvatarComponent
