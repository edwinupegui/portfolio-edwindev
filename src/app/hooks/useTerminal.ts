import { create } from 'zustand'

type TerminalOptions = 'all' | 'projects' | 'my-info'

interface Terminal {
  inputTerminal: TerminalOptions
  setInputTerminal: (data: TerminalOptions) => void
}
const useTerminal = create<Terminal>((set) => ({
  inputTerminal: 'all',
  setInputTerminal: (data: TerminalOptions) => set(() => ({ inputTerminal: data })),
}))

export default useTerminal
