import { ReactNode } from 'react'

import { IconType } from 'react-icons'
import { FaNodeJs } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaGitAlt, FaReact } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiFramer } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiDart } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiFlutter } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiNestjs } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

export interface Skills {
  skillName: string
  skillIcon: IconType | ReactNode
  skillColor: string
}

export const languageSkills: Skills[] = [
  {
    skillName: 'HTML',
    skillIcon: (<FaHtml5 className="text-lg" />) as unknown as IconType,
    skillColor: 'html',
  },
  {
    skillName: 'CSS',
    skillIcon: (<FaCss3Alt className="text-lg" />) as unknown as IconType,
    skillColor: 'css',
  },
  {
    skillName: 'JavaScript',
    skillIcon: (<IoLogoJavascript className="text-lg" />) as unknown as IconType,
    skillColor: 'javascript',
  },
  {
    skillName: 'TypeScript',
    skillIcon: (<SiTypescript className="text-lg" />) as unknown as IconType,
    skillColor: 'typescript',
  },
  {
    skillName: 'NodeJS',
    skillIcon: (<FaNodeJs className="text-lg" />) as unknown as IconType,
    skillColor: 'node',
  },
  {
    skillName: 'Dart',
    skillIcon: (<SiDart className="text-lg" />) as unknown as IconType,
    skillColor: 'dart',
  },
]

export const frameworksSkills: Skills[] = [
  {
    skillName: 'React.js',
    skillIcon: (<FaReact className="text-lg" />) as unknown as IconType,
    skillColor: 'react',
  },
  {
    skillName: 'React Native',
    skillIcon: (<FaReact className="text-lg" />) as unknown as IconType,
    skillColor: 'react',
  },
  {
    skillName: 'Next.js',
    skillIcon: (<TbBrandNextjs className="text-lg" />) as unknown as IconType,
    skillColor: 'nextjs',
  },
  {
    skillName: 'Taildwind CSS',
    skillIcon: (<SiTailwindcss className="text-lg" />) as unknown as IconType,
    skillColor: 'taildwind',
  },
  {
    skillName: 'Framer Motion',
    skillIcon: (<SiFramer className="text-lg" />) as unknown as IconType,
    skillColor: 'framer',
  },
  {
    skillName: 'Flutter',
    skillIcon: (<SiFlutter className="text-lg" />) as unknown as IconType,
    skillColor: 'flutter',
  },
  {
    skillName: 'Express.js',
    skillIcon: (<SiExpress className="text-lg" />) as unknown as IconType,
    skillColor: 'express',
  },
  {
    skillName: 'NestJS',
    skillIcon: (<SiNestjs className="text-lg" />) as unknown as IconType,
    skillColor: 'nestjs',
  },
]

export const toolsSkills: Skills[] = [
  {
    skillName: 'Git',
    skillIcon: (<FaGitAlt className="text-lg" />) as unknown as IconType,
    skillColor: 'git',
  },
]

export const allSkills: Skills[] = [...languageSkills, ...frameworksSkills, ...toolsSkills]
