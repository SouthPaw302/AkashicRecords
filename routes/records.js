const express = require('express');
const router = express.Router();
const { dbService } = require('../services/database');
const { scrapingService } = require('../services/scraper');

// GET /api/records/query - Search for records
router.get('/query', async (req, res) => {
  try {
    const { q: query, limit = 20, realm, epoch, dimension, type } = req.query;
    
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    // Build filters
    const filters = {};
    if (realm) filters.realm = realm;
    if (epoch) filters.epoch = epoch;
    if (dimension) filters.dimension = dimension;
    if (type) filters.type = type;

    // Search records
    const results = await dbService.searchRecords(query, parseInt(limit), filters);
    
    // Format results for GUI
    const formattedResults = results.map(result => ({
      id: result.id,
      type: result.metadata.type,
      title: result.metadata.title,
      description: result.content,
      realm: result.metadata.realm,
      epoch: result.metadata.epoch,
      dimension: result.metadata.dimension,
      emotion: result.metadata.emotion,
      lesson: result.metadata.lesson,
      source: result.metadata.source,
      createdAt: result.metadata.createdAt,
      similarity: 1 - result.distance // Convert distance to similarity
    }));

    res.json({
      success: true,
      records: formattedResults,
      total: formattedResults.length,
      query,
      filters
    });

  } catch (error) {
    console.error('Records query error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to query records',
      message: error.message 
    });
  }
});

// GET /api/records/random - Get random records
router.get('/random', async (req, res) => {
  try {
    const { limit = 10 } = req.query;
    
    // Get random records by searching with random terms
    const randomTerms = [
      'cosmic', 'infinite', 'eternal', 'wisdom', 'consciousness',
      'universe', 'mystery', 'truth', 'love', 'time', 'space',
      'divine', 'sacred', 'transcendent', 'beautiful', 'profound'
    ];
    
    const randomTerm = randomTerms[Math.floor(Math.random() * randomTerms.length)];
    const results = await dbService.searchRecords(randomTerm, parseInt(limit));
    
    const formattedResults = results.map(result => ({
      id: result.id,
      type: result.metadata.type,
      title: result.metadata.title,
      description: result.content,
      realm: result.metadata.realm,
      epoch: result.metadata.epoch,
      dimension: result.metadata.dimension,
      emotion: result.metadata.emotion,
      lesson: result.metadata.lesson,
      source: result.metadata.source,
      createdAt: result.metadata.createdAt
    }));

    res.json({
      success: true,
      records: formattedResults,
      total: formattedResults.length
    });

  } catch (error) {
    console.error('Random records error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to get random records',
      message: error.message 
    });
  }
});

// GET /api/records/:id/neighbors - Get semantic neighbors
router.get('/:id/neighbors', async (req, res) => {
  try {
    const { id } = req.params;
    const { limit = 3 } = req.query;
    
    const neighbors = await dbService.getSemanticNeighbors(id, parseInt(limit));
    
    const formattedNeighbors = neighbors.map(neighbor => ({
      id: neighbor.id,
      type: neighbor.metadata.type,
      title: neighbor.metadata.title,
      description: neighbor.content,
      realm: neighbor.metadata.realm,
      epoch: neighbor.metadata.epoch,
      dimension: neighbor.metadata.dimension,
      emotion: neighbor.metadata.emotion,
      lesson: neighbor.metadata.lesson,
      source: neighbor.metadata.source,
      similarity: 1 - neighbor.distance
    }));

    res.json({
      success: true,
      neighbors: formattedNeighbors,
      total: formattedNeighbors.length
    });

  } catch (error) {
    console.error('Semantic neighbors error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to get semantic neighbors',
      message: error.message 
    });
  }
});

// POST /api/records/scrape - Manually trigger scraping
router.post('/scrape', async (req, res) => {
  try {
    const { url } = req.body;
    
    if (url) {
      // Scrape specific URL
      const record = await scrapingService.scrapeWebContent(url);
      if (record) {
        const addedRecord = await dbService.addRecord(record);
        res.json({
          success: true,
          message: 'Content scraped and added successfully',
          record: addedRecord
        });
      } else {
        res.status(400).json({
          success: false,
          error: 'Failed to scrape content from URL'
        });
      }
    } else {
      // Trigger full scraping cycle
      await scrapingService.scrapeAllSources();
      res.json({
        success: true,
        message: 'Scraping cycle completed'
      });
    }

  } catch (error) {
    console.error('Scraping error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to scrape content',
      message: error.message 
    });
  }
});

// POST /api/records - Create new record
router.post('/', async (req, res) => {
  try {
    const { type, title, description, realm, epoch, dimension, emotion, lesson, source } = req.body;
    
    if (!title || !description) {
      return res.status(400).json({ 
        success: false, 
        error: 'Title and description are required' 
      });
    }

    const record = {
      type: type || 'Memory Orb',
      title,
      description,
      realm: realm || 'Physical',
      epoch: epoch || 'Modern',
      dimension: dimension || '3D',
      emotion: emotion || 'Wonder',
      lesson: lesson || 'The universe reveals its mysteries to those who seek',
      source: source || 'manual'
    };

    const addedRecord = await dbService.addRecord(record);

    res.json({
      success: true,
      record: addedRecord,
      message: 'Record created successfully'
    });

  } catch (error) {
    console.error('Create record error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to create record',
      message: error.message 
    });
  }
});

module.exports = router;