### Akashic Records — Vite + React

A Vite-powered React app. Includes optional Google Generative AI (Gemini) integration.

### Requirements
- Node.js >= 18

### Environment Variables
Create a `.env.local` in the project root (not committed):

```
VITE_GEMINI_API_KEY=your_api_key_here
```

- This key is used client-side by `@google/generative-ai` and `@google/genai`.
- Restrict the key in Google AI Studio to your domain.
- Without the key, the UI loads but AI prompts won’t work.

 

### Scripts
- dev: `npm run dev`
- build: `npm run build`
- preview: `npm run preview`

### Local Development
```
npm ci
cp .env.example .env.local   # then add your key
npm run dev
```

### Production Build
```
npm run build
```
Artifacts are emitted to `dist/`.

### Netlify Deployment
Option A — Connect repo
- Build command: `npm run build`
- Publish directory: `dist`
- Environment: add `VITE_GEMINI_API_KEY` in Site settings → Build & deploy → Environment

Option B — Drag-and-drop
- Build locally, then upload the `dist/` folder (or `dist.zip`) on the Deploys page.

Note
- If your site previously served a saved Lovable snapshot, redeploy from `dist/` to overwrite it.

### License
ISC