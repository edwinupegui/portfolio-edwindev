'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import Skills from '../atoms/Skills'
import clsx from 'clsx'
import { FaGithub } from 'react-icons/fa6'
import { FaHouse } from 'react-icons/fa6'
import { IoArrowBack } from 'react-icons/io5'
import { Avatar, Link } from '@nextui-org/react'

import useLoading from '@/app/hooks/useLoading'

interface IAvatarComponent {
  isMovile: boolean
}

const AvatarComponent = ({ isMovile }: IAvatarComponent) => {
  const { setLoading } = useLoading()
  const router = useRouter()
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
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700/50"
              >
                <FaHouse className="text-[18px] text-neutral-100" />
              </div>
            </Link>
            <div
              onClick={() => router.back()}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-700/50"
            >
              <IoArrowBack className="text-xl text-neutral-100" />
            </div>
          </div>
        )}
      </div>
      <Skills isMovile={isMovile} />
    </div>
  )
}

export default AvatarComponent
