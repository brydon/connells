# Quick Start - Get Your Site Running

## 🚀 Your site is ready! Just need 2 things:

### 1. Test the Website Locally (Right Now)

Open `index.html` in your browser:

**On Mac:**
```bash
open index.html
```

**Or just:** Double-click `index.html` in Finder

The site will work, but the contact form will show a "not configured" message until you complete step 2.

---

### 2. Configure EmailJS (10 minutes)

The contact form needs EmailJS to send emails to `teastman@connellsconstruction.ca`.

**Follow the detailed guide:** [EMAILJS_SETUP.md](EMAILJS_SETUP.md)

**Quick summary:**
1. Go to [emailjs.com](https://www.emailjs.com/) and sign up (free)
2. Connect your Gmail or Outlook account
3. Create an email template (copy/paste from guide)
4. Get 3 keys and paste them into `script.js` (lines 5-7)
5. Test the form - done!

---

## 📱 Deploy to the Web

Once EmailJS is configured, you can deploy your site. Here are the easiest options:

### Option A: Netlify (Recommended - Free & Easy)
1. Go to [netlify.com](https://www.netlify.com/) and sign up
2. Drag and drop your entire `connells` folder
3. Get a free `.netlify.app` URL (or connect your own domain)
4. Done! Updates by uploading new files

### Option B: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Enable GitHub Pages in Settings
5. Your site will be at `yourusername.github.io/connells`

### Option C: Traditional Web Host
If you already have web hosting (like with your domain registrar):
1. Use FTP/cPanel to upload all files
2. Upload to your `public_html` or `www` folder
3. Done!

---

## 🎨 Customization

### Change Colors
Edit `styles.css` at the top (lines 5-12):
```css
--primary-orange: #FF6B35;  /* Change this hex code */
--dark-orange: #E85A2A;
```

### Change Images
Replace files in the `/images` folder with new ones (keep the same names)

### Change Text
Edit the `.html` files directly - the text is clearly labeled

---

## ✅ Checklist

- [ ] Opened site in browser and tested navigation
- [ ] Completed EmailJS setup
- [ ] Tested contact form (sent yourself a test email)
- [ ] Deployed to the web
- [ ] Tested on mobile phone
- [ ] Shared the URL with Kurtis!

---

## 🆘 Need Help?

- EmailJS issues? See [EMAILJS_SETUP.md](EMAILJS_SETUP.md) troubleshooting section
- Want to make changes? Contact Tye at teastman@connellsconstruction.ca

**Your website is ready to go! Just complete the EmailJS setup and deploy.**
