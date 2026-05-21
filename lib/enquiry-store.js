/** Storage for Vercel serverless (Postgres). Local Express uses enquiry-store-sqlite.js directly. */

function hasPostgres() {
  return Boolean(process.env.DATABASE_URL || process.env.POSTGRES_URL)
}

export async function insertEnquiry(row) {
  if (hasPostgres()) {
    const { insertEnquiry: insert } = await import('./enquiry-store-postgres.js')
    return insert(row)
  }

  const err = new Error(
    'Enquiry storage is not configured. Add Neon Postgres in Vercel (Storage) or set DATABASE_URL.',
  )
  err.code = 'DATABASE_NOT_CONFIGURED'
  throw err
}

export async function listEnquiries(limit) {
  if (hasPostgres()) {
    const { listEnquiries: list } = await import('./enquiry-store-postgres.js')
    return list(limit)
  }

  const err = new Error('Database not configured.')
  err.code = 'DATABASE_NOT_CONFIGURED'
  throw err
}
