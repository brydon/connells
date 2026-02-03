# EmailJS Setup Guide for Connell's Construction

This guide will walk you through setting up EmailJS so your contact form works automatically.

## What You'll Need
- 10 minutes
- A Gmail, Outlook, or other email account
- Access to edit `script.js`

---

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up Free"**
3. Create an account (you can use your Google account for quick signup)
4. Verify your email address

---

## Step 2: Add Email Service

Once logged into your EmailJS dashboard:

1. Click **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended if you have a Gmail account)
   - **Outlook** (if you're using Microsoft 365)
   - Or any other supported provider
4. Follow the connection wizard:
   - For **Gmail**: Click "Connect Account" and authorize EmailJS
   - For **Custom SMTP**: Enter your email settings
5. Click **"Create Service"**
6. **Copy the Service ID** (looks like `service_abc123`) - you'll need this!

---

## Step 3: Create Email Template

1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Replace the default template content with this:

### Template Settings:
- **Template Name**: `Connells Contact Form`

### Email Content:
**To Email:** `teastman@connellsconstruction.ca`

**From Name:** `{{name}}`

**From Email:** `{{email}}`

**Subject:** `New Contact Form - {{name}}`

**Message Body:**
```
New contact form submission from Connell's Construction website:

Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Project Type: {{project}}

Message:
{{message}}

---
Sent via connellsconstruction.ca contact form
```

4. Click **"Save"** (or "Test" to send yourself a test email first)
5. **Copy the Template ID** (looks like `template_abc123`) - you'll need this!

---

## Step 4: Get Your Public Key

1. Click **"Account"** in the left sidebar (or your profile icon)
2. Go to the **"General"** tab
3. Find **"Public Key"** section
4. **Copy the Public Key** (looks like a long string of letters/numbers)

---

## Step 5: Update Your Website

Now open the file `script.js` and find these lines at the top:

```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE';
```

Replace them with your actual values:

```javascript
const EMAILJS_PUBLIC_KEY = 'your_actual_public_key';
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_abc123';
```

**Save the file!**

---

## Step 6: Test It!

1. Open `contact.html` in your browser
2. Fill out the contact form
3. Click "Send Message"
4. You should see "Sending..." then a success message
5. Check `teastman@connellsconstruction.ca` - you should have an email!

---

## Troubleshooting

### "EmailJS is not configured yet" alert
- You haven't updated the keys in `script.js` yet
- Make sure you replaced `YOUR_PUBLIC_KEY_HERE` with your actual key

### Form submits but no email arrives
- Check your EmailJS dashboard for errors under "Logs"
- Verify the template has the correct "To Email" address
- Check spam folder
- Verify your email service is connected properly

### "Failed to send email" error
- Check browser console (F12) for detailed error
- Most common: Wrong Service ID or Template ID
- Check that your Service is still connected in EmailJS dashboard

### Testing in Local Development
- EmailJS works even when testing locally (doesn't need to be deployed)
- Just open the HTML file in your browser

---

## Free Tier Limits

EmailJS Free Plan includes:
- **200 emails per month**
- **2 email templates**
- **1 email service**

This should be plenty for a construction company contact form. If you exceed 200 emails/month, you can upgrade for $7/month.

---

## Security Note

Your Public Key and IDs will be visible in your `script.js` file - **this is normal and safe**. EmailJS public keys are designed to be public. You can restrict usage to your domain in the EmailJS dashboard under Account > Security for extra protection.

---

## Optional: Add Auto-Reply

Want to automatically send a "Thank you, we received your message" email to customers?

1. In your EmailJS template, click **"Settings"**
2. Enable **"Auto-Reply"**
3. Configure the auto-reply message
4. Save the template

---

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
- Or contact Tye at teastman@connellsconstruction.ca

---

**That's it! Your contact form is now fully functional with EmailJS.**
