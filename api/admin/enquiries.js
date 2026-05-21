import { sendJson } from '../../lib/api-response.js'
import { listEnquiries } from '../../lib/enquiry-store.js'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    sendJson(res, 405, { ok: false, error: 'Method not allowed' })
    return
  }

  const adminSecret = process.env.ADMIN_SECRET || ''
  if (!adminSecret) {
    sendJson(res, 503, {
      ok: false,
      error: 'Admin API disabled. Set ADMIN_SECRET in the environment.',
    })
    return
  }

  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : req.headers['x-admin-secret']
  if (token !== adminSecret) {
    sendJson(res, 401, { ok: false, error: 'Unauthorized.' })
    return
  }

  const limit = req.query?.limit

  try {
    const rows = await listEnquiries(limit)
    sendJson(res, 200, { ok: true, count: rows.length, enquiries: rows })
  } catch (e) {
    if (e.code === 'DATABASE_NOT_CONFIGURED') {
      sendJson(res, 503, { ok: false, error: 'Database not configured.' })
      return
    }
    console.error(e)
    sendJson(res, 500, { ok: false, error: 'Could not read enquiries.' })
  }
}
