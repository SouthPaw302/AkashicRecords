import type { Handler } from "@netlify/functions";
import { GoogleGenAI } from "@google/genai";

type RequestBody = {
  systemInstruction?: string;
  userPrompt: string;
  model?: string;
};

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    if (!process.env.GEMINI_API_KEY) {
      return { statusCode: 500, body: "GEMINI_API_KEY not set" };
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      baseUrl: "https://generativelanguage.googleapis.com/v1",
    });

    const body = JSON.parse(event.body || "{}") as RequestBody;
    const { systemInstruction = "You are Sophia, voice of wisdom.", userPrompt, model } = body;
    if (!userPrompt || typeof userPrompt !== "string") {
      return { statusCode: 400, body: "userPrompt is required" };
    }

    const candidates = [
      model,
      "gemini-1.5-pro",
      "gemini-1.5-flash",
      "gemini-1.0-pro",
      "gemini-pro",
    ].filter(Boolean) as string[];

    let lastError: unknown = null;
    for (const m of candidates) {
      try {
        const response = await ai.models.generateContent({
          model: m,
          contents: userPrompt,
          config: { systemInstruction },
        });
        return {
          statusCode: 200,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: response.text, model: m }),
        };
      } catch (err) {
        lastError = err;
      }
    }

    return { statusCode: 502, body: `Generation failed: ${String(lastError)}` };
  } catch (e) {
    return { statusCode: 500, body: `Server error: ${String(e)}` };
  }
};


