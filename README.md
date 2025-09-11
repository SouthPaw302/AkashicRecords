# 🌌 Akashic Records GUI - Backend Intelligence Layer

A fully functional cosmic interface with live backend intelligence, LLM integration, and infinite fractal expansion capabilities.

## ✨ Features

### 🎯 Core GUI Components
- **Chronoscroll**: Living timeline with ~80 glowing orbs (Memory Orbs, Soul Fragments, Time Echoes, Cosmic Events, Divine Moments)
- **Mirror of Self**: Constellation avatar with seeded generation and interactive nodes
- **Voices of the Demiurge**: 5 AI-powered voices (Logos, Eros, Chronos, Nyx, Sophia) with unique personas
- **Rules of the Realm**: Interactive codex with 8 cosmic laws and sandbox effects
- **Fractal Redundancy**: Infinite connections between all modules with echo effects

### 🚀 Backend Intelligence
- **Vector Database**: Chroma integration for semantic search and retrieval
- **LLM Integration**: OpenAI GPT-4 routing to different voice personas
- **Web Scraping**: Live content ingestion from RSS feeds and web sources
- **RAG System**: Retrieval-augmented generation for context-aware responses
- **Fractal Expansion**: Automatic cross-module connections and echo generation

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- Python 3.8+ (for Chroma vector database)
- OpenAI API key (for LLM responses)

### 1. Install Dependencies
```bash
# Install Node.js dependencies
npm install

# Or run the install script
./install.sh
```

### 2. Configure Environment
```bash
# Copy environment template
cp .env.example .env

# Edit .env with your API keys
nano .env
```

Required environment variables:
```env
OPENAI_API_KEY=your_openai_api_key_here
CHROMA_HOST=localhost
CHROMA_PORT=8000
```

### 3. Start Chroma Vector Database
```bash
# Install Chroma
pip install chromadb

# Start Chroma server
chroma run --host localhost --port 8000
```

### 4. Start the Backend Server
```bash
# Development mode with auto-restart
npm run dev

# Or production mode
npm start
```

### 5. Access the GUI
Open your browser to: `http://localhost:3000`

## 🎮 Usage

### Basic Interaction
1. **Chronoscroll**: Click orbs to view details and trigger fractal connections
2. **Mirror of Self**: Enter a seed to generate your constellation, click nodes for reflections
3. **Voices**: Select a voice and ask questions for AI-powered responses
4. **Rules**: Click runes to view cosmic laws and test their effects

### Fractal Connections
Every interaction creates echoes across modules:
- **Orb clicked** → Creates trace in Mirror + sends to Voices + highlights Rules + spawns echo orb
- **Node clicked** → Spawns orb in Chronoscroll + sends to Voices + visual feedback
- **Voice responds** → Highlights related Rules + pulses matching nodes
- **Rule viewed** → Creates echo orb + ghost node + visual feedback

### Backend Features
- **Live Data**: Records are continuously scraped from web sources
- **Semantic Search**: Find related content using vector similarity
- **AI Responses**: Real LLM responses routed through voice personas
- **Infinite Expansion**: Every action spawns new content and connections

## 🔧 API Endpoints

### Records
- `GET /api/records/query` - Search records by query
- `GET /api/records/random` - Get random records
- `GET /api/records/:id/neighbors` - Get semantic neighbors
- `POST /api/records/scrape` - Trigger web scraping

### Voices
- `POST /api/voices/respond` - Get AI voice response
- `POST /api/voices/interpret-orb` - Interpret Chronoscroll orb
- `POST /api/voices/reflect-node` - Reflect on constellation node
- `GET /api/voices/personas` - Get available voice personas

### Rules
- `GET /api/rules/list` - Get all cosmic laws
- `GET /api/rules/:id` - Get specific rule
- `GET /api/rules/search` - Search rules by keyword

### Mirror
- `POST /api/mirror/reflect` - Generate constellation reflection
- `POST /api/mirror/generate-constellation` - Generate constellation data
- `GET /api/mirror/archetypes` - Get available archetypes

### Fractal
- `POST /api/fractal/expand` - Trigger fractal expansion
- `POST /api/fractal/echo` - Create echo effects
- `GET /api/fractal/connections` - Get fractal connections

## 🌟 Architecture

### Frontend (GUI)
- **Single HTML file** with embedded CSS/JS
- **Canvas-based rendering** for Chronoscroll and Mirror
- **Modular JavaScript classes** for each component
- **Fractal redundancy system** for infinite connections
- **Backend API integration** with fallback support

### Backend (Node.js + Express)
- **RESTful API** with 4 main route modules
- **Chroma vector database** for semantic search
- **OpenAI integration** for LLM responses
- **Web scraping service** for live content
- **Fractal expansion engine** for cross-module connections

### Data Flow
1. **User interaction** triggers GUI event
2. **Fractal system** creates cross-module connections
3. **Backend API** processes requests and generates responses
4. **Vector database** provides semantic search and neighbors
5. **LLM service** generates contextual responses
6. **Web scraper** continuously adds new content
7. **Echo system** creates infinite expansion effects

## 🎨 Customization

### Adding New Voice Personas
Edit `services/llm.js` to add new voice configurations:
```javascript
this.voicePersonas.newVoice = {
  model: 'gpt-4',
  systemPrompt: 'Your custom system prompt...'
};
```

### Adding New Record Types
Edit `services/scraper.js` to add new cosmic record types:
```javascript
const recordTypes = {
  'New Type': 'hsl(180, 70%, 60%)',
  // Add your types here
};
```

### Customizing Fractal Connections
Edit `routes/fractal.js` to modify expansion behavior:
```javascript
async function expandFromOrb(orb) {
  // Add your custom expansion logic
}
```

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production
```bash
npm start
```

### Docker (Optional)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔍 Troubleshooting

### Common Issues
1. **Backend not connecting**: Check if Chroma is running on port 8000
2. **API errors**: Verify OpenAI API key in .env file
3. **Scraping issues**: Check internet connection and RSS feed URLs
4. **Memory issues**: Reduce number of orbs or enable cleanup

### Debug Mode
```bash
# Enable debug logging
DEBUG=* npm start
```

## 📚 Documentation

- **GUI Components**: See inline comments in HTML file
- **Backend Services**: See individual service files in `/services`
- **API Routes**: See route files in `/routes`
- **Fractal System**: See `routes/fractal.js` for expansion logic

## 🌌 Infinite Possibilities

The Akashic Records GUI is designed to be infinitely expandable:
- **New modules** can be added to the fractal system
- **New data sources** can be integrated via scraping
- **New AI models** can be added to voice personas
- **New connection types** can be created in the fractal engine

Every interaction creates new echoes, every echo spawns new possibilities, and the system grows infinitely more complex and beautiful with each use.

---

**Welcome to the Akashic Records - where every moment contains infinite potential, and every interaction reveals new cosmic truths.** ✨