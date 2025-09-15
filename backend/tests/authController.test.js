import { describe, it, expect } from '@jest/globals';
import request from 'supertest';
import express from 'express';
import authRoutes from '../routes/authRoutes.js';

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

describe('Auth validation', () => {
  it('rejects invalid register payload', async () => {
    const res = await request(app).post('/api/auth/register').send({
      firstName: 'A',
      lastName: 'B',
      email: 'not-an-email',
      password: '123',
      acceptTerms: false
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it('rejects login without email/password', async () => {
    const res = await request(app).post('/api/auth/login').send({ email: '' });
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });
});


