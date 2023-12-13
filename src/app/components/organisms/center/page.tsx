'use client'

import React from 'react'

import Bio from '../../atoms/Bio'
import WorkHistory from '../../atoms/WorkHistory'
import AvatarComponent from '../../molecules/Avatar'
import { motion } from 'framer-motion'

const CenterPage = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 1,
          display: 0.6,
          type: 'spring',
          stiffness: 200,
        },
      }}
      className="mt-5 flex w-full flex-col gap-3 rounded-2xl"
    >
      <div className="block lg:hidden">
        <AvatarComponent isMovile={true} />
        <div className="mt-5 w-full text-neutral-300">
          <Bio />
          <div className="my-6 border border-[#282828] text-neutral-300"></div>
          <WorkHistory />
        </div>
        <div className="my-2 border border-[#282828] text-neutral-300"></div>
      </div>
      <div className="h-full w-full rounded-2xl border border-neutral-800 bg-[#1C1C1C]">center</div>
      <div className="h-full w-full rounded-2xl border border-neutral-800 bg-[#1C1C1C]">bottom</div>
    </motion.div>
  )
}

export default CenterPage
