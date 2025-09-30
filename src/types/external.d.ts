declare module '@google/genai' {
  export class GoogleGenAI {
    constructor(options: { apiKey: string })
    models: {
      generateContent(options: any): Promise<GenerateContentResponse>
    }
  }
  export interface GenerateContentResponse {
    text?: string
  }
}

declare interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY: string
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}

