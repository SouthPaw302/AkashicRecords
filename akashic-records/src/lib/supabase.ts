import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return process.env.NEXT_PUBLIC_SUPABASE_URL && 
         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
         process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co' &&
         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'placeholder-key';
};

export interface Record {
  id: string;
  title: string;
  category: string;
  content: string;
  timestamp: string;
  cosmicLevel: number;
  created_at?: string;
  updated_at?: string;
}

export const recordService = {
  // Get all records with optional filtering
  async getRecords(filters?: {
    search?: string;
    category?: string;
    cosmicLevel?: number;
  }) {
    let query = supabase
      .from('records')
      .select('*')
      .order('created_at', { ascending: false });

    if (filters?.category && filters.category !== 'all') {
      query = query.eq('category', filters.category);
    }

    if (filters?.cosmicLevel) {
      query = query.gte('cosmic_level', filters.cosmicLevel);
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(`Failed to fetch records: ${error.message}`);
    }

    // Apply search filter on the client side for now
    // In production, you might want to use Supabase's full-text search
    let filteredData = data || [];
    if (filters?.search) {
      const searchLower = filters.search.toLowerCase();
      filteredData = filteredData.filter(record =>
        record.title.toLowerCase().includes(searchLower) ||
        record.content.toLowerCase().includes(searchLower)
      );
    }

    // Map the database response to our interface
    return filteredData.map(record => ({
      ...record,
      cosmicLevel: record.cosmic_level
    }));
  },

  // Get a single record by ID
  async getRecord(id: string) {
    const { data, error } = await supabase
      .from('records')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(`Failed to fetch record: ${error.message}`);
    }

    // Map the database response to our interface
    return {
      ...data,
      cosmicLevel: data.cosmic_level
    };
  },

  // Create a new record
  async createRecord(record: Omit<Record, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('records')
      .insert([{
        title: record.title,
        category: record.category,
        content: record.content,
        cosmic_level: record.cosmicLevel,
        timestamp: record.timestamp,
      }])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create record: ${error.message}`);
    }

    // Map the database response to our interface
    return {
      ...data,
      cosmicLevel: data.cosmic_level
    };
  },

  // Update a record
  async updateRecord(id: string, updates: Partial<Omit<Record, 'id' | 'created_at' | 'updated_at'>>) {
    const updateData: {
      title?: string;
      category?: string;
      content?: string;
      cosmic_level?: number;
      timestamp?: string;
    } = {};
    if (updates.title) updateData.title = updates.title;
    if (updates.category) updateData.category = updates.category;
    if (updates.content) updateData.content = updates.content;
    if (updates.cosmicLevel !== undefined) updateData.cosmic_level = updates.cosmicLevel;
    if (updates.timestamp) updateData.timestamp = updates.timestamp;

    const { data, error } = await supabase
      .from('records')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update record: ${error.message}`);
    }

    // Map the database response to our interface
    return {
      ...data,
      cosmicLevel: data.cosmic_level
    };
  },

  // Delete a record
  async deleteRecord(id: string) {
    const { error } = await supabase
      .from('records')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Failed to delete record: ${error.message}`);
    }

    return true;
  }
};