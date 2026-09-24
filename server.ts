import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

// Initialize Google GenAI client (User-Agent header required by AI Studio guidelines)
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// API: AI-powered Mindful Trip Concierge & Grounded Reasoning
app.post('/api/ai/mindful-advice', async (req, res) => {
  try {
    const { stayName, location, weatherSummary, userQuery, lang = 'en' } = req.body;

    const prompt = `
You are Sarathi, an empathetic and mindful Indian travel advisor with deep knowledge of Kerala hill stations, tea plantations, seasonal microclimates, and authentic heritage homestays.

A mindful traveler is considering:
Stay: "${stayName}" at "${location}"
Current local conditions: "${weatherSummary}"
User's travel wish: "${userQuery || 'Peaceful and solitary retreat close to nature under mindful budget'}"
Response language requested: "${lang === 'hi' ? 'Hindi (Devanagari script)' : 'English'}"

Generate a short, soulful, and practical "Mindful Traveler Note" (3-4 sentences maximum). Include:
1. Best time of day to enjoy the microclimate (e.g., misty dawn tea walk, afternoon porch reading, starlit chill).
2. What to pack or keep mindful of (e.g., warm fleece shawl, sturdy trail shoes, herbal mosquito repellent).
3. A serene reflection or mindful tip specific to this stay's environment.

Tone: Calming, respectful, authentic, and grounded. Do NOT sound like an ad or corporate sales pitch.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    const advice = response.text || '';
    res.json({ success: true, advice });
  } catch (error: any) {
    console.error('Error generating mindful advice:', error);
    res.status(500).json({
      success: false,
      error: error?.message || 'Failed to generate mindful advice'
    });
  }
});

// API: AI-powered Natural Language Discovery refinement
app.post('/api/ai/interpret-query', async (req, res) => {
  try {
    const { userQuery, lang = 'en' } = req.body;

    const prompt = `
Analyze this Indian traveler natural language query: "${userQuery}".
Extract intent into a concise JSON structure with:
{
  "detectedMood": "e.g., Soul-searching, Digital Detox, Romantic, Solitary, Family Peace",
  "recommendedAltitude": "e.g., High Ridge 6,000+ ft or Valley 4,500 ft",
  "weatherPreference": "e.g., Crisp cold mist or Gentle mountain breeze",
  "oneLineInsight": "One grounding sentence explaining why this traveler needs this escape right now"
}
Output strictly valid JSON.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json({ success: true, insight: parsed });
  } catch (error: any) {
    console.error('Error interpreting query:', error);
    res.status(500).json({
      success: false,
      error: error?.message || 'Failed to interpret query'
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();
