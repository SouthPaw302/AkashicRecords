const axios = require('axios');
const cheerio = require('cheerio');
const Parser = require('rss-parser');
const cron = require('node-cron');
const { dbService } = require('./database');

class ScrapingService {
  constructor() {
    this.parser = new Parser();
    this.sources = [
      {
        name: 'Philosophy RSS',
        url: 'https://plato.stanford.edu/rss/sep.xml',
        type: 'philosophy',
        enabled: true
      },
      {
        name: 'Science News',
        url: 'https://feeds.nature.com/nature/rss/current',
        type: 'science',
        enabled: true
      },
      {
        name: 'Spirituality Blog',
        url: 'https://www.consciousness-and-spirituality.com/feed/',
        type: 'spirituality',
        enabled: true
      }
    ];
    this.isRunning = false;
  }

  async scrapeRSSFeed(source) {
    try {
      console.log(`📡 Scraping ${source.name}...`);
      
      const feed = await this.parser.parseURL(source.url);
      const records = [];

      for (const item of feed.items.slice(0, 10)) { // Limit to 10 items per source
        const record = await this.processRSSItem(item, source);
        if (record) {
          records.push(record);
        }
      }

      console.log(`✅ Scraped ${records.length} records from ${source.name}`);
      return records;

    } catch (error) {
      console.error(`❌ Error scraping ${source.name}:`, error.message);
      return [];
    }
  }

  async processRSSItem(item, source) {
    try {
      // Extract content from the item
      let content = item.contentSnippet || item.content || item.description || '';
      
      // Clean HTML if present
      if (content.includes('<')) {
        const $ = cheerio.load(content);
        content = $.text();
      }

      // Generate cosmic metadata based on content
      const metadata = this.generateCosmicMetadata(content, source.type);
      
      if (!metadata) return null;

      return {
        type: metadata.type,
        title: item.title || 'Untitled Cosmic Event',
        description: content.substring(0, 500) + (content.length > 500 ? '...' : ''),
        realm: metadata.realm,
        epoch: metadata.epoch,
        dimension: metadata.dimension,
        emotion: metadata.emotion,
        lesson: metadata.lesson,
        source: source.name,
        url: item.link,
        publishedAt: item.pubDate
      };

    } catch (error) {
      console.error('Error processing RSS item:', error);
      return null;
    }
  }

  generateCosmicMetadata(content, sourceType) {
    const text = content.toLowerCase();
    
    // Determine record type based on content
    let type = 'Memory Orb';
    if (text.includes('research') || text.includes('study') || text.includes('discovery')) {
      type = 'Cosmic Event';
    } else if (text.includes('philosophy') || text.includes('wisdom') || text.includes('truth')) {
      type = 'Divine Moment';
    } else if (text.includes('time') || text.includes('history') || text.includes('past')) {
      type = 'Time Echo';
    } else if (text.includes('soul') || text.includes('spirit') || text.includes('consciousness')) {
      type = 'Soul Fragment';
    }

    // Determine realm based on source type and content
    let realm = 'Physical';
    if (sourceType === 'philosophy' || text.includes('philosophy') || text.includes('wisdom')) {
      realm = 'Astral';
    } else if (sourceType === 'spirituality' || text.includes('spirit') || text.includes('consciousness')) {
      realm = 'Ethereal';
    } else if (text.includes('time') || text.includes('temporal')) {
      realm = 'Chronos';
    } else if (text.includes('divine') || text.includes('sacred') || text.includes('holy')) {
      realm = 'Divine';
    }

    // Determine epoch
    let epoch = 'Modern';
    if (text.includes('ancient') || text.includes('classical') || text.includes('traditional')) {
      epoch = 'Ancient';
    } else if (text.includes('future') || text.includes('emerging') || text.includes('next')) {
      epoch = 'Future';
    } else if (text.includes('eternal') || text.includes('timeless') || text.includes('infinite')) {
      epoch = 'Eternal';
    }

    // Determine dimension
    let dimension = '3D';
    if (text.includes('quantum') || text.includes('multidimensional') || text.includes('higher')) {
      dimension = '5D';
    } else if (text.includes('spiritual') || text.includes('transcendent') || text.includes('beyond')) {
      dimension = '7D';
    } else if (text.includes('temporal') || text.includes('time')) {
      dimension = '4D';
    } else if (text.includes('divine') || text.includes('infinite') || text.includes('absolute')) {
      dimension = '9D';
    }

    // Determine emotion
    const emotions = ['Wonder', 'Awe', 'Transcendence', 'Bliss', 'Anticipation', 'Mystery', 'Love', 'Wisdom'];
    const emotion = emotions[Math.floor(Math.random() * emotions.length)];

    // Generate lesson
    const lessons = [
      'The universe reveals its secrets to those who seek with open hearts',
      'All knowledge is interconnected in the cosmic web of existence',
      'Wisdom emerges from the synthesis of diverse perspectives',
      'The infinite is found in the smallest details of creation',
      'Time is the canvas upon which consciousness paints its masterpiece',
      'Love is the fundamental force that binds all existence together',
      'Mystery is not the absence of knowledge but the presence of infinite possibility',
      'Every moment contains the seed of eternity'
    ];
    const lesson = lessons[Math.floor(Math.random() * lessons.length)];

    return {
      type,
      realm,
      epoch,
      dimension,
      emotion,
      lesson
    };
  }

  async scrapeAllSources() {
    if (this.isRunning) {
      console.log('⏳ Scraping already in progress, skipping...');
      return;
    }

    this.isRunning = true;
    console.log('🌐 Starting web scraping cycle...');

    try {
      const allRecords = [];

      for (const source of this.sources) {
        if (source.enabled) {
          const records = await this.scrapeRSSFeed(source);
          allRecords.push(...records);
        }
      }

      // Add records to database
      for (const record of allRecords) {
        try {
          await dbService.addRecord(record);
        } catch (error) {
          console.error('Error adding record to database:', error);
        }
      }

      console.log(`✅ Scraping cycle complete. Added ${allRecords.length} new records.`);

    } catch (error) {
      console.error('❌ Scraping cycle failed:', error);
    } finally {
      this.isRunning = false;
    }
  }

  startScheduledScraping() {
    // Run every 5 minutes
    cron.schedule('*/5 * * * *', () => {
      this.scrapeAllSources();
    });

    console.log('⏰ Scheduled scraping started (every 5 minutes)');
  }

  async scrapeWebContent(url) {
    try {
      console.log(`🔍 Scraping web content from: ${url}`);
      
      const response = await axios.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; AkashicRecordsBot/1.0)'
        }
      });

      const $ = cheerio.load(response.data);
      
      // Extract main content
      const title = $('title').text() || $('h1').first().text() || 'Untitled';
      const content = $('p').map((i, el) => $(el).text()).get().join(' ').substring(0, 1000);
      
      if (!content || content.length < 50) {
        throw new Error('Insufficient content extracted');
      }

      const metadata = this.generateCosmicMetadata(content, 'web');
      
      return {
        type: metadata.type,
        title: title.substring(0, 100),
        description: content,
        realm: metadata.realm,
        epoch: metadata.epoch,
        dimension: metadata.dimension,
        emotion: metadata.emotion,
        lesson: metadata.lesson,
        source: 'web_scraping',
        url: url
      };

    } catch (error) {
      console.error('Web scraping error:', error.message);
      return null;
    }
  }
}

const scrapingService = new ScrapingService();

function startScrapingService() {
  // Start immediate scraping
  scrapingService.scrapeAllSources();
  
  // Start scheduled scraping
  scrapingService.startScheduledScraping();
}

module.exports = { scrapingService, startScrapingService };