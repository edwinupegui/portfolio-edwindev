'use client'

import LeftPage from '../components/organisms/left/page'
import RightPage from '../components/organisms/right/page'
import { NextUIProvider } from '@nextui-org/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-scrollbar bg-[#171717]">
      <body className="bg-[#171717]">
        <NextUIProvider>
          <div className="mx-auto w-full lg:max-w-[90rem]">
            <div className="mb-10 mt-5 flex flex-col gap-4 px-5 md:flex-row">
              <LeftPage />
              {children}
              <RightPage />
            </div>
          </div>
        </NextUIProvider>
      </body>
    </html>
  )
}
