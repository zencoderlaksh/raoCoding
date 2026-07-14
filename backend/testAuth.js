import './config/env.js';
import express from 'express';
import { clerkMiddleware, requireAuth } from '@clerk/express';

const app = express();
app.use(clerkMiddleware({
  secretKey: process.env.CLERK_SECRET_KEY,
  publishableKey: process.env.CLERK_PUBLISHABLE_KEY
}));

app.get('/test', requireAuth(), (req, res) => {
  res.json({ auth: req.auth });
});

app.listen(5001, () => console.log('Test server on 5001'));
