import fs from 'fs';
import express from 'express';
import path from 'path';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { fileURLToPath } from 'url';
import { insertEnquiry, listEnquiries } from '../lib/enquiry-store-sqlite.js';
import { NOTICE_ITEMS } from '../lib/notices.js';
import { parseEnquiryBody, validateEnquiry } from '../lib/validators.js';

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

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'osm-college-site' });
});

app.get('/api/notices', (_req, res) => {
  res.json({ items: NOTICE_ITEMS });
});

app.post('/api/enquiries', enquiryLimiter, (req, res) => {
  const enquiry = parseEnquiryBody(req.body);
  const validationError = validateEnquiry(enquiry);
  if (validationError) {
    return res.status(400).json({ ok: false, error: validationError });
  }

  try {
    const id = insertEnquiry({
      name: enquiry.name,
      email: enquiry.email,
      phone: enquiry.phone,
      course_interest: enquiry.course_interest || null,
      message: enquiry.message || null,
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
