import { sendJson } from '../lib/api-response.js'

export default function handler(_req, res) {
  sendJson(res, 200, { ok: true, service: 'osm-college-site' })
}
