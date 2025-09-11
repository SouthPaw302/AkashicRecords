"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Search, 
  Star, 
  Sparkles, 
  Database, 
  Eye,
  Zap,
  Globe,
  Archive,
  Scroll,
  Plus
} from "lucide-react";
import AddRecordModal from "@/components/AddRecordModal";

interface Record {
  id: string;
  title: string;
  category: string;
  content: string;
  timestamp: string;
  cosmic_level: number;
  created_at?: string;
  updated_at?: string;
}

export default function Home() {
  const [records, setRecords] = useState<Record[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Fetch records with search and filter
  useEffect(() => {
    const fetchRecords = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        if (searchTerm) params.append('search', searchTerm);
        if (selectedCategory !== 'all') params.append('category', selectedCategory);
        
        const response = await fetch(`/api/records?${params.toString()}`);
        const data = await response.json();
        
        if (data.success) {
          setRecords(data.data);
        } else {
          console.error('Failed to fetch records:', data.error);
        }
      } catch (error) {
        console.error('Error fetching records:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchRecords, 300); // Debounce search
    return () => clearTimeout(timeoutId);
  }, [searchTerm, selectedCategory]);

  const handleRecordAdded = () => {
    // Refetch records when a new one is added
    const fetchRecords = async () => {
      try {
        const params = new URLSearchParams();
        if (searchTerm) params.append('search', searchTerm);
        if (selectedCategory !== 'all') params.append('category', selectedCategory);
        
        const response = await fetch(`/api/records?${params.toString()}`);
        const data = await response.json();
        
        if (data.success) {
          setRecords(data.data);
        }
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    fetchRecords();
  };

  const filteredRecords = records;

  const categories = [
    { id: "all", name: "All Records", icon: Archive },
    { id: "cosmic", name: "Cosmic", icon: Star },
    { id: "astronomy", name: "Astronomy", icon: Globe },
    { id: "spiritual", name: "Spiritual", icon: Sparkles },
    { id: "historical", name: "Historical", icon: Scroll }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-purple-500/20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-600 rounded-lg">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Akashic Records
                  </h1>
                  <p className="text-sm text-gray-400">The Eternal Archive</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Database className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-300">{records.length} Records</span>
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Record</span>
                </button>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search the cosmic database..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? "bg-purple-600 text-white"
                        : "bg-black/30 text-gray-300 hover:bg-black/50 border border-purple-500/30"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Records Grid */}
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecords.map((record, index) => (
                <motion.div
                  key={record.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/30 border border-purple-500/30 rounded-lg p-6 hover:bg-black/40 transition-all duration-300 backdrop-blur-sm group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {record.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(record.cosmic_level)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {record.content}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="capitalize">{record.category}</span>
                    <span>{new Date(record.timestamp).toLocaleDateString()}</span>
                  </div>
                  
                  <button className="w-full mt-4 flex items-center justify-center space-x-2 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg hover:bg-purple-600/30 transition-all duration-200 group">
                    <Eye className="w-4 h-4" />
                    <span>Access Record</span>
                    <Zap className="w-4 h-4 group-hover:animate-pulse" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          {filteredRecords.length === 0 && !isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No Records Found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </main>
      </div>

      {/* Add Record Modal */}
      <AddRecordModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onRecordAdded={handleRecordAdded}
      />
    </div>
  );
}
