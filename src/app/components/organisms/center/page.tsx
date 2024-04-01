'use client'

import React, { ReactNode, useEffect, useState } from 'react'

import Bio from '../../atoms/Bio'
import WorkHistory from '../../atoms/WorkHistory'
import AvatarComponent from '../../molecules/Avatar'
import Projects from '../../molecules/projects/Projects'
import { motion } from 'framer-motion'

import useTerminal from '@/app/hooks/useTerminal'

const CenterPage = () => {
  const { inputTerminal } = useTerminal()
  const [content, setContent] = useState<ReactNode>()

  useEffect(() => {
    switch (inputTerminal.toLowerCase()) {
      case 'all':
        setContent(
          <>
            <div className="block lg:hidden">
              <AvatarComponent isMovile={true} />
              <div className="mt-5 w-full text-neutral-300">
                <Bio />
                <div className="my-6 border border-[#282828] text-neutral-300"></div>
                <WorkHistory />
              </div>
              <div className="my-2 border border-[#282828] text-neutral-300"></div>
            </div>
            <Projects />
            {/* <div className="h-full w-full rounded-2xl border border-neutral-800 bg-[#1C1C1C]">bottom</div> */}
          </>,
        )
        break
      case 'projects':
        setContent(
          <>
            <Projects />
          </>,
        )
        break
      case 'my-info':
        setContent(
          <>
            <div className="block lg:hidden">
              <AvatarComponent isMovile={true} />
              <div className="mt-5 w-full text-neutral-300">
                <Bio />
                <div className="my-6 border border-[#282828] text-neutral-300"></div>
                <WorkHistory />
              </div>
              <div className="my-2 border border-[#282828] text-neutral-300"></div>
            </div>
          </>,
        )
        break
      default:
        setContent(
          <>
            <div className="block lg:hidden">
              <AvatarComponent isMovile={true} />
              <div className="mt-5 w-full text-neutral-300">
                <Bio />
                <div className="my-6 border border-[#282828] text-neutral-300"></div>
                <WorkHistory />
              </div>
              <div className="my-2 border border-[#282828] text-neutral-300"></div>
            </div>
            <Projects />
            {/* <div className="h-full w-full rounded-2xl border border-neutral-800 bg-[#1C1C1C]">bottom</div> */}
          </>,
        )
    }
  }, [inputTerminal])

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          delay: 0.3,
          display: 0.3,
          type: 'spring',
          stiffness: 200,
        },
      }}
      className="mt-5 flex w-full flex-col gap-3 rounded-2xl"
    >
      {content}
    </motion.div>
  )
}

export default CenterPage
