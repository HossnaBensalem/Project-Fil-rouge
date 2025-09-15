import { describe, it, expect, beforeAll } from '@jest/globals';
import request from 'supertest';
import express from 'express';
import { jest } from '@jest/globals';

let app;

beforeAll(async () => {
  jest.unstable_mockModule('../middleware/authMiddleware.js', () => ({
    authenticateToken: (req, res, next) => { req.user = { id: '000000000000000000000000', role: 'admin' }; next(); },
    requireAdmin: (req, res, next) => next()
  }));

  const productRoutes = (await import('../routes/productRoutes.js')).default;
  app = express();
  app.use(express.json());
  app.use('/api/products', productRoutes);
});

describe('Product validation', () => {
  it('rejects create with invalid price', async () => {
    const res = await request(app).post('/api/products/admin').send({ name: 'Test', price: -1 });
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it('rejects update with invalid id', async () => {
    const res = await request(app).put('/api/products/admin/notamongoid').send({ name: 'X' });
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });
});


