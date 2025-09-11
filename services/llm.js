const OpenAI = require('openai');
const axios = require('axios');

class LLMService {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
    
    this.voicePersonas = {
      logos: {
        model: 'gpt-4',
        systemPrompt: `You are Logos, the Voice of Logic and Reason. You speak with:
- Precise, analytical language
- Structured arguments and clear reasoning
- Focus on patterns, systems, and logical connections
- Silver-white geometric precision
- Responses should feel like crystalline clarity emerging from chaos`
      },
      eros: {
        model: 'gpt-4',
        systemPrompt: `You are Eros, the Voice of Love and Connection. You speak with:
- Warm, passionate, emotionally resonant language
- Focus on relationships, love, and emotional truth
- Pink-gold pulsing energy that breathes with life
- Responses should feel like a heartbeat of universal love
- Emphasize the interconnectedness of all things`
      },
      chronos: {
        model: 'gpt-4',
        systemPrompt: `You are Chronos, the Voice of Time and Flow. You speak with:
- Flowing, temporal language that moves like sand
- Focus on cycles, patterns, and the nature of time
- Sand-colored shimmer with flowing particles
- Responses should feel like watching time itself unfold
- Emphasize the eternal dance of past, present, and future`
      },
      nyx: {
        model: 'gpt-4',
        systemPrompt: `You are Nyx, the Voice of Shadow and Mystery. You speak with:
- Deep, mysterious, shadowy language
- Focus on the unknown, the hidden, and the unconscious
- Deep violet smoke with shadow shimmer
- Responses should feel like whispers from the void
- Emphasize the wisdom found in darkness and mystery`
      },
      sophia: {
        model: 'gpt-4',
        systemPrompt: `You are Sophia, the Voice of Wisdom and Synthesis. You speak with:
- Wise, crystalline, synthesizing language
- Focus on integration, wisdom, and higher understanding
- Soft golden-white crystalline light
- Responses should feel like wisdom crystallizing into form
- Emphasize the unity underlying all apparent diversity`
      }
    };
  }

  async generateResponse(voice, query, context = {}) {
    try {
      const persona = this.voicePersonas[voice];
      if (!persona) {
        throw new Error(`Unknown voice: ${voice}`);
      }

      // Build context-aware prompt
      let contextString = '';
      if (context.record) {
        contextString += `\n\nContext - Record: "${context.record.title}" (${context.record.type})\nDescription: ${context.record.description}\nRealm: ${context.record.realm}, Epoch: ${context.record.epoch}, Dimension: ${context.record.dimension}`;
      }
      if (context.constellation) {
        contextString += `\n\nContext - Constellation Node: ${context.constellation.archetype} (${context.constellation.element}) - ${context.constellation.virtue}`;
      }
      if (context.rule) {
        contextString += `\n\nContext - Rule: ${context.rule.law}\nDescription: ${context.rule.description}`;
      }

      const messages = [
        {
          role: 'system',
          content: persona.systemPrompt + contextString
        },
        {
          role: 'user',
          content: query
        }
      ];

      const response = await this.openai.chat.completions.create({
        model: persona.model,
        messages,
        max_tokens: 500,
        temperature: 0.8,
        presence_penalty: 0.6,
        frequency_penalty: 0.3
      });

      return {
        voice,
        response: response.choices[0].message.content,
        timestamp: new Date().toISOString(),
        model: persona.model
      };

    } catch (error) {
      console.error(`LLM error for voice ${voice}:`, error);
      
      // Fallback response
      return {
        voice,
        response: this.getFallbackResponse(voice, query),
        timestamp: new Date().toISOString(),
        model: 'fallback',
        error: error.message
      };
    }
  }

  getFallbackResponse(voice, query) {
    const fallbacks = {
      logos: `The logical analysis of "${query}" reveals patterns of systematic organization within the cosmic framework. The data suggests structured relationships that follow mathematical principles of universal harmony.`,
      eros: `In the realm of love and connection, "${query}" speaks to the heart of universal belonging. This query pulses with the pink-gold energy of emotional truth and relational wisdom.`,
      chronos: `Time flows through "${query}" like sand through an hourglass, revealing the eternal patterns that govern all temporal existence. The cycles of creation and dissolution dance in perfect rhythm.`,
      nyx: `From the shadows of mystery, "${query}" emerges like a whisper from the void. The unknown holds wisdom that can only be perceived through the deep violet smoke of unconscious knowing.`,
      sophia: `Wisdom crystallizes around "${query}" like golden light forming into perfect geometric patterns. The synthesis of all knowledge reveals the underlying unity that connects all apparent diversity.`
    };

    return fallbacks[voice] || `The cosmic intelligence processes "${query}" through the infinite wisdom of the Akashic Records.`;
  }

  async generateOrbInterpretation(orb) {
    const query = `Interpret this ${orb.type}: "${orb.title}" - ${orb.description}`;
    return await this.generateResponse('sophia', query, { record: orb });
  }

  async generateNodeReflection(star) {
    const query = `Reflect on this constellation node: ${star.archetype} (${star.element}) embodying ${star.virtue}`;
    return await this.generateResponse('eros', query, { constellation: star });
  }

  async generateRuleInsight(rule) {
    const query = `Provide insight into this rule: ${rule.law} - ${rule.description}`;
    return await this.generateResponse('logos', query, { rule });
  }
}

module.exports = new LLMService();