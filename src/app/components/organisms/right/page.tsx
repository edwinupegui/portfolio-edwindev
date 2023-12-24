'use client'

import React from 'react'

import { motion, useAnimation } from 'framer-motion'
import { FaListCheck } from 'react-icons/fa6'
import { PiGithubLogoLight } from 'react-icons/pi'
import { SiCss3, SiFramer } from 'react-icons/si'
import { Accordion, AccordionItem } from '@nextui-org/react'

const RightPage = () => {
  const controls = useAnimation()

  const itemClasses = {
    base: 'py-0 w-full xl:w-[200px]',
    title: 'font-normal text-medium text-neutral-200',
    trigger: 'pl-2 rounded-lg h-8 flex items-center',
    indicator: 'text-medium',
    content: 'text-small py-4',
  }

  const listCommands = [
    {
      command: 'help',
      commandDescription: '~> List available commands',
    },
    {
      command: 'back',
      commandDescription: '~> Return to the previous page',
    },
    {
      command: 'all',
      commandDescription: '~> Get all home info',
    },
    {
      command: 'projects',
      commandDescription: '~> Get all projects',
    },
    {
      command: 'my-info',
      commandDescription: '~> Get my profesional info (only mobile)',
    },
  ]

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.5,
          display: 0.5,
          type: 'spring',
          stiffness: 200,
        },
      }}
      className="sticky top-5 hidden h-fit w-full rounded-2xl xl:block xl:w-[250px]"
    >
      <div className="h-full w-full rounded-2xl xl:w-[250px]">
        <div className="flex flex-col gap-y-3">
          <Accordion
            showDivider={false}
            className="min-w-min rounded-xl border border-neutral-800 bg-[#1c1c1c] text-neutral-200"
            variant="shadow"
            itemClasses={itemClasses}
          >
            <AccordionItem
              key="1"
              aria-label="Connected devices"
              startContent={<FaListCheck className="text-lg" />}
              title="Command List"
            >
              <div className="flex w-full flex-col">
                {listCommands.map((item, key) => (
                  <div key={key} className="my-2">
                    <h3 className="font-bold">{item.command}</h3>
                    <p className="text-sm font-normal">{item.commandDescription}</p>
                  </div>
                ))}
              </div>
            </AccordionItem>
          </Accordion>
          <div className="mt-2 min-w-min rounded-2xl border border-neutral-800 bg-[#1c1c1c] p-4 text-neutral-200">
            <h2 className="font-bold text-neutral-200">90+ Framer Shadows</h2>
            <p className="my-3 text-xs font-normal text-neutral-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque quasi soluta reprehenderit
              perferendis rem tempore.
            </p>
            <button className="h-7 w-full rounded-md bg-[#696969] p-1 text-xs font-medium ">
              <p className="text-neutral-50">Download</p>
            </button>
            <div className="my-5 border border-neutral-700"></div>
            <div className="flex flex-col gap-3 text-neutral-400">
              <h1 className="font-medium text-neutral-200">Featured in</h1>
              <div className="flex items-center gap-x-3 rounded-md p-2 hover:bg-neutral-800">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700/50">
                  <PiGithubLogoLight className="text-lg" />
                </div>
                <h3 className="text-xs">
                  9 Essentials JavaScript <br /> Functions
                </h3>
              </div>
              <div className="flex items-center gap-x-3 rounded-md p-2 hover:bg-neutral-800">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700/50">
                  <SiFramer className="text-lg" />
                </div>
                <h3 className="text-xs">
                  How to easily creat React <br /> animations: Framer Motion
                </h3>
              </div>
              <div className="flex items-center gap-x-3 rounded-md p-2 hover:bg-neutral-800">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700/50">
                  <SiCss3 className="text-lg" />
                </div>
                <h3 className="text-xs">TailwindCSS tips</h3>
              </div>
            </div>
          </div>
          <div className="min-w-min rounded-2xl border border-neutral-800 bg-[#1c1c1c] p-4 text-neutral-200">
            <h2 className="font-bold text-neutral-200">90+ Framer Shadows</h2>
            <p className="my-3 text-xs font-normal text-neutral-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque quasi soluta reprehenderit
              perferendis rem tempore, cumque nisi. At, totam. Alias pariatur ipsa suscipit fugiat veritatis eius eos a
              nulla.
            </p>
            <motion.button animate={controls} className="h-7 w-full rounded-md bg-[#696969] p-1 text-xs font-medium ">
              <p className="text-neutral-50">Download</p>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default RightPage
