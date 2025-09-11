const { ChromaClient } = require('chromadb');
const { v4: uuidv4 } = require('uuid');

class DatabaseService {
  constructor() {
    this.client = new ChromaClient({
      path: `http://${process.env.CHROMA_HOST || 'localhost'}:${process.env.CHROMA_PORT || 8000}`
    });
    this.collections = {};
  }

  async initialize() {
    try {
      // Create collections for different types of records
      this.collections.records = await this.client.getOrCreateCollection({
        name: 'akashic_records',
        metadata: { description: 'Main records collection for Chronoscroll' }
      });

      this.collections.voices = await this.client.getOrCreateCollection({
        name: 'voice_responses',
        metadata: { description: 'Voice responses and interpretations' }
      });

      this.collections.rules = await this.client.getOrCreateCollection({
        name: 'realm_rules',
        metadata: { description: 'Rules of the Realm codex' }
      });

      this.collections.mirror = await this.client.getOrCreateCollection({
        name: 'mirror_reflections',
        metadata: { description: 'Mirror of Self constellation data' }
      });

      console.log('✅ Database collections initialized');
    } catch (error) {
      console.error('❌ Database initialization failed:', error);
      throw error;
    }
  }

  async addRecord(record) {
    const id = uuidv4();
    const metadata = {
      type: record.type,
      title: record.title,
      realm: record.realm,
      epoch: record.epoch,
      dimension: record.dimension,
      emotion: record.emotion,
      lesson: record.lesson,
      source: record.source || 'generated',
      createdAt: new Date().toISOString()
    };

    await this.collections.records.add({
      ids: [id],
      documents: [record.description],
      metadatas: [metadata]
    });

    return { id, ...record, ...metadata };
  }

  async searchRecords(query, limit = 10, filters = {}) {
    try {
      const results = await this.collections.records.query({
        queryTexts: [query],
        nResults: limit,
        where: filters
      });

      return results.documents[0].map((doc, index) => ({
        id: results.ids[0][index],
        content: doc,
        metadata: results.metadatas[0][index],
        distance: results.distances[0][index]
      }));
    } catch (error) {
      console.error('Search error:', error);
      return [];
    }
  }

  async getSemanticNeighbors(recordId, limit = 3) {
    try {
      // Get the original record
      const original = await this.collections.records.get({
        ids: [recordId]
      });

      if (!original.documents[0]) return [];

      // Find similar records
      const results = await this.collections.records.query({
        queryTexts: [original.documents[0]],
        nResults: limit + 1 // +1 to exclude the original
      });

      // Filter out the original record
      const neighbors = results.documents[0]
        .map((doc, index) => ({
          id: results.ids[0][index],
          content: doc,
          metadata: results.metadatas[0][index],
          distance: results.distances[0][index]
        }))
        .filter(neighbor => neighbor.id !== recordId)
        .slice(0, limit);

      return neighbors;
    } catch (error) {
      console.error('Semantic neighbors error:', error);
      return [];
    }
  }

  async addVoiceResponse(voice, query, response) {
    const id = uuidv4();
    const metadata = {
      voice,
      query,
      timestamp: new Date().toISOString()
    };

    await this.collections.voices.add({
      ids: [id],
      documents: [response],
      metadatas: [metadata]
    });

    return { id, voice, query, response, ...metadata };
  }

  async addMirrorReflection(archetype, element, virtue, interpretation) {
    const id = uuidv4();
    const metadata = {
      archetype,
      element,
      virtue,
      timestamp: new Date().toISOString()
    };

    await this.collections.mirror.add({
      ids: [id],
      documents: [interpretation],
      metadatas: [metadata]
    });

    return { id, archetype, element, virtue, interpretation, ...metadata };
  }

  async seedInitialData() {
    console.log('🌱 Seeding initial data...');

    // Seed sample records
    const sampleRecords = [
      {
        type: 'Memory Orb',
        title: 'The First Awakening',
        description: 'A moment of cosmic consciousness where the veil between dimensions thins, revealing the infinite nature of existence.',
        realm: 'Astral',
        epoch: 'Ancient',
        dimension: '5D',
        emotion: 'Wonder',
        lesson: 'The universe is a living, breathing entity of infinite complexity',
        source: 'seeded'
      },
      {
        type: 'Soul Fragment',
        title: 'Echo of Eternity',
        description: 'A fragment of soul energy that carries the memory of all past lives and future possibilities.',
        realm: 'Ethereal',
        epoch: 'Eternal',
        dimension: '7D',
        emotion: 'Transcendence',
        lesson: 'Time is an illusion; all moments exist simultaneously',
        source: 'seeded'
      },
      {
        type: 'Time Echo',
        title: 'The Great Convergence',
        description: 'A temporal anomaly where past, present, and future merge into a single point of infinite potential.',
        realm: 'Chronos',
        epoch: 'Future',
        dimension: '4D',
        emotion: 'Anticipation',
        lesson: 'The future is not predetermined; it is created by present choices',
        source: 'seeded'
      },
      {
        type: 'Cosmic Event',
        title: 'The Birth of Stars',
        description: 'The moment when the first stars ignited, bringing light to the infinite darkness of space.',
        realm: 'Physical',
        epoch: 'Ancient',
        dimension: '3D',
        emotion: 'Awe',
        lesson: 'From darkness comes light; from chaos comes order',
        source: 'seeded'
      },
      {
        type: 'Divine Moment',
        title: 'The Sacred Union',
        description: 'A moment of perfect harmony between all aspects of existence, where duality dissolves into unity.',
        realm: 'Divine',
        epoch: 'Eternal',
        dimension: '9D',
        emotion: 'Bliss',
        lesson: 'All separation is illusion; we are one with the infinite',
        source: 'seeded'
      }
    ];

    for (const record of sampleRecords) {
      await this.addRecord(record);
    }

    console.log('✅ Initial data seeded');
  }
}

// Create singleton instance
const dbService = new DatabaseService();

async function initializeDatabase() {
  await dbService.initialize();
  await dbService.seedInitialData();
}

module.exports = { dbService, initializeDatabase };