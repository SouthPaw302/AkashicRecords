const express = require('express');
const router = express.Router();
const { dbService } = require('../services/database');

// POST /api/mirror/reflect - Generate constellation reflection
router.post('/reflect', async (req, res) => {
  try {
    const { archetype, element, virtue, seed } = req.body;
    
    if (!archetype || !element || !virtue) {
      return res.status(400).json({ 
        success: false, 
        error: 'Archetype, element, and virtue are required' 
      });
    }

    // Generate interpretation
    const interpretation = generateConstellationInterpretation(archetype, element, virtue);
    
    // Store in database
    const storedReflection = await dbService.addMirrorReflection(archetype, element, virtue, interpretation);

    res.json({
      success: true,
      reflection: {
        archetype,
        element,
        virtue,
        interpretation,
        seed: seed || null,
        timestamp: storedReflection.timestamp,
        id: storedReflection.id
      }
    });

  } catch (error) {
    console.error('Mirror reflection error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to generate reflection',
      message: error.message 
    });
  }
});

// POST /api/mirror/generate-constellation - Generate constellation data
router.post('/generate-constellation', async (req, res) => {
  try {
    const { seed } = req.body;
    
    const constellation = generateConstellation(seed);
    
    res.json({
      success: true,
      constellation,
      seed: seed || 'default'
    });

  } catch (error) {
    console.error('Constellation generation error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to generate constellation',
      message: error.message 
    });
  }
});

// GET /api/mirror/archetypes - Get available archetypes
router.get('/archetypes', (req, res) => {
  const archetypes = [
    'Seeker', 'Warrior', 'Mage', 'Healer', 'Guardian', 'Wanderer',
    'Sage', 'Mystic', 'Creator', 'Destroyer', 'Lover', 'Ruler',
    'Fool', 'Hermit', 'Temperance', 'Star', 'Moon', 'Sun'
  ];

  res.json({
    success: true,
    archetypes
  });
});

// GET /api/mirror/elements - Get available elements
router.get('/elements', (req, res) => {
  const elements = [
    'Fire', 'Water', 'Air', 'Earth', 'Spirit', 'Void',
    'Light', 'Shadow', 'Storm', 'Crystal', 'Ether', 'Flame'
  ];

  res.json({
    success: true,
    elements
  });
});

// GET /api/mirror/virtues - Get available virtues
router.get('/virtues', (req, res) => {
  const virtues = [
    'Wisdom', 'Courage', 'Compassion', 'Justice', 'Temperance',
    'Faith', 'Hope', 'Love', 'Truth', 'Beauty', 'Goodness',
    'Transcendence', 'Unity', 'Harmony', 'Balance', 'Grace'
  ];

  res.json({
    success: true,
    virtues
  });
});

function generateConstellation(seed) {
  const seededRandom = (seed) => {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      const char = seed.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash) / 2147483647;
  };

  const archetypes = [
    'Seeker', 'Warrior', 'Mage', 'Healer', 'Guardian', 'Wanderer',
    'Sage', 'Mystic', 'Creator', 'Destroyer', 'Lover', 'Ruler',
    'Fool', 'Hermit', 'Temperance', 'Star', 'Moon', 'Sun'
  ];

  const elements = [
    'Fire', 'Water', 'Air', 'Earth', 'Spirit', 'Void',
    'Light', 'Shadow', 'Storm', 'Crystal', 'Ether', 'Flame'
  ];

  const virtues = [
    'Wisdom', 'Courage', 'Compassion', 'Justice', 'Temperance',
    'Faith', 'Hope', 'Love', 'Truth', 'Beauty', 'Goodness',
    'Transcendence', 'Unity', 'Harmony', 'Balance', 'Grace'
  ];

  const colors = [
    'hsl(0, 70%, 60%)', 'hsl(60, 70%, 60%)', 'hsl(120, 70%, 60%)',
    'hsl(180, 70%, 60%)', 'hsl(240, 70%, 60%)', 'hsl(300, 70%, 60%)',
    'hsl(30, 70%, 60%)', 'hsl(90, 70%, 60%)', 'hsl(150, 70%, 60%)',
    'hsl(210, 70%, 60%)', 'hsl(270, 70%, 60%)', 'hsl(330, 70%, 60%)'
  ];

  const stars = [];
  const numStars = 40 + Math.floor(seededRandom(seed + 'count') * 10);

  for (let i = 0; i < numStars; i++) {
    const starSeed = seed + i;
    const archetype = archetypes[Math.floor(seededRandom(starSeed + 'arch') * archetypes.length)];
    const element = elements[Math.floor(seededRandom(starSeed + 'elem') * elements.length)];
    const virtue = virtues[Math.floor(seededRandom(starSeed + 'virt') * virtues.length)];
    const color = colors[Math.floor(seededRandom(starSeed + 'color') * colors.length)];

    stars.push({
      id: i,
      archetype,
      element,
      virtue,
      color,
      x: 0.2 + seededRandom(starSeed + 'x') * 0.6, // 20% to 80% of canvas width
      y: 0.2 + seededRandom(starSeed + 'y') * 0.6, // 20% to 80% of canvas height
      size: 2 + seededRandom(starSeed + 'size') * 4, // 2 to 6 pixels
      pulsePhase: seededRandom(starSeed + 'pulse') * Math.PI * 2,
      pulseSpeed: 0.01 + seededRandom(starSeed + 'speed') * 0.02
    });
  }

  return {
    stars,
    seed: seed || 'default',
    generatedAt: new Date().toISOString()
  };
}

function generateConstellationInterpretation(archetype, element, virtue) {
  const interpretations = [
    `The ${archetype} archetype, infused with ${element} energy, embodies the virtue of ${virtue}. This combination speaks to your soul's unique expression in the cosmic dance.`,
    `In the constellation of your being, the ${archetype} star pulses with ${element} essence, radiating the wisdom of ${virtue} across infinite dimensions.`,
    `The ${archetype} node in your constellation reveals how ${element} energy flows through your ${virtue.toLowerCase()} nature, creating ripples in the fabric of reality.`,
    `This ${archetype} star, charged with ${element} power, illuminates the path of ${virtue} in your journey through the Akashic Records.`,
    `The ${archetype} archetype, when combined with ${element} essence, creates a unique frequency that resonates with the virtue of ${virtue}.`
  ];

  return interpretations[Math.floor(Math.random() * interpretations.length)];
}

module.exports = router;