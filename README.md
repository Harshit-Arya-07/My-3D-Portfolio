# 3D Developer Portfolio

![Portfolio Screenshot](public/assets/readme_assets/Screenshot.png)

A modern 3D developer portfolio built with Next.js, Tailwind CSS, Three.js, and React Three Fiber.

Live: https://harshitarya07.vercel.app/

## Features

- 3D interactive hero and visuals
- Projects, skills, education, and contact sections
- Dark/light theme support
- Responsive UI for desktop and mobile
- Contact form powered by EmailJS
- GA4 page view tracking
- Visitor counter powered by Google Analytics Data API

## Tech Stack

- Next.js (Pages Router)
- React
- Tailwind CSS
- Three.js + @react-three/fiber + @react-three/drei
- Framer Motion
- EmailJS
- Google Analytics 4 + Google Analytics Data API

## Quick Start

### 1) Clone repository

```bash
git clone https://github.com/Harshit-Arya-07/My-3D-Portfolio.git
cd My-3D-Portfolio
```

### 2) Install dependencies

```bash
npm install
```

### 3) Create `.env.local`

Add your values:

```bash
# EmailJS
NEXT_PUBLIC_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_KEY=xxxxxxxxxxxxxxxx

# Google Analytics 4 (frontend tracking)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# GA4 Visitor Counter (server-side)
GA_PROPERTY_ID=123456789
GA_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GA_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
GA_REPORT_START_DATE=2024-01-01
```

### 4) Run development server

```bash
npm run dev
```

Open: http://localhost:3000

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # run production build
npm run lint     # lint code
```

## Google Analytics Setup (Important)

### A) Enable GA4 page tracking

1. Create/select a GA4 property.
2. Copy Measurement ID (`G-...`) and set `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

### B) Enable visitor counter API

1. Open Google Cloud Console.
2. Enable **Google Analytics Data API** (not just “Google Analytics API”).
3. Create a service account and download JSON key.
4. From JSON, copy:
	 - `client_email` -> `GA_CLIENT_EMAIL`
	 - `private_key` -> `GA_PRIVATE_KEY`
5. In GA4 Property Access Management, add the service account email as **Viewer**.
6. Set `GA_PROPERTY_ID` from GA4 Property Settings.

## Deployment (Vercel)

1. Push code to GitHub.
2. Import project in Vercel.
3. Add all `.env.local` variables in Vercel Project Settings -> Environment Variables.
4. Redeploy.

## Troubleshooting

- Visitor API returns `503`: env vars missing (`GA_PROPERTY_ID`, `GA_CLIENT_EMAIL`, `GA_PRIVATE_KEY`).
- Visitor API returns `500`: service account access/API enablement issue.
- Counter shows `--`: API failed or not configured.
- GA page views missing: incorrect `NEXT_PUBLIC_GA_MEASUREMENT_ID` or blocked scripts.

## Security Notes

- Never commit `.env.local`.
- If service account key is exposed, rotate immediately:
	- Delete old key in Google Cloud
	- Create new key
	- Update env vars

## Project Structure

- `components/` UI and section components
- `components/canvas/` 3D canvas components
- `constants/` static app data
- `pages/` route pages and API routes
- `public/` static assets
- `styles/` global styles
- `utils/` helper utilities

## Author

- Harshit Arya
- GitHub: https://github.com/Harshit-Arya-07

