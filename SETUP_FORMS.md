# 📧 Forms Setup Guide

Your contact and RFQ forms are ready to go! Just follow these 3 simple steps:

## Step 1: Get Your Free Access Key

1. Visit [https://web3forms.com/](https://web3forms.com/)
2. Enter your email address (where form submissions will be sent)
3. Click "Get Access Key"
4. Check your email and copy the access key

## Step 2: Add to Your Forms

Replace `YOUR_WEB3FORMS_ACCESS_KEY` in these two files:

### File 1: `frontend/src/components/Rfq.jsx`
```javascript
// Line ~13
formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
```

### File 2: `frontend/src/components/Contact.jsx`
```javascript
// Line ~13
formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
```

## Step 3: Test Your Forms

```bash
cd frontend
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and:
1. Scroll to the Contact or RFQ section
2. Fill out and submit the form
3. Check your email inbox! 📬

## ✨ Features Included

- ✅ **Success/Error Messages** - Users get instant feedback
- ✅ **Loading States** - "Sending..." appears during submission
- ✅ **Form Validation** - Required fields are enforced
- ✅ **File Uploads** - RFQ form supports attachments
- ✅ **Auto-Reset** - Forms clear after successful submission
- ✅ **Spam Protection** - Built-in honeypot protection
- ✅ **No Backend Needed** - 100% static site

## 🎨 Customization

Want to customize the email notifications? Update these lines:

```javascript
formData.append("subject", "Your Custom Subject");
formData.append("from_name", "Your Custom Name");
```

## 🚀 Going Live

Before deploying, make sure you've replaced the placeholder access keys in both components!

---

**Need help?** Visit [Web3Forms Documentation](https://docs.web3forms.com/)
