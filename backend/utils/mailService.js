import nodemailer from 'nodemailer';

const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password'
    }
  });
};

export const sendWelcomeEmail = async (user) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@atelier.com',
      to: user.email,
      subject: 'Welcome to ATELIER - Your Design Journey Begins',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h1 style="color: #000; margin-bottom: 30px; text-align: center; font-size: 28px; font-weight: 300;">
              ATELIER
            </h1>
            
            <h2 style="color: #374151; margin-bottom: 20px;">Welcome, ${user.firstName}!</h2>
            
            <p style="color: #6b7280; line-height: 1.6; margin-bottom: 20px;">
              Thank you for joining ATELIER, where minimalist design meets exceptional functionality. 
              We're excited to have you as part of our community.
            </p>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; margin: 30px 0;">
              <h3 style="color: #374151; margin-bottom: 15px;">Your Account Details:</h3>
              <p style="color: #6b7280; margin: 5px 0;"><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
              <p style="color: #6b7280; margin: 5px 0;"><strong>Email:</strong> ${user.email}</p>
              <p style="color: #6b7280; margin: 5px 0;"><strong>Role:</strong> ${user.role === 'admin' ? 'Administrator' : 'Client'}</p>
            </div>
            
            <p style="color: #6b7280; line-height: 1.6; margin-bottom: 30px;">
              Start exploring our curated collection of design products and discover inspiration 
              for your next project.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="http://localhost:5173" 
                 style="display: inline-block; background-color: #000; color: white; padding: 12px 30px; 
                        text-decoration: none; border-radius: 6px; font-weight: 500;">
                Explore ATELIER
              </a>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            
            <p style="color: #9ca3af; font-size: 14px; text-align: center; margin: 0;">
              This email was sent from ATELIER. If you have any questions, please contact our support team.
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Welcome email sent successfully to:', user.email);
    
  } catch (error) {
    console.error(' Email sending error:', error);
    throw error;
  }
};