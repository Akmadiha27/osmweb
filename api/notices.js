import { sendJson } from '../lib/api-response.js'
import { NOTICE_ITEMS } from '../lib/notices.js'

export default function handler(_req, res) {
  sendJson(res, 200, { items: NOTICE_ITEMS })
}
