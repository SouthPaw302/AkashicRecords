import { NextRequest, NextResponse } from 'next/server';
import { recordService, isSupabaseConfigured } from '@/lib/supabase';

// Fallback in-memory storage for when Supabase is not configured
const fallbackRecords = [
  {
    id: "1",
    title: "The Genesis of Consciousness",
    category: "cosmic",
    content: "In the beginning, there was only the void, and from the void emerged the first spark of consciousness. This primordial awareness, pure and undifferentiated, began to explore itself, creating the first ripples in the cosmic fabric of existence. Each thought, each moment of awareness, was recorded in the eternal memory of the universe, forming the foundation of what we now call the Akashic Records.",
    timestamp: "2024-01-15T10:30:00Z",
    cosmicLevel: 9
  },
  {
    id: "2",
    title: "The Eternal Dance of Galaxies",
    category: "astronomy",
    content: "Across the vast expanse of space, galaxies spiral in an eternal dance, each movement recorded in the cosmic memory. The gravitational waves created by these celestial bodies carry information about the very fabric of spacetime itself. Every collision, every merger, every birth of a new star is etched into the universal consciousness, creating a symphony of cosmic proportions.",
    timestamp: "2024-01-14T15:45:00Z",
    cosmicLevel: 8
  },
  {
    id: "3",
    title: "The Akashic Resonance",
    category: "spiritual",
    content: "Every soul carries within it a unique frequency, a resonance that echoes through the Akashic Records. This vibrational signature contains the complete history of that soul's journey through time and space. When souls connect, their frequencies harmonize, creating new patterns in the cosmic tapestry that are forever preserved in the eternal archive.",
    timestamp: "2024-01-13T09:20:00Z",
    cosmicLevel: 10
  }
];

// GET /api/records - Retrieve all records with optional filtering
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    const cosmicLevel = searchParams.get('cosmicLevel');

    let records;

    if (isSupabaseConfigured()) {
      const filters = {
        search: search || undefined,
        category: category && category !== 'all' ? category : undefined,
        cosmicLevel: cosmicLevel ? parseInt(cosmicLevel) : undefined,
      };
      records = await recordService.getRecords(filters);
    } else {
      // Use fallback in-memory storage
      let filteredRecords = [...fallbackRecords];

      if (search) {
        const searchLower = search.toLowerCase();
        filteredRecords = filteredRecords.filter(record =>
          record.title.toLowerCase().includes(searchLower) ||
          record.content.toLowerCase().includes(searchLower)
        );
      }

      if (category && category !== 'all') {
        filteredRecords = filteredRecords.filter(record => record.category === category);
      }

      if (cosmicLevel) {
        const level = parseInt(cosmicLevel);
        filteredRecords = filteredRecords.filter(record => record.cosmicLevel >= level);
      }

      records = filteredRecords;
    }

    return NextResponse.json({
      success: true,
      data: records,
      total: records.length
    });
  } catch (error) {
    console.error('Error fetching records:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch records' },
      { status: 500 }
    );
  }
}

// POST /api/records - Create a new record
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, category, content, cosmicLevel } = body;

    // Validate required fields
    if (!title || !category || !content) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: title, category, content' },
        { status: 400 }
      );
    }

    let newRecord;

    if (isSupabaseConfigured()) {
      newRecord = await recordService.createRecord({
        title,
        category,
        content,
        cosmicLevel: cosmicLevel || 1,
        timestamp: new Date().toISOString()
      });
    } else {
      // Use fallback in-memory storage
      newRecord = {
        id: Date.now().toString(),
        title,
        category,
        content,
        cosmicLevel: cosmicLevel || 1,
        timestamp: new Date().toISOString()
      };
      fallbackRecords.push(newRecord);
    }

    return NextResponse.json({
      success: true,
      data: newRecord
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating record:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create record' },
      { status: 500 }
    );
  }
}