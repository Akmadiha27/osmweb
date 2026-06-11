/** API routes (same origin when Vite proxies to Express, or production on :3000). */
export const API = {
  NOTICES: '/api/notices',
  ENQUIRIES: '/api/enquiries',
}

export const LOGO_SRC = '/assets/images/osm-logo.svg'
export const SOCIETY_LOGO_SRC = '/assets/images/aeaws%20logo.svg'
export const SPORTSDAY_IMG = '/assets/images/sprtday.jpeg'
export const INDEPENDENCE_DAY_IMG = '/assets/images/indpday.jpeg'
export const AWARD_IMG = '/assets/images/award.jpeg'
export const FEL_IMG = '/assets/images/fel.jpeg'
export const DIRECTOR_IMG = '/assets/images/director.png'

export const PHONE_PRIMARY = '8096143890'
export const PHONE_SECONDARY = '9246283900'
export const COLLEGE_AFFILIATION = 'Recog. by T.G.B.I.E and Affiliated to Osmania University'
export const TEL_PRIMARY = `tel:${PHONE_PRIMARY}`
export const TEL_SECONDARY = `tel:${PHONE_SECONDARY}`
export const WHATSAPP_URL = `https://wa.me/91${PHONE_PRIMARY}`

/** Pre-filled WhatsApp message for the admissions enquiry form. */
export function buildEnquiryWhatsAppUrl({ name, email, phone, course_interest, message }) {
  const lines = [
    'Hello, I would like to enquire about admissions at OSM Junior & Degree College.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
  ]
  if (course_interest) lines.push(`Course interest: ${course_interest}`)
  if (message) lines.push(`Message: ${message}`)

  return `${WHATSAPP_URL}?text=${encodeURIComponent(lines.join('\n'))}`
}
