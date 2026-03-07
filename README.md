# Avabrands Corporate Site

Modern, elegant corporate web presence for Avabrands Ltd - a premium branding and production company.

## Stack
- **React** (Vite) + **TailwindCSS**
- Static site with all content defined in code
- Fully responsive design matching brand colors (teal palette)

## Features
- Sticky navigation with smooth scrolling
- Animated hero section with breathing effects
- Services showcase with enhanced spacing
- Portfolio with category filters and lightbox gallery
- Working contact and RFQ forms (Web3Forms)
- Google Maps integration
- WhatsApp direct messaging integration
- Mobile-responsive design

## Local Development

### Quick Start
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### Set Up Forms (Required)
1. Get a **free** Web3Forms access key at [web3forms.com](https://web3forms.com/)
2. Open `frontend/src/components/Rfq.jsx` and replace `YOUR_WEB3FORMS_ACCESS_KEY`
3. Open `frontend/src/components/Contact.jsx` and replace `YOUR_WEB3FORMS_ACCESS_KEY`

Your forms will now send email notifications directly to your inbox!

### Docker Setup
```bash
docker compose up --build
```
Open [http://localhost:8080](http://localhost:8080) (Nginx proxy)

## Brand Colors
- **Primary**: Dark Teal (`#1B5E6E`) - from "AVA"
- **Secondary**: Light Teal (`#26C6DA`) - from "BRANDS"
- **Background**: Black with subtle gradients

## Content Management
All content is managed in [frontend/src/App.jsx](frontend/src/App.jsx):
- Services
- Portfolio items
- News posts
- Contact information

## Forms
Both forms use **Web3Forms** for submissions:
- **Contact form** - Simple message form
- **RFQ form** - Full quote request with file upload support

Features:
- ✅ Success/error messages
- ✅ Loading states
- ✅ Form validation
- ✅ File attachment support (RFQ)
- ✅ Auto-reset after submission

## Deployment
Build for production:
```bash
cd frontend
npm run build
```
Deploy the `dist/` folder to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

**Don't forget to add your Web3Forms access key before deploying!**

## Notes
- Update contact details in Contact.jsx
- Replace Google Maps embed with actual business location
- Configure Web3Forms access key for form submissions
- All portfolio images should be placed in `frontend/public/images/`
