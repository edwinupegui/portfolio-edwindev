import React, { ReactNode, useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { FaTerminal } from 'react-icons/fa6'
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui'
import { Accordion, AccordionItem } from '@nextui-org/react'

const TerminalModule = () => {
  const [terminalLineData, setTerminalLineData] = useState<ReactNode[]>([])
  const [terminalInput, setTerminalInput] = useState('')
  const [height, setHeight] = useState('100px')

  const terminalLine = [<TerminalOutput key={1}>EdwinDev@edwindev ~</TerminalOutput>]

  const itemClasses = {
    base: 'py-0 w-full md:w-[600px]',
    title: 'font-normal text-medium text-neutral-200',
    trigger: 'p-2 rounded-lg h-8 flex items-center',
    indicator: 'text-medium',
    content: 'text-small py-4',
  }

  useEffect(() => {
    if (terminalInput === 'help') {
      setHeight('120px')
      setTerminalLineData([<TerminalOutput key={1}>ayudas</TerminalOutput>])
    } else {
      setHeight('100px')
      setTerminalLineData([])
    }
  }, [terminalInput])

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
      className="sticky top-5 h-fit w-full rounded-2xl md:w-[600px]"
    >
      <div className="h-fit w-full rounded-xl">
        <Accordion
          showDivider={false}
          className="min-w-min rounded-xl border border-neutral-800 bg-[#1c1c1c] text-neutral-200"
          variant="shadow"
          itemClasses={itemClasses}
        >
          <AccordionItem
            key="1"
            aria-label="Connected devices"
            startContent={<FaTerminal className="text-lg" />}
            title="Command Terminal"
          >
            <div className="w-full">
              <Terminal
                name="Search Content"
                height={height}
                colorMode={ColorMode.Dark}
                onInput={(terminalInput) => setTerminalInput(terminalInput)}
              >
                <div className="flex flex-col gap-y-2">
                  {terminalLine}
                  {terminalLineData && terminalLineData.length > 0 && (
                    <div className="flex flex-col gap-y-2">
                      {`$ ${terminalInput}`}
                      {terminalLineData}
                    </div>
                  )}
                </div>
              </Terminal>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </motion.div>
  )
}

export default TerminalModule
