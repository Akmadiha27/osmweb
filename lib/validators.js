export function normalizeStr(s, max) {
  if (s == null) return ''
  const t = String(s).trim()
  return t.length > max ? t.slice(0, max) : t
}

export function isValidEmail(email) {
  if (!email || email.length > 254) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function isValidPhone(phone) {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 15
}

export function parseEnquiryBody(body) {
  const b = body || {}
  return {
    name: normalizeStr(b.name, 120),
    email: normalizeStr(b.email, 254).toLowerCase(),
    phone: normalizeStr(b.phone, 32),
    course_interest: normalizeStr(b.course_interest, 120),
    message: normalizeStr(b.message, 2000),
  }
}

export function validateEnquiry({ name, email, phone }) {
  if (!name) return 'Name is required.'
  if (!isValidEmail(email)) return 'Valid email is required.'
  if (!isValidPhone(phone)) return 'Valid phone number is required (10–15 digits).'
  return null
}
