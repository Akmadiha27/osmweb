import fs from 'fs';
import express from 'express';
import path from 'path';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { fileURLToPath } from 'url';
import { insertEnquiry, listEnquiries } from './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const clientDist = path.join(rootDir, 'client', 'dist');
const clientIndex = path.join(clientDist, 'index.html');
const PORT = Number(process.env.PORT) || 3000;

if (!fs.existsSync(clientIndex)) {
  console.error(
    'Missing React build: client/dist/index.html\nRun: npm run build --prefix client\n(or: npm run build:client from the server folder)',
  );
  process.exit(1);
}
const ADMIN_SECRET = process.env.ADMIN_SECRET || '';

const app = express();
app.disable('x-powered-by');
app.use(cors({ origin: true }));
app.use(express.json({ limit: '32kb' }));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

const enquiryLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 15,
  message: { ok: false, error: 'Too many requests. Try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

function normalizeStr(s, max) {
  if (s == null) return '';
  const t = String(s).trim();
  return t.length > max ? t.slice(0, max) : t;
}

function isValidEmail(email) {
  if (!email || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'osm-college-site' });
});

app.get('/api/notices', (_req, res) => {
  res.json({
    items: [
      {
        text:
          '🎓 Admissions Open for 2026–27 | Intermediate: MPC, BiPC, MEC, CEC | Degree: B.Com, BBA, BCA, B.Sc | JEE / NEET / EAMCET Guidance | Transport for Girls | Call: 8096143890 / 9246283900',
      },
    ],
  });
});

app.post('/api/enquiries', enquiryLimiter, (req, res) => {
  const body = req.body || {};
  const name = normalizeStr(body.name, 120);
  const email = normalizeStr(body.email, 254).toLowerCase();
  const phone = normalizeStr(body.phone, 32);
  const courseInterest = normalizeStr(body.course_interest, 120);
  const message = normalizeStr(body.message, 2000);

  if (!name) {
    return res.status(400).json({ ok: false, error: 'Name is required.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: 'Valid email is required.' });
  }
  if (!isValidPhone(phone)) {
    return res
      .status(400)
      .json({ ok: false, error: 'Valid phone number is required (10–15 digits).' });
  }

  try {
    const id = insertEnquiry({
      name,
      email,
      phone,
      course_interest: courseInterest || null,
      message: message || null,
    });
    return res.status(201).json({
      ok: true,
      id: Number(id),
      message: 'Thank you. We will contact you soon.',
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: 'Could not save enquiry.' });
  }
});

app.get('/api/admin/enquiries', (req, res) => {
  if (!ADMIN_SECRET) {
    return res.status(503).json({
      ok: false,
      error: 'Admin API disabled. Set ADMIN_SECRET in the environment.',
    });
  }
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : req.headers['x-admin-secret'];
  if (token !== ADMIN_SECRET) {
    return res.status(401).json({ ok: false, error: 'Unauthorized.' });
  }
  const limit = req.query.limit;
  try {
    const rows = listEnquiries(limit);
    return res.json({ ok: true, count: rows.length, enquiries: rows });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: 'Could not read enquiries.' });
  }
});

app.use(express.static(clientDist));
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ ok: false, error: 'Not found' });
  }
  res.sendFile(clientIndex);
});

app.listen(PORT, () => {
  console.log(`OSM site (React): http://localhost:${PORT}`);
  console.log('Serving client/dist');
  if (!ADMIN_SECRET) {
    console.log('Tip: set ADMIN_SECRET to enable GET /api/admin/enquiries');
  }
});
