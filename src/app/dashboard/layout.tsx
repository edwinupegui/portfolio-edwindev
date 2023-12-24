'use client'
import LeftPage from '../components/organisms/left/page'
import RightPage from '../components/organisms/right/page'
import { SWRConfig } from 'swr'
import { NextUIProvider } from '@nextui-org/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-scrollbar bg-[#171717]">
      <body className="bg-[#171717]">
        <SWRConfig
          value={{
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
          }}
        >
          <NextUIProvider>
            <div className="mx-auto flex w-full justify-center lg:max-w-[90rem]">
              <div className="mb-10 mt-5 flex flex-col gap-4 px-5 lg:flex-row">
                <LeftPage />
                {children}
                <RightPage />
              </div>
            </div>
          </NextUIProvider>
        </SWRConfig>
      </body>
    </html>
  )
}
