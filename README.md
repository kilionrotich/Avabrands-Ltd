# Avabrands Corporate Site

Modern, elegant corporate web presence for a branding and production company. Includes a React + Tailwind frontend and a Django REST API backend with JWT auth and RFQ file upload handling.

## Frontend
- React (Vite) + TailwindCSS
- Sticky navigation, hero banner, services, portfolio filters + lightbox, RFQ form, news, and contact sections

## Backend
- Django + Django REST Framework
- RESTful APIs for services, portfolio, RFQs, and news
- JWT authentication with RBAC stubs
- MongoDB via Djongo

## Local setup (no containers)
1. Frontend
   - `cd frontend`
   - `npm install`
   - `npm run dev`

2. Backend
   - `cd backend`
   - `python -m venv .venv`
   - Activate your venv
   - `pip install -r requirements.txt`
   - `python manage.py migrate`
   - `python manage.py runserver`

## Docker setup
1. Copy `.env.example` to `.env` and update values.
2. Run `docker compose up --build`.
3. Open `http://localhost:8080` (Nginx reverse proxy).

## API endpoints
- `GET /api/services/`
- `GET /api/portfolio/`
- `GET /api/news/`
- `POST /api/rfqs/`
- `POST /api/auth/token/`
- `POST /api/auth/token/refresh/`

## Notes
- Replace placeholder contact details, map embed, and portfolio content with production data.
- Add Google Maps API key and WhatsApp business number when ready.
