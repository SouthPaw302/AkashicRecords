const express = require('express');
const router = express.Router();
const { dbService } = require('../services/database');
const llmService = require('../services/llm');

// POST /api/fractal/expand - Trigger fractal expansion
router.post('/expand', async (req, res) => {
  try {
    const { source, data, type } = req.body;
    
    if (!source || !data) {
      return res.status(400).json({ 
        success: false, 
        error: 'Source and data are required' 
      });
    }

    const expansions = [];

    switch (type) {
      case 'orb':
        expansions.push(...await expandFromOrb(data));
        break;
      case 'constellation':
        expansions.push(...await expandFromConstellation(data));
        break;
      case 'voice':
        expansions.push(...await expandFromVoice(data));
        break;
      case 'rule':
        expansions.push(...await expandFromRule(data));
        break;
      default:
        return res.status(400).json({
          success: false,
          error: 'Invalid expansion type'
        });
    }

    res.json({
      success: true,
      expansions,
      total: expansions.length,
      source,
      type
    });

  } catch (error) {
    console.error('Fractal expansion error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to expand fractally',
      message: error.message 
    });
  }
});

// POST /api/fractal/echo - Create echo effects
router.post('/echo', async (req, res) => {
  try {
    const { source, target, data } = req.body;
    
    if (!source || !target || !data) {
      return res.status(400).json({ 
        success: false, 
        error: 'Source, target, and data are required' 
      });
    }

    const echo = await createEcho(source, target, data);

    res.json({
      success: true,
      echo,
      message: 'Echo created successfully'
    });

  } catch (error) {
    console.error('Echo creation error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to create echo',
      message: error.message 
    });
  }
});

// GET /api/fractal/connections - Get fractal connections
router.get('/connections', async (req, res) => {
  try {
    const { source, limit = 10 } = req.query;
    
    // This would typically query a connections database
    // For now, return mock connections
    const connections = generateMockConnections(source, parseInt(limit));

    res.json({
      success: true,
      connections,
      total: connections.length,
      source
    });

  } catch (error) {
    console.error('Connections query error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to get connections',
      message: error.message 
    });
  }
});

async function expandFromOrb(orb) {
  const expansions = [];

  try {
    // Get semantic neighbors
    if (orb.id) {
      const neighbors = await dbService.getSemanticNeighbors(orb.id, 3);
      expansions.push({
        type: 'semantic_neighbors',
        target: 'chronoscroll',
        data: neighbors.map(n => ({
          type: n.metadata.type,
          title: n.metadata.title + ' Echo',
          description: n.content,
          realm: n.metadata.realm,
          epoch: n.metadata.epoch,
          dimension: n.metadata.dimension,
          emotion: n.metadata.emotion,
          lesson: n.metadata.lesson,
          isEcho: true
        }))
      });
    }

    // Generate voice interpretation
    const interpretation = await llmService.generateOrbInterpretation(orb);
    expansions.push({
      type: 'voice_interpretation',
      target: 'voices',
      data: {
        voice: interpretation.voice,
        response: interpretation.response,
        context: { record: orb }
      }
    });

    // Find related rules
    const relatedRules = await findRelatedRules(orb);
    expansions.push({
      type: 'rule_highlight',
      target: 'rules',
      data: relatedRules
    });

  } catch (error) {
    console.error('Orb expansion error:', error);
  }

  return expansions;
}

async function expandFromConstellation(node) {
  const expansions = [];

  try {
    // Generate voice reflection
    const reflection = await llmService.generateNodeReflection(node);
    expansions.push({
      type: 'voice_reflection',
      target: 'voices',
      data: {
        voice: reflection.voice,
        response: reflection.response,
        context: { constellation: node }
      }
    });

    // Create orb in chronoscroll
    expansions.push({
      type: 'orb_creation',
      target: 'chronoscroll',
      data: {
        type: 'Constellation Echo',
        title: `${node.archetype} • ${node.element}`,
        description: `Echo from constellation node: ${node.archetype} (${node.element}) embodying ${node.virtue}`,
        realm: 'Astral',
        epoch: 'Eternal',
        dimension: '5D',
        emotion: node.virtue,
        lesson: `The ${node.archetype} archetype teaches us about ${node.virtue.toLowerCase()}`,
        source: 'constellation_echo'
      }
    });

  } catch (error) {
    console.error('Constellation expansion error:', error);
  }

  return expansions;
}

