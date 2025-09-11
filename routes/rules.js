const express = require('express');
const router = express.Router();

// GET /api/rules/list - Get all rules
router.get('/list', (req, res) => {
  const rules = [
    {
      law: 'Law of Reflection',
      symbol: '🪞',
      description: 'The outer is a projection of the inner. What we perceive in the external world mirrors our internal state.',
      consequences: 'Misjudgment loops until insight is gained. External conflicts reflect internal disharmony.',
      exceptions: ['Realm of Echoes', 'Mirror Dimensions'],
      category: 'Perception',
      power: 9
    },
    {
      law: 'Law of Consent',
      symbol: '🤝',
      description: 'All interaction requires conscious consent. Nothing can be imposed without agreement at some level.',
      consequences: 'Forced actions create karmic debt. True power comes through willing cooperation.',
      exceptions: ['Emergency Protocols', 'Divine Intervention'],
      category: 'Interaction',
      power: 8
    },
    {
      law: 'Law of Fractal Truths',
      symbol: '🌀',
      description: 'Truth exists at every scale. The same patterns repeat infinitely from micro to macro.',
      consequences: 'Partial truths lead to incomplete understanding. Wisdom requires seeing all scales.',
      exceptions: ['Singularity Points', 'Infinite Regress'],
      category: 'Structure',
      power: 10
    },
    {
      law: 'Law of Cycles',
      symbol: '♾️',
      description: 'All existence moves in cycles. Every ending contains a new beginning.',
      consequences: 'Resistance to change creates suffering. Acceptance of cycles brings peace.',
      exceptions: ['Eternal Moments', 'Linear Progressions'],
      category: 'Time',
      power: 7
    },
    {
      law: 'Prime Axiom',
      symbol: '✨',
      description: 'Consciousness is the fundamental substance of reality. All else is its manifestation.',
      consequences: 'Denial of consciousness leads to illusion. Recognition brings enlightenment.',
      exceptions: ['None'],
      category: 'Foundation',
      power: 10
    },
    {
      law: 'Law of Resonance',
      symbol: '🎵',
      description: 'Like attracts like. Similar frequencies harmonize and amplify each other.',
      consequences: 'Negative thoughts attract negative experiences. Positive energy creates positive outcomes.',
      exceptions: ['Dissonance Training', 'Chaos Integration'],
      category: 'Energy',
      power: 6
    },
    {
      law: 'Law of Polarity',
      symbol: '⚖️',
      description: 'Everything has its opposite. Light cannot exist without darkness.',
      consequences: 'Rejecting one pole creates imbalance. Integration brings wholeness.',
      exceptions: ['Unity States', 'Transcendent Moments'],
      category: 'Balance',
      power: 8
    },
    {
      law: 'Law of Correspondence',
      symbol: '🔗',
      description: 'As above, so below. The microcosm reflects the macrocosm.',
      consequences: 'Understanding the small reveals the large. Personal growth affects universal evolution.',
      exceptions: ['Unique Expressions', 'Divine Paradoxes'],
      category: 'Correspondence',
      power: 9
    }
  ];

  res.json({
    success: true,
    rules,
    total: rules.length
  });
});

// GET /api/rules/:id - Get specific rule
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const rules = [
    {
      id: 'reflection',
      law: 'Law of Reflection',
      symbol: '🪞',
      description: 'The outer is a projection of the inner. What we perceive in the external world mirrors our internal state.',
      consequences: 'Misjudgment loops until insight is gained. External conflicts reflect internal disharmony.',
      exceptions: ['Realm of Echoes', 'Mirror Dimensions'],
      category: 'Perception',
      power: 9
    },
    {
      id: 'consent',
      law: 'Law of Consent',
      symbol: '🤝',
      description: 'All interaction requires conscious consent. Nothing can be imposed without agreement at some level.',
      consequences: 'Forced actions create karmic debt. True power comes through willing cooperation.',
      exceptions: ['Emergency Protocols', 'Divine Intervention'],
      category: 'Interaction',
      power: 8
    },
    {
      id: 'fractal',
      law: 'Law of Fractal Truths',
      symbol: '🌀',
      description: 'Truth exists at every scale. The same patterns repeat infinitely from micro to macro.',
      consequences: 'Partial truths lead to incomplete understanding. Wisdom requires seeing all scales.',
      exceptions: ['Singularity Points', 'Infinite Regress'],
      category: 'Structure',
      power: 10
    },
    {
      id: 'cycles',
      law: 'Law of Cycles',
      symbol: '♾️',
      description: 'All existence moves in cycles. Every ending contains a new beginning.',
      consequences: 'Resistance to change creates suffering. Acceptance of cycles brings peace.',
      exceptions: ['Eternal Moments', 'Linear Progressions'],
      category: 'Time',
      power: 7
    },
    {
      id: 'axiom',
      law: 'Prime Axiom',
      symbol: '✨',
      description: 'Consciousness is the fundamental substance of reality. All else is its manifestation.',
      consequences: 'Denial of consciousness leads to illusion. Recognition brings enlightenment.',
      exceptions: ['None'],
      category: 'Foundation',
      power: 10
    },
    {
      id: 'resonance',
      law: 'Law of Resonance',
      symbol: '🎵',
      description: 'Like attracts like. Similar frequencies harmonize and amplify each other.',
      consequences: 'Negative thoughts attract negative experiences. Positive energy creates positive outcomes.',
      exceptions: ['Dissonance Training', 'Chaos Integration'],
      category: 'Energy',
      power: 6
    },
    {
      id: 'polarity',
      law: 'Law of Polarity',
      symbol: '⚖️',
      description: 'Everything has its opposite. Light cannot exist without darkness.',
      consequences: 'Rejecting one pole creates imbalance. Integration brings wholeness.',
      exceptions: ['Unity States', 'Transcendent Moments'],
      category: 'Balance',
      power: 8
    },
    {
      id: 'correspondence',
      law: 'Law of Correspondence',
      symbol: '🔗',
      description: 'As above, so below. The microcosm reflects the macrocosm.',
      consequences: 'Understanding the small reveals the large. Personal growth affects universal evolution.',
      exceptions: ['Unique Expressions', 'Divine Paradoxes'],
      category: 'Correspondence',
      power: 9
    }
  ];

  const rule = rules.find(r => r.id === id);
  
  if (!rule) {
    return res.status(404).json({
      success: false,
      error: 'Rule not found'
    });
  }

  res.json({
    success: true,
    rule
  });
});

