import type { Handler } from "@netlify/functions";

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

    const body = JSON.parse(event.body || "{}") as RequestBody;
    const { systemInstruction = "You are Sophia, voice of wisdom.", userPrompt, model } = body;
    if (!userPrompt || typeof userPrompt !== "string") {
      return { statusCode: 400, body: "userPrompt is required" };
    }

    const candidates = [
      model,
      "gemini-1.5-pro",
      "gemini-1.5-flash",
    ].filter(Boolean) as string[];

    let lastError: unknown = null;
    for (const m of candidates) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1/models/${m}:generateContent?key=${encodeURIComponent(process.env.GEMINI_API_KEY!)}`;
        const resp = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { role: "system", parts: [{ text: systemInstruction }] },
            contents: [{ role: "user", parts: [{ text: userPrompt }] }],
          }),
        });
        if (!resp.ok) throw new Error(await resp.text());
        const data = await resp.json() as any;
        const text = data?.candidates?.[0]?.content?.parts?.map((p: any) => p?.text).join("") || "";
        return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text, model: m }) };
      } catch (err) {
        lastError = err;
      }
    }

    return { statusCode: 502, body: `Generation failed: ${String(lastError)}` };
  } catch (e) {
    return { statusCode: 500, body: `Server error: ${String(e)}` };
  }
};


