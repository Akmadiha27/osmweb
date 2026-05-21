import Database from 'better-sqlite3'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDir = path.join(__dirname, '..', 'server', 'data')
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })

const dbPath = path.join(dataDir, 'osm-site.db')
const db = new Database(dbPath)

db.exec(`
  CREATE TABLE IF NOT EXISTS enquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    course_interest TEXT,
    message TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  );
  CREATE INDEX IF NOT EXISTS idx_enquiries_created ON enquiries(created_at DESC);
`)

export function insertEnquiry(row) {
  const stmt = db.prepare(`
    INSERT INTO enquiries (name, email, phone, course_interest, message)
    VALUES (@name, @email, @phone, @course_interest, @message)
  `)
  const info = stmt.run(row)
  return info.lastInsertRowid
}

export function listEnquiries(limit = 200) {
  return db
    .prepare(
      `SELECT id, name, email, phone, course_interest, message, created_at
       FROM enquiries ORDER BY id DESC LIMIT ?`,
    )
    .all(Math.min(Math.max(Number(limit) || 200, 1), 500))
}
