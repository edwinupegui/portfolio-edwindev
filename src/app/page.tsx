'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import useLoading from './hooks/useLoading'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa6'
import { PiHouseLight } from 'react-icons/pi'

export default function Home() {
  const { loading, setLoading } = useLoading()

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <main>
      {loading ? (
        <div className="container mx-auto flex h-screen items-center justify-center p-10">
          <div className="Box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.1,
              delay: 0.1,
              display: 0.1,
              type: 'spring',
              stiffness: 200,
            },
          }}
        >
          <div className="mb-32 md:mb-0">
            <div className="top-28 mx-auto flex w-full flex-col items-center justify-center p-5 md:fixed">
              <div className="rounded-full bg-neutral-600">
                <Image
                  width={150}
                  height={150}
                  className="w-fit rounded-full object-cover"
                  src="/edwin-icon-full.png"
                  alt="Pixel Art EdwinDev"
                />
              </div>
              <h1 className="shine my-9 text-center text-6xl font-extrabold">EdwinDev Portafolio</h1>
              <p className="text-center font-normal text-neutral-400 lg:max-w-xl">
                Soy un apasionado desarrollador de software con especialización en tecnologías JavaScript, incluyendo
                TypeScript, Node.js, React, React Native, Next.js, Express.js y NestJS. Además, tengo experiencia en
                Dart, Flutter, PostgreSQL, GraphQL y MongoDB. Siempre estoy buscando nuevos desafíos y oportunidades de
                aprendizaje en el mundo de la programación, y estoy comprometido con el desarrollo de soluciones
                innovadoras y de alta calidad.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="fixed bottom-7 flex gap-x-5 rounded-lg border border-neutral-600 p-2 text-neutral-500">
                <Link href={'/dashboard'}>
                  <span onClick={() => setLoading(true)}>
                    <PiHouseLight className="text-4xl" />
                  </span>
                </Link>

                <Link target="_blank" href="https://github.com/edwinupegui">
                  <span>
                    <FaGithub className="text-4xl" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </main>
  )
}
