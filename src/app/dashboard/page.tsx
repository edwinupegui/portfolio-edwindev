'use client'

import React from 'react'

import TerminalModule from '../components/molecules/terminal/Terminal'
import CenterPage from '../components/organisms/center/page'
import { NextUIProvider } from '@nextui-org/react'
const page = () => {
  return (
    <div className="flex flex-col">
      <NextUIProvider>
        <TerminalModule />
        <div className="h-auto w-full text-white lg:w-[634px]">
          <CenterPage />
        </div>
      </NextUIProvider>
    </div>
  )
}

export default page