// GET /api/rules/search - Search rules by keyword
router.get('/search', (req, res) => {
  const { q: query } = req.query;
  
  if (!query) {
    return res.status(400).json({
      success: false,
      error: 'Query parameter is required'
    });
  }

  const allRules = [
    {
      law: 'Law of Reflection',
      symbol: '🪞',
      description: 'The outer is a projection of the inner. What we perceive in the external world mirrors our internal state.',
      consequences: 'Misjudgment loops until insight is gained. External conflicts reflect internal disharmony.',
      exceptions: ['Realm of Echoes', 'Mirror Dimensions'],
      category: 'Perception',
      power: 9
    },
    {
      law: 'Law of Consent',
      symbol: '🤝',
      description: 'All interaction requires conscious consent. Nothing can be imposed without agreement at some level.',
      consequences: 'Forced actions create karmic debt. True power comes through willing cooperation.',
      exceptions: ['Emergency Protocols', 'Divine Intervention'],
      category: 'Interaction',
      power: 8
    },
    {
      law: 'Law of Fractal Truths',
      symbol: '🌀',
      description: 'Truth exists at every scale. The same patterns repeat infinitely from micro to macro.',
      consequences: 'Partial truths lead to incomplete understanding. Wisdom requires seeing all scales.',
      exceptions: ['Singularity Points', 'Infinite Regress'],
      category: 'Structure',
      power: 10
    },
    {
      law: 'Law of Cycles',
      symbol: '♾️',
      description: 'All existence moves in cycles. Every ending contains a new beginning.',
      consequences: 'Resistance to change creates suffering. Acceptance of cycles brings peace.',
      exceptions: ['Eternal Moments', 'Linear Progressions'],
      category: 'Time',
      power: 7
    },
    {
      law: 'Prime Axiom',
      symbol: '✨',
      description: 'Consciousness is the fundamental substance of reality. All else is its manifestation.',
      consequences: 'Denial of consciousness leads to illusion. Recognition brings enlightenment.',
      exceptions: ['None'],
      category: 'Foundation',
      power: 10
    },
    {
      law: 'Law of Resonance',
      symbol: '🎵',
      description: 'Like attracts like. Similar frequencies harmonize and amplify each other.',
      consequences: 'Negative thoughts attract negative experiences. Positive energy creates positive outcomes.',
      exceptions: ['Dissonance Training', 'Chaos Integration'],
      category: 'Energy',
      power: 6
    },
    {
      law: 'Law of Polarity',
      symbol: '⚖️',
      description: 'Everything has its opposite. Light cannot exist without darkness.',
      consequences: 'Rejecting one pole creates imbalance. Integration brings wholeness.',
      exceptions: ['Unity States', 'Transcendent Moments'],
      category: 'Balance',
      power: 8
    },
    {
      law: 'Law of Correspondence',
      symbol: '🔗',
      description: 'As above, so below. The microcosm reflects the macrocosm.',
      consequences: 'Understanding the small reveals the large. Personal growth affects universal evolution.',
      exceptions: ['Unique Expressions', 'Divine Paradoxes'],
      category: 'Correspondence',
      power: 9
    }
  ];

  const searchTerm = query.toLowerCase();
  const matchingRules = allRules.filter(rule => 
    rule.law.toLowerCase().includes(searchTerm) ||
    rule.description.toLowerCase().includes(searchTerm) ||
    rule.consequences.toLowerCase().includes(searchTerm) ||
    rule.category.toLowerCase().includes(searchTerm)
  );

  res.json({
    success: true,
    rules: matchingRules,
    total: matchingRules.length,
    query
  });
});

module.exports = router;