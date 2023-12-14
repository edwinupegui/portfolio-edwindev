import { NextResponse } from 'next/server'

import { projects } from '@/app/lib/projects-data'

export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf('/') + 1)
  const project = projects.filter((project) => project.projectId === Number(id))
  if (project.length === 0) return NextResponse.json({ error: 'project no found' }, { status: 404 })

  return NextResponse.json(project)
}
