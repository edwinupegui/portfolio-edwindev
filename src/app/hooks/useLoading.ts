import { create } from 'zustand'

interface Loading {
  loading: boolean
  setLoading: (data: boolean) => void
}
const useStepper = create<Loading>((set) => ({
  loading: false,
  setLoading: (data: boolean) => set(() => ({ loading: data })),
}))

export default useStepper
