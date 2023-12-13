'use client'
import React, { useState } from 'react'

import Skills from '../atoms/Skills'
import clsx from 'clsx'
import { FaGithub } from 'react-icons/fa6'
import { PiHouseLight } from 'react-icons/pi'
import { Avatar, Link } from '@nextui-org/react'

import useLoading from '@/app/hooks/useLoading'

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
          {!isMovile && (
            <div
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              className={'absolute left-24 top-20 h-4 w-4 animate-pulse cursor-pointer rounded-full bg-lime-400'}
            >
              {open && (
                <div
                  className={
                    'absolute right-[-4.3rem] top-[-0.15rem]  flex h-5 w-fit items-center justify-center rounded-2xl border border-lime-400 px-2'
                  }
                >
                  <p className="text-[9px] font-medium text-lime-300">Open to work</p>
                </div>
              )}
            </div>
          )}
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
      <Skills isMovile={isMovile} />
    </div>
  )
}

export default AvatarComponent
