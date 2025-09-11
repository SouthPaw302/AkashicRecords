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

interface Record {
  id: string;
  title: string;
  category: string;
  content: string;
  timestamp: string;
  cosmicLevel: number;
  created_at?: string;
  updated_at?: string;
}

async function getRecords(): Promise<Record[]> {
  try {
    const response = await fetch('http://localhost:3000/api/records', {
      cache: 'no-store'
    });
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching records:', error);
    return [];
  }
}

export default async function Home() {
  const records = await getRecords();

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
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-purple-500/20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
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
                <div className="flex items-center space-x-2">
                  <Database className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">{records.length} Records</span>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                  <Plus className="w-4 h-4" />
                  <span>Add Record</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="container mx-auto px-4 py-8">
          {/* Search and filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search the cosmic database..."
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent backdrop-blur-sm"
                />
              </div>
            </div>
            
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    category.id === "all"
                      ? "bg-purple-600 text-white"
                      : "bg-black/30 text-gray-300 hover:bg-black/50 border border-purple-500/30"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Records grid */}
          {records.length === 0 ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-400">Loading cosmic records...</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {records.map((record) => (
                <div
                  key={record.id}
                  className="group bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {record.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(record.cosmicLevel)].map((_, i) => (
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
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}