# Email Setup for Contact Form

The contact form is now configured to send emails to `eleh915@gmail.com`. To make it work, you need to set up email credentials.

## Setup Instructions

1. **Create a `.env.local` file** in the root directory of your project with the following content:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

2. **For Gmail users:**
   - Go to your Google Account settings
   - Enable 2-Step Verification if not already enabled
   - Go to Security > App passwords
   - Generate a new app password for "Mail"
   - Use this app password as `EMAIL_PASS` (not your regular Gmail password)

3. **For other email providers:**
   - Check your email provider's documentation for SMTP settings
   - You may need to update the `service` field in `/src/app/api/contact/route.ts`

## How it works

- When someone submits the contact form, it sends a POST request to `/api/contact`
- The API route validates the form data and sends an email to `eleh915@gmail.com`
- The email includes the sender's name, email, subject, and message
- The form shows success/error messages to the user

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Use app passwords instead of regular passwords for better security

## Testing

After setting up the credentials, you can test the form by:
1. Running the development server: `npm run dev`
2. Going to the contact page
3. Filling out and submitting the form
4. Checking if you receive the email at `eleh915@gmail.com` 