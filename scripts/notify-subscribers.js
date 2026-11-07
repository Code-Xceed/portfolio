import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env manually if not in process.env
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

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || '19edb32d-5a5d-4a09-9b6b-6de9106e78e5';

if (!RESEND_API_KEY) {
  console.error('Error: RESEND_API_KEY is not defined in .env');
  process.exit(1);
}

function resendRequest(path, method, data = null) {
  return new Promise((resolve, reject) => {
    const postBody = data ? JSON.stringify(data) : null;
    const options = {
      hostname: 'api.resend.com',
      path,
      method,
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        ...(postBody ? { 'Content-Length': Buffer.byteLength(postBody) } : {}),
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body || '{}');
          resolve({ status: res.statusCode, data: parsed });
        } catch {
          resolve({ status: res.statusCode, raw: body });
        }
      });
    });

    req.on('error', reject);
    if (postBody) req.write(postBody);
    req.end();
  });
}

async function run() {
  console.log('📡 Fetching subscribers from Resend Audience...');
  const { status, data } = await resendRequest(`/audiences/${AUDIENCE_ID}/contacts`, 'GET');

  if (status !== 200 || !data?.data) {
    console.error('Failed to retrieve audience contacts:', data);
    process.exit(1);
  }

  const subscribers = data.data.filter((c) => !c.unsubscribed);
  console.log(`Found ${subscribers.length} active subscriber(s).`);

  if (subscribers.length === 0) {
    console.log('No active subscribers to notify.');
    return;
  }

  // The latest post info
  const post = {
    number: '3',
    title: "What I'm Building Next",
    date: "Nov '26",
    link: 'https://codex.is-a.dev/blogs/what-im-building-next/',
    preview: "A real-time update on upcoming software projects, agency video editing milestones, and creator tools in the pipeline.",
  };

  console.log(`\n🚀 Broadcasting update: "${post.title}" ...`);

  for (const subscriber of subscribers) {
    const emailPayload = {
      from: 'Aditya Rathore <onboarding@resend.dev>',
      to: [subscriber.email],
      subject: `New Note: ${post.title} 🚀`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 580px; margin: 0 auto; padding: 32px 24px; background-color: #FAF8F5; border-radius: 16px; border: 1px solid #EAE5D9;">
          <div style="font-family: monospace; font-size: 11px; color: #8C867E; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
            #${post.number} · ${post.date}
          </div>
          <h2 style="color: #161514; margin-top: 0; margin-bottom: 16px; font-size: 24px; font-weight: 700; letter-spacing: -0.02em;">
            ${post.title}
          </h2>
          <p style="color: #383633; font-size: 15px; line-height: 1.7; margin-bottom: 24px;">
            ${post.preview}
          </p>
          <div style="margin: 28px 0;">
            <a href="${post.link}" style="display: inline-block; padding: 12px 24px; background-color: #161514; color: #FAF8F5; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 14px;">
              Read the full note &rarr;
            </a>
          </div>
          <div style="border-top: 1px solid #E5E0D5; padding-top: 16px; margin-top: 32px; font-size: 12px; color: #8C867E; font-family: monospace;">
            Direct from Aditya · You subscribed on codex.is-a.dev
          </div>
        </div>
      `,
    };

    const sendRes = await resendRequest('/emails', 'POST', emailPayload);
    if (sendRes.status === 200) {
      console.log(`✓ Sent to ${subscriber.email} (ID: ${sendRes.data?.id})`);
    } else {
      console.warn(`✗ Failed to send to ${subscriber.email}:`, sendRes.data);
    }
  }

  console.log('\nBroadcast complete.');
}

run().catch(console.error);
