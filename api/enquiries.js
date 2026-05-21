import { readJsonBody, sendJson, setCors } from '../lib/api-response.js'
import { insertEnquiry } from '../lib/enquiry-store.js'
import { parseEnquiryBody, validateEnquiry } from '../lib/validators.js'

export default async function handler(req, res) {
  setCors(res)

  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { ok: false, error: 'Method not allowed' })
    return
  }

  const body = await readJsonBody(req)
  if (body === null) {
    sendJson(res, 400, { ok: false, error: 'Invalid JSON body.' })
    return
  }

  const enquiry = parseEnquiryBody(body)
  const validationError = validateEnquiry(enquiry)
  if (validationError) {
    sendJson(res, 400, { ok: false, error: validationError })
    return
  }

  try {
    const id = await insertEnquiry({
      name: enquiry.name,
      email: enquiry.email,
      phone: enquiry.phone,
      course_interest: enquiry.course_interest || null,
      message: enquiry.message || null,
    })
    sendJson(res, 201, {
      ok: true,
      id: Number(id),
      message: 'Thank you. We will contact you soon.',
    })
  } catch (e) {
    if (e.code === 'DATABASE_NOT_CONFIGURED') {
      sendJson(res, 503, {
        ok: false,
        error: 'Enquiries are temporarily unavailable online. Please call 8096143890 or 9246283900.',
      })
      return
    }
    console.error(e)
    sendJson(res, 500, { ok: false, error: 'Could not save enquiry.' })
  }
}
