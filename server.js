const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Import modules
const recordsRouter = require('./routes/records');
const voicesRouter = require('./routes/voices');
const rulesRouter = require('./routes/rules');
const mirrorRouter = require('./routes/mirror');
const fractalRouter = require('./routes/fractal');
const { initializeDatabase } = require('./services/database');
const { startScrapingService } = require('./services/scraper');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/records', recordsRouter);
app.use('/api/voices', voicesRouter);
app.use('/api/rules', rulesRouter);
app.use('/api/mirror', mirrorRouter);
app.use('/api/fractal', fractalRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Serve the main GUI
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'akashic-records-foundation.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: err.message 
  });
});

// Initialize and start server
async function startServer() {
  try {
    console.log('🚀 Initializing Akashic Records Backend...');
    
    // Initialize vector database
    await initializeDatabase();
    console.log('✅ Vector database initialized');
    
    // Start background scraping service
    startScrapingService();
    console.log('✅ Scraping service started');
    
    // Start server
    app.listen(PORT, () => {
      console.log(`🌟 Akashic Records Backend running on port ${PORT}`);
      console.log(`📱 GUI available at: http://localhost:${PORT}`);
      console.log(`🔗 API endpoints: http://localhost:${PORT}/api/`);
    });
    
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer();