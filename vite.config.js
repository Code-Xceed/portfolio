import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

function resendDevApiPlugin(env) {
  return {
    name: 'resend-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/subscribe', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => { body += chunk; });
        req.on('end', async () => {
          try {
            const { email } = JSON.parse(body || '{}');
            const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
            const audienceId = env.RESEND_AUDIENCE_ID || process.env.RESEND_AUDIENCE_ID || '19edb32d-5a5d-4a09-9b6b-6de9106e78e5';

            if (!apiKey) {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: 'Saved locally' }));
              return;
            }

            const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: email.trim().toLowerCase(),
                unsubscribed: false,
              }),
            });

            const data = await response.json();
            const isSuccess = response.ok || data?.message?.toLowerCase().includes('already exists');
            res.statusCode = isSuccess ? 200 : response.status;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: isSuccess, data }));
          } catch (e) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: e.message }));
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tailwindcss(),
      resendDevApiPlugin(env),
    ],
    server: {
      port: 5173,
      host: true,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: fileURLToPath(new URL('./index.html', import.meta.url)),
          'how-i-started': fileURLToPath(new URL('./blogs/how-i-started/index.html', import.meta.url)),
          'first-client': fileURLToPath(new URL('./blogs/how-i-got-my-first-client/index.html', import.meta.url)),
          'interests-minecraft': fileURLToPath(new URL('./interests/minecraft/index.html', import.meta.url)),
          'interests-video-editing': fileURLToPath(new URL('./interests/video-editing/index.html', import.meta.url)),
        },
      },
    },
  };
})
