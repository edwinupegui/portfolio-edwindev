'use client'

import React from 'react'
import Link from 'next/dist/client/link'

import { motion, useAnimation } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub, FaListCheck } from 'react-icons/fa6'
import { SiPlatzi } from 'react-icons/si'
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
            <h2 className="font-bold text-neutral-200">Descarga mi CV</h2>
            <p className="my-3 text-xs font-normal text-neutral-200">
              ¡Hola! Soy un apasionado desarrollador de software en busca de nuevos desafíos. Tengo experiencia en
              JavaScript, TypeScript, Node.js, React y más. ¡Descarga mi hoja de vida y descubre cómo puedo ser un gran
              aporte para tu equipo!
            </p>
            <motion.button animate={controls} className="h-7 w-full rounded-md bg-[#696969] p-1 text-xs font-medium">
              <a download>Descargar CV</a>
            </motion.button>
            <div className="my-5 border border-neutral-700"></div>
            <div className="flex flex-col gap-3 text-neutral-400">
              <h1 className="font-medium text-neutral-200">Mis Redes</h1>
              <Link target="_blank" href="https://github.com/edwinupegui">
                <div className="flex items-center gap-x-3 rounded-md p-2 hover:bg-neutral-800">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700/50">
                    <FaGithub className="text-lg" />
                  </div>
                  <h3 className="text-xs">GitHub</h3>
                </div>
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/in/edwin-arley-upegui-vergara-527656202/">
                <div className="flex items-center gap-x-3 rounded-md p-2 hover:bg-neutral-800">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700/50">
                    <FaLinkedin className="text-lg" />
                  </div>
                  <h3 className="text-xs">Linkedin</h3>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex min-w-min flex-col items-center justify-center gap-5 rounded-2xl border border-neutral-800 bg-[#1c1c1c] p-4 text-neutral-200">
            <h2 className="font-bold text-neutral-200">Mis cursos certificados</h2>
            <Link target="_blank" href="https://platzi.com/p/EdwinUpegui/">
              <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-neutral-700/50">
                <SiPlatzi className="text-4xl hover:text-[#98ca3f]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default RightPage
