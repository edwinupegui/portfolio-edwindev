import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Edwin Dev Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-scrollbar bg-[#171717]">
      <body className="bg-[#171717]">{children}</body>
    </html>
  )
}
