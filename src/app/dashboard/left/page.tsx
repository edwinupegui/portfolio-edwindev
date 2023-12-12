'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import { motion, useAnimation } from 'framer-motion'
import {
  PiBookOpenTextLight,
  PiGoogleLogoThin,
  PiHouseLight,
  PiMagicWandThin,
  PiShapesThin,
  PiTwitterLogoLight,
} from 'react-icons/pi'
import { SiAdobe } from 'react-icons/si'
const LeftPage = () => {
  const [open, setOpen] = useState(false)

  const controls = useAnimation()

  const skills = ['ReactJS', 'NodeJS', 'Git', 'Framer Motion']

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, type: 'spring', stiffness: 200 },
      }}
      className="sticky top-5 hidden h-fit w-full rounded-2xl bg-[#1C1C1C] md:block md:w-80"
    >
      <div className="h-full w-full rounded-2xl border border-neutral-800 bg-[#1C1C1C] p-3 md:w-80">
        <div className="flex">
          <div className="relative w-full">
            <img className="h-28 w-28 rounded-full object-cover" src="/edwin-icon-full.png" alt="" />
            <div
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              className="absolute left-24 top-20 h-4 w-4 animate-pulse cursor-pointer rounded-full bg-lime-400"
            >
              {open && (
                <div className="absolute right-[-4.3rem] top-[-0.15rem] flex h-5 w-fit items-center justify-center rounded-2xl border border-lime-400 px-2">
                  <p className="text-[9px] font-medium text-lime-300">Open to work</p>
                </div>
              )}
            </div>
            <h1 className="mt-3 text-xl font-extrabold text-neutral-300">Edwin Dev</h1>
            <p className="mt-2 text-xs font-medium text-neutral-300">edwinupegui@gmail.com</p>
            <p className="mt-1 text-xs font-medium text-neutral-300">edwinupegui.dev</p>
            <div className="flex w-full">
              <div className="my-4 flex gap-x-1 text-xs">
                {skills.map((skill, key) => (
                  <p
                    key={key}
                    className="flex h-5 items-center justify-center rounded-md bg-[#282828] px-2 text-[11px] font-bold text-neutral-300"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <div className="flex h-fit w-full gap-x-1">
                <Link href={'/'}>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-700/50">
                    <PiHouseLight className="text-neutral-100" />
                  </div>
                </Link>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-700/50">
                  <PiBookOpenTextLight className="text-neutral-100" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className="hidden h-9 w-full items-center justify-between rounded-md bg-[#282828] p-1 md:flex">
          <input
            className="h-full w-36 bg-transparent pl-2 text-xs text-neutral-400 placeholder:text-xs placeholder:font-medium placeholder:text-neutral-600 focus:outline-none"
            type="text"
            placeholder="name@email.com"
          />

          <motion.button
            animate={controls}
            type="button"
            className="h-full w-20 rounded-md bg-[#696969] p-1 text-xs font-medium text-neutral-50"
          >
            Suscribete
          </motion.button>
        </form>
        <div className="mt-5 w-full text-neutral-300">
          <h2 className="my-4 font-bold">Bio</h2>
          <p className="my-3 text-[12px] font-normal">
            The world of digital ans <br /> development is constantly evolving and so <br /> has my role over the last 7
            years.
          </p>
          <div className="mt-6 flex justify-between text-sm">
            <div className="flex items-center gap-x-1">
              <PiShapesThin />
              <span className="text-xs font-normal">2 Years as a developer</span>
            </div>
            <div className="flex items-center gap-x-1">
              <PiMagicWandThin />
              <span className="text-xs font-normal">24 projects</span>
            </div>
          </div>
          <div className="my-6 border border-[#282828] text-neutral-300"></div>
          <div className="my-4">
            <h2 className="font-normal">Work History</h2>
            <div className="mt-7 flex justify-between">
              <div className="flex gap-x-3">
                <PiGoogleLogoThin className="text-xl" />
                <div className="-mt-1">
                  <h3 className="text-sm font-medium">Sr. Developer</h3>
                  <p className="text-[9px]">Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default LeftPage
