import nodemailer from 'nodemailer';
import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Load environment variables from .env
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
      const [key, ...values] = trimmed.split('=');
      const val = values.join('=').trim().replace(/^["']|["']$/g, '');
      if (!process.env[key.trim()]) {
        process.env[key.trim()] = val;
      }
    }
  }
}

const GMAIL_USER = process.env.GMAIL_USER || 'aditya.rathore10101@gmail.com';
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || '19edb32d-5a5d-4a09-9b6b-6de9106e78e5';

if (!GMAIL_APP_PASSWORD) {
  console.error('Error: GMAIL_APP_PASSWORD is not set in .env');
  process.exit(1);
}

// 2. Setup Google SMTP Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
});

// Helper to query Resend Audience for subscribers
function getResendSubscribers() {
  return new Promise((resolve) => {
    if (!RESEND_API_KEY) {
      resolve([]);
      return;
    }

    const options = {
      hostname: 'api.resend.com',
      path: `/audiences/${AUDIENCE_ID}/contacts`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body || '{}');
          const list = (parsed.data || [])
            .filter((c) => !c.unsubscribed)
            .map((c) => c.email);
          resolve(list);
        } catch {
          resolve([]);
        }
      });
    });

    req.on('error', () => resolve([]));
    req.end();
  });
}

async function run() {
  console.log('📡 Fetching subscriber list from Resend Audience...');
  const emails = await getResendSubscribers();

  if (emails.length === 0) {
    console.log('No active subscribers found in Audience.');
    return;
  }

  console.log(`Found ${emails.length} subscriber(s):`, emails);

  // Customize blog title, link, and preview for the update
  const blog = {
    number: '2',
    title: 'How I Got My First Client',
    date: "Oct '26",
    link: 'https://codex.is-a.dev/blogs/how-i-got-my-first-client/',
    preview: "So, as you know, I'm a software engineer and web developer. But the first proper client I got wanted me to edit his videos of hotels. Here is the full story of client zero, pricing, and lessons learned.",
  };

  console.log(`\n✉️  Sending update from ${GMAIL_USER} via Google SMTP...`);

  for (const recipient of emails) {
    try {
      const info = await transporter.sendMail({
        from: `"Aditya Rathore" <${GMAIL_USER}>`,
        to: recipient,
        subject: `New Note: ${blog.title} 🚀`,
        headers: {
          'List-Unsubscribe': `<mailto:${GMAIL_USER}?subject=Unsubscribe%20${recipient}>`,
          'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
        },
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 580px; margin: 0 auto; padding: 32px 24px; background-color: #FAF8F5; border-radius: 16px; border: 1px solid #EAE5D9;">
            <div style="font-family: monospace; font-size: 11px; color: #8C867E; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
              #${blog.number} · ${blog.date}
            </div>
            <h2 style="color: #161514; margin-top: 0; margin-bottom: 16px; font-size: 24px; font-weight: 700; letter-spacing: -0.02em;">
              ${blog.title}
            </h2>
            <p style="color: #383633; font-size: 15px; line-height: 1.7; margin-bottom: 24px;">
              ${blog.preview}
            </p>
            <div style="margin: 28px 0;">
              <a href="${blog.link}" style="display: inline-block; padding: 12px 24px; background-color: #161514; color: #FAF8F5; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 14px;">
                Read the note &rarr;
              </a>
            </div>
            <div style="border-top: 1px solid #E5E0D5; padding-top: 16px; margin-top: 32px; font-size: 12px; color: #8C867E; font-family: monospace;">
              Direct from Aditya's personal inbox · You subscribed on codex.is-a.dev
            </div>
          </div>
        `,
      });

      console.log(`✓ Delivered to ${recipient} (Response: ${info.response})`);
    } catch (err) {
      console.error(`✗ Error sending to ${recipient}:`, err.message);
    }
  }

  console.log('\nAll emails sent successfully via Gmail!');
}

run().catch(console.error);
