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

export const PHONE_PRIMARY = '8096143890'
export const PHONE_SECONDARY = '9246283900'
export const TEL_PRIMARY = `tel:${PHONE_PRIMARY}`
export const TEL_SECONDARY = `tel:${PHONE_SECONDARY}`
export const WHATSAPP_URL = `https://wa.me/91${PHONE_PRIMARY}`
