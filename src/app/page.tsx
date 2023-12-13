'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import useLoading from './hooks/useLoading'
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
        <div>
          <div className="fixed top-28 mx-auto flex w-full flex-col items-center justify-center p-5">
            <div className="rounded-full bg-neutral-600">
              <Image
                width={200}
                height={200}
                className="w-fit rounded-full object-cover"
                src="/edwin-icon-full.png"
                alt="Pixel Art EdwinDev"
              />
            </div>
            <h1 className="shine my-9 text-center text-6xl font-extrabold">EdwinDev Portfolio</h1>
            <p className="text-center font-normal text-neutral-400 lg:max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, autem deleniti itaque non vitae at
              facilis aperiam sunt provident magnam esse aut, a perferendis neque quo doloribus molestiae laboriosam
              illo.
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
      )}
    </main>
  )
}
