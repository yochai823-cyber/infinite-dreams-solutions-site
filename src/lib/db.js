import { neon } from '@neondatabase/serverless'

// Lazy initialization - לא מתחבר ל-DB ב-build time, רק ב-runtime
let sqlInstance = null

function initSql() {
  if (!sqlInstance) {
    const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL
    
    if (!connectionString) {
      throw new Error('DATABASE_URL or POSTGRES_URL is not defined')
    }
    
    sqlInstance = neon(connectionString)
  }
  
  return sqlInstance
}

// Wrapper שמאפשר שימוש ב-template literals כמו: sql`SELECT * FROM ...`
// neon מחזיר פונקציה שניתן לקרוא לה ישירות עם template literal
export const sql = (strings, ...values) => {
  const db = initSql()
  return db(strings, ...values)
}

// יצירת טבלאות אם לא קיימות (פועל בכל קריאה, אבל פקודת CREATE IF NOT EXISTS זולה יחסית)
export async function ensureSchema() {
  await sql`
    CREATE TABLE IF NOT EXISTS contact_requests (
      id BIGINT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      project_type TEXT,
      project_description TEXT NOT NULL,
      budget TEXT,
      timeline TEXT,
      additional_info TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `

  await sql`
    CREATE TABLE IF NOT EXISTS request_notes (
      id BIGINT PRIMARY KEY,
      request_id BIGINT NOT NULL REFERENCES contact_requests(id) ON DELETE CASCADE,
      text TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `

  await sql`
    CREATE TABLE IF NOT EXISTS analytics_events (
      id BIGSERIAL PRIMARY KEY,
      type TEXT NOT NULL,
      path TEXT,
      label TEXT,
      session_id TEXT,
      referrer TEXT,
      locale TEXT,
      device TEXT,
      user_agent TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `
  await sql`CREATE INDEX IF NOT EXISTS idx_analytics_created ON analytics_events(created_at);`
  await sql`CREATE INDEX IF NOT EXISTS idx_analytics_type ON analytics_events(type);`
}

