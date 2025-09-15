import express from 'express';
import { body, param } from 'express-validator';
import { 
  getAllProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} from '../controllers/productController.js';
import { authenticateToken, requireAdmin } from '../middleware/authMiddleware.js';
import handleValidationErrors from '../middleware/validationMiddleware.js';

const router = express.Router();

// GET /api/products - Public route
router.get('/', getAllProducts);

// Admin only routes
router.post(
  '/admin',
  authenticateToken,
  requireAdmin,
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a non-negative number'),
    body('image').optional().isURL().withMessage('Image must be a valid URL')
  ],
  handleValidationErrors,
  createProduct
);

router.put(
  '/admin/:id',
  authenticateToken,
  requireAdmin,
  [
    param('id').isMongoId().withMessage('Invalid product id'),
    body('name').optional().trim().notEmpty().withMessage('Name cannot be empty'),
    body('price').optional().isFloat({ min: 0 }).withMessage('Price must be a non-negative number'),
    body('image').optional().isURL().withMessage('Image must be a valid URL')
  ],
  handleValidationErrors,
  updateProduct
);

router.delete(
  '/admin/:id',
  authenticateToken,
  requireAdmin,
  [param('id').isMongoId().withMessage('Invalid product id')],
  handleValidationErrors,
  deleteProduct
);

export default router;