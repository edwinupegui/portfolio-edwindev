import { NextResponse } from 'next/server'

import { projects } from '@/app/lib/projects-data'

export async function GET() {
  return NextResponse.json(projects)
}