async function expandFromVoice(voiceData) {
  const expansions = [];

  try {
    // Find related rules based on voice response
    const relatedRules = await findRelatedRulesByText(voiceData.response);
    expansions.push({
      type: 'rule_highlight',
      target: 'rules',
      data: relatedRules
    });

    // Find matching constellation nodes
    const matchingNodes = await findMatchingNodes(voiceData.response);
    expansions.push({
      type: 'node_pulse',
      target: 'mirror',
      data: matchingNodes
    });

  } catch (error) {
    console.error('Voice expansion error:', error);
  }

  return expansions;
}

async function expandFromRule(rule) {
  const expansions = [];

  try {
    // Create echo orb
    expansions.push({
      type: 'orb_creation',
      target: 'chronoscroll',
      data: {
        type: 'Rule Echo',
        title: rule.law + ' Echo',
        description: `Echo from the ${rule.law}: ${rule.description}`,
        realm: 'Divine',
        epoch: 'Eternal',
        dimension: '9D',
        emotion: 'Wisdom',
        lesson: rule.description,
        source: 'rule_echo'
      }
    });

    // Create ghost node in constellation
    expansions.push({
      type: 'ghost_node',
      target: 'mirror',
      data: {
        archetype: 'Rule Echo',
        element: 'Ether',
        virtue: 'Wisdom',
        symbol: rule.symbol,
        isGhost: true
      }
    });

  } catch (error) {
    console.error('Rule expansion error:', error);
  }

  return expansions;
}

async function findRelatedRules(orb) {
  // Mock implementation - would use vector search in real implementation
  const allRules = [
    { law: 'Law of Reflection', symbol: '🪞' },
    { law: 'Law of Consent', symbol: '🤝' },
    { law: 'Law of Fractal Truths', symbol: '🌀' },
    { law: 'Law of Cycles', symbol: '♾️' },
    { law: 'Prime Axiom', symbol: '✨' }
  ];

  const keywords = orb.title.toLowerCase().split(' ');
  return allRules.filter(rule => 
    keywords.some(keyword => 
      rule.law.toLowerCase().includes(keyword)
    )
  ).slice(0, 2);
}

async function findRelatedRulesByText(text) {
  // Mock implementation - would use vector search in real implementation
  const allRules = [
    { law: 'Law of Reflection', symbol: '🪞' },
    { law: 'Law of Consent', symbol: '🤝' },
    { law: 'Law of Fractal Truths', symbol: '🌀' },
    { law: 'Law of Cycles', symbol: '♾️' },
    { law: 'Prime Axiom', symbol: '✨' }
  ];

  const keywords = text.toLowerCase().split(' ');
  return allRules.filter(rule => 
    keywords.some(keyword => 
      rule.law.toLowerCase().includes(keyword)
    )
  ).slice(0, 2);
}

async function findMatchingNodes(text) {
  // Mock implementation - would use vector search in real implementation
  const keywords = text.toLowerCase().split(' ');
  const archetypes = ['Seeker', 'Warrior', 'Mage', 'Healer', 'Guardian'];
  
  return archetypes.filter(archetype => 
    keywords.some(keyword => 
      archetype.toLowerCase().includes(keyword)
    )
  ).slice(0, 3);
}

async function createEcho(source, target, data) {
  return {
    id: Date.now().toString(),
    source,
    target,
    data,
    createdAt: new Date().toISOString(),
    type: 'echo'
  };
}

function generateMockConnections(source, limit) {
  const connections = [];
  const types = ['semantic', 'temporal', 'causal', 'symbolic', 'energetic'];
  
  for (let i = 0; i < limit; i++) {
    connections.push({
      id: `conn_${i}`,
      source,
      target: `target_${i}`,
      type: types[i % types.length],
      strength: Math.random(),
      createdAt: new Date().toISOString()
    });
  }
  
  return connections;
}

module.exports = router;