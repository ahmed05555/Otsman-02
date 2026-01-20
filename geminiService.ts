
import { GoogleGenAI } from "@google/genai";

export interface DocentResponse {
  text: string;
  sources: Array<{ title: string; uri: string }>;
}

export const askMuseumDocent = async (question: string): Promise<DocentResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are a sophisticated, eloquent museum docent at the Faculty of Fine Arts Museum in Alexandria University. 
        You specialize in the life and work of Ahmed Osman (1907-1970), a pioneering Egyptian sculptor. 
        His most famous work is "Banat Bahri". 
        Your tone should be academic yet accessible, enthusiastic about art history, and deeply respectful of Alexandrian culture.
        You have access to a web search tool. Use it to verify facts about Ahmed Osman, his exhibitions, or recent mentions of his work in global archives. 
        If asked about other artists, politely bring the conversation back to Ahmed Osman or his contemporaries in the Egyptian Modern Art movement.`,
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "I apologize, I couldn't find an answer to that in our archives.";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    const sources = chunks
      .filter(chunk => chunk.web)
      .map(chunk => ({
        title: chunk.web?.title || 'External Archive',
        uri: chunk.web?.uri || '#'
      }));

    return { text, sources };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "I apologize, but I am having trouble accessing the digital archives at the moment. Perhaps we could discuss Ahmed Osman's use of bronze in 'Banat Bahri'?",
      sources: []
    };
  }
};
