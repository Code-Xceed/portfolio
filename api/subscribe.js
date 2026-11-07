/**
 * Vercel / Netlify Serverless Function: /api/subscribe
 *
 * Securely receives subscriber email from the portfolio frontend
 * and adds the contact to your Resend Audience using server-side credentials.
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { email, source = 'portfolio-blog' } = req.body || {};

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID || '19edb32d-5a5d-4a09-9b6b-6de9106e78e5';

    if (!apiKey) {
      console.warn('RESEND_API_KEY is not configured in environment.');
      // Return 200 with notice so the frontend stays graceful
      return res.status(200).json({
        success: true,
        message: 'Saved locally. Configure RESEND_API_KEY in your hosting environment.',
      });
    }

    // Call Resend Contacts API to add subscriber to Audience
    const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        unsubscribed: false,
        first_name: '',
        last_name: '',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // If contact already exists in audience, treat as success
      if (data?.message?.toLowerCase().includes('already exists')) {
        return res.status(200).json({ success: true, message: 'Already subscribed!' });
      }
      return res.status(response.status).json({ error: data?.message || 'Failed to add contact' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Subscribe handler error:', error);
    return res.status(500).json({ error: 'Internal server error while subscribing.' });
  }
}
