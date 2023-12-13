'use client'

import React from 'react'

import TerminalModule from '../components/molecules/terminal/Terminal'
import { NextUIProvider } from '@nextui-org/react'
const page = () => {
  return (
    <div className="flex flex-col">
      <NextUIProvider>
        <TerminalModule />
        <div className="h-10 w-full lg:w-[634px]">Hello from dashboard</div>
      </NextUIProvider>
    </div>
  )
}

export default page
