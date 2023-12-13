import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Skills from '../../atoms/Skills'

const Projects = () => {
  const data = [
    {
      id: '1',
      image: '/edwin-icon-full-volumen.png',
      date: 'sep 2016 - january 2020',
      title: 'Jr. Creative Dev',
    },
    {
      id: '2',
      image: '/edwin-icon-full-hd.png',
      date: 'sep 2016 - january 2020',
      title: 'Jr. Creative Dev',
    },
    {
      id: '3',
      image: '/edwin-icon-full-anime.png',
      date: 'sep 2016 - january 2020',
      title: 'Jr. Creative Dev',
    },
    {
      id: '4',
      image: '/edwin-icon-full-pixel-art-2.png',
      date: 'sep 2016 - january 2020',
      title: 'Jr. Creative Dev',
    },
  ]

  return (
    <div className="h-full w-full rounded-2xl border border-neutral-800 bg-[#1C1C1C]">
      <div className="flex flex-col">
        {data.map((item, key) => (
          <div key={key}>
            <Link href={`/dashboard/${item.id}`}>
              <div className="m-2 flex cursor-pointer rounded-2xl py-3 hover:bg-neutral-800">
                <div className="rounded-md px-5">
                  <Image
                    width={70}
                    height={70}
                    className="w-fit rounded-md object-cover"
                    src={item.image}
                    alt="Pixel Art EdwinDev"
                  />
                </div>
                <div className="flex flex-col items-start justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-base font-medium">{item.title}</h3>
                    <small className="text-[9px] text-neutral-300">{item.date}</small>
                  </div>
                  <div>
                    <Skills isProject={true} />
                  </div>
                </div>
              </div>
            </Link>
            {key !== data.length - 1 && <div className="my-2 border border-[#282828] text-neutral-300"></div>}
            {key === data.length - 1 && <div className="my-2"></div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
