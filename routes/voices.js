const express = require('express');
const router = express.Router();
const llmService = require('../services/llm');
const { dbService } = require('../services/database');

// POST /api/voices/respond - Get voice response
router.post('/respond', async (req, res) => {
  try {
    const { voice, query, context } = req.body;
    
    if (!voice || !query) {
      return res.status(400).json({ 
        success: false, 
        error: 'Voice and query are required' 
      });
    }

    // Validate voice
    const validVoices = ['logos', 'eros', 'chronos', 'nyx', 'sophia'];
    if (!validVoices.includes(voice)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid voice. Must be one of: ' + validVoices.join(', ') 
      });
    }

    // Generate response using LLM
    const response = await llmService.generateResponse(voice, query, context);
    
    // Store response in database
    const storedResponse = await dbService.addVoiceResponse(voice, query, response.response);

    res.json({
      success: true,
      voice: response.voice,
      response: response.response,
      timestamp: response.timestamp,
      model: response.model,
      id: storedResponse.id,
      context: context || null
    });

  } catch (error) {
    console.error('Voice response error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to generate voice response',
      message: error.message 
    });
  }
});

// POST /api/voices/interpret-orb - Interpret a Chronoscroll orb
router.post('/interpret-orb', async (req, res) => {
  try {
    const { orb } = req.body;
    
    if (!orb) {
      return res.status(400).json({ 
        success: false, 
        error: 'Orb data is required' 
      });
    }

    const interpretation = await llmService.generateOrbInterpretation(orb);
    
    res.json({
      success: true,
      interpretation: interpretation.response,
      voice: interpretation.voice,
      timestamp: interpretation.timestamp
    });

  } catch (error) {
    console.error('Orb interpretation error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to interpret orb',
      message: error.message 
    });
  }
});

// POST /api/voices/reflect-node - Reflect on constellation node
router.post('/reflect-node', async (req, res) => {
  try {
    const { node } = req.body;
    
    if (!node) {
      return res.status(400).json({ 
        success: false, 
        error: 'Node data is required' 
      });
    }

    const reflection = await llmService.generateNodeReflection(node);
    
    res.json({
      success: true,
      reflection: reflection.response,
      voice: reflection.voice,
      timestamp: reflection.timestamp
    });

  } catch (error) {
    console.error('Node reflection error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to reflect on node',
      message: error.message 
    });
  }
});

// POST /api/voices/insight-rule - Generate rule insight
router.post('/insight-rule', async (req, res) => {
  try {
    const { rule } = req.body;
    
    if (!rule) {
      return res.status(400).json({ 
        success: false, 
        error: 'Rule data is required' 
      });
    }

    const insight = await llmService.generateRuleInsight(rule);
    
    res.json({
      success: true,
      insight: insight.response,
      voice: insight.voice,
      timestamp: insight.timestamp
    });

  } catch (error) {
    console.error('Rule insight error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to generate rule insight',
      message: error.message 
    });
  }
});

// GET /api/voices/personas - Get available voice personas
router.get('/personas', (req, res) => {
  const personas = {
    logos: {
      name: 'Logos',
      description: 'Voice of Logic and Reason',
      glyph: '⚖️',
      aura: 'silver-white geometric precision',
      model: 'gpt-4'
    },
    eros: {
      name: 'Eros',
      description: 'Voice of Love and Connection',
      glyph: '💗',
      aura: 'pink-gold pulsing energy',
      model: 'gpt-4'
    },
    chronos: {
      name: 'Chronos',
      description: 'Voice of Time and Flow',
      glyph: '⏳',
      aura: 'sand-colored shimmer',
      model: 'gpt-4'
    },
    nyx: {
      name: 'Nyx',
      description: 'Voice of Shadow and Mystery',
      glyph: '🌑',
      aura: 'deep violet smoke',
      model: 'gpt-4'
    },
    sophia: {
      name: 'Sophia',
      description: 'Voice of Wisdom and Synthesis',
      glyph: '✨',
      aura: 'soft golden-white crystalline',
      model: 'gpt-4'
    }
  };

  res.json({
    success: true,
    personas
  });
});

module.exports = router;