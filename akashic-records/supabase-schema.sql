-- Create the records table
CREATE TABLE IF NOT EXISTS records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('cosmic', 'astronomy', 'spiritual', 'historical')),
  content TEXT NOT NULL,
  cosmic_level INTEGER NOT NULL CHECK (cosmic_level >= 1 AND cosmic_level <= 10),
  timestamp TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create an index on category for faster filtering
CREATE INDEX IF NOT EXISTS idx_records_category ON records(category);

-- Create an index on cosmic_level for faster filtering
CREATE INDEX IF NOT EXISTS idx_records_cosmic_level ON records(cosmic_level);

-- Create an index on created_at for faster ordering
CREATE INDEX IF NOT EXISTS idx_records_created_at ON records(created_at);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_records_updated_at
  BEFORE UPDATE ON records
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data
INSERT INTO records (title, category, content, cosmic_level, timestamp) VALUES
(
  'The Genesis of Consciousness',
  'cosmic',
  'In the beginning, there was only the void, and from the void emerged the first spark of consciousness. This primordial awareness, pure and undifferentiated, began to explore itself, creating the first ripples in the cosmic fabric of existence. Each thought, each moment of awareness, was recorded in the eternal memory of the universe, forming the foundation of what we now call the Akashic Records.',
  9,
  '2024-01-15T10:30:00Z'
),
(
  'The Eternal Dance of Galaxies',
  'astronomy',
  'Across the vast expanse of space, galaxies spiral in an eternal dance, each movement recorded in the cosmic memory. The gravitational waves created by these celestial bodies carry information about the very fabric of spacetime itself. Every collision, every merger, every birth of a new star is etched into the universal consciousness, creating a symphony of cosmic proportions.',
  8,
  '2024-01-14T15:45:00Z'
),
(
  'The Akashic Resonance',
  'spiritual',
  'Every soul carries within it a unique frequency, a resonance that echoes through the Akashic Records. This vibrational signature contains the complete history of that soul''s journey through time and space. When souls connect, their frequencies harmonize, creating new patterns in the cosmic tapestry that are forever preserved in the eternal archive.',
  10,
  '2024-01-13T09:20:00Z'
),
(
  'The Quantum Observer Effect',
  'cosmic',
  'At the quantum level, consciousness itself becomes the observer that collapses the wave function, determining reality. This fundamental principle suggests that the universe is not merely observed but actively created through the act of observation. Each moment of awareness shapes the very fabric of existence, and these choices are recorded in the quantum field of the Akashic Records.',
  9,
  '2024-01-12T14:15:00Z'
),
(
  'The Ancient Wisdom Keepers',
  'historical',
  'Throughout history, certain individuals have been chosen as keepers of the ancient wisdom, guardians of the sacred knowledge that connects humanity to the cosmic consciousness. These wisdom keepers, from the shamans of old to the mystics of today, have maintained the thread of connection to the Akashic Records, ensuring that the eternal knowledge remains accessible to those who seek it.',
  7,
  '2024-01-11T11:30:00Z'
);

-- Enable Row Level Security (RLS)
ALTER TABLE records ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations for now (in production, you'd want more restrictive policies)
CREATE POLICY "Allow all operations on records" ON records
  FOR ALL USING (true);