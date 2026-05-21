import { neon } from '@neondatabase/serverless'

let sql
let schemaReady = false

function getSql() {
  if (!sql) {
    const url = process.env.DATABASE_URL || process.env.POSTGRES_URL
    if (!url) {
      throw Object.assign(new Error('Database URL not configured.'), { code: 'DATABASE_NOT_CONFIGURED' })
    }
    sql = neon(url)
  }
  return sql
}

async function ensureSchema() {
  if (schemaReady) return
  const query = getSql()
  await query`
    CREATE TABLE IF NOT EXISTS enquiries (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      course_interest TEXT,
      message TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `
  schemaReady = true
}

export async function insertEnquiry(row) {
  await ensureSchema()
  const query = getSql()
  const rows = await query`
    INSERT INTO enquiries (name, email, phone, course_interest, message)
    VALUES (
      ${row.name},
      ${row.email},
      ${row.phone},
      ${row.course_interest},
      ${row.message}
    )
    RETURNING id
  `
  return rows[0]?.id
}

export async function listEnquiries(limit = 200) {
  await ensureSchema()
  const cap = Math.min(Math.max(Number(limit) || 200, 1), 500)
  const query = getSql()
  return query`
    SELECT id, name, email, phone, course_interest, message, created_at
    FROM enquiries
    ORDER BY id DESC
    LIMIT ${cap}
  `
}
