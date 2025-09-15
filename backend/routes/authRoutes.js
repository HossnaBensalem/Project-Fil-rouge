import express from 'express';
import { body } from 'express-validator';
import { register, login } from '../controllers/authController.js';
import handleValidationErrors from '../middleware/validationMiddleware.js';

const router = express.Router();

// POST /api/auth/register
router.post(
  '/register',
  [
    body('firstName').trim().isLength({ min: 2 }).withMessage('First name must be at least 2 characters'),
    body('lastName').trim().isLength({ min: 2 }).withMessage('Last name must be at least 2 characters'),
    body('email').isEmail().withMessage('Invalid email').normalizeEmail(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('acceptTerms').custom(v => v === true || v === 'true').withMessage('You must accept the terms and conditions')
  ],
  handleValidationErrors,
  register
);

// POST /api/auth/login
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid email').normalizeEmail(),
    body('password').notEmpty().withMessage('Password is required')
  ],
  handleValidationErrors,
  login
);

export default router;