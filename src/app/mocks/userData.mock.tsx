import { ReactNode } from 'react'

import { IconType } from 'react-icons'
import { FaNodeJs } from 'react-icons/fa'
import { FaGitAlt, FaReact } from 'react-icons/fa6'
import { SiFramer } from 'react-icons/si'

export interface Skills {
  skillName: string
  skillIcon: IconType | ReactNode
  skillColor: string
}

export const skills: Skills[] = [
  {
    skillName: 'ReactJS',
    skillIcon: (<FaReact className="text-lg" />) as unknown as IconType,
    skillColor: 'react',
  },
  {
    skillName: 'NodeJS',
    skillIcon: (<FaNodeJs className="text-lg" />) as unknown as IconType,
    skillColor: 'node',
  },
  {
    skillName: 'Git',
    skillIcon: (<FaGitAlt className="text-lg" />) as unknown as IconType,
    skillColor: 'git',
  },
  {
    skillName: 'Framer Motion',
    skillIcon: (<SiFramer className="text-lg" />) as unknown as IconType,
    skillColor: 'framer',
  },
]
