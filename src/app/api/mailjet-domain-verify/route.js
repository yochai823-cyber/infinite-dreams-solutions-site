import { NextResponse } from 'next/server'

/**
 * אימות דומיין ב-Mailjet (קובץ ריק בנתיב השורש).
 * Mailjet שולף: https://yourdomain/1bafaf7b2e84a626ea96aec089273714.txt
 */
export function GET() {
  return new NextResponse('', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store, max-age=0',
    },
  })
}
