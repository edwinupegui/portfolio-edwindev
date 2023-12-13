import React from 'react'

import { PiMagicWandThin, PiShapesThin } from 'react-icons/pi'

const Bio = () => {
  return (
    <div className="px-10 lg:px-0">
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
    </div>
  )
}

export default Bio
