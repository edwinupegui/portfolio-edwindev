import React from 'react'

import { TbLetterQ } from 'react-icons/tb'

const WorkHistory = () => {
  return (
    <div className="my-4 px-5 lg:px-0">
      <h2 className="font-normal">Historial de trabajo</h2>
      <div className="mt-7 flex justify-between">
        <div className="flex gap-x-3">
          <TbLetterQ className="text-xl" />
          <div className="-mt-1">
            <h3 className="text-sm font-medium">Front-End Developer</h3>
            <p className="text-[12px]">Q Code</p>
          </div>
        </div>
        <small className="text-[9px] text-neutral-300">Abril 2022 - Actualidad</small>
      </div>
    </div>
  )
}

export default WorkHistory
