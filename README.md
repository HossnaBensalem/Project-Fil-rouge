# ATELIER - Minimal Design Platform

A full-stack web application for showcasing and managing design products with a minimalist aesthetic. Built with React, Node.js, Express, and MongoDB.

##  Project Overview

ATELIER is a modern e-commerce platform focused on minimalist design products. It features user authentication, product management, and an admin dashboard with a clean, professional interface.

## Features

### User Features
- **User Registration & Authentication** - Secure signup/login with JWT tokens
- **Product Catalog** - Browse curated design products
- **Responsive Design** - Optimized for all device sizes
- **Email Notifications** - Welcome emails for new users

### Admin Features
- **Admin Dashboard** - Complete product management interface
- **CRUD Operations** - Create, read, update, delete products
- **Role-based Access** - Admin-only protected routes
- **Product Analytics** - View product count and creation dates

### Technical Features
- **RESTful API** - Clean API architecture
- **Data Validation** - Express-validator for input validation
- **Error Handling** - Comprehensive error management
- **Security** - Password hashing, JWT authentication
- **Email Service** - Nodemailer integration

##  Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Toast notifications
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Express Validator** - Input validation middleware
- **Nodemailer** - Email sending service
- **CORS** - Cross-origin resource sharing

##  Project Structure

```
atelier-platform/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── contexts/        # React contexts
│   │   │   └── AuthContext.jsx
│   │   ├── services/        # API services
│   │   │   └── api.js
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # App entry point
│   │   └── index.css        # Global styles
│   ├── public/              # Static assets
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/                  # Node.js backend application
│   ├── controllers/         # Route controllers
│   │   ├── authController.js
│   │   └── productController.js
│   ├── middleware/          # Custom middleware
│   │   ├── authMiddleware.js
│   │   └── validation.js
│   ├── models/              # Database models
│   │   ├── User.js
│   │   └── Product.js
│   ├── routes/              # API routes
│   │   ├── authRoutes.js
│   │   └── productRoutes.js
│   ├── utils/               # Utility functions
│   │   └── mailService.js
│   ├── config/              # Configuration files
│   │   └── db.js
│   ├── server.js            # Server entry point
│   ├── package.json
│   └── .env                 # Environment variables
├── package.json             # Root package.json
└── README.md               # Project documentation
```

##  Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone <repository-url>
cd atelier-platform
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install frontend dependencies
npm run install:frontend

# Install backend dependencies
npm run install:backend
```

### 3. Environment Configuration
Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=5000

# Database
MONGO_URI=mongodb://localhost:27017/atelier

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

### 4. Database Setup
- Install and start MongoDB locally, or
- Use MongoDB Atlas (cloud database)
- Update `MONGO_URI` in your `.env` file

### 5. Email Configuration (Optional)
For email functionality:
1. Enable 2-factor authentication on your Gmail account
2. Generate an app-specific password
3. Update `EMAIL_USER` and `EMAIL_PASS` in `.env`

## 🏃‍♂️ Running the Application

### Development Mode
```bash
# Run both frontend and backend concurrently
npm run dev

# Or run separately:
npm run dev:frontend  # Frontend only (port 5173)
npm run dev:backend   # Backend only (port 5000)
```

### Production Build
```bash
# Build frontend for production
npm run build
```

## API Endpoints

### Authentication Routes
```
POST /api/auth/register  # User registration
POST /api/auth/login     # User login
```

### Product Routes
```
GET    /api/products           # Get all products (public)
POST   /api/products/admin     # Create product (admin only)
PUT    /api/products/admin/:id # Update product (admin only)
DELETE /api/products/admin/:id # Delete product (admin only)
```

##  User Roles

### Client Role
- Browse products
- View product details
- Access to public pages

### Admin Role
- All client permissions
- Access to admin dashboard
- Create, edit, delete products
- View product analytics

## Demo Accounts

For testing purposes, you can create accounts with these credentials:

**Admin Account:**
- Email: admin@atelier.com
- Password: password123
- Role: Administrator

**Client Account:**
- Email: client@atelier.com
- Password: password123
- Role: Client

## Design System

### Color Palette
- **Primary**: #000000 (Black)
- **Secondary**: #6b7280 (Gray)
- **Background**: #f9fafb (Light Gray)
- **Card**: #ffffff (White)

### Typography
- **Font Family**: Inter, system-ui, sans-serif
- **Headings**: Font weight 300 (Light)
- **Body**: Font weight 400 (Regular)

### Components
- Minimalist design approach
- Clean lines and spacing
- Subtle hover effects
- Consistent spacing system (8px grid)

##  Development Guidelines

### Code Style
- Use ES6+ features
- Follow React best practices
- Implement proper error handling
- Use meaningful variable names
- Add comments for complex logic

### Security Best Practices
- Input validation on both client and server
- Password hashing with bcrypt
- JWT token authentication
- CORS configuration
- Environment variables for sensitive data

### Performance Optimization
- Image optimization
- Lazy loading for components
- API response caching
- Minified production builds

## 🚀 Deployment

### Frontend Deployment
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure environment variables for production

### Backend Deployment
1. Set up production MongoDB database
2. Configure production environment variables
3. Deploy to your preferred hosting service (Heroku, DigitalOcean, etc.)
4. Set up SSL certificates for HTTPS

##  Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

##  Troubleshooting

### Common Issues

**MongoDB Connection Error:**
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify network connectivity

**Email Not Sending:**
- Check Gmail app password
- Verify email credentials in `.env`
- Ensure 2FA is enabled on Gmail

**CORS Errors:**
- Verify frontend URL in backend CORS configuration
- Check API base URL in frontend

**Build Errors:**
- Clear node_modules and reinstall dependencies
- Check Node.js version compatibility
- Verify all environment variables are set

##  Support

For support and questions:
- Create an issue in the repository
- Check existing documentation
- Review troubleshooting section

##  Version History

- **v1.0.0** - Initial release with core functionality
- User authentication system
- Product management
- Admin dashboard
- Email notifications
- Responsive design

---

**Built with  using modern web technologies**