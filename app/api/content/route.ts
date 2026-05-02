import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { supabase } from '@/lib/supabase'

const localFilePath = path.join(process.cwd(), 'data', 'content.json')

export async function GET() {
  // Try Supabase first if keys are present
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('content')
        .single()
      
      if (data) return NextResponse.json(data.content)
      if (error && error.code !== 'PGRST116') { // PGRST116 is 'no rows found'
        console.error('Supabase error:', error)
      }
    } catch (err) {
      console.error('Supabase fetch failed:', err)
    }
  }

  // Fallback to local JSON
  try {
    const fileContents = fs.readFileSync(localFilePath, 'utf8')
    return NextResponse.json(JSON.parse(fileContents))
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load content' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const newData = await request.json()

  // Update Supabase if keys are present
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    try {
      const { error } = await supabase
        .from('site_content')
        .upsert({ id: 1, content: newData })
      
      if (!error) return NextResponse.json({ message: 'Content updated in Supabase' })
      console.error('Supabase save error:', error)
    } catch (err) {
      console.error('Supabase save failed:', err)
    }
  }

  // Fallback/Parallel save to local JSON (useful for local dev)
  try {
    fs.writeFileSync(localFilePath, JSON.stringify(newData, null, 2), 'utf8')
    return NextResponse.json({ message: 'Content updated locally' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 })
  }
}
