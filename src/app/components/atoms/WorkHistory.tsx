import React from 'react'

import { PiGoogleLogoThin } from 'react-icons/pi'
import { SiAdobe } from 'react-icons/si'

const WorkHistory = () => {
  return (
    <div className="my-4 px-10 lg:px-0">
      <h2 className="font-normal">Work History</h2>
      <div className="mt-7 flex justify-between">
        <div className="flex gap-x-3">
          <PiGoogleLogoThin className="text-xl" />
          <div className="-mt-1">
            <h3 className="text-sm font-medium">Sr. Developer</h3>
            <p className="text-[9px]">Google</p>
          </div>
        </div>
        <small className="text-[9px] text-neutral-300">sep 2016 - january 2020</small>
      </div>
      <div className="mt-7 flex justify-between">
        <div className="flex gap-x-3">
          <SiAdobe className="text-xl" />
          <div className="-mt-1">
            <h3 className="text-sm font-medium">Jr. Creative Dev</h3>
            <p className="text-[9px]">Adobe</p>
          </div>
        </div>
        <small className="text-[9px] text-neutral-300">sep 2016 - january 2020</small>
      </div>
    </div>
  )
}

export default WorkHistory
