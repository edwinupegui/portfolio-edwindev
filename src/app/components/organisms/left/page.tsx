'use client'
import React from 'react'

import Bio from '../../atoms/Bio'
import WorkHistory from '../../atoms/WorkHistory'
import AvatarComponent from '../../molecules/Avatar'
import { motion } from 'framer-motion'

const LeftPage = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
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
      className="sticky top-5 ml-5 hidden h-fit w-full rounded-2xl lg:block lg:w-[350px]"
    >
      <div className="h-full w-full rounded-2xl border border-neutral-800 bg-[#1C1C1C] p-3 lg:w-[350px]">
        <div className="flex">
          <AvatarComponent isMovile={false} />
        </div>
        <div className="mt-5 w-full text-neutral-300">
          <Bio />
          <div className="my-6 border border-[#282828] text-neutral-300"></div>
          <WorkHistory />
        </div>
      </div>
    </motion.div>
  )
}

export default LeftPage
